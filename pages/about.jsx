import styles from "../styles/HomePage.module.css";
import Image from "next/image";
import profilePic from "../public/me.png";

const AboutPage = () => {
  return (
    <>
      <h1>About Page</h1>
      <div className={styles.container}>
        <div className={styles.background}>
          <h1>Koustav</h1>
          <h1>Manna</h1>
        </div>
        <div className={styles.foreground}>
          <div className={styles.content} style={{ marginRight:'20px'}}>
            <p  style={{ color: "#fff" }}>
              Hi there! <span style={{ color: "#F06000" }}>I am Koustav!</span>
              <span className={styles.waving}>👋</span> An efficient problem
              solver and a UI Engineer, Front-end development and building
              Responsive & High performance web applications. I've been coding
              for almost 3 years now. As a UI developer I've been working on a
              startup to help build & scale their company. Along the journey I
              realised my passion existed in learning as many technology as I
              can.
            </p>
          </div>
            <Image
              className="profile"
              width={1200}
              height={1200}
              src={profilePic}
              alt="Picture of the develop"
              objectFit="fill"
            />
        </div>
      </div>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: { title: "About" },
  };
}

export default AboutPage;
