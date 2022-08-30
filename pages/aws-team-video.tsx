import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";

const TeamVideo: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Caramel Club - Laugh at comedy, get dates</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>Team Video</h1>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/AeVe3T-C33Y"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </main>

      <footer className={styles.footer}>
        <ul>
          <li>
            <a target="#blank" href="" rel="noopener noreferrer">
              home
            </a>
          </li>
          <li>
            <a target="#blank" href="" rel="noopener noreferrer">
              contact
            </a>
          </li>
          <li>
            <a target="#blank" href="" rel="noopener noreferrer">
              legal
            </a>
          </li>
          <li>
            <a target="#blank" href="" rel="noopener noreferrer">
              privacy
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default TeamVideo;
