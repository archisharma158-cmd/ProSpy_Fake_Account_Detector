# Data Preprocessing

## Overview

Data preprocessing is an important step in the ProSpy project. It prepares the raw dataset for machine learning by cleaning, transforming, and selecting relevant information. Proper preprocessing improves model accuracy and reduces errors during training.

---

## Preprocessing Steps

### 1. Data Loading

The dataset was loaded using the Pandas library.

```python
import pandas as pd

data = pd.read_csv("fake_social_media_accounts.csv")
```

---

### 2. Checking Missing Values

The dataset was inspected for missing or null values.

```python
data.isnull().sum()
```

Rows with missing values were removed or handled before training.

---

### 3. Removing Unnecessary Features

Only the most relevant features were selected for the ProSpy model.

Selected Features:

- has_profile_pic
- bio_length
- username_randomness
- followers
- following
- follower_following_ratio
- account_age_days
- posts
- posts_per_day
- spam_comments_rate
- suspicious_links_in_bio
- verified

---

### 4. Encoding Categorical Values

Boolean features such as **verified** and **has_profile_pic** were converted into numerical values so they could be processed by the machine learning model.

---

### 5. Feature Scaling

Numerical features such as followers, following, account_age_days, and posts were scaled to maintain consistent value ranges and improve model performance.

---

### 6. Splitting Features and Target

Input features (**X**) and the target label (**is_fake**) were separated.

- Features (X): Selected profile attributes
- Target (y): is_fake

---

### 7. Train-Test Split

The dataset was divided into training and testing sets.

- Training Data: 80%
- Testing Data: 20%

This allows the model to learn from one portion of the dataset and be evaluated on unseen data.

---

## Libraries Used

- Pandas
- NumPy
- Scikit-learn

---

## Conclusion

The preprocessing stage prepared the dataset for machine learning by cleaning the data, selecting important features, encoding categorical values, scaling numerical features, and splitting the dataset into training and testing sets. These steps helped improve the reliability and performance of the ProSpy fake social media account detection model.
