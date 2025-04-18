import { useEffect, useRef, useState } from "react";

const TweetEmbed = ({tweetId}) => {
  const containerRef = useRef(null);
  const [theme, setTheme] = useState(null) // Instead of Hardcoding light or dark
  const [ready, setReady] = useState(false) // ensures we wait for the theme to load 
  // this prevents rendering the Twitter embed until the correct theme is detected

//   const [theme, setTheme] = useState(
//     document.documentElement.classList.contains("dark") ? "dark" : "light"
//   );



  // Load the Twitter script
  const loadTwitterWidget = () => {
    if (window.twttr) {
      window.twttr.widgets.load(containerRef.current);
    } else {
      const script = document.createElement("script");
      script.src = "https://platform.twitter.com/widgets.js";
      script.async = true;
      document.body.appendChild(script);
    }
  };

  useEffect(() => {
    const detectTheme = () => {
        const isDark = document.documentElement.classList.contains("dark")
        setTheme(isDark ? "dark": "light")
        setReady(true)
    }

    //Initial detection (delat to ensures Tailwind applies class)
    //tailwind applies the dark class dynamically , A small delay ensures we read the actual class from >html>
    setTimeout(detectTheme, 50)

    // Observe for class changes on (toggle)
    // This listens for class changes on <html> so the Twitter theme updates dynamically when toggled.
    const observer = new MutationObserver(detectTheme)
    observer.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ["class"],
    })

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    //This if condition Prevents the embed from rendering until the correct theme is determined.
    if(ready) {  
        loadTwitterWidget()
    }
  }, [theme, ready]);

  if(!ready) return null; // Don’t render anything until theme is known

  return (
    <div ref={containerRef} key={`${tweetId}-${theme}`}>
        <blockquote
            className="twitter-tweet"
            data-theme={theme}
        >
            <a href={`https://twitter.com/i/status/${tweetId}`}></a>
        </blockquote>
    </div>
  );
};

export default TweetEmbed;
