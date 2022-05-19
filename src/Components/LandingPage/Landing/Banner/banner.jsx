import React, {useState} from 'react';
import styles from './banner.module.css';
const Banner= ()=>{
return (
    <>
    <div className={styles.banner}>
        <div className={styles.topleft}>
            <h2>Tanbin Akter <br/>Mitaly!</h2>
            <h2>A Book worm with a passion for mathematics,
                <br/> problem-solving</h2>
        </div>
    </div>
    </>

);
} 
export default Banner;