type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className="bg-slate-300 h-full">
      <div>aiimage layout</div>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
