import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { SplitText } from "gsap/all";
const Hero = () => {
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
    <div className="w-full h-[500px]  my-20" ref={comp}>
      <div className="w-full h-full flex justify-between">
        <div className="hidden md:flex">
          <img
            src="/right.png"
            alt=""
            className="box w-full h-full object-cover"
          />
        </div>
        <div className="w-full md:w-1/2 place-self-center space-y-10 bg-white text-center">
          <h1
            ref={text}
            className="w-full  text-5xl xl:text-8xl font-light leading-snug"
          >
            We Take Care Your Beautiful Garden
          </h1>
          <p className="md:w-2/3 m-auto   text-gray-500 ">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro,
            reiciendis iste consectetur possimus sunt atque officia velit
            placeat voluptas odio voluptates tempora optio. Neque modi ratione
            libero est voluptatibus vitae harum quas?{" "}
          </p>
          <button className="px-8 py-2 bg-[#15803D] text-white rounded">
            <a href="/">Explore Our Services</a>
          </button>
        </div>
        <div className="hidden md:flex">
          <img
            src="/left.png"
            alt=""
            className="box w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
