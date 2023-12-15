import React, { useEffect, useState } from 'react'
import { Link } from 'react-scroll';

function NavBar() {
    const [url, setUrl] = useState('Home');
    useEffect(() => {
        console.log(url);
    }, [url]);

    const handleButtonClick = (e) => {
        e.preventDefault();
        setUrl(e.target.innerText);
    };

    return (
        <nav className="hidden md:flex sticky top-4 bg-violet-950 bg-opacity-30 backdrop-blur-lg rounded-2xl px-5 py-3 self-center w-full  items-start justify-between gap-5 mb-px max-md:max-w-full max-md:flex-wrap " >
            <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/ad1cbdd3-63a5-4ebe-8b44-0741e14f30ea?apiKey=f5d1f74c978a473e8f57d978a4ec13be&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/ad1cbdd3-63a5-4ebe-8b44-0741e14f30ea?apiKey=f5d1f74c978a473e8f57d978a4ec13be&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ad1cbdd3-63a5-4ebe-8b44-0741e14f30ea?apiKey=f5d1f74c978a473e8f57d978a4ec13be&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/ad1cbdd3-63a5-4ebe-8b44-0741e14f30ea?apiKey=f5d1f74c978a473e8f57d978a4ec13be&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/ad1cbdd3-63a5-4ebe-8b44-0741e14f30ea?apiKey=f5d1f74c978a473e8f57d978a4ec13be&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ad1cbdd3-63a5-4ebe-8b44-0741e14f30ea?apiKey=f5d1f74c978a473e8f57d978a4ec13be&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/ad1cbdd3-63a5-4ebe-8b44-0741e14f30ea?apiKey=f5d1f74c978a473e8f57d978a4ec13be&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/ad1cbdd3-63a5-4ebe-8b44-0741e14f30ea?apiKey=f5d1f74c978a473e8f57d978a4ec13be&"
                alt="Logo"
                className="aspect-[0.9] object-cover object-center w-9 overflow-hidden shrink-0"
            />
            <div className="self-center flex w-[691px] max-w-full items-start justify-between gap-5 my-auto max-md:flex-wrap max-md:justify-center">
                <Link to='Home' offset={-220} spy={true} onSetActive={() => setUrl('Home')} smooth>
                    <button
                        onClick={handleButtonClick}
                        className="text-center text-lg font-semibold"
                    >
                        <span className={`${url === 'Home' ? 'bg-[20%]' : 'bg-[80%]'} justify-center bg-no-repeat transition-[background] duration-700 ease-in-out bg-[url('./images/whitevioletbg.jpg')] bg-clip-text text-transparent hover:bg-[20%]`}>Home</span>
                    </button>
                </Link>
                <Link to='AboutMe' spy={true} offset={-220} smooth onSetActive={() => setUrl('About Me')}>
                    <button
                        onClick={handleButtonClick}
                        className="text-center text-lg font-semibold"
                    >
                        <span className={`${url === 'About Me' ? 'bg-[20%]' : 'bg-[80%]'} justify-center bg-no-repeat transition-[background] duration-700 ease-in-out bg-[url('./images/whitevioletbg.jpg')] bg-clip-text text-transparent hover:bg-[20%]`}>About Me</span>
                    </button>
                </Link>
                <Link to='Projects' offset={-130} spy={true} onSetActive={() => setUrl('Projects')} smooth>
                    <button
                        onClick={handleButtonClick}
                        className="text-center text-lg font-semibold"
                    >
                        <span className={`${url === 'Projects' ? 'bg-[20%]' : 'bg-[80%]'} justify-center bg-no-repeat transition-[background] duration-700 ease-in-out bg-[url('./images/whitevioletbg.jpg')] bg-clip-text text-transparent hover:bg-[20%]`}>Projects</span>

                    </button>
                </Link>
                <Link to='Skills' offset={-210} spy={true} onSetActive={() => setUrl('Skills')} smooth>
                    <button
                        onClick={handleButtonClick}
                        className="text-center text-lg font-semibold"
                    >
                        <span className={`${url === 'Skills' ? 'bg-[20%]' : 'bg-[80%]'} justify-center bg-no-repeat transition-[background] duration-700 ease-in-out bg-[url('./images/whitevioletbg.jpg')] bg-clip-text text-transparent hover:bg-[20%]`}>Skills</span>

                    </button>
                </Link>
                <Link to='Contact' offset={-360} spy={true} onSetActive={() => setUrl('Contact')} smooth>
                    <button
                        onClick={handleButtonClick}
                        className="text-center text-lg font-semibold"
                    >
                        <span className={`justify-center bg-no-repeat transition-[background] duration-700 ease-in-out bg-[url('./images/whitevioletbg.jpg')] bg-clip-text text-transparent hover:bg-[20%] ${url === 'Contact' ? 'bg-[20%]' : 'bg-[80%]'}`}>Contact</span>

                    </button>
                </Link>

            </div>
        </nav>
    )
}

export default NavBar