import React, {useState} from 'react';
import styles from './header.module.css'

const Header= ()=>{
return (
    <>
    <div className={styles.header}>
      <button>Home</button>
      <button>Experience</button>
      <button>Project Portfolio</button>
      <button>Key Skills</button>
      </div>
    </>

);
}
export default Header;