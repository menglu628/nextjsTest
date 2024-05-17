const LineDrawLayout = ({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className="bg-red-300">
      <div>线稿layout</div>
      <main>{children}</main>
    </div>
  );
};

export default LineDrawLayout;
