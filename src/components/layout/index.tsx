import Header from "./header";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <main className="h-screen">
      <Header />
      <div className="h-[calc(100%-8%)]">{children}</div>
    </main>
  );
};

export default Layout;
