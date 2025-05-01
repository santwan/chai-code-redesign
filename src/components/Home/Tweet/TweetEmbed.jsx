import { useEffect, useRef, useState } from "react";

let scriptLoaded = false;

const TweetEmbed = ({ tweetId }) => {
  const containerRef = useRef(null);
  const [theme, setTheme] = useState("light");
  const [ready, setReady] = useState(false);

  // Load the Twitter widget script only once globally
  const loadTwitterWidget = () => {
    if (window.twttr?.widgets) {
      window.twttr.widgets.load(containerRef.current);
    } else if (!scriptLoaded) {
      const script = document.createElement("script");
      script.src = "https://platform.twitter.com/widgets.js";
      script.async = true;
      script.onload = () => {
        window.twttr?.widgets?.load(containerRef.current);
      };
      document.body.appendChild(script);
      scriptLoaded = true;
    }
  };

  // Detect Tailwind's dark mode and listen for theme changes
  useEffect(() => {
    const detectTheme = () => {
      const isDark = document.documentElement.classList.contains("dark");
      setTheme(isDark ? "dark" : "light");
      setReady(true);
    };

    // Delay detection slightly to wait for Tailwind class application
    setTimeout(detectTheme, 30);

    const observer = new MutationObserver(detectTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  // Load/reload widget when ready or theme changes
  useEffect(() => {
    if (ready && tweetId) {
      loadTwitterWidget();
    }
  }, [ready, tweetId, theme]);

  // Optional shimmer loader
  if (!ready) {
    return (
      <div className="rounded-xl bg-gray-100 dark:bg-orange-900/30 animate-pulse h-[400px] md:h-[450px] xl:h-[500px]" />
    );
  }

  return (
    <div
      className="dark:bg-orange-500/40 border border-orange-300 dark:border-orange-400/60 shadow-[0_0_200px_rgba(251,146,60,0.5)] rounded-xl h-[400px] md:h-[450px] xl:h-[500px] overflow-hidden"
      aria-label="Embedded Tweet"
    >
      <div ref={containerRef} key={`${tweetId}-${theme}`}>
        <blockquote
          className="twitter-tweet"
          data-theme={theme}
          data-conversation="none"
          lang="en"
        >
          <a href={`https://twitter.com/i/status/${tweetId}`}></a>
        </blockquote>
      </div>
    </div>
  );
};

export default TweetEmbed;
