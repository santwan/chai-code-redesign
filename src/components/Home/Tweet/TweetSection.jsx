import React, { useState, useRef, useEffect } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import AnimatedOnScroll from "../../AnimatedOnScroll.jsx";
import TweetEmbed from "./TweetEmbed.jsx";

const tweets = [
  "1907673685479018737",
  "1910196260746723481",
  "1909186665014341701",
];

const TweetSection = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null);
  const tweetContainerRef = useRef(null);
  const x = useMotionValue(0);
  const [containerWidth, setContainerWidth] = useState(0);

  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
        animate(x, -currentIndex * containerRef.current.offsetWidth, {
          type: "spring",
          stiffness: 300,
          damping: 20,
        });
      }
    };
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, [currentIndex]);

  const setIframePointerEvents = (enabled) => {
    if (tweetContainerRef.current) {
      const iframes = tweetContainerRef.current.querySelectorAll("iframe");
      iframes.forEach((iframe) => {
        iframe.style.pointerEvents = enabled ? "auto" : "none";
      });
    }
  };

  const handleDragEnd = (event, info) => {
    const threshold = containerWidth / 4;
    let newIndex = currentIndex;

    if (info.offset.x < -threshold) {
      newIndex = (currentIndex + 1) % tweets.length; // Loop to the first tweet if we are at the last one
    } else if (info.offset.x > threshold) {
      newIndex = (currentIndex - 1 + tweets.length) % tweets.length; // Loop to the last tweet if we are at the first one
    }

    setCurrentIndex(newIndex);
  };

  return (
    <AnimatedOnScroll
      animation="zoomIn"
      className="w-full pb-4 md:pt-16 flex flex-col items-center"
    >
      <p className="mb-2 text-[14px] tracking-wide md:text-base md:tracking-wide md:text-gray-400">
        Love that we get from our Community
      </p>
      <h2 
        className="text-[28px] text-center font-bold mb-5 
        md:pb-2 md:mb-10 md:text-3xl md:tracking-wider"
      >
        ❤️ What People Are Saying
      </h2>

      {isMobile ? (
        <div ref={containerRef} className="w-full overflow-hidden relative pt-4">
          <motion.div
            ref={tweetContainerRef}
            style={{
              display: "flex",
              x,
              width: `${tweets.length * 100}%`,
            }}
            drag="x"
            dragConstraints={{
              left: -containerWidth * (tweets.length - 1), // Ensure drag is constrained to the number of tweets
              right: 0,
            }}
            dragElastic={0.2}
            onDragStart={() => setIframePointerEvents(false)}
            onDragEnd={(e, info) => {
              handleDragEnd(e, info);
              setIframePointerEvents(true);
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            {tweets.map((id) => (
              <div
                key={id}
                className="w-full flex-shrink-0 flex justify-center items-center px-2"
                style={{ width: `${100 / tweets.length}%` }}
              >
                <TweetEmbed tweetId={id} />
              </div>
            ))}
          </motion.div>
          
          {/* Horizontal navigation DOT */}
          <div className="flex justify-center p-4">
            {tweets.map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full mx-1 cursor-pointer ${index === currentIndex ? "bg-orange-500" : "bg-gray-700"}`}
                onClick={() => {
                  setCurrentIndex(index);
                }}
              />
            ))}
          </div>
        </div>
      ) : (
        <div className="flex w-full justify-center gap-10 flex-wrap">
          {tweets.map((id) => (
            <span
              key={id}
              className="transition-all duration-300 hover:scale-[1.04] hover:shadow-[0_0_50px_rgba(255,150,0,1)]"
            >
              <TweetEmbed tweetId={id} />
            </span>
          ))}
        </div>
      )}
      <div className="m-2 md:m-6 p-4">
        <button className="bg-orange-600 text-white active:bg-orange-700 font-bold md:mt-6 py-3 px-6 md:px-10 md:py-4 rounded-full transition duration-300 ease-in-out transform active:scale-95 hover:scale-105">
          Join Cohorts Live Classes
        </button>
      </div>
    </AnimatedOnScroll>
  );
};

export default TweetSection;



















// import React from "react";
// import AnimatedOnScroll from "../AnimatedOnScroll.jsx";
// import TweetEmbed from "./TweetEmbed"; // Adjust path if needed


// const tweets = [
//   "1907673685479018737",
//   "1907673685479018737",
//   "1910196260746723481",
// ]

// const TweetSection = () => {

//     return (
//     <AnimatedOnScroll
//       animation="zoomIn"
//       className=" w-full py-16 px-4 flex flex-col items-center"
//     >
//       <p className="mb-3 text-xs md:text-base md:tracking-wide">
//         Love that we get from our Community
//       </p>
//       <h2 className="text-2xl md:text-3xl pb-2 font-bold mb-10 md:tracking-wider text-center ">
//         ❤️ What People Are Saying 
//       </h2>

//       <div className="hidden md:flex w-full justify-center gap-10 flex-wrap">
//         {tweets.map((id) => (
//           <span className="transition-all duration-300 hover:scale-[1.04] hover:shadow-[0_0_50px_rgba(255,150,0,1)]">
//             <TweetEmbed  key={id}  tweetId={id}/>
//           </span>
//         ))}
//       </div>
//     </AnimatedOnScroll>
//   );
// };

// export default TweetSection;


// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";



// const mobileSettings = {
//   dots: true, 
//   infinite: true,
//   speed: 500,
//   arrows: false,
//   swipeToSlide: true,
//   slidesToShow: 1,
//   slidesToScroll: 1,
//   autoplay: false,
//   autoplaySpeed: 4000,
//   pauseOnHover: true,
// }

      // {/* ✅ Mobile Carousel */}
      // <div className="w-full max-w-sm mx-auto md:hidden  relative overflow-hidden rounded-xl border border-orange-400/30 shadow-[0_0_50px_rgba(255,150,0,1)]">
      //   <Slider {...mobileSettings} className="">
      //     {tweets.map((id) => (
      //       <div key={id} className=" px-2 py-2">
      //         <TweetEmbed tweetId={id} />
      //       </div>
      //     ))}
      //   </Slider>
      // </div>






          //   {/* Mobile carousel using react-slick */}
          //   <div className="md:hidden h-[475px] w-[320px]">
          //   <Slider dots={true} arrows={false} infinite={true} slidesToShow={1}>
          //     {tweets.map((id) => (
          //       <span  className="transition-all duration-300 hover:scale-[1.04] hover:shadow-[0_0_50px_rgba(255,150,0,1)]">
          //         <TweetEmbed key={id} tweetId={id} />
          //       </span>
          //     ))}
          //   </Slider>
          // </div>


// const TweetSection = () => {

//   const tweetUrls = [
//     "https://x.com/Hiteshdotcom/status/1775581696559132741",
//     "https://x.com/Hiteshdotcom/status/1775581696559132741",
//     "https://x.com/Aasuyadavv/status/1910196260746723481",
//   ];

//   return (
//     <AnimatedOnScroll
//       animation="fadeLeft"
//       className="w-full py-16 px-4 flex flex-col items-center"
//     >
//       <h2 className="text-3xl font-bold p-5 mb-10 text-center">
//         ❤️ What People Are Saying
//       </h2>

//       <div className="hidden md:flex w-full justify-center gap-10 flex-wrap">
//         {tweetUrls.map((url, idx) => (
//           <div
//             key={idx}
//             className="rounded-xl border border-s-amber-500 shadow-2xl transition-all duration-300 hover:scale-[1.08] hover:shadow-[0_0_40px_rgba(0,255,255,0.4)] dark:hover:shadow-[0_0_50px_rgba(255,150,0,1)] dark:hover:border-amber-500"
//           >
//             <XEmbed className="h-[475px]" url={url} />
//           </div>
//         ))}
//       </div>

    //   {/* Mobile carousel using react-slick */}
    //   <div className="md:hidden w-full max-w-md">
    //     <Slider dots={true} arrows={false} infinite={true} slidesToShow={1}>
    //       {tweetUrls.map((url, idx) => (
    //         <div key={idx} className="px-2">
    //           <XEmbed className="h-[475px]" url={url} />
    //         </div>
    //       ))}
    //     </Slider>
    //   </div>
    // </AnimatedOnScroll>
//   );
// };