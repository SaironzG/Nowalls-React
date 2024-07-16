import React from 'react';
import location from '../assets/icons/location-arrow.png';
import phone from '../assets/icons/phone.png';




export const Contact = () => {
  return(

<section id="contact">
        <div class="part1">
            <h1>NoWalls Pan Africa, Dare To Differ</h1>

            <div class="div">
                <div class="location">
                    <img src={location} alt="" />
                    <p>
                        67 Heritage house <br /> Samora Machel,<br />Harare
                    </p>
                </div>

                <div class="phone">
                    <img src={phone} alt="" />
                    <p>+263 778 793 029</p>
                </div>
            </div>
        </div>
    </section>
   
  )

}

export default Contact;