import React from 'react';
import './social_bar.css';
const SideBar =()=>{
    return (
        <>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            <div className="icon-bar">
                <a href="#" className="facebook"><i className="fa fa-facebook"></i></a>
                <a href="#" className="twitter"><i className="fa fa-twitter"></i></a>
                <a href="#" className="google"><i className="fa fa-google"></i></a>
                <a href="#" className="linkedin"><i className="fa fa-linkedin"></i></a>
                <a href="#" className="youtube"><i className="fa fa-youtube"></i></a>
</div>
        </>
    );
}
export default SideBar;