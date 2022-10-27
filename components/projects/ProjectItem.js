import React from "react";

const ProjectItem = ({ project }) => {
  const { name, description, language, url, homepage } = project;
  return (
    <div className="flex h-64 flex-col justify-between rounded-md border-0 bg-neutral-400/5 p-4 shadow-lg shadow-neutral-200/50">
      <div>
        <h1 className="text-xl font-medium">{name}</h1>
        <p className="pt-4 pb-4 text-gray-500">{description}</p>
      </div>
      <div className="bottom-0 flex justify-end">
        <p className="text-sm text-gray-500">
          <span></span>
          {language}
        </p>
      </div>
    </div>
  );
};

export default ProjectItem;
