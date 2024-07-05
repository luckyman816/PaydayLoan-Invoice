import React from "react";
import dynamic from 'next/dynamic'
import HeaderLoader from '@/components/layout/header/loader';
import SiderLoader from '@/components/layout/sider/loader';



const Sider = dynamic(() => import("@/components/layout/sider"), { 
  ssr: false,
  loading: () => <SiderLoader/> 
});

const Header = dynamic(() => import("@/components/layout/header"), { 
  ssr: false,
  loading: () => <HeaderLoader/>
});

const Layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div className="p-4 bg-[url('/images/bg-light.svg')] dark:bg-[url('/images/bg-dark.svg')] bg-[#F7F7FB] dark:bg-[#030303] bg-cover bg-no-repeat w-[100vw] h-[100vh] fixed overflow-y-auto">
      <Header />
      <div className="flex mt-2 flex-col md:flex-row">
        <Sider />
        {children}
      </div>
    </div>
  );
};

export default Layout;
