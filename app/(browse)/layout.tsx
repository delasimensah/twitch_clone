import { ReactNode } from "react";

import { Navbar } from "./_components/navbar";
import { Sidebar } from "./_components/sidebar";
import { Container } from "./_components/container";

type BrowseLayoutProps = {
  children: ReactNode;
};

const BrowseLayout = ({ children }: BrowseLayoutProps) => {
  return (
    <>
      <Navbar />

      <div className="flex h-full pt-20">
        <Sidebar />

        <Container>{children}</Container>
      </div>
    </>
  );
};

export default BrowseLayout;
