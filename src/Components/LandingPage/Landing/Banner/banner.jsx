import React, {useState} from 'react';
import cv1 from '../../../../assets/image/1.jpg';
import styles from './banner.module.css'
const Banner= ()=>{
return (
    <>
    <div className={styles.Banner}>
        <img src={cv1} alt=""/>
        <div className={styles.topleft}>
            <h2>Hello there!</h2>
            <h2>I am Tanbin Akter Mitaly</h2>
            <h2>A Front End Engineer</h2>
        </div>
    </div>
    </>

);
} 
export default Banner;