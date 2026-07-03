import React, { useState } from "react";
import Link from "next/link";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { BsArrowRight } from "react-icons/bs";
import { useTheme } from "../layout";
import format from "date-fns/format";
import { PostsType } from "../../pages";
import { tinaField } from "tinacms/dist/react";
import { PostFilter } from "./postFilter";

// ─── Constants ───────────────────────────────────────────────────────────────

const TITLE_COLOR_CLASSES: Record<string, string> = {
  blue:   "group-hover:text-blue-600 dark:group-hover:text-blue-300",
  teal:   "group-hover:text-teal-600 dark:group-hover:text-teal-300",
  green:  "group-hover:text-green-600 dark:group-hover:text-green-300",
  red:    "group-hover:text-red-600 dark:group-hover:text-red-300",
  pink:   "group-hover:text-pink-600 dark:group-hover:text-pink-300",
  purple: "group-hover:text-purple-600 dark:group-hover:text-purple-300",
  orange: "group-hover:text-orange-600 dark:group-hover:text-orange-300",
  yellow: "group-hover:text-yellow-500 dark:group-hover:text-yellow-300",
};

// ─── Sub-components ──────────────────────────────────────────────────────────

interface PostCardProps {
  postData: PostsType;
  titleColorClass: string;
}

const PostCard = ({ postData, titleColorClass }: PostCardProps) => {
  const post = postData.node;
  const date = new Date(post.date);
  const formattedDate = !isNaN(date.getTime()) ? format(date, "MMM dd, yyyy") : "";

  return (
    <Link
      key={post._sys.filename}
      href={`/posts/${post._sys.filename}`}
      className="group lg:basis-[30%] lg:w-[400px] max-w-[400px] max-h-[400px] mx-5 my-10 mb-8 last:mb-0"
    >
      {post.heroImg && (
        <div className="relative w-full">
          <div
            data-tina-field={tinaField(post, "heroImg")}
            className="absolute block z-0 overflow-hidden"
          >
            <img
              src={post.heroImg}
              alt={post.title}
              className="relative w-full rounded-lg h-[400px] object-cover"
            />
          </div>
        </div>
      )}

      <div className="invisible relative group-hover:visible bg-gray-50 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-1000 rounded-md shadow-sm h-[400px] overflow-scroll hover:shadow-md hover:to-gray-50 dark:hover:to-gray-800 z-[10]">
        <h3 className={`text-gray-700 dark:text-white text-2xl lg:text-3xl text-center font-semibold title-font mb-5 ${titleColorClass}`}>
          {post.title}
          <span className="inline-block opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out">
            <BsArrowRight className="inline-block h-8 -mt-1 ml-1 w-auto opacity-70" />
          </span>
        </h3>


        <div className="prose dark:prose-dark w-full max-w-none p-4 opacity-70">
          <TinaMarkdown content={post.excerpt} />
        </div>
      </div>
    </Link>
  );
};

// ─── Section ─────────────────────────────────────────────────────────────────

interface PostSectionProps {
  title: string;
  posts: PostsType[];
  titleColorClass: string;
}

const PostSection = ({ title, posts, titleColorClass }: PostSectionProps) => {
  if (posts.length === 0) return null;

  return (
    <section className="w-full mb-16">
      <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8 border-b border-gray-200 dark:border-gray-700 pb-3">
        {title}
      </h2>
      <div className="flex flex-wrap justify-start">
        {posts.map((postData) => (
          <PostCard
            key={postData.node._sys.filename}
            postData={postData}
            titleColorClass={titleColorClass}
          />
        ))}
      </div>
    </section>
  );
};

// ─── Main Component ───────────────────────────────────────────────────────────

export const Posts = ({ data }: { data: PostsType[] }) => {
  const theme = useTheme();
  const titleColorClass = TITLE_COLOR_CLASSES[theme.color] ?? "";

  const [postType, setPostType] = useState("all");

  const handleFilter = (e: React.MouseEvent<HTMLElement>) => {
    setPostType(e.currentTarget.textContent?.toLowerCase() ?? "all");
  };

const filteredPosts = data.filter(
  ({ node }) => postType === "all" || node.type?.includes(postType)
);

// Posts with no status default to "ongoing"
const ongoingPosts = filteredPosts.filter(
  ({ node }) => !node.status || node.status === "ongoing"
);

const archivePosts = filteredPosts.filter(
  ({ node }) => node.status === "archive"
);

// Add this 👇
console.log("Posts and their statuses:", filteredPosts.map(({ node }) => ({
  title: node.title,
  status: node.status,
})));
// Add this to catch posts with no status set yet
const unassignedPosts = filteredPosts.filter(
  ({ node }) => !node.status || (node.status !== "ongoing" && node.status !== "archive")
);

  return (
    <>
      <PostFilter postType={postType} onChange={handleFilter} />

      <PostSection
        title="Ongoing"
        posts={ongoingPosts}
        titleColorClass={titleColorClass}
      />

      <PostSection
        title="Archive"
        posts={archivePosts}
        titleColorClass={titleColorClass}
      />
    </>
  );
};
