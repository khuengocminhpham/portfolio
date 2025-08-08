import {
  HomeBlog,
  HomeBlogComponent,
  SectionCallToAction,
  SectionHero,
} from "@/devlink";
import getAllPosts from "@/lib/getAllPosts";
import { projects } from "./data/projects";

const Home = async () => {
  const feature = projects;

  return (
    <>
      <SectionHero />
      <HomeBlog
        header="PROJECTS"
        homeBlogComponent={feature.map((post) => (
          <HomeBlogComponent
            key={post.id}
            imageBlog={post.image}
            headingBlog={post.title}
            descBlog={post.desc}
            headingLink={{ href: `/projects/${post.id}` }}
            skills={post.skills}
          />
        ))}
        buttonText="VIEW ALL"
        blogBtnLink={{ href: "/projects" }}
      />
      <SectionCallToAction />
    </>
  );
};

export default Home;
