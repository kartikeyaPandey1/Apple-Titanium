import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import  {heroVideo,smallHeroVideo} from '../utils';
import { useState } from "react";
import { useEffect } from "react";

const Hero = () => {

  const handleVideoSrcSet=()=>{
    if(WebTransportBidirectionalStream.innerWidth<760){
      setVideoSrc(smallHeroVideo)
    }else{
      setVideoSrc(heroVideo)
    }
  }

  useEffect(()=>{
    window.addEventListener('resize',handleVideoSrcSet);

    return()=>{
      window.removeEventListener('resize',handleVideoSrcSet)
    }

  },[]);




  const[videoSrc,setVideoSrc]=useState(window.innerWidth<760 ? smallHeroVideo:heroVideo)

  useGSAP(()=>{

    gsap.to('#hero',{
      opacity:1,
      delay:1,
    })
    gsap.to('#cta',{ opacity:1,delay:1,y:-50})
  },[]);
  return (
    <section className="w-full nav-height bg-black relative ">

        <div  className="w-full flex-center h-5/6 flex-col ">

        <p id="hero" className="hero-title ">iphone-15 pro</p>

        <div className="md:w-10/12  w-9/12">
        <video className="pointer-events-none" autoPlay muted playsInline={true} key={videoSrc} >
          <source src={videoSrc}  type="video/mp4" />
        </video>

        </div>

        </div>

        <div id="cta"  className="flex flex-col items-center  opacity-0 translate-y-20"  >

          <a href="#highlights"  className="btn"> Buy</a>


          <p  className="font-normal text-xl ">from $199/month or $999</p>

          
        </div>


    </section>
  )
}

export default Hero