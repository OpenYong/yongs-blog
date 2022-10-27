import { useEffect } from "react";
import useSWR from "swr";
import PageHeader from "../components/ui/PageHeader";

const ProjectPage = () => {
  const { data: projectsData, error } = useSWR("/api/projects");

  console.log(projectsData);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const responseData = await fetch(`/api/projects`).then((res) =>
  //       res.json()
  //     );

  //     const repos = await responseData;

  //     console.log(repos);
  //     // console.log(responseData.repos);
  //   };

  //   fetchData();
  // }, []);

  if (error) return <div>failed to load</div>;
  if (!projectsData) return <div>loading...</div>;

  return (
    <>
      <PageHeader>업데이트 예정🔧</PageHeader>
      <div></div>
    </>
  );
};

export default ProjectPage;
