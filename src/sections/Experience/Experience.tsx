import styles from './ExperienceStyles.module.css';
import InfoCard from '../../components/InfoCard/InfoCard'

function Experience() {
  return (
    <section id="experience" className={styles.container}>
        <div className={styles.title}>
            <h1><div className={styles.underline}>Experience</div></h1>
        </div>
        <div className={styles.content}>
          <InfoCard
          title="Alcatel-Lucent Enterprise"
          date="October 21 - August 22"
          position="Software Engineer"
          information={["Developed a full-stack web application to virtualize connections within a network-switch topology.",
              "Built a Windows application using C# and Microsoft SQL Server to maintain shipments and product inventory.",
              "Created a Python and C# library for serial and SSH communication to an OmniSwitch™.",
              "Assisted with QA and maintained switch topologies."]}
              skills={["Python", "C#", "HTML", "CSS", "JS", "Microsoft SQL Server"]}
        />

          <InfoCard
          title="Ventura County Community College District"
          date="September 21 - May 22"
          position="Teaching Assistant"
          information={[
              "Tutored over 100 students in Java, C++, and Python.",
              "Enhanced students' coding skills with personalized instruction.",
              "Significantly improved students' exam performances.",
              "Provided custom learning resources for better understanding."
            ]}
              skills={["Java", "Python", "C++"]}
        />

  <InfoCard
          title="Coach AI"
          date="Auguest 24 - Present"
          position="Founder/CEO"
          information={[
              "Leading a team of five to develop an AI-driven app that delivers real-time sports coaching feedback using computer vision.",
              "Managing daily operations, team coordination, and project timelines.",
              "Driving product vision, strategic planning, and investor relations.",
              "Overseeing all aspects of product development from concept to prototype."
            ]}
              skills={["Python", "MediaPipe", "OpenCV"]}
        />
        </div>
    </section>
  )
}

export default Experience