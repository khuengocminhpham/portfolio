import { PostBody, PostTop } from "@/devlink";
import React from "react";
import { notFound } from "next/navigation";
import { projects } from "@/app/data/projects";
export async function generateMetadata({ params }) {
  const post = projects.find((p) => p.id == params.id);
  //console.log(post);

  if (!post.title) {
    return {
      title: "Title Not Found",
    };
  }
  return {
    title: post.title,
  };
}

const Post = async ({ params }) => {
  const data = projects.find((p) => p.id == params.id);
  if (!data.title) notFound();
  return (
    <div>
      <PostTop heading={data.title} />
      <PostBody image={data.image} richText={data.desc} />
    </div>
  );
};

export default Post;
