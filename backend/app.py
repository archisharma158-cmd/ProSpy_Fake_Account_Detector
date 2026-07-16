from flask import Flask
from tensorflow.keras.models import load_model
import joblib
import os

app = Flask(__name__)

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

model = load_model(os.path.join(BASE_DIR, "best_model.keras"))
scaler = joblib.load(os.path.join(BASE_DIR, "scaler.pkl"))
selected_features = joblib.load(os.path.join(BASE_DIR, "selected_features.pkl"))

#creating a home route
@app.route("/")
def home():
    return "Welcome to ProSpy!"

if __name__ == "__main__":
    app.run(debug=True)

#creating a prediction route
@app.route("/predict", methods=["POST"])
def predict():
    return "Prediction route works!"