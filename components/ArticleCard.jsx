import Image from 'next/image';
import HeartIcon from '../components/icons/HeartIcon';
import styles from '../styles/ArticleCard.module.css';

const ArticleCard = ({ tech }) => {

  
  return (
    <a
      href={tech?.url}
      target="_blank"
      rel="noopener"
      className={styles.container}
      id="ant-card"
    >
      <Image
        src={tech.image}
        alt={tech.name}
        width={100}
        height={150}
      />
      <div className={styles.content}>
        <h3 className={styles.title}>{tech.name}</h3>
      </div>
      <div className={styles.stats}>
        <div className={styles.stat}>
          <HeartIcon className={styles.icon} /> {tech?.favorite}
        </div>
      </div>
    </a>
  );
};

export default ArticleCard;
