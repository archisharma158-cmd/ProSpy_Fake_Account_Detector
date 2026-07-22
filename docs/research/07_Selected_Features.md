# Selected Features Documentation

---

## Objective

The purpose of feature selection is to identify the most meaningful and predictive attributes that help distinguish fake social media accounts from genuine users. These features were selected based on exploratory data analysis, behavioral patterns observed in fake accounts, and domain knowledge about social media fraud detection.

Fake accounts typically show abnormal behavior in terms of activity, engagement, profile completeness, and interaction patterns. These signals are captured through the selected features below.

---

## Selected Features

---

### 1. has_profile_pic

**Description:**  
This feature indicates whether the user has uploaded a profile picture or is using a default/empty image.

**Why Selected:**  
Genuine users usually personalize their accounts with real profile pictures, while fake or bot accounts often avoid using real images or rely on default avatars. This makes it a strong visual authenticity indicator.

---

### 2. bio_length

**Description:**  
Represents the total number of characters in the user’s bio/description section.

**Why Selected:**  
Real users generally write meaningful bios that describe themselves, interests, or profession. Fake accounts often leave the bio empty or fill it with very short or irrelevant text, making this feature useful for detecting low-effort or automated accounts.

---

### 3. username_randomness

**Description:**  
Measures how structured or random a username appears (e.g., presence of numbers, special characters, or nonsensical patterns).

**Why Selected:**  
Fake accounts frequently use randomly generated usernames (e.g., user_938472 or xj12k9). These patterns are uncommon in genuine users and help identify automated account creation.

---

### 4. followers

**Description:**  
Total number of followers the account has.

**Why Selected:**  
Genuine accounts typically grow followers organically over time, while fake accounts often have very few followers due to lack of real engagement or audience trust.

---

### 5. following

**Description:**  
Number of accounts the user follows.

**Why Selected:**  
Fake accounts often follow a very large number of users in an attempt to appear active or gain follow-backs, creating an imbalance in normal social behavior patterns.

---

### 6. follower_following_ratio

**Description:**  
Ratio between followers and following count.

**Why Selected:**  
This feature captures balance in social engagement. Fake accounts usually have disproportionate ratios (e.g., following thousands but having almost no followers), which is a strong indicator of suspicious activity.

---

### 7. account_age_days

**Description:**  
The total number of days since the account was created.

**Why Selected:**  
Fake accounts are often newly created and short-lived. Older accounts generally indicate legitimacy, making account age an important trust signal.

---

### 8. posts

**Description:**  
Total number of posts published by the user.

**Why Selected:**  
Real users typically share content over time, while fake accounts may have very few posts or remain inactive, indicating low engagement authenticity.

---

### 9. posts_per_day

**Description:**  
Average number of posts made per day since account creation.

**Why Selected:**  
This feature helps detect unnatural activity patterns. Extremely high posting frequency may indicate bots or automated content generation, while extremely low activity can also suggest fake or inactive accounts.

---

### 10. spam_comments_rate

**Description:**  
Percentage of comments identified as spam or irrelevant promotional content.

**Why Selected:**  
Fake accounts are often used for spam campaigns, repetitive messaging, or promotional abuse. A high spam interaction rate strongly indicates non-genuine behavior.

---

### 11. suspicious_links_in_bio

**Description:**  
Indicates whether the account bio contains suspicious, phishing, or malicious external links.

**Why Selected:**  
Many fake accounts attempt scams or phishing attacks using external links in their profile bio. Detecting such links is critical for identifying harmful accounts.

---

### 12. verified

**Description:**  
Shows whether the account is officially verified by the platform.

**Why Selected:**  
Verification adds a layer of trust and authenticity. Verified accounts are significantly less likely to be fake due to platform-level identity checks.

---

## Conclusion

These features collectively capture multiple dimensions of user behavior, including identity signals, engagement patterns, activity frequency, and content credibility. Together, they provide a strong foundation for training a machine learning model that can effectively differentiate between fake and genuine social media accounts.

---

## Total Selected Features

**12 Features**
