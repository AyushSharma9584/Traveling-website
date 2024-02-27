import React from 'react'
import backgroundImage from '../assets/backgroundimg.png';
import bookimg from '../assets/book-img.png';
import ukimg from '../assets/uk.png';
import franceimg from '../assets/france.png';
import pakistanimg from '../assets/pakistan.png';
import italyimg from '../assets/italy.png';
import indiaimg from '../assets/india.png';
import usimg from '../assets/us.png';
import g1img from '../assets/g1.png';
import g2img from '../assets/g2.png';  
import g3img from '../assets/g3.png';
import g4img from '../assets/g4.png';
import g5img from '../assets/g5.png';
import g6img from '../assets/g6.png';
import aboutimg from '../assets/about-img.png';
const Home = () => {
  return (
    <>
      <div className='home' style={{ 
  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)), url(${backgroundImage})`
}}> 
        <div className='content'>
          <h5>Welcome to World</h5>
          <h1>Visit <span className='changecontent'></span></h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab, fugiat.</p>
          <a href='#book'>Book Place</a>
        </div>
      </div>

      {/* Section 1 */}

      <section className='book' id='book'>
        <div className='container'>
          <div className='main-text'>
            <h1><span>B</span>ook</h1>
          </div>

          <div className="row">
            <div className="col-md-6 py-6 py-md-0 ">
              <div className="card">
                <img src={bookimg} />
              </div>
            </div>

            <div className="col-md-6 py-md-0">
              <form action='#'>
                <input type="text" className='form-control' placeholder='Where To' /><br />
                <input type="text" className='form-control' placeholder='How Many' /><br />
                <input type="date" className='form-control' placeholder='Arrivals' /><br />
                <input type="date" className='form-control' placeholder='Leaving' /><br />
                <textarea class="form-control" rows="5" name="text" placeholder="Enter Your Name & Details"></textarea>
                <input type="submit" value="Book Now" class="submit" required />


              </form>
            </div>

          </div>
        </div>
      </section>

      {/* Section 2 */}


      <section class="packages" id="packages">
        <div class="container">

          <div class="main-txt">
            <h1><span>P</span>ackages</h1>
          </div>

          <div class="row" style={{ marginTop: "30px" }}>

            <div class="col-md-4 py-3 py-md-0">

              <div class="card">
                <img src={ukimg} alt="" />
                <div class="card-body">
                  <h3>United Kingdom</h3>
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut, doloribus!</p>
                  <div class="star">
                    <i class="fa-solid fa-star checked"></i>
                    <i class="fa-solid fa-star checked"></i>
                    <i class="fa-solid fa-star checked"></i>
                    <i class="fa-solid fa-star "></i>
                    <i class="fa-solid fa-star "></i>
                  </div>
                  <h6>Price: <strong>$500</strong></h6>
                  <a href="#book">Book Now</a>
                </div>
              </div>

            </div>
            <div class="col-md-4 py-3 py-md-0">

              <div class="card">
                <img src={franceimg} alt="" />
                <div class="card-body">
                  <h3>France</h3>
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut, doloribus!</p>
                  <div class="star">
                    <i class="fa-solid fa-star checked"></i>
                    <i class="fa-solid fa-star checked"></i>
                    <i class="fa-solid fa-star checked"></i>
                    <i class="fa-solid fa-star checked "></i>
                    <i class="fa-solid fa-star "></i>
                  </div>
                  <h6>Price: <strong>$500</strong></h6>
                  <a href="#book">Book Now</a>
                </div>
              </div>

            </div>
            <div class="col-md-4 py-3 py-md-0">

              <div class="card">
                <img src={pakistanimg} alt="" />
                <div class="card-body">
                  <h3>Pakistan</h3>
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut, doloribus!</p>
                  <div class="star">
                    <i class="fa-solid fa-star checked"></i>
                    <i class="fa-solid fa-star checked"></i>
                    <i class="fa-solid fa-star "></i>
                    <i class="fa-solid fa-star "></i>
                    <i class="fa-solid fa-star "></i>
                  </div>
                  <h6>Price: <strong>$500</strong></h6>
                  <a href="#book">Book Now</a>
                </div>
              </div>

            </div>



          </div>



          <div class="row" style={{ marginTop: "30px" }}>

            <div class="col-md-4 py-3 py-md-0">

              <div class="card">
                <img src={italyimg} alt="" />
                <div class="card-body">
                  <h3>Italy</h3>
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut, doloribus!</p>
                  <div class="star">
                    <i class="fa-solid fa-star checked"></i>
                    <i class="fa-solid fa-star checked"></i>
                    <i class="fa-solid fa-star checked"></i>
                    <i class="fa-solid fa-star "></i>
                    <i class="fa-solid fa-star "></i>
                  </div>
                  <h6>Price: <strong>$500</strong></h6>
                  <a href="#book">Book Now</a>
                </div>
              </div>

            </div>
            <div class="col-md-4 py-3 py-md-0">

              <div class="card">
                <img src={indiaimg} alt="" />
                <div class="card-body">
                  <h3>India</h3>
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut, doloribus!</p>
                  <div class="star">
                    <i class="fa-solid fa-star checked"></i>
                    <i class="fa-solid fa-star checked"></i>
                    <i class="fa-solid fa-star checked"></i>
                    <i class="fa-solid fa-star checked "></i>
                    <i class="fa-solid fa-star checked"></i>
                  </div>
                  <h6>Price: <strong>$500</strong></h6>
                  <a href="#book">Book Now</a>
                </div>
              </div>

            </div>
            <div class="col-md-4 py-3 py-md-0">

              <div class="card">
                <img src={usimg} alt="" />
                <div class="card-body">
                  <h3>United States</h3>
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut, doloribus!</p>
                  <div class="star">
                    <i class="fa-solid fa-star checked"></i>
                    <i class="fa-solid fa-star checked"></i>
                    <i class="fa-solid fa-star checked"></i>
                    <i class="fa-solid fa-star checked"></i>
                    <i class="fa-solid fa-star "></i>
                  </div>
                  <h6>Price: <strong>$500</strong></h6>
                  <a href="#book">Book Now</a>
                </div>
              </div>

            </div>



          </div>


        </div>
      </section>


      {/* Section 3 */}

      <section className='services' id='services'>
        <div className="container">
          <div className="main-txt">
            <h1><span>S</span>ervices</h1>
          </div>
          <div className="row" style={{ marginTop: "30px" }}>
            <div className="col-md-6 col-lg-4 mb-md-4  py-md-0 ">
              <div className='card'>
                <i className='fas fa-hotel'></i>
                <div className="card-body">
                  <h3>Affordable Hotel</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, exercitationem?</p>
                </div>
              </div>

            </div>

            <div className="col-md-6 col-lg-4  mb-md-4 py-md-0 ">
              <div className='card'>
                <i className='fas fa-utensils'></i>
                <div className="card-body">
                  <h3>Food & Drinks</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, exercitationem?</p>
                </div>
              </div>

            </div>

            <div className="col-md-6 col-lg-4  mb-md-4  py-md-0 ">
              <div className='card'>
                <i className='fas fa-bullhorn'></i>
                <div className="card-body">
                  <h3>Safty Guid</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, exercitationem?</p>
                </div>
              </div>

            </div>



            <div className="col-md-6 col-lg-4  mb-md-4 py-md-0 ">
              <div className='card'>
                <i className='fas fa-globe-asia'></i>
                <div className="card-body">
                  <h3>Around the World</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, exercitationem?</p>
                </div>
              </div>

            </div>

            <div className="col-md-6 col-lg-4  py-md-0 ">
              <div className='card'>
                <i className='fas fa-plane'></i>
                <div className="card-body">
                  <h3>Fastest Travel</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, exercitationem?</p>
                </div>
              </div>

            </div>

            <div className="col-md-6 col-lg-4  py-md-0 ">
              <div className='card'>
                <i className='fas fa-hiking'></i>
                <div className="card-body">
                  <h3>Adventures</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, exercitationem?</p>
                </div>
              </div>

            </div>
          </div>
        </div>


      </section>

      {/* 4th Section */}

      <section className="gallary" id='gallary'>
        <div className="container">
          <div className="main-txt">
            <h1><span>G</span>allary</h1>
          </div>
          <div className="row" style={{ marginTop: "30px" }}>
            <div className="col-md-4 py-3 py-md-0">
              <div className="card">
                <img src={g1img} style={{ height: "230px" }} />
              </div>
            </div>

            <div className="col-md-4 py-3 py-md-0">
              <div className="card">
                <img src={g2img} style={{ height: "230px" }} />
              </div>
            </div>

            <div className="col-md-4 py-3 py-md-0">
              <div className="card">
                <img src={g3img} style={{ height: "230px" }} />
              </div>
            </div>
          </div>

          <div className="row" style={{ marginTop: "30px" }}>
            <div className="col-md-4 py-3 py-md-0">
              <div className="card">
                <img src={g4img} style={{ height: "230px" }} />
              </div>
            </div>

            <div className="col-md-4 py-3 py-md-0">
              <div className="card">
                <img src={g5img} style={{ height: "230px" }} />
              </div>
            </div>

            <div className="col-md-4 py-3 py-md-0">
              <div className="card">
                <img src={g6img} style={{ height: "230px" }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5th section */}

      <section className='about' id='about'>
        <div className="container">
          <div className="main-txt">
            <h1>About<span>Us</span></h1>
          </div>
          <div className="row">
            <div className="col-md-6 py-3 py-md-0">
              <div className="card">
                <img src={aboutimg} />
              </div>
            </div>
            <div className="col-md-6 py-3 py-md-0">
              <h2>How Travel agency Works</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore odio, fugiat obcaecati neque recusandae porro illum accusamus aliquam consectetur expedita lor sit amet consectetur adipisicing elit. Labore odio, fugiat obcaecati neque recusandae porro illum accusamus aliquam consectetur expedita.</p>
              <button id='about-btn' >Read More...</button>
            </div>

          </div>
        </div>

      </section>

      {/* 6th section */}
      <footer className='footer' id='footer'>
        <h1><span>T</span>ravel</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae, obcaecati?</p>
        <div className="social-links">
          <i className='fa-brands fa-twitter'></i>
          <i className='fa-brands fa-facebook'></i>
          <i className='fa-brands fa-instagram'></i>
          <i className='fa-brands fa-youtube'></i>
          <i className='fa-brands fa-pinterest'></i>
        </div>
        <div className="credit">
          <p>Designed By<a href='#'>Ayush Sharma</a></p>

        </div>
        <div className="copyright">
          <p>&copy;Copyright Ayush Sharma.All Rights Reserved</p>
        </div>
      </footer>
    </>
  )
}

export default Home
