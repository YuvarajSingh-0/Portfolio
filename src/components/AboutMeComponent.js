"use client";
import React from "react";

export default function AboutMeComponent() {
    const handleClick = () => {
        // pass
    };

    return (
        <section id="AboutMe" className="self-center flex w-full max-w-[1610px] items-start justify-between gap-5 mt-36 px-5 max-md:max-w-full max-md:flex-wrap">
            <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/28f94e92-778d-4f54-a94c-1f480f25fe11?apiKey=f5d1f74c978a473e8f57d978a4ec13be&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/28f94e92-778d-4f54-a94c-1f480f25fe11?apiKey=f5d1f74c978a473e8f57d978a4ec13be&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/28f94e92-778d-4f54-a94c-1f480f25fe11?apiKey=f5d1f74c978a473e8f57d978a4ec13be&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/28f94e92-778d-4f54-a94c-1f480f25fe11?apiKey=f5d1f74c978a473e8f57d978a4ec13be&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/28f94e92-778d-4f54-a94c-1f480f25fe11?apiKey=f5d1f74c978a473e8f57d978a4ec13be&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/28f94e92-778d-4f54-a94c-1f480f25fe11?apiKey=f5d1f74c978a473e8f57d978a4ec13be&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/28f94e92-778d-4f54-a94c-1f480f25fe11?apiKey=f5d1f74c978a473e8f57d978a4ec13be&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/28f94e92-778d-4f54-a94c-1f480f25fe11?apiKey=f5d1f74c978a473e8f57d978a4ec13be&"
                className="aspect-[0.92] object-contain object-center w-1/3 overflow-hidden max-md:max-w-full"
                alt="Profile"
            />
            <div className="flex flex-col ml-40 max-md:max-w-full">
                <h2 className="justify-center text-violet-600 text-center text-xl font-bold w-40 bg-violet-600 bg-opacity-10 max-w-full pl-4 pr-4 pt-3 pb-3.5 rounded-2xl">
                    🧐 About Me
                </h2>
                <h1 className="text-white text-5xl font-extrabold max-w-[663px] mt-9 max-md:max-w-full max-md:text-4xl">
                    Yuvaraj Singh Nidyanand
                </h1>
                <p className="text-white text-opacity-50 text-lg leading-[138.89%] mt-8 max-md:max-w-full">
                    👋 My name is Yuvaraj Singh Nidyanand, but you can call me Yuvaraj. Nice to meet you! <br /> <br /> 👨‍💻 Over 2 years of experience in developing and programming interfaces with JavaScript, React JS, and NodeJS. <br /> 🎓 Pursued Computer Science Engineering. <br /> 💡 Interests in Front-end development with React, NodeJS, NextJS, Cloud Services. <br /> <br /> 🚀 Trying to be a little better than yesterday every day.
                </p>
                <button onClick={handleClick}>Click me</button>
            </div>
        </section>
    );
}