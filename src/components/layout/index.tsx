import Header from "./header";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <main className="h-screen">
      <Header />
      {children}
    </main>
  );
};

export default Layout;
