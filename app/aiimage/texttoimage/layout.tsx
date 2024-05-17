const LineDrawLayout = ({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className="bg-blue-300">
      <div>文生图layout</div>
      <main>{children}</main>
    </div>
  );
};

export default LineDrawLayout;
