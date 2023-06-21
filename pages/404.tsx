import TypeWriterAboutMe from "../components/typeWriterAboutMe"
import Head from "next/head";
import Link from "next/link";
import styles from "./404.module.css";
import { useState } from "react";

export default function Custom404() {
    const [typeOutStringArray, setTOSA] = useState([{language: "none", str: "You Got Me"}]);
    return (
        <div id="container" style={{width: "100vw", height: "100vh", background: "#3a3a3a"}}>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta
                name="description"
                />
                <title>404 Not Found/找不到</title>
            </Head>
            <div id={styles.info}>
                <h1 style={{fontWeight: "lighter"}}>404</h1>
                <Link href="/"><button style={{marginTop: "10px"}}>Take Me Back</button></Link>
            </div>
        </div>
    );
}