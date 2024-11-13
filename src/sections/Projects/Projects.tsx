import styles from './ProjectsStyles.module.css';
import Project from '../../components/ProjectCard/ProjectCard'
import React, { useState } from 'react';
import right_dark from '../../assets/arrow-right-dark.svg';
import right_light from '../../assets/arrow-right-light.svg';
import left_dark from '../../assets/arrow-left-dark.svg';
import left_light from '../../assets/arrow-left-light.svg';
import { useTheme } from '../../common/ThemeContext';
import tweet from '../../assets/tweet.png'
function Projects() {
    const { theme, toggleTheme } = useTheme();
    const left = theme === 'light' ?  left_light : left_dark;
    const right = theme === 'light' ? right_light : right_dark;

    const elements: JSX.Element[] = [
        <Project
            title="A Secure File Sharing System"
            date="Berkeley, CA | November 2023"
            information={[
                "Implemented a secure file sharing system in Go with cryptographic libraries.",
                "Ensured data authenticity, confidentiality, and integrity in an insecure environment.",
                "Engineered defenses against attackers, passing over 100 adversarial test cases."
            ]}
            skills={["Go", "Cryptography", "Security"]}
        />,
        <Project
            title="Cook County Housing Price Prediction"
            date="Berkeley, CA | March 2024"
            information={[
                "Engineered a robust regression model in Python with over 60 features.",
                "Achieved a competitive RMSE of less than 100k on a dataset with 200k+ observations.",
                "Employed advanced preprocessing, feature engineering, and regularization techniques to optimize performance."
            ]}
            skills={["Python", "Regression", "Data Engineering"]}
        />,
        <Project
            title="Optimized Convolutions"
            date="Berkeley, CA | June 2023"
            information={[
                "Developed and optimized a C program to compute 2D convolutions.",
                "Utilized OpenMP for multi-threading and SIMD for data parallelism.",
                "Leveraged OpenMPI for multi-processing, achieving an 8x speed boost."
            ]}
            skills={["C", "OpenMP", "SIMD", "OpenMPI"]}
        />,
        <Project
            title="Build Your Own World"
            date="Berkeley, CA | April 2023"
            information={[
                "Designed a procedural world-generation engine in Java.",
                "Created a scalable 2D environment with pseudo-random terrain.",
                "Implemented dynamic rooms and hallways for a realistic world layout."
            ]}
            skills={["Java", "Procedural Generation", "Game Development"]}
        />,
        <Project
            title="NGordnet"
            date="Berkeley, CA | April 2022"
            information={[
                "Developed a scalable backend in Java for visualizing word trends using Google NGrams and WordNet.",
                "Optimized query processing by 30% to handle large datasets.",
                "Enabled real-time interactive visualizations for over 50 million word instances."
            ]}
            skills={["Java", "Data Visualization", "Google NGrams", "WordNet"]}
        />,
        <Project
            title="Movie Recommender System"
            date="Berkeley, CA | May 2024"
            information={[
                "Built a personalized movie recommendation system using an SVD-based Latent Factor Model in Python.",
                "Applied regularization and alternating minimization to optimize prediction accuracy.",
                "Reduced overfitting to provide precise user rating predictions."
            ]}
            skills={["Python", "SVD", "Machine Learning"]}
        />,
        <Project
            title="Deep Learning Models for Image Classification and Object Detection"
            date="Berkeley, CA | October 2024"
            information={[
                "Developed custom ResNet and YOLO models from scratch using PyTorch.",
                "Achieved high accuracy on CIFAR-10 dataset for image classification.",
                "Implemented real-time object detection with optimized bounding box predictions using non-max suppression and confidence thresholding."
            ]}
            skills={["PyTorch", "ResNet", "YOLO", "Object Detection"]}
        />,
        <Project
            title="Ultimate Tic Tac Toe (TelePort)"
            date="Berkeley, CA | May 2024"
            information={[
                "Designed and built a fully functional Ultimate Tic Tac Toe game in Swift for iOS.",
                "Incorporated modern UI/UX design principles for a professional look and feel.",
                "Developed unique game mechanics to enhance user engagement on mobile."
            ]}
            skills={["Swift", "iOS Development", "Game Design"]}
        />,
        <Project
            title="Neural Network and CNN Development"
            date="Berkeley, CA | April 2024"
            information={[
                "Developed neural networks and custom CNNs from scratch in Python and NumPy.",
                "Achieved 96% accuracy on the Iris dataset through efficient implementation.",
                "Optimized hyperparameters to improve model performance."
            ]}
            skills={["Python", "NumPy", "Neural Networks", "CNN"]}
        />,
        <Project
            title="IM2SPAIN: Geo-Location Prediction with k-NN"
            date="Berkeley, CA | May 2024"
            information={[
                "Implemented a k-nearest neighbors model to predict latitude and longitude of images based on CLIP embeddings.",
                "Applied Principal Component Analysis to reduce feature dimensionality.",
                "Highlighted spatial patterns in the images to improve model accuracy."
            ]}
            skills={["Python", "k-NN", "CLIP", "PCA"]}
        />,
        <Project
            title="Spam Email Detection System"
            date="Berkeley, CA | April 2024"
            information={[
                "Developed machine learning models from scratch using NumPy for spam email detection.",
                "Achieved high accuracies across multiple models: SVM (85.7%), GDA (82.2%), Random Forest (83.7%), and Linear Regression (87%).",
                "Implemented feature engineering and model evaluation techniques."
            ]}
            skills={["Python", "NumPy", "Machine Learning", "Spam Detection"]}
        />
    ];
    const [currentIndex, setCurrentIndex] = useState(0);
    const nextElement = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % elements.length);
      };
    

      const prevElement = () => {
        setCurrentIndex((prevIndex) => 
          (prevIndex - 1 + elements.length) % elements.length
        );
      };
  return (
    <section id="projects" className={styles.container}>
        <div className={styles.title}>
            <h1><div className={styles.underline}>Projects</div></h1>
        </div>
        <div className={styles.content}>
        <img src={left} onClick={nextElement}/>
        {elements[(currentIndex- 1 + elements.length) % elements.length]}
        {elements[currentIndex]}
        {elements[(currentIndex + 1) % elements.length]}
        <img src={right} onClick={nextElement}/>
        
        </div>
        <p>{currentIndex + 1}/{elements.length}</p>
    </section>
  )
}

export default Projects