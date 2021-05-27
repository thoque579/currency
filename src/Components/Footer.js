import React from 'react';
import { AiFillGithub } from "react-icons/ai"
import { AiFillLinkedin } from "react-icons/ai"
import { RiCodepenLine } from "react-icons/ri"
const Footer = () => {
   
    return(
        <div className = "container" id = "footer-container">
            <div className = "footer-section">
                <div className = "copyright-section">
                    <p id ="copyright">Copyright © CurrencyExchange 2021. All Right Reserved</p>
                </div>
            <div className = "social-links container">
                    <div className = "row">
                        <div className col-md-4>
                            <ul className = "list-unstyled">
                                <li><a href = "https://www.linkedin.com/in/tushar-hoque-434940191/" className ="linkedln"><AiFillLinkedin />linkedln</a> </li>
                                <li><a href = "https://github.com/thoque579" className = "Github"> <AiFillGithub />Github</a></li>
                                <li><a href = "https://goofy-sammet-8acd27.netlify.app/" className = "portfolio">< RiCodepenLine />Portfolio</a></li>        
                            </ul>
                        </div>
                    </div> 
                </div>
            </div>
        </div>

    )
    
}

export default Footer;