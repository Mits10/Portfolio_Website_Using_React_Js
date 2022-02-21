import React, {useState} from 'react';
import styles from './header.module.css'
import {Navbar} from './../../../styles/container.styled';
const Header= ()=>{
  const [navbar,setnavbar]=useState(false);
  const changeBackground =()=>{
    if(window.scrollY >=80){
      setnavbar(true);
    }else{
      setnavbar(false);
    }
  }
  window.addEventListener('scroll',changeBackground);
return (
    <>
    {/*<div className={styles.header}>*/}
    <Navbar bg={navbar ? "Black": "transparent"}>
    <div className={styles.topnav}> 
      <a href="#">Key Skills</a>
      <a href="#">Project Portfolio</a>
      <a href="#">Experience</a>
      <a href="#">Home</a>
      
      </div>
      </Navbar>
      {/*</div>*/}
    </>

);
}
export default Header;