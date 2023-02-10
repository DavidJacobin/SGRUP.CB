import React from 'react'
import '../styles/Footer.css'
import reactLogo from "../images/maps.png";

function Footer() {
    return (
        <div>

            <footer class="footer-distributed">

                <div class="footer-left">

                    <h3>SGRUP<span>.CB</span></h3>

                    <p class="footer-company-name">SGRUP.CB © 2016</p>
                    <img  src={reactLogo}/>
                </div>

                <div class="footer-right">

                    <p class="footer-company-about">
                        <span>Transporte, compra y venta de cítricos y otras frutas.</span>
                        En SGRUP.CB 2016 contamos con una amplia trayectoria profesional en el sector agrario en concreto cítricos para la industria y el mercado. Disponemos de una amplia variedad de cítricos que llegan de la tierra directo en su mesa.
                        Disponemos de transporte propio para ofrecerles un mejor servicio.
                    </p>
                    <a target="_blank" href="https://icons8.com/icon/J7cwU7OY5OnR/orange">Orange</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
                </div>
                

                <div class="footer-center">

                    <div>
                        <i class="fa fa-map-marker"></i>
                        <p><span>Carrer Santa Bárbara, 46712</span> Piles, València, Spain</p>
                    </div>

                    <div>
                        <i class="fa fa-phone">
                            
                            <p>+34 605 50 37 49</p>
                            <p> +34 642 89 10 00</p>
                        </i>
                    </div>

                    <div>
                        <i class="fa fa-envelope"></i>
                        <p><a href="sgrup.bg@gmail.com">sgrup.bg@gmail.com</a></p>
                    </div>

                </div>
                
                <div class="copyright">
                SGRUP.CB © 2016 | Todos los derechos reservados  |
                </div>
            </footer>
        </div>
    )
}

export default Footer