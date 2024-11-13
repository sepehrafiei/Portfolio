import styles from './EducationStyles.module.css';
import camp from '../../assets/camp.png';
// import {useTheme} from '../../common/ThemeContext';
function Education() {
    // const {theme, toggleTheme} = useTheme();
    // const themeIcon = theme === 'light' ? sun : moon;
  return (
    <section id="education" className={styles.container}>
        <div className={styles.title}>
            <h1><div className={styles.underline}>Education</div></h1>
        </div>
        <div className={styles.content}>
            
            <div className={styles.information}>
                <div>
                    <div className={styles.University}>
                        <h2>University of California,</h2>
                        <h2 className={styles.BerkeleyText}>Berkeley</h2>
                    </div>
                    <h2>College of Engineering</h2>
                    <div className={styles.spacer}></div>
                    <h3>Bachelor of Science: Electrical Engineering & Computer Science</h3>
                </div>
                <div className={styles.spacer}></div>
                <h3><b>Relevant Coursework:</b></h3>
                <p>SWE: Algorithms, Data Structures, Computer Architecture, Computer Security</p>
                <p>Web-Dev: Full-Stack, Server-Side Development using PHP, Client-Side Web Development, Database Management, IOS Development, Figma</p>
                <p>AI/ML: Machine Learning, Deep Learning for Visual Data, Designing Deep Neural Networks, Artificial Intelligence, Foundations of Data Science, Discrete Mathematics and Probability Theory</p>
            </div>
            <div className={styles.BerkeleyLogo}>
                {/* <img className={styles.oski} src={oski} alt="Berkeley Engineering" width="250px"/> */}
                <img className={styles.camp} src={camp} alt="" width="160px"/>
            </div>
         
        </div>
        
    </section>
  )
}

export default Education