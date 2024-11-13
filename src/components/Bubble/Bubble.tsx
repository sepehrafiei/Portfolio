import styles from './Bubble.module.css'

interface BubbleProps {
    value: string;
}

const Bubble: React.FC<BubbleProps> = ({ value }) => {
    return (
      <div className={styles.container}>
         {value}
      </div>
    );
  };

export default Bubble