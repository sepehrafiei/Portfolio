import { useState, useEffect } from 'react';
import styles from './HeroStyles.module.css';
import heroImg from '../../assets/hero-img.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import twitterLight from '../../assets/instagram-light.png';
import twitterDark from '../../assets/instagram-dark.png';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import CV1 from '../../assets/Resume.pdf';
import CV2 from '../../assets/MLResume.pdf';
import { useTheme } from '../../common/ThemeContext';

function Hero() {
  const { theme, toggleTheme } = useTheme();
  const themeIcon = theme === 'light' ? sun : moon;
  const twitterIcon = theme === 'light' ? twitterLight : twitterDark;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;


  const roles = ['Full-Stack Developer', 'UI/UX Designer', 'Software Engineer', 'ML/AI Engineer'];
  const [currentRole, setCurrentRole] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const typingSpeed = 120;
  const erasingSpeed = 100;
  const delayBetweenRoles = 2000;

  const files = [CV1, CV2];

  const downloadFiles = () => {
    files.forEach((file, index) => {
      setTimeout(() => {
        const link = document.createElement('a');
        link.href = file;
        link.download = file.split('/').pop() || 'downloaded_file';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }, index * 100);
    });
  };


  useEffect(() => {
    let timeout:number;
    if (isTyping) {
      if (currentRole.length < roles[roleIndex].length) {
        timeout = setTimeout(() => {
          setCurrentRole(prev => prev + roles[roleIndex][prev.length]);
        }, typingSpeed);
      } else {
        timeout = setTimeout(() => setIsTyping(false), delayBetweenRoles);
      }
    } else {
      if (currentRole.length > 0) {
        timeout = setTimeout(() => {
          setCurrentRole(prev => prev.slice(0, -1));
        }, erasingSpeed);
      } else {
        setIsTyping(true);
        setRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [currentRole, isTyping, roleIndex, roles]);

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img className={styles.hero} src={heroImg} alt="Profile picture of Sepehr Rafiei" />
        <img className={styles.colorMode} src={themeIcon} alt="Color mode icon" onClick={toggleTheme} />
      </div>
      <div className={styles.info}>
        <h1>Sepehr<br /> Rafiei</h1>
        <div className={styles.wrapper}>
          <h2 className={styles.typingContainer}>
            <span>{currentRole}</span>
            <span className={styles.cursor}>&#124;</span>
          </h2>
        </div>

        <span className={styles.socials}>
          <a href="https://www.instagram.com/sepehrafiei/" target="_blank">
            <img src={twitterIcon} alt="X Icon" />
          </a>
          <a href="https://github.com/sepehrafiei" target="_blank">
            <img src={githubIcon} alt="Github Icon" />
          </a>
          <a href="https://www.linkedin.com/in/sepehrafiei/" target="_blank">
            <img src={linkedinIcon} alt="Linkedin Icon" />
          </a>
        </span>
        <p>With a passion for developing<br/>software and modern applications<br/>for commercial businesses.</p>
        <button className="hover" onClick={downloadFiles}>Resume</button>
      
      </div>
    </section>
  );
}

export default Hero;