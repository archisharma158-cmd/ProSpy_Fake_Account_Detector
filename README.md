# 🧠 ProSpy – Fake Social Media Profile Detection Using Neural Networks

---

## 🌐 Live Demo

Try the ProSpy application online:

🔗 **Website:** https://pro-spy-fake-account-detector.vercel.app/detect

The web application allows users to:

- Detect whether a social media profile is **Fake** or **Genuine**
- Enter profile attributes through an interactive interface
- View prediction confidence and classification results
- Experience a modern, responsive, and user-friendly design

---

## 📌 Overview

**ProSpy** is a deep learning-based classification system designed to detect **fake** and **genuine** social media profiles. The model is built using an **Artificial Neural Network (ANN)** and learns patterns from profile attributes to accurately classify whether an account is fake or legitimate.

The project follows a complete machine learning workflow, including data preprocessing, handling class imbalance, feature selection, neural network training, evaluation, and model saving for deployment.

---

## 🎯 Objectives

- Detect fake social media profiles using deep learning.
- Improve classification performance using an Artificial Neural Network.
- Evaluate the model using multiple performance metrics.
- Build a scalable model for future web deployment.

---

## 🛠️ Technologies Used

- Python
- TensorFlow / Keras
- NumPy
- Pandas
- Matplotlib
- Seaborn
- Scikit-learn

---

## 📂 Project Workflow

```
Dataset
    ↓
Data Cleaning
    ↓
Exploratory Data Analysis (EDA)
    ↓
Data Preprocessing
    ↓
Class Balancing
    ↓
Feature Selection
    ↓
Train / Validation / Test Split
    ↓
Artificial Neural Network
    ↓
Model Training
    ↓
Model Evaluation
    ↓
Prediction
    ↓
Model Saving
```

---

## 📊 Dataset

The dataset contains profile-related features that help distinguish between fake and genuine social media accounts.

### Data Preparation

- Removed duplicate records
- Handled missing values
- Encoded categorical features
- Scaled numerical features
- Balanced the dataset
- Split into Train, Validation, and Test sets

---

## 🧠 Neural Network Architecture

The model was developed using TensorFlow/Keras.

### Architecture

- Input Layer
- Multiple Dense Hidden Layers
- ReLU Activation Function
- Dropout Layers (to reduce overfitting)
- Sigmoid Output Layer (Binary Classification)

---

## ⚙️ Training Configuration

- **Model:** Artificial Neural Network (ANN)
- **Task:** Binary Classification
- **Optimizer:** Adam
- **Loss Function:** Binary Crossentropy
- **Evaluation Metric:** Accuracy

---

# 📈 Model Performance

## Accuracy Scores

| Dataset | Accuracy |
|---------|----------:|
| Train | **95.69%** |
| Validation | **93.10%** |
| Test | **91.53%** |

---

## Classification Metrics

| Dataset | Precision | Recall | F1-Score | Accuracy |
|---------|----------:|-------:|---------:|---------:|
| Train | 0.9569 | 0.9569 | 0.9569 | 0.9569 |
| Validation | 0.9319 | 0.9310 | 0.9310 | 0.9310 |
| Test | 0.9158 | 0.9153 | 0.9153 | 0.9153 |

---

## Confusion Matrix

### Training Set

```
[[233  10]
 [ 11 233]]
```

### Validation Set

```
[[42  2]
 [ 4 39]]
```

### Test Set

```
[[54  6]
 [ 4 54]]
```

---

## 📌 Performance Summary

- High training accuracy with minimal overfitting.
- Validation and test accuracies are close to the training accuracy, indicating good generalization.
- Precision, Recall, and F1-Score remain consistently above **91%** across all datasets.
- The model demonstrates reliable performance in distinguishing fake and genuine profiles.

---

## 📁 Project Structure

```
ProSpy/
│
├── data/
│   ├── raw/
│   └── processed/
│
├── notebooks/
│   └── ProSpy_Neural_Network.ipynb
│
├── models/
│   ├── prospy_model.keras
│   ├── scaler.pkl
│   └── encoder.pkl
│
├── images/
│   ├── confusion_matrix.png
│   ├── accuracy_curve.png
│   └── loss_curve.png
│
├── requirements.txt
├── README.md
└── LICENSE
```

---

## 🚀 Future Improvements

- Deploy the model as a web application using Flask or FastAPI.
- Build a modern frontend for real-time profile prediction.
- Integrate additional profile and behavioral features.
- Experiment with deeper neural network architectures.
- Perform hyperparameter tuning for further optimization.
- Explore ensemble learning and explainable AI techniques.

---

## ▶️ Installation

Clone the repository:

```bash
git clone https://github.com/your-username/ProSpy.git
cd ProSpy
```

Install the required packages:

```bash
pip install -r requirements.txt
```

Run the notebook or your prediction script to train or test the model.

---

## 📜 License

This project is licensed under the MIT License.

---

## 👨‍💻 Authors

### Archi Sharma

**B.Tech in Artificial Intelligence & Machine Learning**

Machine Learning | Deep Learning | Data Science

- **GitHub:** https://github.com/archisharma158-cmd
- **LinkedIn:** https://www.linkedin.com/in/archi-sharma-05a3a2371
- **Email:** archisharma158@gmail.com

---

### Parth Goyal

**B.Tech in Cyber Security**

Cyber Security | Artificial Intelligence | Machine Learning | Python

- **GitHub:** https://github.com/goyalparth61-netizen
- **LinkedIn:** https://www.linkedin.com/in/parth-goyal-215231385
- **Email:** goyalparth61@gmail.com

---

⭐ **If you found this project helpful, please consider giving this repository a star!**
