import Agechecker from "@/components/Projects/Agechecker";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | Age-Checker",
  description: "Home page ",
};

const page = () => {
  return (
    <>
      <div className="grid h-[90dvh] place-items-center">
        <div className="">
          <Agechecker />
        </div>
      </div>
    </>
  );
};

export default page;
