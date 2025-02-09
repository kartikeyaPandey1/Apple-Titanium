import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { rightImg, watchImg } from "../utils"
import VideoCarousel from "./VideoCarousel"


const Highlights = () => {

  useGSAP(()=>{

    gsap.to('#title',{  opacity:1,y:0})
    gsap.to('.link',{ opacity:1,y:0})
  })
  return (
    <section  id="highlights"  className="w-screen overflow-hidden h-full bg-zinc common-padding">

      <div  className="screen-max-width"> 

        <div className="w-full flex items-end justify-between ">
          <h1 id="title"  className="section-heading">Get the Highlights.</h1>
          <div className="flex flex-wrap items-end gap-4" >
            <p className="link">
              Watch the film
              <img src={watchImg} alt="watch"  className="ml-2"/>
            </p>
            <p className="link">
              Watch the event
              <img src={rightImg} alt="right" />
            </p>
          </div>

        </div>

        <VideoCarousel/>


      </div>


    </section>
  )
}

export default Highlights