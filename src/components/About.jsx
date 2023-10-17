import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
const About = () => {
  const comp = useRef(); // create a ref for the root level element (for scoping)
  const text = useRef(); // create a ref for the box element

  useLayoutEffect(() => {
    // register ScrollTrigger as a plugin
    gsap.registerPlugin(ScrollTrigger);

    // create our context
    let ctx = gsap.context(() => {
      // split the text into words using regular expression
      let words = text.current.textContent.split(/\s+/);
      // wrap each word with a span element
      text.current.innerHTML = words
        .map((word) => `<span>${word}</span>`)
        .join(" ");
      // select all the span elements
      let spans = text.current.querySelectorAll("span");
      // hide the spans initially
      gsap.set(spans, { autoAlpha: 0 });
      // create a timeline for the animation
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: text.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
      // reveal each span with a stagger effect
      tl.to(spans, { autoAlpha: 1, stagger: 0.2 });
    }, comp); // scope the selector text to the component

    return () => ctx.revert(); // clean up the animations
  }, []); // run only once
  return (
    <div className="w-11/12 md:w-4/5 m-auto py-20 flex flex-col md:flex-row justify-between items-center space-y-10 md:space-y-0">
      <div className="md:w-1/3 p-4 border-t-8 border-l-8 border-[#397301]">
        <img src="/about.jpg" alt="" className="w-full h-full object-cover" />
      </div>
      <div className="md:w-1/2 space-y-8">
        <h1
          ref={text}
          className="text-4xl md:text-6xl leading-tight font-semibold"
        >
          About FosterCare Property Service
        </h1>
        <p ref={text} className="text-sm md:text-base text-gray-500">
          I am Max Foster, the owner of FosterCare Property Service. I invite
          you to contact me personally to learn more and to request a free
          quote. We currently serve Southwest, West, Northwest Edmonton, and St.
          Albert.
        </p>
        <div className="flex space-x-10">
          <a
            href="/"
            className="px-5 py-2 rounded flex items-center space-x-2 bg-[#3DBE00] text-white"
          >
            <img src="/icons/email.png" alt="" className="w-[24px] h-[24px]" />
            <span>email us here</span>
          </a>
          <a
            href="/"
            className="px-5 py-2 rounded flex items-center space-x-2 bg-white drop-shadow-2xl "
          >
            <img
              src="/icons/whatsapp.png"
              alt=""
              className="w-[24px] h-[24px]"
            />
            <span>555-222- 9999</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
