const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="h-full bg-[#161618] flex items-center justify-center">
      {children}
    </main>
  );
};

export default AuthLayout;
