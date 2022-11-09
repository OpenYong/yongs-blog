const ProjectItemSkeleton = () => {
  let list = [];
  for (let index = 0; index < 3; index++) {
    list.push(
      <div className="group visible flex h-64 animate-pulse flex-col justify-between rounded-md border-0 bg-neutral-400/5 p-4 shadow-lg shadow-neutral-200/50 transition ">
        <div className="space-y-3">
          <div className="h-6 w-32 rounded-md bg-neutral-400/20"></div>
          <p className="h-12 w-full rounded-md bg-neutral-400/10"></p>
        </div>
        <div className="bottom-0 h-6 w-32 rounded-md bg-neutral-400/10"></div>
      </div>
    );
  }
  return (
    <div className="mb-16 grid grid-cols-2 gap-4 px-4 md:grid-cols-3">
      {list}
    </div>
  );
};

export default ProjectItemSkeleton;
