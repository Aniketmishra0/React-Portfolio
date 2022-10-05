import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'
import {IoLogoHtml5} from 'react-icons/io'
import {SiCss3} from 'react-icons/si'
import {FaReact} from 'react-icons/fa'
import {IoLogoJavascript} from 'react-icons/io'
import {FaJava} from 'react-icons/fa'
import {IoLogoNodejs} from 'react-icons/io'
import {BsGithub} from 'react-icons/bs'
import {IoLogoPython} from 'react-icons/io'
import {SiBootstrap} from 'react-icons/si'
import {SiMicrosoftazure} from 'react-icons/si'
import {SiGooglecloud} from 'react-icons/si'
import {FaAndroid} from 'react-icons/fa'
import {SiJupyter} from 'react-icons/si'
import {SiFlutter} from 'react-icons/si'
import {SiFirebase} from 'react-icons/si'
import {FcLinux} from 'react-icons/fc'
import {RiTeamFill} from 'react-icons/ri'
import {SiMacos} from 'react-icons/si'
import {FaGitAlt} from 'react-icons/fa'
import {SiAndroidstudio} from 'react-icons/si'


const Experience = () => {
  return (
    <section id='experience'>
      <h5> Skills & Abilities</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          {/* <h3>Frontend Developer</h3> */}
          
          <div className="experience__content">
            <article className='experience__details'>
            <IoLogoHtml5 size="1.5em" color='#ff5722'/>
            <h4>HTML</h4>
            <small className='text-light'>Advanced</small>
            </article>

            <article className='experience__details'>
            <SiCss3 size="1.5em" color='#0027ff'/>
            <h4>CSS</h4>
            <small className='text-light'>Advanced</small>
            </article>

            <article className='experience__details'>
            <FaReact size="1.5em" color='#00A3FF'/>
            <h4>React</h4>
            <small className='text-light'>Intermediate</small>
            </article>

            <article className='experience__details'>
            <IoLogoJavascript size="1.5em" color="#FFEF06"/>
            <h4>Javascript </h4>
            <small className='text-light'>Intermediate</small>
            </article>

            <article className='experience__details'>
            <FaJava size="1.5em" color="#FFEF06"/>
            <h4>Java</h4>
            <small className='text-light'>Intermediate</small>
            </article>

            <article className='experience__details'>
            <IoLogoNodejs size="2em" color='#0EEA11'/>
            <h4>Node.js</h4>
            <small className='text-light'>Basic</small>
            </article>

            <article className='experience__details'>
            <FaAndroid size="2em" color='#109C12'/>
            <h4>Android</h4>
            <small className='text-light'>Intermediate</small>
            </article>

            <article className='experience__details'>
            <IoLogoPython size="2.2em" color='#FFC107'/>
            <h4>Python</h4>
            <small className='text-light'>Basic</small>
            </article>

            <article className='experience__details'>
            <SiMicrosoftazure size="1.5em" color="#03a9f4"/>
            <h4>Azure</h4>
            <small className='text-light'>Intermediate</small>
            </article>

            <article className='experience__details'>
            <BsGithub size="1.9em" color='#000000'/>
            <h4>Git</h4>
            <small className='text-light'>Experienced</small>
            </article>

            <article className='experience__details'>
            <SiGooglecloud size="1.5em"color='#cdb908'/>
            <h4>Google Cloud Platform</h4>
            <small className='text-light'>Advanced</small>
            </article>

            <article className='experience__details'>
            <SiAndroidstudio size="1.9em" color='#109C12'/>
            <h4>Android Studio</h4>
            <small className='text-light'>Advanced</small>
            </article>

            <article className='experience__details'>
            <SiJupyter size="1.9em" color='#FCCB00'/>
            <h4>Jupyter Notebook</h4>
            <small className='text-light'>Basic</small>
            </article>

            <article className='experience__details'>
            <SiFlutter size="1.8em" color='#03a9f4'/>
            <h4>Flutter</h4>
            <small className='text-light'>Basic</small>
            </article>

            <article className='experience__details'>
            <SiFirebase size="1.7em" color='#FCCB00'/>
            <h4>Firebase</h4>
            <small className='text-light'>Intermediate</small>
            </article>

            <article className='experience__details'>
            <SiBootstrap size="1.5em" color="##8b23c5"/>
            <h4>Bootstrap</h4>
            <small className='text-light'>Advanced</small>
            </article>

            <article className='experience__details'>
            <SiMacos size="2em" color='#000000'/>
            <h4>MacOS</h4>
            <small className='text-light'>Experienced</small>
            </article>

            <article className='experience__details'>
            <FcLinux size="2em"/>
            <h4>Linux</h4>
            <small className='text-light'>Advanced</small>
            </article>

            <article className='experience__details'>
            <FaGitAlt size="1.9em" color='#F44336'/>
            <h4>Git VCS</h4>
            <small className='text-light'>Advanced</small>
            </article>

            <article className='experience__details'>
            <RiTeamFill size="1.5em" color='#F6E8A6'/>
            <h4>Term Work</h4>
            <small className='text-light'>Experienced</small>
            </article>

          </div>
        </div>
  {/*==============================COPYED============================================= */}
           {/* <div className="experience__content">
            <article className='experience__details'>
            <IoLogoHtml5/>
            <h4>HTML</h4>
            <small className='text-light'>Experienced</small>
            </article>

            <article className='experience__details'>
            <SiCss3/>
            <h4>CSS</h4>
            <small className='text-light'>Experienced</small>
            </article>

            <article className='experience__details'>
            <FaReact/>
            <h4>React</h4>
            <small className='text-light'>Experienced</small>
            </article>

            <article className='experience__details'>
            <IoLogoJavascript/>
            <h4>Javascript</h4>
            <small className='text-light'>Experienced</small>
            </article>

            <article className='experience__details'>
            <FaJava/>
            <h4>Java</h4>
            <small className='text-light'>Experienced</small>
            </article>

            <article className='experience__details'>
            <IoLogoNodejs/>
            <h4>Node.js</h4>
            <small className='text-light'>Experienced</small>
            </article>

            <article className='experience__details'>
            <BsGithub/>
            <h4>Git</h4>
            <small className='text-light'>Experienced</small>
            </article>

            <article className='experience__details'>
            <IoLogoPython/>
            <h4>Python</h4>
            <small className='text-light'>Basic</small>
            </article>
            </div> */}
            
 {/* ============================= Backend Experience ================================         */}
        {/* <div className="Experience_backend">
        <h3>Cloud & Database</h3>
          <div className="experience__content">
            <article className='experience__details'>
            <BsPatchCheckFill/>
            <h4>Azure</h4>
            <small className='text-light'>Experienced</small>
            </article>

            <article className='experience__details'>
            <BsPatchCheckFill/>
            <h4>AWS</h4>
            <small className='text-light'>Experienced</small>
            </article>

            <article className='experience__details'>
            <BsPatchCheckFill/>
            <h4>Google Cloud Platform</h4>
            <small className='text-light'>Experienced</small>
            </article>

            <article className='experience__details'>
            <BsPatchCheckFill/>
            <h4>Firebase</h4>
            <small className='text-light'>Experienced</small>
            </article>

            <article className='experience__details'>
            <BsPatchCheckFill/>
            <h4>Java</h4>
            <small className='text-light'>Experienced</small>
            </article>

            <article className='experience__details'>
            <BsPatchCheckFill/>
            <h4>Node.js</h4>
            <small className='text-light'>Experienced</small>
            </article>
          </div>
        </div> */}
        </div>
     </section>
  )
  }

export default Experience
