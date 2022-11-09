import Link from "next/link";
import { FiExternalLink, FiGithub } from "react-icons/fi";

const ProjectItem = ({ project }) => {
  const { name, description, language, url, homepage } = project;
  return (
    <div className="group visible flex h-64 flex-col justify-between rounded-md border-0 bg-neutral-400/5 p-4 shadow-lg shadow-neutral-200/50 transition duration-300 hover:scale-105 hover:shadow-xl">
      <div>
        <h1 className="text-xl font-medium">{name}</h1>
        <p className="pt-4 pb-4 text-gray-500">{description}</p>
      </div>
      <div className="bottom-0 flex justify-between">
        <p className="text-sm text-gray-500">{language}</p>

        <div className="flex gap-4 opacity-0 transition duration-300 group-hover:opacity-100">
          {url && (
            <Link href={url}>
              <a target="_blank">
                <FiGithub />
              </a>
            </Link>
          )}
          {homepage && (
            <Link href={homepage}>
              <a>
                <FiExternalLink />
              </a>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
