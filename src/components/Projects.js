import React from "react";

function PomodoroApp() {
    const handleButtonClick = () => {
        // handle button click event
    }

    return (
        <div>
            <section id="Projects" className="self-center flex w-full max-w-[1640px] flex-col mt-36 max-md:max-w-full">
                <button className="text-violet-500 w-max text-center tracking-wider text-xl font-bold bg-violet-600 bg-opacity-10 rounded-lg px-4 py-2 ">🔗 Projects</button>

                <div className="self-center flex w-full items-start justify-between gap-5 mt-6 px-5 max-md:max-w-full max-md:flex-wrap">
                    <h1 className="text-white text-5xl font-extrabold self-center max-w-[713px] grow shrink-0 basis-auto my-auto max-md:max-w-full max-md:text-4xl">
                        My Works
                    </h1>
                </div>
            </section>
            <section className="mt-24 self-center">
                <article className="gap-5  justify-center items-center flex-wrap flex max-md:flex-col max-md:items-stretch max-sm:gap-1">
                    {/* <div className="flex w-1/4   flex-col cursor-pointer mx-auto max-md:w-full"> */}
                    <div className="hover:bg-violet-600 self-center w-1/4 max-xl:w-1/2  max-sm:w-full hover:bg-opacity-10 hover:border-transparent border flex flex-col  px-5 py-8 rounded-2xl border-solid border-violet-600 border-opacity-50 ">
                        <h2 className="   justify-center text-white text-xl font-bold w-[181px] ml-2.5 mt-px">Move.it</h2>
                        <p className="   text-white text-opacity-50 text-sm max-w-[300px] ml-2.5 mt-4">Aplicação da NLW#04 da Rocketseat. Desenvolvida com React. Plataforma de Pomodoro com exercícios.</p>
                        <div className="flex max-w-full gap-2 items-start-2 ml-2.5 mt-10">
                            <button className="text-violet-500 text-center tracking-wide font-semibold bg-violet-600 bg-opacity-10 rounded-lg px-3 py-1 flex items-center justify-center">Typescript</button>
                            <button className="text-green-400 text-center tracking-wide font-semibold bg-green-400 bg-opacity-30 rounded-lg px-3 py-1 flex items-center justify-center">Online</button>
                        </div>
                        <img loading="lazy" srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/3c1d2019-02ad-469a-8e2c-215d64fdead6?apiKey=f5d1f74c978a473e8f57d978a4ec13be&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/3c1d2019-02ad-469a-8e2c-215d64fdead6?apiKey=f5d1f74c978a473e8f57d978a4ec13be&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3c1d2019-02ad-469a-8e2c-215d64fdead6?apiKey=f5d1f74c978a473e8f57d978a4ec13be&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/3c1d2019-02ad-469a-8e2c-215d64fdead6?apiKey=f5d1f74c978a473e8f57d978a4ec13be&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/3c1d2019-02ad-469a-8e2c-215d64fdead6?apiKey=f5d1f74c978a473e8f57d978a4ec13be&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3c1d2019-02ad-469a-8e2c-215d64fdead6?apiKey=f5d1f74c978a473e8f57d978a4ec13be&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/3c1d2019-02ad-469a-8e2c-215d64fdead6?apiKey=f5d1f74c978a473e8f57d978a4ec13be&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/3c1d2019-02ad-469a-8e2c-215d64fdead6?apiKey=f5d1f74c978a473e8f57d978a4ec13be&"
                            className="aspect-[1.5] object-cover object-center max-sm:w-full overflow-hidden self-center max-w-full mt-6 -mb-px" />
                    </div>
                    <div className="hover:bg-violet-600 self-center w-1/4 max-xl:w-1/2  max-sm:w-full hover:bg-opacity-10 hover:border-transparent border flex flex-col  px-5 py-8 rounded-2xl border-solid border-violet-600 border-opacity-50 ">
                        <h2 className="justify-center text-white text-xl font-bold w-[181px] ml-2.5 mt-px">Move.it</h2>
                        <p className="text-white text-opacity-50 text-sm max-w-[300px] ml-2.5 mt-4">Aplicação da NLW#04 da Rocketseat. Desenvolvida com React. Plataforma de Pomodoro com exercícios.</p>
                        <div className="flex gap-2 max-w-full items-start-2 ml-2.5 mt-10">
                            <button className="text-violet-500 text-center tracking-wide font-semibold bg-violet-600 bg-opacity-10 rounded-lg px-3 py-1 flex items-center justify-center">Typescript</button>
                            <button className="text-green-400 text-center tracking-wide font-semibold bg-green-400 bg-opacity-30 rounded-lg px-3 py-1 flex items-center justify-center">Online</button>
                        </div>
                        <img loading="lazy" srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/3c1d2019-02ad-469a-8e2c-215d64fdead6?apiKey=f5d1f74c978a473e8f57d978a4ec13be&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/3c1d2019-02ad-469a-8e2c-215d64fdead6?apiKey=f5d1f74c978a473e8f57d978a4ec13be&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3c1d2019-02ad-469a-8e2c-215d64fdead6?apiKey=f5d1f74c978a473e8f57d978a4ec13be&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/3c1d2019-02ad-469a-8e2c-215d64fdead6?apiKey=f5d1f74c978a473e8f57d978a4ec13be&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/3c1d2019-02ad-469a-8e2c-215d64fdead6?apiKey=f5d1f74c978a473e8f57d978a4ec13be&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3c1d2019-02ad-469a-8e2c-215d64fdead6?apiKey=f5d1f74c978a473e8f57d978a4ec13be&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/3c1d2019-02ad-469a-8e2c-215d64fdead6?apiKey=f5d1f74c978a473e8f57d978a4ec13be&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/3c1d2019-02ad-469a-8e2c-215d64fdead6?apiKey=f5d1f74c978a473e8f57d978a4ec13be&"
                            className="aspect-[1.5] object-cover object-center max-sm:w-full overflow-hidden self-center max-w-full mt-6 -mb-px" />
                    </div>
                    <div className="hover:bg-violet-600 self-center w-1/4 max-xl:w-1/2  max-sm:w-full hover:bg-opacity-10 hover:border-transparent border flex flex-col  px-5 py-8 rounded-2xl border-solid border-violet-600 border-opacity-50 ">
                        <h2 className="justify-center text-white text-xl font-bold w-[181px] ml-2.5 mt-px">Move.it</h2>
                        <p className="text-white text-opacity-50 text-sm max-w-[300px] ml-2.5 mt-4">Aplicação da NLW#04 da Rocketseat. Desenvolvida com React. Plataforma de Pomodoro com exercícios.</p>
                        <div className="flex gap-2  max-w-full items-start-2 ml-2.5 mt-10">
                            <button className="text-violet-500 text-center tracking-wide font-semibold bg-violet-600 bg-opacity-10 rounded-lg px-3 py-1 flex items-center justify-center">Typescript</button>
                            <button className="text-green-400 text-center tracking-wide font-semibold bg-green-400 bg-opacity-30 rounded-lg px-3 py-1 flex items-center justify-center">Online</button>
                        </div>
                        <img loading="lazy" srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/3c1d2019-02ad-469a-8e2c-215d64fdead6?apiKey=f5d1f74c978a473e8f57d978a4ec13be&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/3c1d2019-02ad-469a-8e2c-215d64fdead6?apiKey=f5d1f74c978a473e8f57d978a4ec13be&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3c1d2019-02ad-469a-8e2c-215d64fdead6?apiKey=f5d1f74c978a473e8f57d978a4ec13be&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/3c1d2019-02ad-469a-8e2c-215d64fdead6?apiKey=f5d1f74c978a473e8f57d978a4ec13be&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/3c1d2019-02ad-469a-8e2c-215d64fdead6?apiKey=f5d1f74c978a473e8f57d978a4ec13be&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3c1d2019-02ad-469a-8e2c-215d64fdead6?apiKey=f5d1f74c978a473e8f57d978a4ec13be&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/3c1d2019-02ad-469a-8e2c-215d64fdead6?apiKey=f5d1f74c978a473e8f57d978a4ec13be&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/3c1d2019-02ad-469a-8e2c-215d64fdead6?apiKey=f5d1f74c978a473e8f57d978a4ec13be&"
                            className="aspect-[1.5] object-cover object-center max-sm:w-full overflow-hidden self-center max-w-full mt-6 -mb-px" />
                    </div>
                    <div className="hover:bg-violet-600 self-center w-1/4 max-xl:w-1/2  max-sm:w-full hover:bg-opacity-10 hover:border-transparent border flex flex-col  px-5 py-8 rounded-2xl border-solid border-violet-600 border-opacity-50 ">
                        <h2 className="   justify-center text-white text-xl font-bold w-[181px] ml-2.5 mt-px">Move.it</h2>
                        <p className="   text-white text-opacity-50 text-sm max-w-[300px] ml-2.5 mt-4">Aplicação da NLW#04 da Rocketseat. Desenvolvida com React. Plataforma de Pomodoro com exercícios.</p>
                        <div className="flex gap-2 max-w-full items-start-2 ml-2.5 mt-10">
                            <button className="text-violet-500 text-center tracking-wide font-semibold bg-violet-600 bg-opacity-10 rounded-lg px-3 py-1 flex items-center justify-center">Typescript</button>
                            <button className="text-green-400 text-center tracking-wide font-semibold bg-green-400 bg-opacity-30 rounded-lg px-3 py-1 flex items-center justify-center">Online</button>
                        </div>
                        <img loading="lazy" srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/3c1d2019-02ad-469a-8e2c-215d64fdead6?apiKey=f5d1f74c978a473e8f57d978a4ec13be&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/3c1d2019-02ad-469a-8e2c-215d64fdead6?apiKey=f5d1f74c978a473e8f57d978a4ec13be&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3c1d2019-02ad-469a-8e2c-215d64fdead6?apiKey=f5d1f74c978a473e8f57d978a4ec13be&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/3c1d2019-02ad-469a-8e2c-215d64fdead6?apiKey=f5d1f74c978a473e8f57d978a4ec13be&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/3c1d2019-02ad-469a-8e2c-215d64fdead6?apiKey=f5d1f74c978a473e8f57d978a4ec13be&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3c1d2019-02ad-469a-8e2c-215d64fdead6?apiKey=f5d1f74c978a473e8f57d978a4ec13be&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/3c1d2019-02ad-469a-8e2c-215d64fdead6?apiKey=f5d1f74c978a473e8f57d978a4ec13be&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/3c1d2019-02ad-469a-8e2c-215d64fdead6?apiKey=f5d1f74c978a473e8f57d978a4ec13be&"
                            className="aspect-[1.5] object-cover object-center max-sm:w-full overflow-hidden self-center max-w-full mt-6 -mb-px" />
                    </div>
                    <div className="hover:bg-violet-600 self-center w-1/4 max-xl:w-1/2  max-sm:w-full hover:bg-opacity-10 hover:border-transparent border flex flex-col  px-5 py-8 rounded-2xl border-solid border-violet-600 border-opacity-50 ">
                        <h2 className="   justify-center text-white text-xl font-bold w-[181px] ml-2.5 mt-px">Move.it</h2>
                        <p className="   text-white text-opacity-50 text-sm max-w-[300px] ml-2.5 mt-4">Aplicação da NLW#04 da Rocketseat. Desenvolvida com React. Plataforma de Pomodoro com exercícios.</p>
                        <div className="flex gap-2 max-w-full items-start-2 ml-2.5 mt-10">
                            <button className="text-violet-500 text-center tracking-wide font-semibold bg-violet-600 bg-opacity-10 rounded-lg px-3 py-1 flex items-center justify-center">Typescript</button>
                            <button className="text-green-400 text-center tracking-wide font-semibold bg-green-400 bg-opacity-30 rounded-lg px-3 py-1 flex items-center justify-center">Online</button>
                        </div>
                        <img loading="lazy" srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/3c1d2019-02ad-469a-8e2c-215d64fdead6?apiKey=f5d1f74c978a473e8f57d978a4ec13be&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/3c1d2019-02ad-469a-8e2c-215d64fdead6?apiKey=f5d1f74c978a473e8f57d978a4ec13be&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3c1d2019-02ad-469a-8e2c-215d64fdead6?apiKey=f5d1f74c978a473e8f57d978a4ec13be&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/3c1d2019-02ad-469a-8e2c-215d64fdead6?apiKey=f5d1f74c978a473e8f57d978a4ec13be&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/3c1d2019-02ad-469a-8e2c-215d64fdead6?apiKey=f5d1f74c978a473e8f57d978a4ec13be&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3c1d2019-02ad-469a-8e2c-215d64fdead6?apiKey=f5d1f74c978a473e8f57d978a4ec13be&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/3c1d2019-02ad-469a-8e2c-215d64fdead6?apiKey=f5d1f74c978a473e8f57d978a4ec13be&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/3c1d2019-02ad-469a-8e2c-215d64fdead6?apiKey=f5d1f74c978a473e8f57d978a4ec13be&"
                            className="aspect-[1.5] object-cover object-center max-sm:w-full overflow-hidden self-center max-w-full mt-6 -mb-px" />
                    </div>


                </article>
            </section>

            <div className="flex  max-w-full items-start gap-3.5 mt-14 px-5">
                <a href="https://github.com/yuvarajsingh-0" target="_blank" className=" flex gap-2 justify-center text-violet-600 text-opacity-50 text-xl font-semibold  grow basis-auto mt-1">See More Projects on GitHub<img loading="lazy" srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/09be1328-a32b-482e-b505-a49fb0a3f3d8?apiKey=f5d1f74c978a473e8f57d978a4ec13be&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/09be1328-a32b-482e-b505-a49fb0a3f3d8?apiKey=f5d1f74c978a473e8f57d978a4ec13be&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/09be1328-a32b-482e-b505-a49fb0a3f3d8?apiKey=f5d1f74c978a473e8f57d978a4ec13be&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/09be1328-a32b-482e-b505-a49fb0a3f3d8?apiKey=f5d1f74c978a473e8f57d978a4ec13be&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/09be1328-a32b-482e-b505-a49fb0a3f3d8?apiKey=f5d1f74c978a473e8f57d978a4ec13be&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/09be1328-a32b-482e-b505-a49fb0a3f3d8?apiKey=f5d1f74c978a473e8f57d978a4ec13be&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/09be1328-a32b-482e-b505-a49fb0a3f3d8?apiKey=f5d1f74c978a473e8f57d978a4ec13be&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/09be1328-a32b-482e-b505-a49fb0a3f3d8?apiKey=f5d1f74c978a473e8f57d978a4ec13be&"
                    className="aspect-square object-contain my-auto object-center w-6 overflow-hidden shrink-0" /></a>

            </div>
        </div>
    );
}

export default PomodoroApp;