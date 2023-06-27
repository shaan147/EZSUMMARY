import React from "react";
import logo from "../assets/logo.png";

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <img src={logo} alt="sumz_logo" className="w-28 object-contain" />

        <button
          type="button"
          onClick={() => window.open("https://github.com/shaan147", "_blank")}
          className="black_btn"
        >
          GitHub
        </button>
      </nav>
      <h1 className="head_text">
        Summarize Articles <br className="max-md:hidden" />
        <span className="orange_gradient">with AI </span>
      </h1>
      <h2 className="desc">
        Discover the Power of EZSUMMARY: Your Ultimate Article Summarizer
      </h2>
      <p className="desc">
        Say goodbye to information overload! With EZSUMMARY, our cutting-edge
        open-source article summarizer, you can now effortlessly navigate
        through lengthy articles and unlock clear and concise summaries that get
        straight to the point.
      </p>
    </header>
  );
};

export default Hero;
