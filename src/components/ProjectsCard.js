function ProjectsCard(props) {
    const { title, description, image, live_url, github_url, tags, status } = props.info;
    return (
        <div className="hover:bg-violet-600 h-full self-center w-1/4 max-md:w-1/2 max-sm:w-full hover:bg-opacity-10 hover:border-transparent border flex flex-col  px-5 pt-8 rounded-2xl border-solid border-violet-600 border-opacity-50 ">
            <h2 className="justify-center text-white text-xl font-bold w-[181px] ml-2.5 mt-px h-14">{title}</h2>
            <p className="text-white overflow-y-scroll text-opacity-50 text-sm max-w-[300px] ml-2.5 mt-4 h-14">
                {description}
            </p>
            <div className="flex flex-wrap overflow-y-scroll max-w-full gap-2 max-h-20 items-start-2 ml-2.5 mt-9">
                {status === "online" && <button className="text-green-400 text-center tracking-wide font-semibold bg-green-400 bg-opacity-30 rounded-lg px-3 py-1 flex items-center justify-center">Online</button>}
                {tags.map((tag, ind) =>
                    <button key={ind} className="text-violet-500 text-center tracking-wide font-semibold bg-violet-600 bg-opacity-10 rounded-lg px-3 py-1  items-center justify-center">{tag}</button>
                )}
            </div>
            <a href={live_url||''}>
                <img loading="lazy" alt="" src={image || './placeholder.jpg'}
                    className="aspect-[1.5] object-cover object-center max-sm:w-full overflow-hidden self-center max-w-full mt-6 -mb-px rounded-2xl" />
            </a>
            <a href={github_url} target="_blank" className="my-5 justify-end flex cursor-pointer gap-2 text-violet-600 text-opacity-50 text-xl font-semibold  grow basis-auto"> 
                <svg xmlns="http://www.w3.org/2000/svg" height="30" width="30" fill="#5327a0" viewBox="0 0 496 512"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" /></svg>
            </a>
        </div>
    )
}

export default ProjectsCard