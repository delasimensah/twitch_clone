import { ReactNode } from "react";

import { Logo } from "./_components/logo";

type AuthLayoutProps = {
  children: ReactNode;
};

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <div className="h-full flex flex-col items-center justify-center space-y-6">
      <Logo />

      {children}
    </div>
  );
};

export default AuthLayout;
