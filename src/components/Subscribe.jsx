import React from 'react';
import maillist from '../assets/images/mail-listing.png';




export const Subscribe = () => {
  return(

    <section id="subscribe">
    <div class="part1">
        <h1>
            Let`s create brands & products <br /> People will love!
        </h1>
        <button>subscribe to mail listing</button>
    </div>

    <div class="part2">
        <img src={maillist} alt="" />
    </div>
</section>
   
  )

}

export default Subscribe;