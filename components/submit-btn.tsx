"use client";
import React from "react";
import { FaPaperPlane } from "react-icons/fa";
import { experimental_useFormStatus as useFormStatus } from "react-dom";

export default function SubmitBtn() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      className="group cursor-pointer h-[3rem] w-[8rem]
  bg-gray-900 text-white rounded-full outline-none
  transition-all flex items-center justify-center gap-2
  focus:scale-110 hover:scale-110
     hover:bg-gray-950 active-scale-105 dark:bg-white dark:bg-opacity-10"
    >
      {pending ? (
        <div className="h-5 w-5 animate-spin rounded-full border-b-2"></div>
      ) : (
        <>
          Submit{" "}
          <FaPaperPlane
            className="text-sx opacity-70 transition-all
    group-hover:translate-x-1
    group-hover:-translate-y-1
    "
          />
        </>
      )}
    </button>
  );
}
