import React,{useEffect} from "react";
import ArticleCard from '../components/ArticleCard';
import styles from '../styles/ArticlesPage.module.css';
import { getTechnologies } from './api/technologies';
import VanillaTilt from 'vanilla-tilt';

const TechnologiesPage = ({ technologies }) => {

  useEffect(() => {
    VanillaTilt.init(document.querySelectorAll("#ant-card"), {
        max: 25,
        speed:400,
        glare: true,
        "max-glare": 1
    });
  }, [technologies]);


  return (
    <>
      <h3>
        The techlogies which I am comfortable with
      </h3>
      <div className={styles.container}>
        {technologies.map((tech) => (
          <ArticleCard key={tech.id} tech={tech} />
        ))}
      </div>
    </>
  );
};

export async function getStaticProps() {
  const technologies =  getTechnologies();

  return {
    props: { title: 'Technologies', technologies  },
    revalidate: 30,
  };
}


export default TechnologiesPage;
