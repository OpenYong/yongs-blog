import { useEffect } from "react";
import useSWR from "swr";
import PageHeader from "../components/ui/PageHeader";
import AllProjects from "../components/projects/AllProjects";

const ProjectPage = () => {
  const { data: projectsData, error } = useSWR("/api/projects");

  if (error) return <div>failed to load</div>;
  if (!projectsData) return <div>loading...</div>;

  return (
    <>
      <PageHeader>업데이트 예정🔧</PageHeader>
      <AllProjects projects={projectsData.projectRepos} />
    </>
  );
};

export default ProjectPage;
