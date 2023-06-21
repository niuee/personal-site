import { CSSProperties } from "react";
import styles from "./grid.module.css";

interface gridProps extends React.PropsWithChildren{
    name?: string;
    style?: CSSProperties;
    numOfCols?: number;
}

interface gridItemProps extends React.PropsWithChildren {
    spanCols?: number;
    spanRows?: number;
    style?: CSSProperties;
    className?: string;
    header?: boolean;
}

export function GridContainer(props: gridProps){
    let gridSetupStyle: CSSProperties = {};
    if (props.style){
        gridSetupStyle = props.style;
    }
    if (props.numOfCols) {
        gridSetupStyle.gridTemplateColumns = `repeat(${props.numOfCols}, 1fr)`;
    }
    return (
        <div className={styles["grid-container"]} style={gridSetupStyle}>{props.children}</div>
    );
}

export function GridItem(props: gridItemProps){
    
    const gridSetupStyle: CSSProperties = props.style? props.style: {};
    const applyStyle = applyCSS(gridSetupStyle, props);
    const classes = props.className? `${props.className} ${styles['grid-item']}`: styles['grid-item']; 
    return (
        <div className={props.header? `${classes} ${styles['grid-header']}`: `${classes}`} style={applyStyle} >{props.children}</div>
    )
}

export function GridFooter(props){
    return (
        <div className={styles['grid-footer']}>{props.children}</div>
    );
}


export function GridHeader(props){
    return (
        <div className={styles['grid-header']}>{props.children}</div>
    );
}

function applyCSS(currentStyle: CSSProperties, props: gridItemProps):CSSProperties {
    return setSpanColumn(currentStyle, props);
}

function setSpanColumn(currentStyle:CSSProperties, props:gridItemProps, nextFunction: (cStyle: CSSProperties, props: gridItemProps)=>CSSProperties = setSpanRow): CSSProperties{
    let newStyle: CSSProperties = structuredClone(currentStyle);
    if (props.spanCols) {
        newStyle.gridColumn = `span ${props.spanCols}`;
    }
    if (nextFunction !== null) {
        return nextFunction(newStyle, props);
    } else {
        return newStyle;
    }
}

function setSpanRow(currentStyle: CSSProperties, props: gridItemProps, nextFunction: (cStyle: CSSProperties, props: gridItemProps)=>CSSProperties=null): CSSProperties {
    let newStyle: CSSProperties = structuredClone(currentStyle);
    if (props.spanRows) {
        newStyle.gridRow = `span ${props.spanRows}`;
    }
    if (nextFunction !== null) {
        return nextFunction(newStyle, props);
    } else {
        return newStyle;
    }
}