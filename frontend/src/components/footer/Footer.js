import React from 'react';
import './Footer.css';

function Footer() {
    return(
        <section className = "footer">

            <hr className = "footer-separator"/>

            {/* Contact Us Title Word*/}
            <section className = "footer-title">
                Contact Us
            </section>

            {/* Everything inside the Footer */}
            <section className = "footer-info">
                {/* Left Side of Footer*/}
                <section className = "left">
                    <section className = "name">
                        <section className = "contributors">
                            <u>Contributors:</u>
                        </section>

                        {/* Contributor Names */}
                        <ul><li>Dong Bin Lee</li></ul>
                        <ul><li>Kenneth Song</li></ul>
                        <ul><li>Arjun Varshney</li></ul>
                        <ul><li>Shruti Rao</li></ul>
                        <ul><li>Kevin Su</li></ul>
                    </section>
                </section>

                {/* Center Side of Footer*/}
                <section className = "center">
                    <section className = "linkedin">
                        <u>LinkedIn's</u>
                    </section>
                    
                    {/* LinkedIn Links for All Contributors*/}
                    <br></br>
                    <a href = "/" target = "_blank">Dong Bin's</a>
                    <br></br>
                    <a href = "https://www.linkedin.com/in/kenneth-song-b9a852217/" target = "_blank" rel="noreferrer">Kenneth's</a>
                    <br></br>
                    <a href = "/" target = "_blank">Arjun's</a>
                    <br></br>
                    <a href = "/" target = "_blank">Shruti's</a>
                    <br></br>
                    <a href = "/" target = "_blank">Kevin's</a>
                   
                </section>

                {/* Right Side of Footer*/}
                <section className = "right">
                    <section className = "ourstory">
                        <a href = "/components/OurStory.html" target = "_blank" rel="noreferrer">Our Story</a>
                    </section>
                    <img src = "data:image/png;base64,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" 
                    width = "340" height = "300" alt = "Chef Hat"/>

                </section>

            </section>

            <hr className = "footer-separator"/>

        </section>
    )
}

export default Footer;