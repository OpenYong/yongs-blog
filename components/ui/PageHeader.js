const PageHeader = (props) => {
  return (
    <h1 className="text-2xl font-bold pt-16 pb-8 text-center">
      {props.children}
    </h1>
  );
};

export default PageHeader;
