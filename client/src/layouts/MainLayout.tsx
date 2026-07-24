import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

type MainLayoutProps = {
  children: React.ReactNode;
};

function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="flex min-h-screen bg-zinc-950">
      <Sidebar />

      <main className="flex-1 p-8 text-white">
        <Navbar />

        <div className="mt-8">
          {children}
        </div>
      </main>
    </div>
  );
}

export default MainLayout;