import React from 'react';
import getin from '../assets/images/geintouch.png';




export const Intouch = () => {
  return(

    <section id="in-touch">
    <div class="part1">
        <img src={getin} alt="" />
    </div>

    <div class="part2">
        <h3>get in touch with us</h3>
        <p>
            Have an enquiry or some feedback for us?<br /> Fill out form below to contact our team
        </p>

        <div class="inputs">
            <input type="name" id="name" name="name" placeholder="Your name" />
            <input type="number" id="phone-number" name="phone-number" placeholder="Your Phone-number" />
            <input type="email" id="email" name="email" placeholder="Your Email adress" />
            <input type="message" class="message" id="message" name="message" placeholder="Your Message" />
            <button type="submit">Submit</button>
        </div>
    </div>
</section>
   
  )

}

export default Intouch;