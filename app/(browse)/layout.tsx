import { ReactNode } from "react";
import { Navbar } from "./_components/navbar";

type BrowseLayoutProps = {
  children: ReactNode;
};

const BrowseLayout = (props: BrowseLayoutProps) => {
  const { children } = props;

  return (
    <>
      <Navbar />

      <div className="flex h-full pt-20">{children}</div>
    </>
  );
};

export default BrowseLayout;
