import React, {useEffect} from 'react';
import Header from './Header/header';
import  Banner from './Banner/banner';
import AboutMe from './AboutMe/about_me';
import Experience from './Experience/experience';
import KeySkills from './KeySkills/key_skills';
import ProjectPortfolio from './ProjectPortfolio/project_portfolio';
import Footer from './Footer/footer';
import SideBar from './SocialBar/social_bar';
import Publication from './Publication';
import Aos from 'aos';
import "aos/dist/aos.css";

const Landing =()=>{
    useEffect(() => {
        Aos.init({ duration: 2000});
    }, []) 
return (
    <>
 <Header/>
 <SideBar/>
 <div data-aos='fade-up'><Banner/></div>
 <div data-aos='fade-up'><AboutMe/></div>
 <div data-aos='fade-up'><Experience/></div>
 <div data-aos='fade-up'> <KeySkills/></div>
 <div data-aos='fade-up'><Publication/></div>
 <div data-aos='fade-up'><ProjectPortfolio/></div>
 <div data-aos='fade-up'> <Footer/></div>
 </>
);
}
export default Landing;


