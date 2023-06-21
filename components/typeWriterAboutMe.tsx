import { useEffect, useRef } from "react";
import styles from "./typeWriterAboutMe.module.css";
import hljs from 'highlight.js';
import 'highlight.js/styles/atom-one-dark.css';

type typeWriterProps = {
    typeOutStringArray?: singleString[];
}


type singleString = {
    language: string;
    str: string;
}

export default function TypeWriterAboutMe(props: typeWriterProps){
    let typeOutString = [
                        {language: "python", str:"print(about_me)"}, 
                        {language: "javascript", str: "console.log(aboutMe);"},
                        {language: "go", str: "fmt.Println(aboutMe)"}, 
                        {language: "cpp", str: "std::cout<<aboutMe<<std::endl;"}, 
                    ];

    if (props.typeOutStringArray != null) {
        typeOutString = props.typeOutStringArray;
    }

    let typeWriter = useRef<TypeWriter>(new TypeWriter(typeOutString));

    useEffect(setup, []);
    
    function setup(){
        if (document.readyState === "complete"){
            setupTypewriter();
        } else {
            window.onload = setupTypewriter;
        }

        function setupTypewriter() {
            typeWriter.current.step();

        };
        return ()=>{
            typeWriter.current.clearTypeTimeOut();
        }
    };

    return (
        <div>
            <code className="typewrite" data-period="2000" ><span className={styles.wrap + " " + "test"} ></span></code>
        </div>
    )
}


class TypeWriter {
    private currentStringIndex: number;
    private rotatingStrings: {language: string, str:string}[];
    private currentRenderedString: string;
    private currentFullString: string;
    private isDeletingString: boolean;
    private timeOut: NodeJS.Timeout;
    private loop: boolean = true;

    constructor(rotatingStrings: {language: string, str: string}[], loop=true){
        if (rotatingStrings.length <= 0) {
            this.rotatingStrings = [{language: "none", str:"test string"}]
        } else {
            this.rotatingStrings = rotatingStrings;
        }
        this.currentStringIndex = 0;
        this.currentFullString = this.rotatingStrings[this.currentStringIndex].str;
        this.currentRenderedString = "";
        this.loop = loop;
    }

    step():void{
        // console.log("typewriter", this)
        if (this.isDeletingString){
            if (this.currentFullString.substring(this.currentRenderedString.length - 4, this.currentRenderedString.length) === "&lt;"){
                this.currentRenderedString = this.currentFullString.substring(0, this.currentRenderedString.length - 4);
            } else {
                this.currentRenderedString = this.currentFullString.substring(0, this.currentRenderedString.length - 1);
            }
        } else {
            if (this.currentFullString.substring(this.currentRenderedString.length, this.currentRenderedString.length + 4) === "&lt;"){
                this.currentRenderedString = this.currentFullString.substring(0, this.currentRenderedString.length + 4);
            } else {
                this.currentRenderedString = this.currentFullString.substring(0, this.currentRenderedString.length + 1);
            }
        }

        let outterAnchor = document.querySelector(".typewrite");
        if (outterAnchor) {
            let wrap = outterAnchor.querySelector(".test");
            if (wrap != null) {
                if (this.rotatingStrings[this.currentStringIndex].language !== "none") {
                    wrap.innerHTML = hljs.highlight(this.currentRenderedString, {language: this.rotatingStrings[this.currentStringIndex].language}).value;
                } else {
                    wrap.innerHTML = this.currentRenderedString;
                }
            }
        }


        var delta = 150 - Math.random() * 100;

        if (this.isDeletingString) { delta /= 2; }

        if (!this.isDeletingString && this.currentRenderedString === this.currentFullString) {
            
            delta = 1000;
            this.isDeletingString = true;
        } else if (this.isDeletingString && this.currentRenderedString === '') {
            this.isDeletingString = false;
            this.stepString();
            delta = 700;
        }

        this.timeOut = setTimeout(this.step.bind(this), delta);
    }

    clearTypeTimeOut(){
        clearTimeout(this.timeOut);
    }

    stepString(){
        if (this.loop){
            this.currentStringIndex = (this.currentStringIndex + 1) % this.rotatingStrings.length;
            this.currentFullString = this.rotatingStrings[this.currentStringIndex].str;
        }
    }
}