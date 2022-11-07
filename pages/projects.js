import useSWR from "swr";
import PageHeader from "../components/ui/PageHeader";
import AllProjects from "../components/projects/AllProjects";
import ProjectItemSkeleton from "../components/ui/ProjectItemSkeleton";

const ProjectPage = () => {
  const { data: projectsData, error } = useSWR("/api/projects");

  let isLoading = true;
  if (projectsData) {
    isLoading = false;
  }

  return (
    <>
      <PageHeader>프로젝트</PageHeader>
      <p className="my-8 text-center">프로젝트 결과물, 공부📚</p>
      {isLoading && <ProjectItemSkeleton />}
      {!isLoading && <AllProjects projects={projectsData.projectRepos} />}
    </>
  );
};

export default ProjectPage;
