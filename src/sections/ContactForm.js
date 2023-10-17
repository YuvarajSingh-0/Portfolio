import * as React from "react";

export default function ContactForm() {
    const handleScrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };
    return (
        <section id="Contact" className="self-center mx-auto flex w-[573px] max-w-full flex-col mt-36 px-5">
            <button className="text-violet-500 w-max mx-auto text-center tracking-wider font-bold bg-violet-600 bg-opacity-10 rounded-lg px-3 py-1 flex items-center justify-center">Contacts</button>

            <h1 className="text-white text-center text-5xl font-extrabold self-center mt-9 max-md:text-4xl">
                Lets Talk!
            </h1>
            <div className="self-stretch my-20 max-md:max-w-full">
                <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                    <a target="_blank"
                        rel="noopener noreferrer" href="tel:+916305817648" className="flex flex-col items-stretch w-[46%] max-md:w-full">
                        <div className="border flex w-[246px] max-w-full items-start gap-1 m-auto pl-4 pr-5 py-3 rounded-2xl border-solid border-violet-600 border-opacity-50 max-md:mt-12">
                            <img
                                loading="lazy"
                                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/a8c1ac9f-4f54-42ab-82ed-514a822b9314?apiKey=f5d1f74c978a473e8f57d978a4ec13be&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/a8c1ac9f-4f54-42ab-82ed-514a822b9314?apiKey=f5d1f74c978a473e8f57d978a4ec13be&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a8c1ac9f-4f54-42ab-82ed-514a822b9314?apiKey=f5d1f74c978a473e8f57d978a4ec13be&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/a8c1ac9f-4f54-42ab-82ed-514a822b9314?apiKey=f5d1f74c978a473e8f57d978a4ec13be&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/a8c1ac9f-4f54-42ab-82ed-514a822b9314?apiKey=f5d1f74c978a473e8f57d978a4ec13be&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a8c1ac9f-4f54-42ab-82ed-514a822b9314?apiKey=f5d1f74c978a473e8f57d978a4ec13be&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/a8c1ac9f-4f54-42ab-82ed-514a822b9314?apiKey=f5d1f74c978a473e8f57d978a4ec13be&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/a8c1ac9f-4f54-42ab-82ed-514a822b9314?apiKey=f5d1f74c978a473e8f57d978a4ec13be&" className="aspect-square object-cover object-center w-[38px] overflow-hidden shrink-0"
                                alt="Icon"
                            />
                            <div className="justify-center text-violet-600 text-opacity-50 text-xl font-semibold self-center my-auto">
                                Lets Talk
                            </div>
                        </div>
                    </a>
                    <a target="_blank" rel="noopener noreferrer" href="mailto:yuvarajsingh170@gmail.com" className="cursor-pointer flex flex-col items-stretch w-[46%] max-md:w-full">
                        <div className="border flex w-[246px] max-w-full items-start gap-1 m-auto pl-4 pr-5 py-3 rounded-2xl border-solid border-violet-600 border-opacity-50 max-md:mt-12">
                            <img
                                loading="lazy"
                                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/bfb6720f-d33d-47ef-861a-c9462fd8200a?apiKey=f5d1f74c978a473e8f57d978a4ec13be&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/bfb6720f-d33d-47ef-861a-c9462fd8200a?apiKey=f5d1f74c978a473e8f57d978a4ec13be&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/bfb6720f-d33d-47ef-861a-c9462fd8200a?apiKey=f5d1f74c978a473e8f57d978a4ec13be&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/bfb6720f-d33d-47ef-861a-c9462fd8200a?apiKey=f5d1f74c978a473e8f57d978a4ec13be&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/bfb6720f-d33d-47ef-861a-c9462fd8200a?apiKey=f5d1f74c978a473e8f57d978a4ec13be&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/bfb6720f-d33d-47ef-861a-c9462fd8200a?apiKey=f5d1f74c978a473e8f57d978a4ec13be&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/bfb6720f-d33d-47ef-861a-c9462fd8200a?apiKey=f5d1f74c978a473e8f57d978a4ec13be&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/bfb6720f-d33d-47ef-861a-c9462fd8200a?apiKey=f5d1f74c978a473e8f57d978a4ec13be&" className="aspect-square object-cover object-center w-10 overflow-hidden self-center shrink-0"
                                alt="Icon"
                            />
                            <div className="justify-center text-violet-600 text-opacity-50 text-xl font-semibold self-center my-auto">
                                Email
                            </div>
                        </div>
                    </a>
                </div>
            </div>
            <button
                className="justify-center text-violet-600 text-opacity-50 text-xl font-semibold self-center  my-auto"
                onClick={handleScrollToTop}
            >
                Scroll to Top<img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/65e0b83a-9757-4523-bfec-7898e77c8949?apiKey=f5d1f74c978a473e8f57d978a4ec13be&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/65e0b83a-9757-4523-bfec-7898e77c8949?apiKey=f5d1f74c978a473e8f57d978a4ec13be&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/65e0b83a-9757-4523-bfec-7898e77c8949?apiKey=f5d1f74c978a473e8f57d978a4ec13be&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/65e0b83a-9757-4523-bfec-7898e77c8949?apiKey=f5d1f74c978a473e8f57d978a4ec13be&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/65e0b83a-9757-4523-bfec-7898e77c8949?apiKey=f5d1f74c978a473e8f57d978a4ec13be&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/65e0b83a-9757-4523-bfec-7898e77c8949?apiKey=f5d1f74c978a473e8f57d978a4ec13be&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/65e0b83a-9757-4523-bfec-7898e77c8949?apiKey=f5d1f74c978a473e8f57d978a4ec13be&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/65e0b83a-9757-4523-bfec-7898e77c8949?apiKey=f5d1f74c978a473e8f57d978a4ec13be&" 
                    className="aspect-square inline object-cover object-center w-8 overflow-hidden shrink-0"
                    alt="Go To Top"
                />
            </button>
        </section>
    );
}