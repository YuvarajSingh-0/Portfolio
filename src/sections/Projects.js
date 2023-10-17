import React from "react";
import ProjectsCard from "../components/ProjectsCard";
import data from "../data/ProjectsData.json";
function PomodoroApp() {
    const handleButtonClick = () => {
        // handle button click event
    }

    return (
        <section id="Projects">
            <div className="self-center flex w-full max-w-[1640px] flex-col mt-36 max-md:max-w-full">
                <button className="text-violet-500 w-max text-center tracking-wider text-xl font-bold bg-violet-600 bg-opacity-10 rounded-lg px-4 py-2 ">🔗 Projects</button>

                <div className="self-center flex w-full items-start justify-between gap-5 mt-6 px-5 max-md:max-w-full max-md:flex-wrap">
                    <h1 className="text-white text-5xl font-extrabold self-center max-w-[713px] grow shrink-0 basis-auto my-auto max-md:max-w-full max-md:text-4xl">
                        My Works
                    </h1>
                </div>
            </div>
            <div className="mt-24 self-center">
                <article className="gap-5 justify-center items-center flex-wrap flex h-max max-md:items-stretch max-sm:gap-1">
                    {data.map((item, index) => <ProjectsCard info={item} key={index} />)}
                </article>
            </div>

            <div className="flex w-max max-w-full items-start gap-3.5 mt-14 px-5">
                <a href="https://github.com/yuvarajsingh-0" target="_blank" className=" flex gap-2 justify-start text-violet-600 text-opacity-50 text-xl font-semibold  grow basis-auto mt-1">See More Projects on GitHub<img loading="lazy" srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/09be1328-a32b-482e-b505-a49fb0a3f3d8?apiKey=f5d1f74c978a473e8f57d978a4ec13be&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/09be1328-a32b-482e-b505-a49fb0a3f3d8?apiKey=f5d1f74c978a473e8f57d978a4ec13be&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/09be1328-a32b-482e-b505-a49fb0a3f3d8?apiKey=f5d1f74c978a473e8f57d978a4ec13be&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/09be1328-a32b-482e-b505-a49fb0a3f3d8?apiKey=f5d1f74c978a473e8f57d978a4ec13be&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/09be1328-a32b-482e-b505-a49fb0a3f3d8?apiKey=f5d1f74c978a473e8f57d978a4ec13be&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/09be1328-a32b-482e-b505-a49fb0a3f3d8?apiKey=f5d1f74c978a473e8f57d978a4ec13be&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/09be1328-a32b-482e-b505-a49fb0a3f3d8?apiKey=f5d1f74c978a473e8f57d978a4ec13be&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/09be1328-a32b-482e-b505-a49fb0a3f3d8?apiKey=f5d1f74c978a473e8f57d978a4ec13be&"
                    className="aspect-square object-contain my-auto object-center w-6 overflow-hidden shrink-0" /></a>
            </div>
        </section>
    );
}

export default PomodoroApp;