import * as React from "react";
import { Link } from "react-scroll";
export default function Home() {

    return (
        <section id="Home" className="self-stretch px-5 max-md:max-w-full">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                <div className="flex flex-col items-stretch w-[28%] max-md:w-full">
                    <div className="flex flex-col my-auto max-md:mt-12">
                        <div className="justify-center text-violet-600 text-center text-xl font-bold bg-violet-600 bg-opacity-10 w-40 max-w-full pl-3 pr-3.5 py-3 rounded-2xl">
                            👋 Hello!
                        </div>
                        <h1 className="text-white text-5xl font-extrabold mt-9 max-md:text-4xl">
                            Yuvaraj <br /> Singh
                        </h1>
                        <p className=" justify-center text-white text-opacity-50 text-justify text-xl mt-9">
                            Full-Stack Enthusiast ·
                        </p>
                        <div className="flex gap-4">
                            <a href="https://www.linkedin.com/in/yuvarajsingh/">
                                <img
                                    loading="lazy"
                                    src="./linkedIn.svg"
                                    alt="linkedin"
                                    className="aspect-square object-contain object-center overflow-hidden shrink-0 mt-8"
                                />
                            </a>
                            <a href="https://www.github.com/yuvarajsingh-0/">
                                <img
                                    loading="lazy"
                                    src="./github.svg"
                                    alt="github"
                                    className="aspect-square object-contain object-center overflow-hidden shrink-0 mt-8"
                                />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-stretch w-[59%] ml-5 item-center  max-md:w-full">
                    <img
                        loading="lazy"
                        src="./avatar3.svg"
                        className="aspect-[1.01] object-contain object-center w-full overflow-hidden grow max-md:max-w-full max-md:mt-12"
                        alt="Avatar"
                    />
                </div>
                <div className="flex flex-col  items-stretch w-[14%] ml-5 max-md:w-full">
                    <div className="flex  justify-end md:items-end flex-col my-auto max-md:mt-52">
                        {/* <a download={'Yuvaraj-Singh-Resume.pdf'} href="./Yuvaraj-Singh-Resume(1.6).pdf" className="flex  max-w-full items-start gap-2 text-center">
                            <button
                                className="justify-center text-violet-600 text-base font-semibold self-center my-auto"
                            >
                                Get Resume

                            </button>
                            <img
                                loading="lazy"
                                src="./ArrowLineDown.svg"
                                alt="arrow"
                                className=" my-auto aspect-square object-cover object-center w-4 overflow-hidden shrink-0"
                            />
                        </a> */}
                        <a className="flex  max-w-full items-start gap-2 text-center" href="https://drive.google.com/file/d/1OCnEeIES82cZqCdjHGg5enyKYMnNhQft/view?usp=sharing">
                            <button
                                className="justify-center text-violet-600 text-base font-semibold self-center my-auto"
                            >
                                Get Resume

                            </button>
                            <img
                                loading="lazy"
                                src="./ArrowLineDown.svg"
                                alt="arrow"
                                className=" my-auto aspect-square object-cover object-center w-4 overflow-hidden shrink-0"
                            />

                        </a>
                        <Link to="Contact" smooth className="border w-max flex  items-start gap-2 mt-3 pl-4 pr-5 py-2.5 rounded-2xl border-solid border-violet-600 ">
                            <img
                                loading="lazy"
                                src="WhatsAppLogo.svg"
                                alt="whatsapp"
                                className="aspect-square object-cover object-center w-6 overflow-hidden shrink-0"
                            />
                            <div className="justify-center cursor-pointer text-violet-600 text-base font-semibold self-center my-auto">
                                Lets Talk
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </section>

    );
}