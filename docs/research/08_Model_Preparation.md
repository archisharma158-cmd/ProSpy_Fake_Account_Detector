# Fake Account Detection

## Model Preparation

### Problem Type
**Classification**

The goal of this project is to classify a social media account as either **Fake** or **Genuine** based on profile-related features.

---

## Dataset Information

**Dataset Name:**  
Fake Social Media Account Detection Dataset

**Total Records:**  
`<actual count>`

**Total Features:**  
`<actual count>`

---

## Input Features

The model uses the following features:

| Feature | Description |
|----------|-------------|
| has_profile_pic | Indicates whether the account has a profile picture |
| followers | Number of followers |
| following | Number of accounts followed |
| account_age_days | Age of the account in days |
| posts | Total number of posts |
| verified | Indicates whether the account is verified |

---

## Target Variable

| Variable | Description |
|----------|-------------|
| is_fake | Target label (1 = Fake Account, 0 = Genuine Account) |

---

## Candidate Models

### Logistic Regression

#### Advantages
- Fast training and prediction
- Simple and easy to implement
- Easy to interpret

#### Disadvantages
- May miss complex patterns in data
- Assumes a linear relationship between features and target

---

### Random Forest

#### Advantages
- High classification accuracy
- Handles multiple features effectively
- Captures complex relationships
- Less prone to overfitting

#### Disadvantages
- Slower than Logistic Regression
- More computationally expensive

---

## Selected Model

### Random Forest Classifier

**Reason for Selection:**
- Suitable for classification tasks.
- Handles multiple profile features efficiently.
- Captures complex patterns associated with fake accounts.
- Provides better generalization performance.
- Reduces overfitting through ensemble learning.

---

## Data Split

| Dataset | Percentage |
|----------|-----------|
| Training Data | 80% |
| Testing Data | 20% |

**Purpose:**  
The dataset is divided into training and testing sets to evaluate the model's performance on unseen data and measure its ability to generalize.

---

## Evaluation Metrics

The following metrics are used to evaluate model performance:

- Accuracy
- Precision
- Recall
- F1-Score

**Purpose:**  
These metrics help assess how effectively the model identifies fake accounts while minimizing false positives and false negatives.

---

## Tools & Libraries

The project is implemented using:

- Python
- Pandas
- NumPy
- Scikit-Learn

---

## Future Improvements

Potential enhancements for improving model performance:

- Hyperparameter Tuning
- Feature Engineering
- Cross Validation
- Testing additional models:
  - XGBoost
  - Support Vector Machine (SVM)

---

## Expected Outcome

The trained Random Forest model predicts whether a social media account is **Fake** or **Genuine** using profile attributes such as followers, following count, account age, posts, profile picture availability, and verification status. The model aims to provide reliable detection of fake accounts and improve social media platform security.
