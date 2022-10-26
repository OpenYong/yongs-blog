import { useEffect } from "react";
import PageHeader from "../components/ui/PageHeader";

const ProjectPage = () => {
  useEffect(() => {
    const fetchData = async () => {
      const responseData = await fetch(`/api/projects`).then((res) =>
        res.json()
      );

      const repos = await responseData;

      console.log(repos);
      // console.log(responseData.repos);
    };

    fetchData();
  }, []);

  return (
    <div>
      <PageHeader>업데이트 예정🔧</PageHeader>
    </div>
  );
};

export default ProjectPage;
