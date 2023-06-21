import { GridContainer, GridItem } from "../components/grid/grid";
import { useEffect, useState } from "react";
import styles from "./aboutMe.module.css";
import { Head } from "next/document";
import {FaRegNewspaper, FaGithubSquare, FaLinkedin, FaMedium} from 'react-icons/fa';

export default function AboutMe(props){

    
    useEffect(()=>{
        document.title = "vntchang | About Me / 關於我";
    }, []);

    return (
        <>
        {/* <Head>
            <meta
            name="description"
            content="just a simple personal website built with Next.js"
            />
            <title>vntchang|About Me/關於我</title>
        </Head> */}
        <div style={{height: "100vh", width: "100vw", background: "#3a3a3a"}}>
            <GridContainer numOfCols={12} style={{height: "100%", width: "100%", padding:"3vw"}}>
                <GridItem className={styles['aboutme-name']} style={{fontFamily: "Noto Sans TC", fontWeight: "lighter", textAlign: "center", alignSelf: "center", justifySelf: "center", fontSize: "5rem"}}>
                    <div style={{position: "relative"}}>
                        <div className={styles['aboutme-highlight']} style={{ position: "absolute", left: "-3%",bottom:"10%", height:"45%", width: "106%", background:"rgba(233, 245, 220, 0.7)"}}></div>
                        Vincent Chang
                    </div>
                </GridItem>
                <GridItem className={styles['aboutme-content']}>
                    <p>
                        Hi, there! I am a backend web developer. I spend a lot of time trying to code up crazy ideas inspired by the little stupid things in life.
                        I came from a mechanical engineering background. I have some of my side projects listed here.
                        Feel free to check those out, and contact me if you have any questions and/or suggestion! 
                    </p><br/>
                    <p style={{fontFamily: "Noto Sans TC"}}>
                        嗨，你好！我是一名網頁後端開發人員。我會花不少時間去實作受生活上一些無厘頭小事啟發的想法。我的本科系背景是機械工程。在這裡我有列出一些我個人的小專案。
                        如果你有任何問題或是對列出的專案有任何想法或建議，請不吝賜教。
                    </p>
                </GridItem>
                <GridItem className={styles['aboutme-projects']}>
                    <GridContainer numOfCols={3}>
                        <h3 style={{gridColumn:"1/-1", justifySelf: "left"}}>Horse Racing Side Projects</h3>
                        <p style={{gridColumn: "1/-1", justifySelf:"left"}}>
                            <a href="https://github.com/niuee/hrphysics-simulation" target="_blank"><u>HR Physics Simulation</u></a>: A simpliﬁed physics simulation implemented in python.
                        </p>
                        <p style={{gridColumn: "1/-1", justifySelf:"left"}}>
                            <a href="https://github.com/niuee/hrGraphql" target="_blank"><u>HR GraphQL Server</u></a>: A GraphQL server for querying horses information. <a href="https://vntchang.dev/hrgraphql" target="_blank"><u>Live Demo</u></a>
                        </p>
                        <p style={{gridColumn: "1/-1", justifySelf:"left"}}>
                            <a href="https://github.com/niuee/hrcrawler" target="_blank"><u>HR Crawler</u></a>: A simple crawler that scrapes real world race horses data from a Japanese website netkeiba.com
                        </p>
                        <p style={{gridColumn: "1/-1", justifySelf:"left"}}>
                            <a href="https://github.com/niuee/hrracetrack-maker" target="_blank"><u>HR Racetrack Maker</u></a>: An editor used to create race tracks that can be used in the physics engine. <a href="https://vntchang.dev/racetrack-maker/" target="_blank"><u>Live Demo</u></a>
                        </p>
                    </GridContainer>
                </GridItem>
                <GridItem style={{textAlign: "center"}} className={styles['resume-icon']}>
                    <FaRegNewspaper size={"3rem"}/>
                    <p>Resume</p>
                    <a href="/resume/resume-ch.pdf" target="_blank"><u>中文</u></a> / <a href="/resume/resume.pdf" target="_blank"><u>EN</u></a>
                </GridItem>
                <GridItem style={{textAlign: "center"}} className={styles['github-icon']}>
                    <a href="https://github.com/niuee" target="_blank">
                        <FaGithubSquare size={"3rem"}/>
                    </a>
                    <p>GitHub</p>
                </GridItem>
                <GridItem style={{textAlign: "center"}} className={styles['linkedin-icon']}>
                    <a href="https://www.linkedin.com/in/vntchang/" target="_blank">
                        <FaLinkedin size={"3rem"}/>
                    </a>
                    <p>LinkedIn</p>
                </GridItem>
                <GridItem style={{textAlign: "center"}} className={styles['medium-icon']}>
                    <a href="https://medium.com/@vntchang" target="_blank">
                        <FaMedium size={"3rem"}/>
                    </a>
                    <p>Medium</p>
                </GridItem>
            </GridContainer>
        </div>
        </>
    )
}