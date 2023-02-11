import React from 'react'
import '../styles/Home.css'
import '../styles/Base-Home.css'
import Footer from '../components/Footer'
import photo1 from "../images/home/1.jpg";
import photo2 from "../images/home/2.jpg";
import photo3 from "../images/home/3.jpg";

import photo5 from "../images/home/5.jpg";
import photo6 from "../images/home/6.jpg";
import photo7 from "../images/home/7.jpeg";
import photo8 from "../images/home/8.jpg";
import photo9 from "../images/home/9.jpg";
import photo10 from "../images/home/10.jpg";



export const Home = () => {
  return (
    <div>
     <body className='gird'>
      <section className='basic-grid'>
        <div className='card card-tall card-wide'>
          <h1>Aguacate</h1>
          <img src={photo7}/>
        </div>
        <div className='card card-tall card-wide'>
          <h1>Pomelos</h1>
          <img src={photo2}/>
          </div>
        <div className='card card-tall card-wide'>
          <img src={photo3}/>
        </div>
        <div className='card card-tall card-wide'>
          <h1>Clementinas</h1>
          <img src={photo1}/>
        </div>
        <div className='card card-tall card-wide'>
          <h1>Naranjas</h1>
          <img src={photo6}/>
        </div>
        <div className='card card-tall card-wide'>
          <h1>Limones</h1>
          <img src={photo5}/>
        </div>
      </section>
     </body>
     <body>
        <p>En SGRUP.CB 2016 contamos con una amplia trayectoria profesional en el sector agrario en concreto cítricos para la industria y el mercado. Disponemos de una amplia variedad de cítricos que llegan de la tierra directo en su mesa.
                        Disponemos de transporte propio para ofrecerles un mejor servicio.
        </p>
     </body>
     <body className='gird'>
      <section className='basic-grid'>
        <div className='card card-tall card-wide'>
        
          <img src={photo8}/>
        </div>
        <div className='card card-tall card-wide'>
        
          <img src={photo9}/>
        </div>
        <div className='card card-tall card-wide'>
        
          <img src={photo10}/>
        </div>
        
      </section>
     </body>

    </div>
  )
}
