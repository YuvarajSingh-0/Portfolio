"use client";
import * as React from "react";

export default function Home() {
    const handleButtonClick = () => {
        // pass
    };

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
                        <img
                            loading="lazy"
                            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/bfb49e41-c9d7-47cf-a415-0658e9142912?apiKey=f5d1f74c978a473e8f57d978a4ec13be&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/bfb49e41-c9d7-47cf-a415-0658e9142912?apiKey=f5d1f74c978a473e8f57d978a4ec13be&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/bfb49e41-c9d7-47cf-a415-0658e9142912?apiKey=f5d1f74c978a473e8f57d978a4ec13be&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/bfb49e41-c9d7-47cf-a415-0658e9142912?apiKey=f5d1f74c978a473e8f57d978a4ec13be&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/bfb49e41-c9d7-47cf-a415-0658e9142912?apiKey=f5d1f74c978a473e8f57d978a4ec13be&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/bfb49e41-c9d7-47cf-a415-0658e9142912?apiKey=f5d1f74c978a473e8f57d978a4ec13be&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/bfb49e41-c9d7-47cf-a415-0658e9142912?apiKey=f5d1f74c978a473e8f57d978a4ec13be&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/bfb49e41-c9d7-47cf-a415-0658e9142912?apiKey=f5d1f74c978a473e8f57d978a4ec13be&" className="aspect-[3.82] object-cover object-center w-[130px] overflow-hidden shrink-0 mt-8"
                        />
                    </div>
                </div>
                <div className="flex flex-col items-stretch w-[59%] ml-5 item-center  max-md:w-full">
                    <img
                        loading="lazy"
                        src="./avatar.svg"
                        // srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/3f83197f-871b-484c-a830-f2dbfb50f45a?apiKey=f5d1f74c978a473e8f57d978a4ec13be&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/3f83197f-871b-484c-a830-f2dbfb50f45a?apiKey=f5d1f74c978a473e8f57d978a4ec13be&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3f83197f-871b-484c-a830-f2dbfb50f45a?apiKey=f5d1f74c978a473e8f57d978a4ec13be&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/3f83197f-871b-484c-a830-f2dbfb50f45a?apiKey=f5d1f74c978a473e8f57d978a4ec13be&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/3f83197f-871b-484c-a830-f2dbfb50f45a?apiKey=f5d1f74c978a473e8f57d978a4ec13be&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3f83197f-871b-484c-a830-f2dbfb50f45a?apiKey=f5d1f74c978a473e8f57d978a4ec13be&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/3f83197f-871b-484c-a830-f2dbfb50f45a?apiKey=f5d1f74c978a473e8f57d978a4ec13be&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/3f83197f-871b-484c-a830-f2dbfb50f45a?apiKey=f5d1f74c978a473e8f57d978a4ec13be&" 
                        className="aspect-[1.01] object-contain object-center w-full overflow-hidden grow max-md:max-w-full max-md:mt-12"
                    />
                </div>
                <div className="flex flex-col items-stretch w-[14%] ml-5 max-md:w-full">
                    <div className="flex flex-col my-auto max-md:mt-52">
                        <div className="flex  max-w-full items-start gap-2 mr-4 max-md:mr-2.5">
                            <button
                                onClick={handleButtonClick}
                                className="justify-center text-violet-600 text-opacity-50 text-base font-semibold self-center my-auto"
                            >
                                Get Resume
                            </button>
                            <img
                                loading="lazy"
                                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/1fc336e6-49b0-45f4-a99e-6910d86b2c62?apiKey=f5d1f74c978a473e8f57d978a4ec13be&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/1fc336e6-49b0-45f4-a99e-6910d86b2c62?apiKey=f5d1f74c978a473e8f57d978a4ec13be&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1fc336e6-49b0-45f4-a99e-6910d86b2c62?apiKey=f5d1f74c978a473e8f57d978a4ec13be&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/1fc336e6-49b0-45f4-a99e-6910d86b2c62?apiKey=f5d1f74c978a473e8f57d978a4ec13be&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/1fc336e6-49b0-45f4-a99e-6910d86b2c62?apiKey=f5d1f74c978a473e8f57d978a4ec13be&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1fc336e6-49b0-45f4-a99e-6910d86b2c62?apiKey=f5d1f74c978a473e8f57d978a4ec13be&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/1fc336e6-49b0-45f4-a99e-6910d86b2c62?apiKey=f5d1f74c978a473e8f57d978a4ec13be&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/1fc336e6-49b0-45f4-a99e-6910d86b2c62?apiKey=f5d1f74c978a473e8f57d978a4ec13be&" className=" my-auto aspect-square object-cover object-center w-4 overflow-hidden shrink-0"
                            />
                        </div>
                        <div className="border flex w-[196px] max-w-full items-start gap-2 mt-3 pl-4 pr-5 py-2.5 rounded-2xl border-solid border-violet-600 border-opacity-50">
                            <img
                                loading="lazy"
                                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/02ee606e-ce87-4d1a-842d-7bb9f859c546?apiKey=f5d1f74c978a473e8f57d978a4ec13be&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/02ee606e-ce87-4d1a-842d-7bb9f859c546?apiKey=f5d1f74c978a473e8f57d978a4ec13be&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/02ee606e-ce87-4d1a-842d-7bb9f859c546?apiKey=f5d1f74c978a473e8f57d978a4ec13be&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/02ee606e-ce87-4d1a-842d-7bb9f859c546?apiKey=f5d1f74c978a473e8f57d978a4ec13be&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/02ee606e-ce87-4d1a-842d-7bb9f859c546?apiKey=f5d1f74c978a473e8f57d978a4ec13be&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/02ee606e-ce87-4d1a-842d-7bb9f859c546?apiKey=f5d1f74c978a473e8f57d978a4ec13be&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/02ee606e-ce87-4d1a-842d-7bb9f859c546?apiKey=f5d1f74c978a473e8f57d978a4ec13be&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/02ee606e-ce87-4d1a-842d-7bb9f859c546?apiKey=f5d1f74c978a473e8f57d978a4ec13be&" className="aspect-square object-cover object-center w-6 overflow-hidden shrink-0"
                            />
                            <div className="justify-center text-violet-600 text-opacity-50 text-base font-semibold self-center my-auto">
                                Lets Talk{" "}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
}