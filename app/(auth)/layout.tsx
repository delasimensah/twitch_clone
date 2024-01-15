import { ReactNode } from "react";
import { Logo } from "./_components/logo";

type AuthLayoutProps = {
  children: ReactNode;
};

const AuthLayout = (props: AuthLayoutProps) => {
  const { children } = props;

  return (
    <div className="h-full flex items-center justify-center">
      <Logo />

      {children}
    </div>
  );
};

export default AuthLayout;
