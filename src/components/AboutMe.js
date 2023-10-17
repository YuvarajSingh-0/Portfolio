import React from "react";

export default function AboutMe() {
    return (
        <section id="AboutMe" className="self-center flex  max-md:flex-col w-full items-start justify-between gap-5 mt-28 px-5 max-md:max-w-full max-md:flex-wrap">
            <div className="max-md:w-1/2 max-md:self-center w-1/3 pt-10 relative">
                <img
                    loading="lazy"
                    src="./whitecircle.svg"
                    className="aspect-[0.92]  w-full object-contain object-center  overflow-hidden max-md:max-w-full"
                    alt="Profile"
                />
                <img
                    src="./myavatar.png"
                    className="aspect-[0.92] rounded-full absolute top-14 w-full object-cover object-center  overflow-hidden max-md:max-w-full"
                    alt="Profile"
                />
            </div>
            <div className="flex flex-col ml-40 max-md:ml-0 max-md:mt-16">
                <h2 className="justify-center text-violet-600 text-center text-xl font-bold w-40 bg-violet-600 bg-opacity-10 max-w-full pl-4 pr-4 pt-3 pb-3.5 rounded-2xl">
                    🧐 About Me
                </h2>
                <h1 className="text-white text-5xl font-extrabold max-w-[663px] mt-9 max-md:max-w-full max-md:text-4xl">
                    Yuvaraj Singh Nidyanand
                </h1>
                <p className="text-white text-opacity-50 text-lg leading-[138.89%] mt-8 max-md:max-w-full">
                    👋 My name is Yuvaraj Singh Nidyanand, but you can call me Yuvaraj. Nice to meet you! <br /> <br /> 👨‍💻 Proficient in developing and programming interfaces with JavaScript, React JS, and NodeJS. <br /> 🎓 Graduating in Computer Science Engineering. <br /> 💡 Interests in Front-end development with React, NodeJS, NextJS, Cloud Services. <br /> <br /> 🚀 Trying to be a little better than yesterday every day.
                </p>
            </div>
        </section>
    );
}