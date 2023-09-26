"use client";

import { useRouter } from "next/navigation";
import { CustomButton } from ".";
import { ShowMoreProps } from "@/types";
import { updateSearchParams } from "@/utils";
const ShowMore = ({ pageNumber, isNext, setLimit }: ShowMoreProps) => {
  const handelNavigation = () => {
    const newLimit = (pageNumber + 1) * 10;

    setLimit(newLimit);
  };
  return (
    <div className="w-full flex-center gap-5 mt-10">
      {!isNext && (
        <CustomButton
          title="Show More"
          btnType="button"
          containerStyles="bg-primary-blue rounded-full text-white"
          handleClick={handelNavigation}
        ></CustomButton>
      )}
    </div>
  );
};

export default ShowMore;
