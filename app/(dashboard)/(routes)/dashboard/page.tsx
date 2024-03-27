import FileUpload from "@/components/file-upload";
import React from "react";

const DashboardPage = () => {
  return (
    <div className="bg-gradient-to-r from-rose-100 to-teal-100">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center">
            <h1 className="mr-3 text-5xl font-semibold">PDF Q&A Assistant</h1>
          </div>

          <p className="max-w-xl mt-1 text-lg text-slate-600">
            Simplify your PDF document analysis and question answering process
            with our PDF Q&A Assistant.
          </p>

          <div className="w-full mt-4">
            <FileUpload />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
