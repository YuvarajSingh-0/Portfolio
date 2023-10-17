function ProjectsCard(props) {
    const { title, description, image, url, tags, status } = props.info;
    return (
        <div className="hover:bg-violet-600 h-full self-center w-1/4 max-md:w-1/2 max-sm:w-full hover:bg-opacity-10 hover:border-transparent border flex flex-col  px-5 pt-8 rounded-2xl border-solid border-violet-600 border-opacity-50 ">
            <h2 className="justify-center text-white text-xl font-bold w-[181px] ml-2.5 mt-px">{title}</h2>
            <p className="text-white text-opacity-50 text-sm max-w-[300px] ml-2.5 mt-4">
                {description}
            </p>
            <div className="flex flex-wrap overflow-y-scroll max-w-full gap-2 max-h-20 items-start-2 ml-2.5 mt-9">
                {status==="online" && <button className="text-green-400 text-center tracking-wide font-semibold bg-green-400 bg-opacity-30 rounded-lg px-3 py-1 flex items-center justify-center">Online</button>}
                {tags.map((tag,ind)=>
                    <button key={ind} className="text-violet-500 text-center tracking-wide font-semibold bg-violet-600 bg-opacity-10 rounded-lg px-3 py-1  items-center justify-center">{tag}</button>
                )}
            </div>
            <img loading="lazy" alt="" srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/3c1d2019-02ad-469a-8e2c-215d64fdead6?apiKey=f5d1f74c978a473e8f57d978a4ec13be&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/3c1d2019-02ad-469a-8e2c-215d64fdead6?apiKey=f5d1f74c978a473e8f57d978a4ec13be&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3c1d2019-02ad-469a-8e2c-215d64fdead6?apiKey=f5d1f74c978a473e8f57d978a4ec13be&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/3c1d2019-02ad-469a-8e2c-215d64fdead6?apiKey=f5d1f74c978a473e8f57d978a4ec13be&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/3c1d2019-02ad-469a-8e2c-215d64fdead6?apiKey=f5d1f74c978a473e8f57d978a4ec13be&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3c1d2019-02ad-469a-8e2c-215d64fdead6?apiKey=f5d1f74c978a473e8f57d978a4ec13be&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/3c1d2019-02ad-469a-8e2c-215d64fdead6?apiKey=f5d1f74c978a473e8f57d978a4ec13be&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/3c1d2019-02ad-469a-8e2c-215d64fdead6?apiKey=f5d1f74c978a473e8f57d978a4ec13be&"
                className="aspect-[1.5] object-cover object-center max-sm:w-full overflow-hidden self-center max-w-full mt-6 -mb-px" />
            <a href={url} target="_blank" className="my-5 justify-end flex cursor-pointer gap-2 text-violet-600 text-opacity-50 text-xl font-semibold  grow basis-auto">Visit <img loading="lazy" srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/09be1328-a32b-482e-b505-a49fb0a3f3d8?apiKey=f5d1f74c978a473e8f57d978a4ec13be&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/09be1328-a32b-482e-b505-a49fb0a3f3d8?apiKey=f5d1f74c978a473e8f57d978a4ec13be&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/09be1328-a32b-482e-b505-a49fb0a3f3d8?apiKey=f5d1f74c978a473e8f57d978a4ec13be&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/09be1328-a32b-482e-b505-a49fb0a3f3d8?apiKey=f5d1f74c978a473e8f57d978a4ec13be&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/09be1328-a32b-482e-b505-a49fb0a3f3d8?apiKey=f5d1f74c978a473e8f57d978a4ec13be&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/09be1328-a32b-482e-b505-a49fb0a3f3d8?apiKey=f5d1f74c978a473e8f57d978a4ec13be&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/09be1328-a32b-482e-b505-a49fb0a3f3d8?apiKey=f5d1f74c978a473e8f57d978a4ec13be&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/09be1328-a32b-482e-b505-a49fb0a3f3d8?apiKey=f5d1f74c978a473e8f57d978a4ec13be&"
                className="aspect-square object-contain my-auto object-center w-6 overflow-hidden shrink-0" /></a>
        </div>
    )
}

export default ProjectsCard