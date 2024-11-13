import styles from './ContactStyles.module.css';

function Contact() {
   
  return (
    <section id="Contact" className={styles.container}>
        <div className={styles.title}>
            <h1><div className={styles.underline}>Contact Me</div></h1>
        </div>
        <div className={styles.content}>
            <form action="https://formspree.io/f/xovqwnnj" method="post">
                <input name="name" id="name" type="text" placeholder='Name' required/>
                <input name="email" id="email" type="email" placeholder='Email' required/>
                <textarea name="message" id="message" placeholder='Message' required></textarea>
                <input className={styles.submit} type="submit" value="Submit"/>
            </form>
        </div>
        <p className={styles.footer}>© 2024 Sepehr Rafiei. All rights reserved.</p>
       
        
    </section>
  )
}

export default Contact