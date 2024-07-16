import React from 'react';
import logo from '../assets/images/NoWallsLogo.png';
import hero1 from '../assets/images/hero1.png';
import hero2 from '../assets/images/hero2.png';
import hero3 from '../assets/images/hero3.png';
import hero4 from '../assets/images/hero4.png';
import hero5 from '../assets/images/hero5.png';




 export const Hero = () => {
  return (

   <section id = "hero">
        <nav>
            <img src={logo} alt="logo" class="logo" />
            <div class="reference">
                <a href="#services">Services</a>
                <a href="#subscribe">Subscribe</a>
                <a href="#in-touch">Contact-us</a>
            </div>
        </nav>

        
        <div class="collector">
            <h1>Innovative. Unorthodox.</h1>
            <h6>we`re <span>Nowalls</span> Pan Africa.</h6>

            <div class="collabo">
                <hr/>
                <p>Main website coming soon</p>
            </div>
        </div>


        <div class="images">
            <div class="short">
                <div class="sh1">
                   <img src= {hero1} alt="Hero 1" />
                </div>
                <div class="sh2">
                    <img src={hero2} alt="Hero 2" />
                </div>
            </div>

            <div class="big">

                <img src= {hero3} alt="Hero 3" />

            </div>

            <div class="regular">

                <img src= {hero4} alt="Hero 4" class="u" />

            </div>

            <div class="big">

                <img src= {hero5} alt="Hero 5" />

            </div>
            </div>
    </section>
  )
}


export default Hero;
