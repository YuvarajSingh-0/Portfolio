import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faHtml5 } from '@fortawesome/free-brands-svg-icons'
import { faReact, faHtml5, faSquareJs, faGithub, faPython, faNodeJs, faDocker, faAws } from '@fortawesome/free-brands-svg-icons'
import { IconBrandTailwind } from '@tabler/icons-react';
import { IconBrandNextjs } from '@tabler/icons-react';
import { IconBrandTerraform } from '@tabler/icons-react';

export default function TechnologiesAndSkills() {
    return (
        <div id="Skills">
            <div className="self-center mx-auto flex max-w-full flex-col mt-36 px-5">
                <button className="text-violet-500 w-max mx-auto text-center tracking-wider font-bold bg-violet-600 bg-opacity-10 rounded-lg px-3 py-1 ">
                    👨‍⚖️ Skills | Experinces
                </button>
                <h1 className="text-white text-center text-5xl font-extrabold self-stretch mt-9 max-md:max-w-full max-md:text-4xl">
                    Technologies & Skills
                </h1>
            </div>
            <div className="self-center flex w-full max-w-full flex-col mt-28 px-5">
                <h2 className="justify-center text-white text-opacity-50 text-center text-2xl self-center max-w-[568px]">
                    Techs I use on a daily Basis
                </h2>
                <div className="flex overflow-x-scroll items-center max-[1100px]:justify-start justify-center mt-10 gap-10">
                    <FontAwesomeIcon icon={faReact} className="text-[rgba(123,74,226,0.5)] text-8xl " />
                    <FontAwesomeIcon icon={faHtml5} className="text-[rgba(123,74,226,0.5)] text-8xl " />
                    <FontAwesomeIcon icon={faSquareJs} className="text-[rgba(123,74,226,0.5)] text-8xl " />
                    <IconBrandTailwind className="text-transparent shrink-0 text-8xl w-24 h-24 " fill="rgba(123,74,226,0.6)" />
                    <FontAwesomeIcon icon={faGithub} className="text-[rgba(123,74,226,0.5)] text-8xl " />
                    <FontAwesomeIcon icon={faPython} className="text-[rgba(123,74,226,0.5)] text-8xl " />
                    <img src="./mongodb.svg"
                        className="object-contain w-24 aspect-square shrink-0"
                        alt="mongodb"
                    />
                    <FontAwesomeIcon icon={faNodeJs} className="text-[rgba(123,74,226,0.5)] text-8xl " />
                </div>
                <h2 className="justify-center text-white text-opacity-50 text-center text-2xl self-center max-w-[568px] mt-16 max-md:max-w-full">
                    Other Techs I have worked with
                </h2>
                <div className="flex items-center justify-center mt-10 gap-9">
                    <IconBrandNextjs className="text-[rgba(123,74,226,0.5)] shrink-0 text-8xl w-16 h-16" />
                    <FontAwesomeIcon icon={faDocker} className="text-[rgba(123,74,226,0.5)] text-5xl" />
                    <img src="./postgres.svg" alt="postgres" className="w-16 aspect-square object-contain" />
                    <IconBrandTerraform className="text-[rgba(123,74,226,0.5)] shrink-0 text-8xl w-16 h-16" />
                    <FontAwesomeIcon icon={faAws} className="text-[rgba(123,74,226,0.5)] text-5xl" />
                </div>

            </div>
        </div>
    );
}