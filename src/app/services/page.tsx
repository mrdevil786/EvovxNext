import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";
import Services from "@/components/Services";


import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Service Page | Free Next.js Template for Startup and SaaS",
  description: "This is Service Page for Startup Nextjs Template",
  // other metadata
};

const ServicePage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Services Page"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero."
      />
     <Contact />
    </>
  );
};

export default ServicePage;