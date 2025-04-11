import { useEffect, useRef, useState } from "react";

const TweetEmbed = () => {
  const containerRef = useRef(null);
  const [theme, setTheme] = useState(
    document.documentElement.classList.contains("dark") ? "dark" : "light"
  );

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
    loadTwitterWidget();

    // Observe for class changes on <html>
    const observer = new MutationObserver(() => {
      const isDark = document.documentElement.classList.contains("dark");
      setTheme(isDark ? "dark" : "light");
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    // Re-render on theme change
    loadTwitterWidget();
  }, [theme]);

  return (
    <div ref={containerRef} key={theme}>
      <blockquote
        className="twitter-tweet"
        data-theme={theme}
      >
        <p lang="en" dir="ltr">
          Coding is fun and we enjoy every part of it.
          <br />
          <br />
          We have some of the best cohort (live training) available at chaicode
          platform. We are about to start with classes. Aur sab kuch Hindi me h
          to easily smjh b aa jaata h.{" "}
          <a href="https://t.co/CEJzmWVNPj">pic.twitter.com/CEJzmWVNPj</a>
        </p>
        &mdash; Hitesh Choudhary (@Hiteshdotcom){" "}
        <a href="https://twitter.com/Hiteshdotcom/status/1907673685479018737">
          April 3, 2025
        </a>
      </blockquote>
    </div>
  );
};

export default TweetEmbed;
