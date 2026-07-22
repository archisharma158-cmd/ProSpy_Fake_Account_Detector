# Dataset Analysis

## Dataset Information

Dataset Name:
Fake Social Media Account Detection Dataset

Purpose:
This dataset is used to train and evaluate a machine learning model for detecting fake social media accounts.

Platforms Covered:
- Instagram
- Facebook
- Twitter

Total Records:
3000

Target Variable:
is_fake

Description:
The dataset contains profile, activity, content, and behavioural features that help distinguish fake accounts from genuine users.

---

## Dataset Features

1. platform
2. has_profile_pic
3. bio_length
4. username_randomness
5. followers
6. following
7. follower_following_ratio
8. account_age_days
9. posts
10. posts_per_day
11. caption_similarity_score
12. content_similarity_score
13. follow_unfollow_rate
14. spam_comments_rate
15. generic_comment_rate
16. suspicious_links_in_bio
17. verified
18. is_fake

---

## Selected Features for ProSpy

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

Reason:
These features provide useful information about account authenticity and can help a machine learning model identify suspicious behaviour.

---

## Target Label

Feature Name:
is_fake

Description:
This is the output variable used for prediction.

Values:
- 0 = Genuine Account
- 1 = Fake Account

---

## Expected Indicators of Fake Accounts

- No profile picture
- Random username
- Very low followers
- Very high following
- New account age
- Few posts
- High spam comment rate
- Suspicious links in bio
- Unusual follower-following ratio

---

## Conclusion

The selected dataset is suitable for the ProSpy project because it contains profile-based, behavioural, and content-based features required for fake social media account detection. The dataset also includes a labelled target variable (is_fake), making it appropriate for supervised machine learning.
