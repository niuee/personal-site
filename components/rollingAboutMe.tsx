import React from "react";
import styles from './rollingAboutMe.module.css'

export default function RollingAboutMe(props){

    return (
        <div style={{perspective:"100px", overflow: "hidden"}}>
            <div className={styles.rollingAboutMe}>fmt.<span style={{color: "rgb(138, 43, 226)"}}>Println</span>(aboutMe)</div>
        </div>
    );
}