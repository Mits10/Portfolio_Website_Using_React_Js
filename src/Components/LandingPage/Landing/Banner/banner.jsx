import React, {useState} from 'react';
import cv1 from '../../../../assets/image/4.jpg';
import styles from './banner.module.css';
const Banner= ()=>{
return (
    <>
    <div className={styles.Banner}>
    <img src={cv1} alt=""/>
        <div className={styles.topleft}>
            <h2>Tanbin Akter <br/>Mitaly!</h2>
            <h2>Front End Developer</h2>
        </div>
    </div>
    </>

);
} 
export default Banner;