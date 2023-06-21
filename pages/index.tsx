import Head from 'next/head';
import { getSortedPostsData } from '../lib/posts';
import { GetStaticProps } from 'next';
import TypeWriterAboutMe from '../components/typeWriterAboutMe';
import styles from "./index.module.css";
import Link from 'next/link';

type HomeProps = {
  allPostsData: {
    date: string
    title: string
    id: string
    } [];
} 

export default function Home( {allPostsData} : HomeProps)
{
    
    return (
        <div id="container" style={{width: "100vw", height: "100vh", background: "#3a3a3a"}}>
            <Head>
                <meta
                name="description"
                content="just a simple personal website built with Next.js"
                />
                <title>vntchang | Personal Website / 個人網頁</title>
            </Head>
            <div id={styles.info}>
                <TypeWriterAboutMe></TypeWriterAboutMe>
                <Link href="/aboutMe"><button style={{marginTop: "10px"}}>Try It !</button></Link>
            </div>
        </div>
    );
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}