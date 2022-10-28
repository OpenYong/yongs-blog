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
      <PageHeader>프로젝트</PageHeader>
      <p className="my-8 text-center">프로젝트 결과물, 공부📚</p>
      <AllProjects projects={projectsData.projectRepos} />
    </>
  );
};

export default ProjectPage;
