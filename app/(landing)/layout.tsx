const LandingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="h-full bg-[#161618] overflow-auto  bg-[url('/LooperGroup2.png')] bg-no-repeat">
      <div className="mx-auto max-w-screen-xl h-full w-full">{children}</div>
    </main>
  );
};

export default LandingLayout;
