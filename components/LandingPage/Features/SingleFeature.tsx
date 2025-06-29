import React from "react";
import { Feature } from "@/types/feature";
import Image from "next/image";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, description } = feature;

  return (
    <>
      <div className="animate_top shadow-solid-3 hover:shadow-solid-4 dark:border-strokedark dark:bg-blacksection dark:hover:bg-hoverdark z-40 rounded-lg border border-white bg-white p-7.5 transition-all xl:p-12.5">
        <div className="bg-primary relative flex h-16 w-16 items-center justify-center rounded-[4px]">
          <Image src={icon} width={36} height={36} alt="title" />
        </div>
        <h3 className="xl:text-itemtitle mt-7.5 mb-5 text-xl font-semibold text-black dark:text-white">
          {title}
        </h3>
        <p>{description}</p>
      </div>
    </>
  );
};

export default SingleFeature;
