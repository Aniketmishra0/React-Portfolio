import React from 'react'
import './achievement.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.png'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.jpg'
import IMG6 from '../../assets/portfolio6.jpg'


const Achievement = () => {
  return (
    <section id='ahievement'>
      <h5>My Work</h5>
      <h2>Achievement</h2>

      <div className="container achievement__container">
        <article className='achievement__item'>
          <div className="achievement__item-image">
            <img src={IMG3} alt="" />
          </div>
          <h3>Postman Student Expert</h3>
          <div className="achievement__item-cta">
          <a href="https://api.badgr.io/public/assertions/NTDkpR6BSTGXT6ZCI-maBQ?identity__email=aniketmishra492%40gmail.com" className='btn' target='_blank'>Verify</a>
          <a href="https://drive.google.com/file/d/1dzf4iV__tP5suZTHW7BIG7s9EJLnp5Ps/view?usp=sharing" className='btn btn-1' target='_blank'>Download</a>
          </div>
        </article>

        <article className='achievement__item'>
          <div className="achievement__item-image">
            <img src={IMG2} alt="" />
          </div>
          <h3>Bootstrap Contribution </h3>
          <div className="achievement__item-cta">
          <a href="https://github.com/Aniketmishra0/Bootstrap" className='btn' target='_blank'>View</a>
          <a href="https://github.com/Aniketmishra0/Bootstrap" className='btn btn-1' target='_blank'>Contribute</a>
          </div>
        </article>

        <article className='achievement__item'>
          <div className="achievement__item-image">
            <img src={IMG4} alt="" />
          </div>
          <h3>New Portfolio Using React</h3>
          <div className="achievement__item-cta">
          <a href="_index" className='btn' target='_blank'>View</a>
          <a href="_root" className='btn btn-1' target='_blank'>Soon</a>
          </div>
        </article>

        <article className='achievement__item'>
          <div className="achievement__item-image">
            <img src={IMG5} alt="" />
          </div>
          <h3>Experience Latter</h3>
          <div className="achievement__item-cta">
          <a href="https://drive.google.com/file/d/1gRJA9Yq8izIDh_fGWgqEPsVacqvyPCX3/view?usp=sharing" className='btn' target='_blank'>View</a>
          <a href="https://drive.google.com/file/d/1gRJA9Yq8izIDh_fGWgqEPsVacqvyPCX3/view?usp=sharing" className='btn btn-1' target='_blank'>Download</a>
          </div>
        </article>

        <article className='achievement__item'>
          <div className="achievement__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>Portfolio Using Bootstrap</h3>
          <div className="achievement__item-cta">
          <a href="https://aniketmishra0.github.io/mywebsite_technotice/" className='btn' target='_blank'>View</a>
          <a href="https://github.com/Aniketmishra0/mywebsite_technotice" className='btn btn-1' target='_blank'>Demo</a>
          </div>
        </article>

        <article className='achievement__item'>
          <div className="achievement__item-image">
            <img src={IMG6} alt="" />
          </div>
          <h3>Android App</h3>
          <div className="achievement__item-cta">
          <a href="" className='btn' target='_blank'>Soon</a>
          <a href="" className='btn btn-1' target='_blank'>Soon</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Achievement