
import React, { useState, useEffect } from 'react';
// import './HomePage.css'



// const Slideshow = ({ slides }) => {
//     const [currentSlide, setCurrentSlide] = useState(0);
//     console.log(slides[currentSlide])
//     useEffect(() => {
//       const interval = setInterval(() => {
//         setCurrentSlide((currentSlide + 1) % slides.length);
//       }, 1000);
  
//       return () => clearInterval(interval);
//     }, [currentSlide, slides]);
  
//     return (
//       <div className="slideshow">
//         <div className="slides-container" style={{ left: `-${currentSlide * 100}%` }}>
//           {slides.map((slide, index) => (
//             <Slide key={index} slide={slide} />
//           ))}
//         </div>
//       </div>
//     );
//   };
  
// const Slide = ({slide})=>{
//     // console.log(slide)
//     return (
//         <div class = 'slide'>
//             <p>{slide}</p>
//         </div>
//     )

// }
// const SlideshowSlider = ()=>{

// }



const  HomePage = () => {
    const pageContent = require("../static/homePageContent.json")
    // console.log(pageContent.CurrentlyPlaying)    
    return <div >
            <h1 class='h1-title'>Brad Kaiser</h1>
            <div class='div-container'>
            <p>{pageContent.Para1}</p>
            <p>{pageContent.Para2}</p>
            <ul class="div-container-2">
            {pageContent.jobCriteria.map((item,index)=>(
                <li key={index}>{item}</li>
            ))}
            </ul>
            <p>{pageContent.Para3}</p>
            </div>

            <div class='column-container'>

                <div class='div-container'>
                        <p>Heres what I've been playing recently:</p>
                        <ul class="div-container-2">
                        {pageContent.CurrentlyPlaying.map((item,index)=>(
                            <li key={index}>{item}</li>
                        ))}
                        </ul>
                </div>

                <div class='div-container'>
                        <p>Here's what i've been learning recently:</p>
                        <ul class='div-container-2'>
                        {pageContent.CurrentlyLearning.map((item,index)=>(
                            <li key={index}>{item}</li>
                        ))}
                        </ul>
                </div>

                <div class='div-container'>
                        <p>Here's what i've been reading recently:</p>
                        <ul class='div-container-2'>
                        {pageContent.CurrentlyReading.map((item,index)=>(
                            <li key={index}>{item}</li>
                        ))}
                        </ul>
                </div>

                <div class='div-container'>
                        <p>Here's what i've been watching recently:</p>
                        <ul class='div-container-2'>
                        {pageContent.CurrentlyWatching.map((item,index)=>(
                            <li key={index}>{item}</li>
                        ))}
                        </ul>
                </div>
            </div>
            <div class='div-container'><p>{pageContent.sitenotes}</p></div>
            
        </div>;
  }
  export default HomePage;
  