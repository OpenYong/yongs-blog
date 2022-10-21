const PageHeader = (props) => {
  return (
    <h1 className="text-2xl font-bold mt-16 mb-8 text-center">
      {props.children}
    </h1>
  );
};

export default PageHeader;
