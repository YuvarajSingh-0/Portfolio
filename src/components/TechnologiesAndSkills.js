import * as React from "react";

export default function TechnologiesAndSkills() {
    return (
        <div id="Skills">
            <div className="self-center mx-auto flex max-w-full flex-col mt-36 px-5">
                <button className="text-violet-500 w-max mx-auto text-center tracking-wider font-bold bg-violet-600 bg-opacity-10 rounded-lg px-3 py-1 ">👨‍⚖️ Skills | Experinces</button>

                <h1 className="text-white text-center text-5xl font-extrabold self-stretch mt-9 max-md:max-w-full max-md:text-4xl">
                    Technologies & Skills
                </h1>
            </div>
            <div className="self-center flex w-full max-w-full flex-col mt-28 px-5">
                <h2 className="   justify-center text-white text-opacity-50 text-center text-2xl self-center max-w-[568px]">
                    Techs que uso no dia a dia
                </h2>
                <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/a211c4ce-09c8-413b-9ae7-7f3906d08dc5?apiKey=f5d1f74c978a473e8f57d978a4ec13be&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/a211c4ce-09c8-413b-9ae7-7f3906d08dc5?apiKey=f5d1f74c978a473e8f57d978a4ec13be&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a211c4ce-09c8-413b-9ae7-7f3906d08dc5?apiKey=f5d1f74c978a473e8f57d978a4ec13be&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/a211c4ce-09c8-413b-9ae7-7f3906d08dc5?apiKey=f5d1f74c978a473e8f57d978a4ec13be&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/a211c4ce-09c8-413b-9ae7-7f3906d08dc5?apiKey=f5d1f74c978a473e8f57d978a4ec13be&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a211c4ce-09c8-413b-9ae7-7f3906d08dc5?apiKey=f5d1f74c978a473e8f57d978a4ec13be&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/a211c4ce-09c8-413b-9ae7-7f3906d08dc5?apiKey=f5d1f74c978a473e8f57d978a4ec13be&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/a211c4ce-09c8-413b-9ae7-7f3906d08dc5?apiKey=f5d1f74c978a473e8f57d978a4ec13be&" className="aspect-[13.54] object-cover object-center w-full overflow-hidden self-stretch mt-12 max-md:max-w-full"
                    alt="Techs que uso no dia a dia"
                />
                <h2 className="   justify-center text-white text-opacity-50 text-center text-2xl self-center max-w-[568px] mt-16 max-md:max-w-full">
                    Outras techs com que já realizei projetos
                </h2>
                <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/92971b65-c97a-453d-a9be-a3ae2bd2f5e4?apiKey=f5d1f74c978a473e8f57d978a4ec13be&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/92971b65-c97a-453d-a9be-a3ae2bd2f5e4?apiKey=f5d1f74c978a473e8f57d978a4ec13be&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/92971b65-c97a-453d-a9be-a3ae2bd2f5e4?apiKey=f5d1f74c978a473e8f57d978a4ec13be&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/92971b65-c97a-453d-a9be-a3ae2bd2f5e4?apiKey=f5d1f74c978a473e8f57d978a4ec13be&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/92971b65-c97a-453d-a9be-a3ae2bd2f5e4?apiKey=f5d1f74c978a473e8f57d978a4ec13be&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/92971b65-c97a-453d-a9be-a3ae2bd2f5e4?apiKey=f5d1f74c978a473e8f57d978a4ec13be&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/92971b65-c97a-453d-a9be-a3ae2bd2f5e4?apiKey=f5d1f74c978a473e8f57d978a4ec13be&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/92971b65-c97a-453d-a9be-a3ae2bd2f5e4?apiKey=f5d1f74c978a473e8f57d978a4ec13be&" className="aspect-[13.64] object-cover object-center w-[873px] overflow-hidden self-center shrink-0 mt-12 max-md:max-w-full"
                    alt="Outras techs com que já realizei projetos"
                />
            </div>
        </div>
    );
}