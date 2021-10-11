import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

function Home() {
  return (
    <div>  
      
                        <div className='container-fluid' >  
                         <Carousel interval={3000} keyboard={false} pauseOnHover={true}>  
                            <Carousel.Item style={{'height':"500px"}}  >  
                              <img style={{'height':"500px", 'width':"80vw"}}  
                              className="d-block"  
                              src={'images/2.jpg'}  />  
                              <Carousel.Caption>  
                                <h3>First Image Caption </h3>  
                              </Carousel.Caption>  
                            </Carousel.Item  >  
                                 
                            <Carousel.Item style={{'height':"500px"}}>  
                              <img style={{'height':"500px", 'width':"80vw"}}  
                                   className="d-block"  
                                    src={'images/hrd.jpg'}    />  
                                       <Carousel.Caption>  
                                   <h3>Second Image Caption</h3>  
                                      </Carousel.Caption>  
                            </Carousel.Item>  
                            
                            <Carousel.Item style={{'height':"500px"}}>  
                                       <img style={{'height':"500px" , 'width':"80vw"}}  
                                        className="d-block"  
                                         src={'images/3.jpg'}   />  
                                        <Carousel.Caption>  
                                          <h3>Third Image Caption</h3>  
                                          </Carousel.Caption>  
                            </Carousel.Item>  
                          </Carousel>  
                        </div>  
                         
      <div className="container">
             <marquee className="pt-5"><h1>WELCOME TO CRTS, powered by CDAC NITS</h1></marquee>    
      </div>   
    </div>  

  );
}
 
export default Home;