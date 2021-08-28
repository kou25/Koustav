import React,{useEffect} from "react";
import ProjectCard from '../components/ProjectCard';
import { getProjects } from './api/projects';
import styles from '../styles/ProjectsPage.module.css';
import VanillaTilt from 'vanilla-tilt';
const ProjectsPage = ({ projects }) => {
  useEffect(() => {
    VanillaTilt.init(document.querySelectorAll("#ant-card"), {
        max: 25,
        speed:400,
        glare: true,
        "max-glare": 1
    });
  }, [projects]);

  return (
    <>
      <h2>Look What I've Built</h2>
      <div className={styles.container}>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </>
  );
};

export async function getStaticProps() {
  const projects = getProjects();

  return {
    props: { title: 'Projects', projects },
  };
}

export default ProjectsPage;
