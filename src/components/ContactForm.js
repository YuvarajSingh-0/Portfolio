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
            <div className="self-stretch mt-20 max-md:max-w-full">
                <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                    <div className="flex flex-col items-stretch w-[46%] max-md:w-full">
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
                    </div>
                    <div className="flex flex-col items-stretch w-[54%] ml-5 max-md:w-full">
                        <div className="flex grow flex-col max-md:mt-11">
                            <img
                                loading="lazy"
                                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/bfb6720f-d33d-47ef-861a-c9462fd8200a?apiKey=f5d1f74c978a473e8f57d978a4ec13be&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/bfb6720f-d33d-47ef-861a-c9462fd8200a?apiKey=f5d1f74c978a473e8f57d978a4ec13be&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/bfb6720f-d33d-47ef-861a-c9462fd8200a?apiKey=f5d1f74c978a473e8f57d978a4ec13be&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/bfb6720f-d33d-47ef-861a-c9462fd8200a?apiKey=f5d1f74c978a473e8f57d978a4ec13be&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/bfb6720f-d33d-47ef-861a-c9462fd8200a?apiKey=f5d1f74c978a473e8f57d978a4ec13be&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/bfb6720f-d33d-47ef-861a-c9462fd8200a?apiKey=f5d1f74c978a473e8f57d978a4ec13be&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/bfb6720f-d33d-47ef-861a-c9462fd8200a?apiKey=f5d1f74c978a473e8f57d978a4ec13be&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/bfb6720f-d33d-47ef-861a-c9462fd8200a?apiKey=f5d1f74c978a473e8f57d978a4ec13be&" className="aspect-square object-cover object-center w-10 overflow-hidden self-center shrink-0"
                                alt="Icon"
                            />
                            <div className="justify-center text-violet-600 text-center text-xl self-center mt-2.5">
                                E-mail:
                            </div>
                            <div className="justify-center text-white text-opacity-50 text-center text-xl self-stretch mt-5">
                                <a
                                    href="mailto:henriquesousa.dev@gmail.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    henriquesousa.dev@gmail.com
                                </a>
                            </div>
                            <img
                                loading="lazy"
                                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/543c8331-0b8e-415a-b614-f81f5f7a5aed?apiKey=f5d1f74c978a473e8f57d978a4ec13be&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/543c8331-0b8e-415a-b614-f81f5f7a5aed?apiKey=f5d1f74c978a473e8f57d978a4ec13be&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/543c8331-0b8e-415a-b614-f81f5f7a5aed?apiKey=f5d1f74c978a473e8f57d978a4ec13be&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/543c8331-0b8e-415a-b614-f81f5f7a5aed?apiKey=f5d1f74c978a473e8f57d978a4ec13be&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/543c8331-0b8e-415a-b614-f81f5f7a5aed?apiKey=f5d1f74c978a473e8f57d978a4ec13be&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/543c8331-0b8e-415a-b614-f81f5f7a5aed?apiKey=f5d1f74c978a473e8f57d978a4ec13be&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/543c8331-0b8e-415a-b614-f81f5f7a5aed?apiKey=f5d1f74c978a473e8f57d978a4ec13be&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/543c8331-0b8e-415a-b614-f81f5f7a5aed?apiKey=f5d1f74c978a473e8f57d978a4ec13be&" className="aspect-square object-cover object-center w-8 overflow-hidden self-center shrink-0 mt-5"
                                alt="Icon"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <button
                className="justify-center text-violet-600 text-opacity-50 text-xl font-semibold self-center w-[145px] my-auto"
                onClick={handleScrollToTop}
            >
                <span>Scroll to Top</span> <span className="inline"><img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/65e0b83a-9757-4523-bfec-7898e77c8949?apiKey=f5d1f74c978a473e8f57d978a4ec13be&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/65e0b83a-9757-4523-bfec-7898e77c8949?apiKey=f5d1f74c978a473e8f57d978a4ec13be&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/65e0b83a-9757-4523-bfec-7898e77c8949?apiKey=f5d1f74c978a473e8f57d978a4ec13be&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/65e0b83a-9757-4523-bfec-7898e77c8949?apiKey=f5d1f74c978a473e8f57d978a4ec13be&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/65e0b83a-9757-4523-bfec-7898e77c8949?apiKey=f5d1f74c978a473e8f57d978a4ec13be&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/65e0b83a-9757-4523-bfec-7898e77c8949?apiKey=f5d1f74c978a473e8f57d978a4ec13be&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/65e0b83a-9757-4523-bfec-7898e77c8949?apiKey=f5d1f74c978a473e8f57d978a4ec13be&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/65e0b83a-9757-4523-bfec-7898e77c8949?apiKey=f5d1f74c978a473e8f57d978a4ec13be&" className="aspect-square object-cover object-center w-8 overflow-hidden shrink-0"
                    alt="Description of the image"
                /></span>
            </button>
        </section>
    );
}