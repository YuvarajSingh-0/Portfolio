import React from "react";

export default function AboutMe() {
    return (
        <section id="AboutMe" className="self-center flex  max-md:flex-col w-full items-center justify-between gap-5 mt-28 px-5 max-md:max-w-full max-md:flex-wrap">
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
                <div>
                    <h5 className="text-violet-600 font-semibold tracking-wider capitalize mt-10 mb-3">profiles</h5>
                    <div className="flex gap-5">
                        <a href="https://www.linkedin.com/in/yuvarajsingh" className="flex text-violet-600 bg-violet-600 bg-opacity-10 rounded-md px-4 py-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="rgb(124,58,237)" x="0px" y="0px" width="24" height="24" viewBox="0 0 24 24">
                                <path d="M 5 3 C 3.895 3 3 3.895 3 5 L 3 19 C 3 20.105 3.895 21 5 21 L 19 21 C 20.105 21 21 20.105 21 19 L 21 5 C 21 3.895 20.105 3 19 3 L 5 3 z M 5 5 L 19 5 L 19 19 L 5 19 L 5 5 z M 7.7792969 6.3164062 C 6.9222969 6.3164062 6.4082031 6.8315781 6.4082031 7.5175781 C 6.4082031 8.2035781 6.9223594 8.7167969 7.6933594 8.7167969 C 8.5503594 8.7167969 9.0644531 8.2035781 9.0644531 7.5175781 C 9.0644531 6.8315781 8.5502969 6.3164062 7.7792969 6.3164062 z M 6.4765625 10 L 6.4765625 17 L 9 17 L 9 10 L 6.4765625 10 z M 11.082031 10 L 11.082031 17 L 13.605469 17 L 13.605469 13.173828 C 13.605469 12.034828 14.418109 11.871094 14.662109 11.871094 C 14.906109 11.871094 15.558594 12.115828 15.558594 13.173828 L 15.558594 17 L 18 17 L 18 13.173828 C 18 10.976828 17.023734 10 15.802734 10 C 14.581734 10 13.930469 10.406562 13.605469 10.976562 L 13.605469 10 L 11.082031 10 z"></path>
                            </svg>

                            LinkedIn
                        </a>
                        <a href="https://www.github.com/yuvarajsingh-0" className="flex text-violet-600 bg-violet-600 bg-opacity-10 rounded-md px-4 py-2">
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" fill="rgb(124,58,237)" width="24" height="24" viewBox="0 0 24 24">
                                <path d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.6,5,2.5,9.3,6.9,10.7v-2.3c0,0-0.4,0.1-0.9,0.1c-1.4,0-2-1.2-2.1-1.9 c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1c0.4,0,0.7-0.1,0.9-0.2 c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6C7,7.2,7,6.6,7.3,6c0,0,1.4,0,2.8,1.3 C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3C15.3,6,16.8,6,16.8,6C17,6.6,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4c0.7,0.8,1.2,1.8,1.2,3 c0,2.2-1.7,3.5-4,4c0.6,0.5,1,1.4,1,2.3v3.3c4.1-1.3,7-5.1,7-9.5C22,6.1,16.9,1.4,10.9,2.1z"></path>
                            </svg>

                            Github
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}