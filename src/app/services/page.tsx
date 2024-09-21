import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';


const Services: React.FC = () => {
  const services = [
    {
      id: 1,
      icon: <i className="bi bi-tag text-[3vw]"></i>,
      title: 'Private Label Solutions',
      description: '"We offer complete private label solutions, from product development to branding and launch on Amazon. Our expert team helps you create products that resonate with your target market and ensures they are competitive globally."',
    },
    {
      id: 2,
      icon: <i className="bi bi-cart text-[3vw]"></i>,
      title: 'Wholesale Model',
      description: '"Our extensive experience in the wholesale model allows us to source high-quality products at competitive prices, ensuring profitability and market competitiveness. We handle logistics, supplier management, and everything in between."',
    },
    {
      id: 3,
      icon: <i className="bi bi-person-check text-[3vw]"></i>,
      title: 'Client-Focused Launches',
      description: '"We work closely with clients to design custom product launches based on their unique budgets and market goals. Whether you are a startup or an established business, our team ensures a successful launch with maximum ROI."',
    },
    {
      id: 4,
      icon: <i className="bi bi-book text-[3vw]"></i>,
      title: 'E-commerce Learning & Opportunities',
      description: '"We offer educational resources and learning opportunities for individuals looking to start their e-commerce journey. From tutorials to hands-on training, eCommerce by Askian LLC empowers entrepreneurs to build their own businesses."',
    }
  ];

  return (
    <div className='services'>
      <h2 className="text-center mt-5 text-[2.8vw] font-bold text-[#0000ff] capitalize"> Our Services</h2>
      <div className="service-cont w-[90%] m-auto p-4 grid justify-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map(service => (
          <div className="service-card p-4 border border-[#002db3] rounded-lg shadow-lg transform hover:scale-105 transition duration-300 ease-in-out" key={service.id}>
            <div className="icon text-center mb-3 text-[#0000ff]">
              {service.icon}
              
            </div>
            <h3 className='title text-center text-[1.5vw] font-semibold text-[#0000ff]'>{service.title}</h3>
            <p className='description text-center text-[1vw]'>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
