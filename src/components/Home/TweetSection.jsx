// import React from "react";
// import { XEmbed } from "react-social-media-embed";
// import AnimatedOnScroll from "../AnimatedOnScroll.jsx";
// import Slider from "react-slick";






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

//       {/* Mobile carousel using react-slick */}
//       <div className="md:hidden w-full max-w-md">
//         <Slider dots={true} arrows={false} infinite={true} slidesToShow={1}>
//           {tweetUrls.map((url, idx) => (
//             <div key={idx} className="px-2">
//               <XEmbed className="h-[475px]" url={url} />
//             </div>
//           ))}
//         </Slider>
//       </div>
//     </AnimatedOnScroll>
//   );
// };



// export default TweetSection;


import React from "react";
import TweetEmbed from "./TweetEmbed"; // Adjust path if needed

const tweets = [
  "1907673685479018737",
  "1907673685479018737",
  "1910196260746723481",
]


const TweetSection = () => {
  return (
    <section className="w-full flex flex-col items-center py-16 px-4 bg-white dark:bg-[#09090B]">
      <h2 className="text-3xl font-bold mb-6 text-center dark:text-white">
        ❤️ What People Are Saying
      </h2>
      <div className="max-w-xl w-full flex justify-center">
        {tweets.map( (id) => {
          return <TweetEmbed key={id} tweetId={id}/>
        })}
      </div>
    </section>
  );
};

export default TweetSection;

