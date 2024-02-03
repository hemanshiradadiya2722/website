import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Container,Row,Col } from 'react-bootstrap';
import { FaTwitter,FaFacebookSquare,FaInstagram,FaPinterest,FaYoutube,FaPaperPlane,FaPlay } from "react-icons/fa";
import { PiShoppingCartSimpleBold,PiArrowFatRightFill } from "react-icons/pi";
import { responsivePropType } from 'react-bootstrap/esm/createUtilityClasses';


function App() {
  return (
    <>
    {/* Header */}
      <div class='bg_back'>
            <Container>
              <Row className='py-2 d-flex top-header ' >
                <Col xs={7} className='d-xs-flex d-flex call-menu '>
                  <a href='tel:33305239876' className='me-sm-4 me-xs-2 call'>Call Us: +1 213 974-5898</a>
                  <a href='#' className='email_item d-sm-none d-md-block d-none'>Email: toystore@template.com</a>
                </Col>
                <Col className='text-end fs-6 menu-icon p-0'>
                    <FaTwitter className='me-sm-3 me-2'></FaTwitter>
                    <FaFacebookSquare className='me-sm-3 me-2'></FaFacebookSquare>
                    <FaInstagram className='me-sm-3 me-2'></FaInstagram>
                    <FaPinterest className='me-sm-3 me-2'></FaPinterest>
                    <FaYoutube className='me-2' ></FaYoutube>
                </Col>
              </Row>
          </Container>
      </div>

      {/* Logo Menu Header   */}
      <Container className='menu-header d-flex justify-content-between'>
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary py-3">
      
          <Navbar.Brand href="#home" className='logo fw-250 fs-3'>ToyStore</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav "/>
          <Navbar.Collapse id="responsive-navbar-nav" className='nav_bar'>
            <Nav className="me-auto ms-5 menu_list fs-6 fw-200">
              <a href="#features" className='me-3'>Catalog</a>
              <a href="#pricing" className='me-3'>Delivery</a>
              <a href="#about" className='me-3'>About</a>
              <a href="#contacts" className='me-3'>Contacts</a>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Nav className='d-flex  shop-detail'>
            <a href="#cart" className='me-3 cart fs-6'>Cart</a>
            <a className='shop me-2 fs-3 fw-200'><PiShoppingCartSimpleBold></PiShoppingCartSimpleBold></a>
            <a className='zero mt-1 px-2 py-0 lh-lg'>0</a>
        </Nav>
      </Container>
    {/* Slider */}
      <div class='slider'>
        <div class='slider-img'>
           <img src={require(`./image/asset 26.jpeg`)}></img>
        </div>
      </div>
    {/* Shop Now */}
    <Container>
      <Row className='mb-5 mt-5 '>
        <Col className='d-flex img-shop align-items-center rounded-5 mt-5 me-4'>
          <div><img src={require(`./image/asset 7.png`)}></img></div>
          <div>
            <h2 className='varela'>Stuffed Animals</h2>
            <button>Shop Now</button>
          </div>
        </Col>
        <Col className='d-flex img-shop align-items-center rounded-5 mt-5 ps-5  text-end ' style={{backgroundColor:"#FB416B"}}>
          <div>
            <h2 className='varela'>Stuffed Animals</h2>
            <button>Shop Now</button>
          </div>
          <div><img src={require(`./image/asset 8.png`)} className='ms-5'></img></div>
        </Col>
      </Row>
    </Container>

    {/* Stuffed animals toy */}
     <div className='img-slider-back pt-5'>
        <Container>
            <Row className='mb-5'>
              <div className='d-flex justify-content-between'>
                <p className='fs-3 opensans'>Stuffed Animals</p>
                <a className='header-see'>See All Toys<PiArrowFatRightFill className='ms-1'></PiArrowFatRightFill></a>
              </div>
              <div className='shop-color'>
                  <div className='shop-header-color'></div>
              </div>
            </Row>
            <Row className='img-slider'>
              <Col md={6} lg={3} className='text-center img-back py-5'>
                <img src={require(`./image/asset 9.png`)}></img>
                <p className='mt-4'>Teddy Bear</p>
                <p className='price-tag m-auto '>$30.00 USD</p>
              </Col>
              <Col md={6} lg={3} className='text-center img-back py-5'>
                <img src={require(`./image/asset 10.png`)}></img>
                <p className='mt-4'>Mega Plus Toy</p>
                <p className='price-tag m-auto'>$38.00 USD</p>
              </Col>
              <Col md={6} lg={3} className='text-center img-back py-5'>
                <img src={require(`./image/asset 11.png`)}></img>
                <p className='mt-4'>Cute Dog</p>
                <p className='price-tag m-auto'>$24.00 USD</p>
              </Col>
              <Col md={6} lg={3} className='text-center img-back py-5'>
                <img src={require(`./image/asset 12.png`)}></img>
                <p className='mt-4'>Little Friend</p>
                <p className='price-tag m-auto'>$27.00 USD</p>
              </Col>
            </Row>
          </Container>
     </div>
     {/* Wooden Toys */}
     <div className='img-slider-back pt-5'>
        <Container>
            <Row className='mb-5'>
              <div className='d-flex justify-content-between'>
                <p className='fs-3 opensans'>Wooden Toys</p>
                <a className='header-see'>See All Toys<PiArrowFatRightFill className='ms-1'></PiArrowFatRightFill></a>
              </div>
              <div className='shop-color'>
                  <div className='shop-header-color'></div>
              </div>
            </Row>
            <Row className='img-slider'>
              <Col md={6} lg={3} className='text-center img-back py-5'>
                <img src={require(`./image/asset 13.png`)}></img>
                <p className='mt-4'>Happy Flower </p>
                <p className='price-tag m-auto '>$30.00 USD</p>
              </Col>
              <Col md={6} lg={3} className='text-center img-back py-5'>
                <img src={require(`./image/asset 14.png`)}></img>
                <p className='mt-4'>Lift Machine</p>
                <p className='price-tag m-auto'>$24.00 USD</p>
              </Col>
              <Col md={6} lg={3} className='text-center img-back py-5'>
                <img src={require(`./image/asset 15.png`)}></img>
                <p className='mt-4'>Wooden Camera</p>
                <p className='price-tag m-auto'>$32.00 USD</p>
              </Col>
              <Col md={6} lg={3} className='text-center img-back py-5'>
                <img src={require(`./image/asset 16.png`)}></img>
                <p className='mt-4'>Little Rabbit</p>
                <p className='price-tag m-auto'>$16.00 USD</p>
              </Col>
            </Row>
          </Container>
     </div>

     {/* sticky */}

      <div className='section-video-section'>
        <div className='wrapper text-center '>
            <p>About The Shop</p>
           <h1 className='varela'>Watch Our Story</h1>
           <p className='w-50'>There is no magic formula to write perfect ad copy. It is based on a number of factors, including ad placement, demographic, even the consumer’s mood.</p>
           <a className='play-icon'><FaPlay></FaPlay></a>
        </div>
      </div>
        
      {/* Made For Webflow */}

      <div className='.img-slider-back'>
        <Container>
          <div className='text-center varela made-web-contant'>
            <p className='made-web'>Made for Webflow</p>
            <h2 className='simple-business w-50'>
              Simple & Colorful Ecommerce Template for Your Business
            </h2>
          </div>
          <Row className='colorful '>
              <Col md={12} lg={6}>
                <h2 className='varela available-free mb-4 ps-2'>Available for FREE!</h2>
                <p className='success mb-5'>A successful marketing plan relies heavily on the pulling-power of advertising copy. Writing result-oriented ad copy is difficult, as it must appeal to, entice, and convince consumers to take action. There is no magic formula to write perfect ad copy</p>
                <button className='varela'>GET IT NOW!</button>

              </Col>
              <Col md={12} lg={6}>
                <img src={require(`./image/asset 18.jpeg`)} className='w-100 h-100 rounded-4'></img>
              </Col>
          </Row>
        </Container>
        <Container className='submit mt-5 pt-5'>
          <Row className='align-items-center'>
            <Col className='col-6 d-flex'>
                 <a className='paln-icon me-3'><FaPaperPlane></FaPaperPlane></a>
                 <span className='fs-4 newsletter varela '>Subscribe to our newsletter
                    & get <p>10% discount!</p></span>
            </Col>
            <Col className='text-end subscribe'>
                 <input type='text' placeholder='Enter your email address ' className='me-3 rounded-5 py-2 px-5 border-light'></input>
                 <a>
                  <button>Subscribe</button>
                 </a>
            </Col>
          </Row>
        </Container>
      </div>

        {/*Were on instagram  */}
      <div className='.img-slider-back'>
        <Container>
          <div className='text-center varela made-web-contant'>
            <p className='made-web'>@ElasticThemes</p>
            <h2 className='simple-business w-50'>We're on Instagram! </h2>
          </div>
          <Row className='gallery-img text-center pt-5 mt-5'>
            <Col xs={4}   lg={2} className='instagram'>
                 <img src={require(`./image/asset 20.jpeg`)} className='rounded-4'></img>
            </Col>
            <Col xs={4}   lg={2} className='instagram'>
                 <img src={require(`./image/asset 21.jpeg`)} className='rounded-4'></img>
            </Col>
            <Col xs={4}   lg={2} className='instagram'>
                 <img src={require(`./image/asset 22.jpeg`)} className='rounded-4'></img>
            </Col>
            <Col xs={4}   lg={2} className='instagram'>
                 <img src={require(`./image/asset 23.jpeg`)} className='rounded-4'></img>
            </Col>
            <Col xs={4}   lg={2} className='instagram'>
                 <img src={require(`./image/asset 24.jpeg`)} className='rounded-4'></img>
            </Col>
            <Col xs={4}   lg={2} className='instagram'>
                 <img src={require(`./image/asset 25.jpeg`)} className='rounded-4'></img>
            </Col>
          </Row>
          <Row className='pt-5 mt-4'>
              <Col className='text-center'>
                  <button className='rounded-5 button-see-more varela'>See More Photos</button>
              </Col>
          </Row>
        </Container>
      </div>
      {/* Footer */}
      <footer className='footer'>
        <Container>
           <Row className='pt-5 mt-5 border-bottom'>
             <Col className='mb-4'>
              <Navbar.Brand href="#home" className='logo fw-250 fs-3'>ToyStore</Navbar.Brand>
             </Col>
             <Col>
                <ul className='d-flex menu-footer'>
                  <li className='me-3'><a>Home</a></li>
                  <li className='me-3'><a>Catalog</a></li>
                  <li className='me-3'><a>Delivery</a></li>
                  <li className='me-3'><a>About</a></li>
                  <li className='me-3'><a>Contacts</a></li>
                </ul>
             </Col>
             <Col className='text-end fs-6 menu-icon p-0'>
                    <FaTwitter className='me-sm-3 me-2'></FaTwitter>
                    <FaFacebookSquare className='me-sm-3 me-2'></FaFacebookSquare>
                    <FaInstagram className='me-sm-3 me-2'></FaInstagram>
                    <FaPinterest className='me-sm-3 me-2'></FaPinterest>
                    <FaYoutube className='me-2' ></FaYoutube>
              </Col>
           </Row>
           <Row  className='pt-5'>
            <Col>
                <p>Created with love by Elastic Themes</p>
            </Col>
            <Col>
                <ul className='d-flex text-end ms-5 ps-5'>  
                  <p className='me-4'>Powered by Webflow</p>
                  <li className='me-4'>Style Guide</li>
                  <li className='me-4'>Licensing</li>
                </ul>
            </Col>
           </Row>
        </Container>
      </footer>

      
    </>

  );
}

export default App;
