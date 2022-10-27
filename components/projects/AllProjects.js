import ProjectItem from "./ProjectItem";

const AllProjects = ({ projects }) => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {projects.map((project) => (
        <ProjectItem project={project} />
      ))}
    </div>
  );
};

export default AllProjects;
