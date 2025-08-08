"use client";
import { Next, Previous } from "@/devlink";
import { useSearchParams } from "next/navigation";
import React from "react";

const Pagination = ({ next, prev }) => {
  const searchParams = useSearchParams();

  const page = searchParams.get("page") ?? "1";
  const per_page = searchParams.get("per_page") ?? "5";

  return (
    <>
      <Previous
        hide={next && prev}
        hidden={prev}
        back={{
          href: `/projects?page=${Number(page) - 1}&per_page=${per_page}`,
        }}
      />
      {next && (
        <Next
          hide={next && prev}
          next={{
            href: `/projects?page=${Number(page) + 1}&per_page=${per_page}`,
          }}
        />
      )}
    </>
  );
};

export default Pagination;
