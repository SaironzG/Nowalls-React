import React from 'react';
import serv1 from '../assets/images/serv1.png';
import serv2 from '../assets/images/serv2.png';
import serv3 from '../assets/images/serv3.png';

const services = [
  {
    title: 'Service 1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    image: [serv1]
  },
  {
    title: 'Service 2',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    image: [serv2]
  },
  {
    title: 'Service 3',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    image: [serv3]
  }
];

const ServicesSection = () => {
  return (
    <div className="services-section">
      <h2>Our Services To </h2>
      <h2>Deliver Amazing Products</h2>
      <div className="services-container">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <img src={service.image} alt={service.title} />
            <h3>{service.title}</h3>
            <hr />
            <p>{service.description}</p>
          </div>
        ))}
      </div>
      <div className="pagination">
        <span className="dot active"></span>
        <span className="dot"></span>
      </div>
    </div>
  );
};

export default ServicesSection;
