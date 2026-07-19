from flask import Flask, request, jsonify
from flask_cors import CORS
import pandas as pd
import numpy as np
from tensorflow.keras.models import load_model
import joblib
import os

app = Flask(__name__)
CORS(app)

# Base project directory
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
MODEL_DIR = os.path.join(BASE_DIR, "Model")

# Load model
model = load_model(os.path.join(MODEL_DIR, "best_model.keras"))
scaler = joblib.load(os.path.join(MODEL_DIR, "scaler.pkl"))
selected_features = joblib.load(os.path.join(MODEL_DIR, "selected_features.pkl"))


# ---------------- FEATURE ENGINEERING ---------------- #

def add_profile_features(df):
    df = df.copy()

    df['followers_to_follows'] = df['#followers'] / df['#follows'].replace(0, 1)
    df['posts_per_follower'] = df['#posts'] / df['#followers'].replace(0, 1)

    df['log_description_length'] = np.log1p(df['description length'])
    df['log_posts'] = np.log1p(df['#posts'])
    df['log_followers'] = np.log1p(df['#followers'])
    df['log_follows'] = np.log1p(df['#follows'])

    return df


# Training feature list
feature_columns = [
    'profile pic',
    'nums/length username',
    'fullname words',
    'nums/length fullname',
    'name==username',
    'description length',
    'external URL',
    'private',
    '#posts',
    '#followers',
    '#follows',
    'followers_to_follows',
    'posts_per_follower',
    'log_description_length',
    'log_posts',
    'log_followers',
    'log_follows'
]

categorical_cols = [
    'profile pic',
    'name==username',
    'external URL',
    'private'
]


# ---------------- ROUTES ---------------- #

@app.route("/")
def home():
    return "Welcome to ProSpy Backend!"


@app.route("/predict", methods=["POST"])
def predict():
    try:
        data = request.get_json()

        if not data:
            return jsonify({"error": "No JSON data received"}), 400

        df = pd.DataFrame([data])

        # Feature Engineering
        df = add_profile_features(df)

        # Encode categorical features
        for col in categorical_cols:
            df[col] = df[col].astype(int)

        # Scale
        X_scaled = pd.DataFrame(
            scaler.transform(df[feature_columns]),
            columns=feature_columns
        )

        # Select important features
        X = X_scaled[selected_features]

        # Prediction
        probability = float(model.predict(X, verbose=0).flatten()[0])

        prediction = "Fake" if probability > 0.5 else "Genuine"

        return jsonify({
            "prediction": prediction,
            "confidence": round(probability, 4)
        })

    except Exception as e:
        return jsonify({
            "error": str(e)
        }), 400


if __name__ == "__main__":
    app.run(host="0.0.0.0" , port=5000)
