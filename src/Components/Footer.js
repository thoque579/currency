import React from 'react';
import { AiFillGithub } from "react-icons/ai"
import { AiFillLinkedin } from "react-icons/ai"
import { RiCodepenLine } from "react-icons/ri"
const Footer = () => {
   
    return(
            
            <div className = "footer-section mt-4">
                <div className = "copyright-section">
                    <p className = "text-white">Copyright © CurrencyExchange 2021. All Right Reserved</p>
                 </div>
                <div className = "social-links">
                     <ul className = "list-unstyled">
                        <li><a href = "https://www.linkedin.com/in/tushar-hoque-434940191/" className ="linkedln text-white"><AiFillLinkedin />Linkedln</a> </li>
                        <li><a href = "https://github.com/thoque579" className = "Github text-white"> <AiFillGithub />Github</a></li>
                        <li><a href = "https://goofy-sammet-8acd27.netlify.app/" className = "portfolio text-white">< RiCodepenLine />Portfolio</a></li>        
                     </ul>
                </div>
             </div> 
            
            

    )
    
}

export default Footer;