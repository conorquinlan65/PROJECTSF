"use client";
import React, { useState } from "react";
import { FaCertificate } from "react-icons/fa";
import TabButton from "./TabButton";
import AWSIcon from '/Users/conorquinlan/Desktop/GitHub/PROJECTSF/web-dev-portfolio/public/images/certification_icons/aws_cp.png'; // Replace with your actual import path

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-5">
        <li>React</li>
        <li>Python</li>
        <li>GitHub Actions</li>
        <li>Terraform</li>
        <li>AWS</li>
        <li>TailwindCSS</li>
        <li>GSuite</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-5">
        <li>AWS Cloud Practitioner</li>
        <li>Sumo Logic Certified
          <ul className="list-disc pl-6">
            <li>Cloud SIEM Fundamentals</li>
            <li>Search Mastery</li>
            <li>Fundamentals</li>
          </ul>
        </li>
        <li>[PCEP-30-02] PCEP – Certified Entry-Level Python Programmer</li>
        <li>Tines Certified</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");

  const handleTabChange = (id) => {
    setTab(id);
  };

  return (
    <section className="text-white" id="about">
      <div className="py-8">

      </div>
      <div className="md:grid md:grid-cols-3 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <div className="col-span-1 grid grid-cols-2 gap-8">
          {/* Icons arranged in a 2x2 grid */}
          {[...Array(4)].map((_, index) => (
            <FaCertificate
              key={index}
              size={100}
              className="cursor-pointer text-blue-500 hover:text-blue-400"
              onClick={() => handleTabChange("certifications")}
            />
          ))}
        </div>
        <div className="col-span-2 text-left">
          <h2 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a Security Engineer with extensive experience in building cloud products focused on security.
            My projects range from developing Cloud Threat Vulnerability Management (TVM) systems, automating workflows
            in Looker Studio, to overseeing deployment to production environments.
          </p>
          <div className="flex flex-row justify-start space-x-4 mt-8">
            <TabButton
              active={tab === "skills"}
              selectTab={() => handleTabChange("skills")}
            >
              Skills
            </TabButton>
            <TabButton
              active={tab === "certifications"}
              selectTab={() => handleTabChange("certifications")}
            >
              Certifications
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
