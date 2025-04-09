import LaptopFrame from '../Home/LaptopFrame';


const HeroSection = () => {
    return (
      <section className="pt-24 min-h-[120vh] flex flex-col items-center justify-center text-center px-4 bg-white text-black dark:bg-black dark:text-white transition-colors duration-300">
        
        {/* Trust Badge */}
        <div className="relative flex items-center justify-center m-4 px-1 py-1">
            {/* Glow Border */}
            <div className="absolute inset-0 glow-border rounded-full "></div>

            {/* Content */}
            <div className=" dark:border-white rounded-full text-sm font-medium text-gray-800 dark:text-gray-300 bg-white dark:bg-black 
                            px-4 py-1 z-10 relative">
                <p className="font font-mono">Trusted by 
                    <span className="  text-orange-500 font- dark:text-red-500 font-bold px-2">
                        1.5M
                    </span> 
                    Code Learners
                </p>
            </div>
        </div>

  
        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl font-bold max-w-4xl leading-snug sm:leading-tight">
          Consistency and Community Learning for coding courses.
        </h1>
  
        {/* Subheading */}
        <p className="mt-6 text-lg sm:text-xl max-w-2xl text-gray-700 dark:text-gray-300">
          Content is everywhere, we provide a learning experience that is unmatched. Bounties, peer learning,
          code reviews, virtual hostel, alumni network, doubt sessions, group projects, and more.
        </p>
  
        {/* CTA Button */}
        <a
          href="#"
          className="mt-8 inline-flex items-center justify-center px-6 py-3 border border-yellow-500 text-black dark:text-white rounded-md text-lg font-semibold hover:bg-yellow-500 hover:text-black transition"
        >
          Check all Live Cohorts
          <span className="ml-2 w-3 h-3 bg-red-500 rounded-full animate-pulse"></span>
        </a>
  
        {/* Video Embedded */}
        <LaptopFrame/>
      </section>
    );
  };
  
  export default HeroSection;
  