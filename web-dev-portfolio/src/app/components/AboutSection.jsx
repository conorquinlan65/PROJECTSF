"use client";
import React, {useTransition, useState} from "react";
import Image from "next/image";
import NavLink from "./NavLink";
/* MD = Mobile Development */

const AboutSection = ({links}) => {
    const [tab,setTab] = useState("skills");
    const [startTransition, isPending] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        });
    }
    return (
        <section className="text-white">
            <div className="md:grid md:grid-cols-2 gap-8 itmes-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
                <Image src="/images/about-image.png" width={500} height={500}/>
                <div>
                    <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
                    <p className="text-base lg:text-lg">
                        This is the description about me
                    </p>
                    <div className="flex flex-row mt-8">
                        <span className="mr-3 font-semibold hover:text-white text-[#ADB7BE] border-b border-purple-500">
                            Skills
                        </span>
                        <span>Education</span>
                        <span>Experience</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;