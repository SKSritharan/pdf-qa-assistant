import Navbar from "@/components/navbar";
import { Sidebar } from "@/components/sidebar";
import { Toaster } from "react-hot-toast";

const DashboardLayout = async ({ children }: { children: React.ReactNode }) => {

  return (
    <div className="h-full relative">
      <div className="hidden h-full md:flex md:w-72 md:flex-col md:fixed md:inset-y-0 z-80 bg-gray-900">
        <Sidebar />
      </div>
      <main className="md:pl-72 pb-10">
        <Navbar />
        {children}
      </main>
      <Toaster />
    </div>
  );
};

export default DashboardLayout;
