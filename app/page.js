import {
  HomeBlog,
  HomeBlogComponent,
  SectionCallToAction,
  SectionHero,
} from "@/devlink";
import getAllPosts from "@/lib/getAllPosts";

const Home = async () => {
  const data = await getAllPosts();
  const feature = data.filter(({ feature }) => {
    return feature;
  });

  return (
    <>
      <SectionHero />
      <HomeBlog
        header="PROJECTS"
        homeBlogComponent={feature.map((post) => (
          <HomeBlogComponent
            key={post._id}
            blogLink={{ href: `/blog/${post._id}` }}
            imageBlog={post.image}
            headingBlog={post.title}
            catBlog={post.cat}
          />
        ))}
        buttonText="VIEW ALL"
        blogBtnLink={{ href: "/blog" }}
      />
      <SectionCallToAction />
    </>
  );
};

export default Home;
