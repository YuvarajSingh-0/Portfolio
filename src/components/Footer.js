export default function Footer() {
    return (
        <footer className="bg-violet-600 bg-opacity-10 rounded-2xl self-stretch flex w-full flex-col mt-20 px-5 py-5 max-md:max-w-full max-md:mt-52">
            <div className="flex max-w-full relative items-start justify-between gap-5-mt-px max-md:flex-wrap">
                <div className="justify-center absolute w-1/4 text-white text-opacity-50 text-base self-center grow shrink-0 basis-auto my-auto">
                    © <span className="max-[750px]:hidden">
                        
                        2021 Yuvaraj Singh. All rights reserved.
                        </span>
                </div>
                <div className="flex gap-4 w-full justify-center">
                    <a href="https://www.linkedin.com/in/yuvarajsingh/">
                        <img
                            loading="lazy"
                            src="./linkedIn.svg"
                            alt="linkedin"
                            className="aspect-square object-contain object-center overflow-hidden shrink-0 "
                        />
                    </a>
                    <a href="https://www.github.com/yuvarajsingh-0/">
                        <img
                            loading="lazy"
                            src="./github.svg"
                            alt="github"
                            className="aspect-square object-contain object-center overflow-hidden shrink-0"
                        />
                    </a>
                </div>
                {/* <div className="self-stretch flex items-start justify-between gap-5 max-md:justify-center">
                    <img loading="lazy" srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/5f5dd5c1-310f-4a90-98b7-88ccde88a49e?apiKey=f5d1f74c978a473e8f57d978a4ec13be&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/5f5dd5c1-310f-4a90-98b7-88ccde88a49e?apiKey=f5d1f74c978a473e8f57d978a4ec13be&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5f5dd5c1-310f-4a90-98b7-88ccde88a49e?apiKey=f5d1f74c978a473e8f57d978a4ec13be&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/5f5dd5c1-310f-4a90-98b7-88ccde88a49e?apiKey=f5d1f74c978a473e8f57d978a4ec13be&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/5f5dd5c1-310f-4a90-98b7-88ccde88a49e?apiKey=f5d1f74c978a473e8f57d978a4ec13be&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5f5dd5c1-310f-4a90-98b7-88ccde88a49e?apiKey=f5d1f74c978a473e8f57d978a4ec13be&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/5f5dd5c1-310f-4a90-98b7-88ccde88a49e?apiKey=f5d1f74c978a473e8f57d978a4ec13be&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/5f5dd5c1-310f-4a90-98b7-88ccde88a49e?apiKey=f5d1f74c978a473e8f57d978a4ec13be&" className="aspect-square object-cover object-center w-[38px] overflow-hidden shrink-0" />
                    <img loading="lazy" srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/101421b3-38b6-4dba-82b0-03e0342dd102?apiKey=f5d1f74c978a473e8f57d978a4ec13be&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/101421b3-38b6-4dba-82b0-03e0342dd102?apiKey=f5d1f74c978a473e8f57d978a4ec13be&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/101421b3-38b6-4dba-82b0-03e0342dd102?apiKey=f5d1f74c978a473e8f57d978a4ec13be&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/101421b3-38b6-4dba-82b0-03e0342dd102?apiKey=f5d1f74c978a473e8f57d978a4ec13be&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/101421b3-38b6-4dba-82b0-03e0342dd102?apiKey=f5d1f74c978a473e8f57d978a4ec13be&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/101421b3-38b6-4dba-82b0-03e0342dd102?apiKey=f5d1f74c978a473e8f57d978a4ec13be&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/101421b3-38b6-4dba-82b0-03e0342dd102?apiKey=f5d1f74c978a473e8f57d978a4ec13be&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/101421b3-38b6-4dba-82b0-03e0342dd102?apiKey=f5d1f74c978a473e8f57d978a4ec13be&" className="aspect-[1.03] object-cover object-center w-10 overflow-hidden shrink-0" />
                    <img loading="lazy" srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/95eec15b-c01f-4cbc-8ac5-0897145386b0?apiKey=f5d1f74c978a473e8f57d978a4ec13be&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/95eec15b-c01f-4cbc-8ac5-0897145386b0?apiKey=f5d1f74c978a473e8f57d978a4ec13be&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/95eec15b-c01f-4cbc-8ac5-0897145386b0?apiKey=f5d1f74c978a473e8f57d978a4ec13be&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/95eec15b-c01f-4cbc-8ac5-0897145386b0?apiKey=f5d1f74c978a473e8f57d978a4ec13be&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/95eec15b-c01f-4cbc-8ac5-0897145386b0?apiKey=f5d1f74c978a473e8f57d978a4ec13be&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/95eec15b-c01f-4cbc-8ac5-0897145386b0?apiKey=f5d1f74c978a473e8f57d978a4ec13be&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/95eec15b-c01f-4cbc-8ac5-0897145386b0?apiKey=f5d1f74c978a473e8f57d978a4ec13be&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/95eec15b-c01f-4cbc-8ac5-0897145386b0?apiKey=f5d1f74c978a473e8f57d978a4ec13be&" className="aspect-square object-cover object-center w-[39px] overflow-hidden shrink-0 mt-0.5" />
                </div> */}
            </div>
        </footer>
    );
}