import React from "react";
import { CodeBracketIcon, EyeIcon, ChatAltIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl }) => {
  return (
    <div className="relative overflow-hidden rounded-xl shadow-lg bg-gray-900 hover:shadow-2xl transition duration-300">
      <div className="h-64 md:h-72 bg-cover bg-center relative">
        <div className="overlay absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition duration-300 bg-black bg-opacity-50">
          <Link href={gitUrl}>
            <CodeBracketIcon className="h-10 w-10 text-gray-400 hover:text-white mr-2" />
          </Link>
          <Link href={previewUrl}>
            <EyeIcon className="h-10 w-10 text-gray-400 hover:text-white" />
          </Link>
        </div>
        <img src={imgUrl} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="p-6 bg-gray-800">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p className="text-gray-400">{description}</p>
        <Link href={gitUrl}>
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
