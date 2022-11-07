import ProjectItem from "./ProjectItem";

const AllProjects = ({ projects }) => {
  return (
    <div className="mb-16 grid grid-cols-2 gap-4 px-4 md:grid-cols-3">
      {projects
        .slice()
        .reverse()
        .map((project) => (
          <ProjectItem project={project} />
        ))}
    </div>
  );
};

export default AllProjects;
