import React from 'react';

import Layout from '../components/Layout';

import Scroll from '../components/Scroll';

// import pic1 from '../assets/images/pic01.png';
import pic2 from '../assets/images/pic02.jpg';
import pic3 from '../assets/images/pic03.jpg';
import config from '../../config';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCode} from '@fortawesome/free-solid-svg-icons'

const IndexPage = () => (
  <Layout>
    <section id="banner">
      <div className="inner">
        <h2>{config.heading}</h2>
        <p>{config.subHeading}</p>
        <ul className="actions special">
          <li>
            <Scroll type="id" element="one">
              <a href="/#" className="button primary">
                See Projects
              </a>
            </Scroll>
          </li>
        </ul>
      </div>
      <Scroll type="id" element="one">
        <a href="#one" className="more">
          Learn More
        </a>
      </Scroll>
    </section>

    <section id="one" className="wrapper style1 special">
      <div className="inner">
        <FontAwesomeIcon
          icon={faCode}
          color='#fff'
          size='2x'
        />
        <br/>
        <header className="major">
        <br/>
          <h2>
            Knowledge & Skills
          </h2>
          <p>
            HTML ∙ CSS3 ∙ JavaScript ∙ React ∙ Redux ∙ Node.js ∙ PostgreSQL ∙ Express.js ∙ Massive.js
            <br/>
            Nodemailer ∙ SCSS ∙ Socket.io ∙ Chart.js
            
          </p>
        </header>
        {/* <ul className="icons major">
          <li>
            <span className="icon fa-gem major style1">
              <span className="label">Lorem</span>
            </span>
          </li>
          <li>
            <span className="icon fa-heart major style2">
              <span className="label">Ipsum</span>
            </span>
          </li>
          <li>
            <span className="icon solid fa-code major style3">
              <span className="label">Dolor</span>
            </span>
          </li>
        </ul> */}
      </div>
    </section>

    <section>
      <div className='section-divider'></div>
    </section>
    
{/* title for project section */}
    <section id="one" className="special section-custom-header">
      <div className="inner">
        <header className="major">
        <br/>
        <h2>
           Projects
        </h2>
        </header>
      </div>
    </section>

{/* Personal Project section */}
    <section id="two" className="wrapper alt style2">
      <section className="spotlight">
        <div className="image">
          <img src='https://moolapics.s3-us-west-1.amazonaws.com/moola-application-frontview.png' alt="" />
        </div>
        <div className="content">
          <h2>
            Moola
          </h2>
          <p>
          MooLa is a full stack dairy farm data solution. Using it, dairy farmers can understand and improve heard health and dairy production. 
          <br/>
          <br/>
          Moola is a full CRUD application, that is build with React, Javascript, Node, express, Axios, postgreSQL, bcryptJS, react-router, and Redux. Security was custom built with BCrypt. The messaging platform is built with Socket.io. Chart.js is used to chart the business and health data.
          </p>
          <ul className="actions">
              <li><a href="https://github.com/tysonlander/personal-project" className="button primary">GitHub Repo</a></li>
              <li><a href="http://getmoola.us/#/" className="button">Live Site</a></li>
          </ul>
        </div>
      </section>

{/* Group project section  */}
      <section className="spotlight">
        <div className="image">
          <img src='https://moolapics.s3-us-west-1.amazonaws.com/jobber-dashboard-desktopturned.png' alt="" />
        </div>
        <div className="content">
          <h2>
            Jobber
          </h2>
          <p>
            Built with HTML/SCSS, Javascript, react, node, redux, amazon S3, chart.js, and Nodemailer. Jobber is built with a React front end, and uses a Node.js with Express.js backend, as well as a postgreSQL database. 
            <br/>
            <br/>
            Jobber is a full CRUD application, using Axios. Nodemailer was used to allow users to send bids to potential clients. Scheduling was created with syncfusion. Business reports were created with chart.js. 
          </p>
          <ul className="actions">
              <li><a href="https://github.com/bid-wars/bid-wars" className="button primary">GitHub Repo</a></li>
              <li><a href="http://startjobber.us/" className="button">Live Site</a></li>
          </ul>
        </div>
      </section>

      {/* <section className="spotlight">
        <div className="image">
          <img src={pic3} alt="" />
        </div>
        <div className="content">
          <h2>
            Augue eleifend aliquet
            <br />
            sed condimentum
          </h2>
          <p>
            Aliquam ut ex ut augue consectetur interdum. Donec hendrerit
            imperdiet. Mauris eleifend fringilla nullam aenean mi ligula.
          </p>
        </div>
      </section> */}
    </section>

    {/* grid of features */}
    {/* <section id="three" className="wrapper style3 special">
      <div className="inner">
        <header className="major">
          <h2>Accumsan mus tortor nunc aliquet</h2>
          <p>
            Aliquam ut ex ut augue consectetur interdum. Donec amet imperdiet
            eleifend
            <br />
            fringilla tincidunt. Nullam dui leo Aenean mi ligula, rhoncus
            ullamcorper.
          </p>
        </header>
        <ul className="features">
          <li className="icon fa-paper-plane">
            <h3>Arcu accumsan</h3>
            <p>
              Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem
              tincidunt nullam amet leo Aenean ligula consequat consequat.
            </p>
          </li>
          <li className="icon solid fa-laptop">
            <h3>Ac Augue Eget</h3>
            <p>
              Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem
              tincidunt nullam amet leo Aenean ligula consequat consequat.
            </p>
          </li>
          <li className="icon solid fa-code">
            <h3>Mus Scelerisque</h3>
            <p>
              Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem
              tincidunt nullam amet leo Aenean ligula consequat consequat.
            </p>
          </li>
          <li className="icon solid fa-headphones-alt">
            <h3>Mauris Imperdiet</h3>
            <p>
              Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem
              tincidunt nullam amet leo Aenean ligula consequat consequat.
            </p>
          </li>
          <li className="icon fa-heart">
            <h3>Aenean Primis</h3>
            <p>
              Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem
              tincidunt nullam amet leo Aenean ligula consequat consequat.
            </p>
          </li>
          <li className="icon fa-flag">
            <h3>Tortor Ut</h3>
            <p>
              Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem
              tincidunt nullam amet leo Aenean ligula consequat consequat.
            </p>
          </li>
        </ul>
      </div>
    </section> */}

    <section id="cta" className="wrapper style4">
      <div className="inner">
        <header>
          <h2>About Me</h2>
          <p>
          When I'm not slinging some sweet code you can find me playing sports, cooking, or traveling. I’m always down for a good game of just about anything (ping pong, racquetball, lacrosse, badminton … you name it). 
          <br/>
          <br/>
          I love experiencing new places. Some of the places I’ve visited include Nepal, Guatemala, Belize, Mexico, Kenya, Uganda, Israel, Jordan, Fiji, and Samoa.
          </p>
        </header>
          <ul className="actions stacked">
          <li>
            <img src={pic3} alt="" id="personal-image" />
            
          </li>
        </ul>
          {/* <div className="image">
          <img src={pic3} alt="" />
        </div> */}

        {/* <ul className="actions stacked">
          <li>
            <a href="/#" className="button fit">
              Learn More
            </a>
          </li>
        </ul> */}
      </div>
    </section>

    <section>
      <div className='section-divider2'></div>
    </section>
  </Layout>
);

export default IndexPage;
