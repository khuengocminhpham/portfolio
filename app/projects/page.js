import Pagination from "@/components/Pagination";
import {
  BlogBody,
  BlogComponent,
  BlogTop,
  SectionCallToAction,
} from "@/devlink";
import React from "react";
import { projects } from "../data/projects";

const Projects = async ({ searchParams }) => {
  const posts = projects;

  const page = searchParams["page"] ?? "1";
  const per_page = searchParams["per_page"] ?? "5";

  const start = (Number(page) - 1) * Number(per_page);
  const end = start + Number(per_page);

  const data = posts.slice(start, end);

  return (
    <div>
      <BlogTop headingTopText="Projects" />
      <BlogBody
        blogComponent={data.map((post) => (
          <BlogComponent
            key={post.id}
            imageBlog={post.image}
            headingBlog={post.title}
            descBlog={post.desc}
            headingLink={{ href: `/projects/${post.id}` }}
            skills={post.skills}
          />
        ))}
        pagination={<Pagination next={end < posts.length} prev={start > 1} />}
      />

      <SectionCallToAction />
    </div>
  );
};

export default Projects;
