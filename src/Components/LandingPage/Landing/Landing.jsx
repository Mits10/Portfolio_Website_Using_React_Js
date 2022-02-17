import React, {useState} from 'react';
import Header from './Header/header';
import  Banner from './Banner/banner';
import AboutMe from './AboutMe/about_me';
import Experience from './Experience/experience';
import KeySkills from './KeySkills/key_skills';
import ProjectPortfolio from './ProjectPortfolio/project_portfolio';
import Footer from './Footer/footer';
import SideBar from './SocialBar/social_bar';
const Landing =()=>{
return <>
 <Header/>
 <SideBar/>
 <Banner/>
 <AboutMe/>
 <Experience/>
 <KeySkills/>
 <ProjectPortfolio/>
 <Footer/>
</>
}
export default Landing;


