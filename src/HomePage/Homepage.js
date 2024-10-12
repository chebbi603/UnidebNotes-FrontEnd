import React from "react";
import Navbar from "../components/Navbar";
import { ReactLenis, useLenis } from 'lenis/react'
import "./homepage.css"
import unideblogo from "../assets/notes-logo-nav.svg"
import img2 from "../assets/image-1.png"
import img1 from "../assets/image.png"
import gsap from "gsap";
import { useLayoutEffect } from "react";
import { useRef } from "react";
import {ScrollTrigger} from "gsap/ScrollTrigger";

function HomePage() {
  const lenis = useLenis(({ scroll }) => {
    // called every scroll
  })

  const el = useRef();
  const q = gsap.utils.selector(el);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to('.landing-page__img1', {
      scrollTrigger: {
        trigger: '.landing-page',
        start: 'top 10%',
        end:'bottom' ,
        scrub: true,
      },
      y:80
    })
    gsap.to('.landing-page__img2', {
      scrollTrigger: {
        trigger: '.landing-page',
        start: 'top 10%',
        end:'bottom' ,
        scrub: true,
      },
      y:120
    })
  })
  
  return () => ctx.revert();
}, []);

  return(
    <ReactLenis root ref={el} >
    <div >
        <Navbar navCount = {1}/>
        <div className="landing-page">
        <img className="landing-page__img1 "src={img1}/>
        <div className="landing-page__content">
        {/* Logo */}
        <img src={unideblogo} className="landing-page__logo"/>

        {/* Heading */}
        <h1 className="landing-page__headline h2-bold">
          Your <span className="highlight-green">UD Notes</span> are more <span className="highlight-purple">valuable</span> than ever
        </h1>

        {/* Subheading */}
        <p className="landing-page__subheading h6-reg">
          Find top-rated study notes from students taking the same courses as you
        </p>

        {/* Call to Action Button */}
        <button className="landing-page__cta h6-bold">
          Sign up for Unideb Notes
        </button>

        {/* Learn More Link */}
        <a href="#" className="landing-page__learn-more b1-reg">
          Learn more
        </a>

      </div>

          <img className="landing-page__img2 "src={img2}/>
    </div>
        <div className="test"></div>
    </div>
    </ReactLenis>
  )
}

export default HomePage;

