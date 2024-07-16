import React from 'react';
import abtimg from '../assets/images/abt-img.png';




export const Passion = () => {
  return(

    <section id="passion">
    <div class="text">
        <h1>Driven by the passion of <br />building your brand!</h1>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum perferendis magnam eaque voluptates voluptatibus suscipit rerum distinctio ea minus molestias, facere ullam quibusdam rem atque modi sapiente iste, quisquam nam! Illo itaque suscipit est provident
            voluptatum fuga, sunt quam aperiam corporis maxime ullam, aut praesentium minima, sapiente quas numquam repudiandae velit sit expedita incidunt et excepturi. Omnis quaerat recusandae praesentium.
        </p>
    </div>
    <div class="img">
        <img src={abtimg} />
    </div>
</section> 
   
  )

}

export default Passion;