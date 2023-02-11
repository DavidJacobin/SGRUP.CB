import React from 'react'
import '../styles/Home.css'
import '../styles/Base-Home.css'
import Footer from '../components/Footer'
import photo1 from "../images/home/1.jpg";
import photo2 from "../images/home/2.jpg";
import photo3 from "../images/home/3.jpg";
import photo4 from "../images/home/4.jpg";
import photo5 from "../images/home/5.jpg";
import photo6 from "../images/home/6.jpg";



export const Home = () => {
  return (
    <div>
     <body>
      <section className='basic-grid'>
        <div className='card card-tall card-wide'><img src={photo1}/></div>
        <div className='card card-tall card-wide'><img src={photo2}/></div>
        <div className='card card-tall card-wide'><img src={photo3}/></div>
        <div className='card card-tall card-wide'><img src={photo4}/></div>
        <div className='card card-tall card-wide'><img src={photo5}/></div>
        <div className='card card-tall card-wide'><img src={photo6}/></div>
        
        
        
        

      </section>
     </body>
    </div>
  )
}
