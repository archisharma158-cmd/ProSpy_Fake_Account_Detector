## Paper 3

**Title:** A Systematic Literature Review: Instagram Fake Account Detection Based on Machine Learning

**Authors:** Juandreas Ezarfelix, Nathanael Jeffrey, Novita Sari

**Year:** 2022

**Journal:** JURNAL EMACS (Engineering, Mathematics and Computer Science), Vol. 4 No. 1

**Link:** https://www.researchgate.net/publication/358590043_Systematic_Literature_Review_Instagram_Fake_Account_Detection_Based_on_Machine_Learning

### Summary
This paper presents a systematic literature review of machine learning techniques used for detecting fake Instagram accounts. The authors analyze previous studies, compare different machine learning algorithms, and evaluate their effectiveness in identifying fake profiles using Instagram metadata, image analysis, and Natural Language Processing (NLP). The review aims to determine the most accurate and efficient methods for fake account detection.

### Key Findings
- Fake accounts contribute to issues such as fraud, hate speech, misinformation, cyberbullying, and manipulation of social media popularity metrics.
- Instagram fake account detection commonly relies on publicly available metadata, including:
  - Number of followers and followings
  - Total posts
  - Profile pictures
  - Hashtag usage
  - Comments and likes
- Traditional machine learning algorithms used for detection include:
  - Logistic Regression
  - Naïve Bayes
  - Random Forest
  - Support Vector Machine (SVM)
- Deep learning approaches, especially Artificial Neural Networks (ANNs), achieve high detection accuracy when image-based features are included.
- Combining Computer Vision (image detection) and Natural Language Processing (NLP) can significantly improve fake account detection performance.

### Performance Comparison of Algorithms

| Algorithm | Average Accuracy |
|------------|----------------|
| Random Forest | 95.20% |
| Neural Network | 94.72% |
| Naïve Bayes | 94.58% |
| Logistic Regression | 90.82% |
| Support Vector Machine (SVM) | 80.43% |

### Research Gap / Open Issues
- Existing models rely heavily on metadata and may struggle when fake accounts mimic legitimate user behavior.
- More advanced image analysis and object detection techniques are needed to improve detection accuracy.
- Real-time deployment within social media platforms remains challenging due to computational costs.
- Most studies focus only on Instagram, limiting cross-platform applicability.
- Detection systems should be optimized for direct integration into social media platforms without requiring third-party applications.

### Conclusion
The review concludes that **Neural Networks** are the most effective overall approach for Instagram fake account detection because they can process both profile metadata and image-based information. Random Forest also demonstrates excellent performance for structured account features. The authors recommend future research combining deep learning, image recognition, and NLP techniques to create more accurate and scalable fake account detection systems.

### Relevance to Fake Profile Detection Research
This paper provides a comparative analysis of machine learning methods for Instagram fake account detection and highlights the growing importance of deep learning approaches. It is valuable for researchers developing fake profile detection systems, particularly those focusing on social media security, machine learning, and automated moderation technologies.
