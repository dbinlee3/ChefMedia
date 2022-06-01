import React from 'react';
import './Footer.css';
import github from '../../assets/githubLogo.png'

function Footer() {

    return(

        <section className = "footer">

            <hr className = "footer-separator"/>

            {/*Title Word*/}
            <section className = "footer-title">
                Pantri
            </section>

            {/* Center Side of Footer*/}
            <section className = "center">

                {/* Copyright stuff */}
                <p>Copyright &copy; 2022 Pantri</p>
                
                <strong>
                    {/* Gmail and Team Page Links*/}
                    <a href = "mailto:pantri@gmail.com" target = "_blank" rel="noreferrer">
                        pantri@gmail.com &emsp;
                    </a>
                    
                    {/* divider line */}
                    |

                    <a href = "../../OurStory.html" target = "_blank" rel="noreferrer">
                        &emsp; Our Team 
                    </a>
                    
                </strong>

                <br></br>
                <br></br>

                {/* GitHub Logo */}
                <a href = "https://github.com/dbinlee3/ChefMedia.git" target="_blank" rel="noopener noreferrer"> 
                    <img className = "githublogo" src = {github} alt = "" />
                </a>
                
            </section>

            <hr className = "footer-separator"/>

        </section>
    )
}

export default Footer;