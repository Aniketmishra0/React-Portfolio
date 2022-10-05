import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Android Apps</h3>
          </div>
          
          <ul className='service__list'>
            <div>
              <BiCheck className='service__list-icon' />
              <p>User-friendly and simple interface cration.</p>
            </div>

            <div>
              <BiCheck className='service__list-icon' />
              <p>Android Widgets and Android E-Commerce app.</p>
            </div>

            <div>
              <BiCheck className='service__list-icon' />
              <p>Social Media tools intergration.</p>
            </div>

            <div>
              <BiCheck className='service__list-icon' />
              <p>Customized Android apps developmnet.</p>
            </div>

            <div>
              <BiCheck className='service__list-icon' />
              <p>Cloud Computing.</p>
            </div>

            <div>
              <BiCheck className='service__list-icon' />
              <p>Testing and Support, Maintenance.</p>
            </div>
          </ul>
        </article>
        {/* ===================== End Of Android Developement =================== */}
        <article className="service">
          <div className="service__head">
            <h3>Web Developement</h3>
          </div>
          <ul className='service__list'>
            <div>
              <BiCheck className='service__list-icon' />
              <p>Deliver high-quality products using HTML5, CSS3 and JavaScript.</p>
            </div>

            <div>
              <BiCheck className='service__list-icon' />
              <p>Writing application interface codes using JavaScript following React.js</p>
            </div>

            <div>
              <BiCheck className='service__list-icon' />
              <p>Web apps/mobile apps and code debugging and ensure cross-platform compatibility.</p>
            </div>

            <div>
              <BiCheck className='service__list-icon' />
              <p>Cross-browser and responsiveness development: Develop front-end.</p>
            </div>

            <div>
              <BiCheck className='service__list-icon' />
              <p>Knowledge on Microsoft products, including Visual Studio and Azure.</p>
            </div>
          </ul>
        </article>
        {/* ===================== End Of Web Developement =================== */}
        <article className="service">
          <div className="service__head">
            <h3>Open Source & Freelancing</h3>
          </div>
          <ul className='service__list'>
            <div>
              <BiCheck className='service__list-icon' />
              <p>Open-source contribution.</p>
            </div>

            <div>
              <BiCheck className='service__list-icon' />
              <p>Open-source code for code optimization and improving performance.</p>
            </div>

            <div>
              <BiCheck className='service__list-icon' />
              <p>Build public artifacts that help you grow a reputation(and a career).</p>
            </div>

            <div>
              <BiCheck className='service__list-icon' />
              <p>Maintaining Open-Source Projects.</p>
            </div>

            <div>
              <BiCheck className='service__list-icon' />
              <p>Creating Portfolio and web apps.</p>
            </div>

            <div>
              <BiCheck className='service__list-icon'/>
              <p>Testing and Support, Maintenance.</p>
            </div>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services