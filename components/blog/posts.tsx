import React, { useEffect, useState } from "react";
import Link from "next/link";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { BsArrowRight } from "react-icons/bs";
import { useTheme } from "../layout";
import format from "date-fns/format";
import { tinaField } from "tinacms/dist/react";
import { ArticlesType } from "../../pages/blog";

export const Posts = ({ data }: { data: ArticlesType[] }) => {
  const theme = useTheme();
  const titleColorClasses = {
    blue: "group-hover:text-blue-600 dark:group-hover:text-blue-300",
    teal: "group-hover:text-teal-600 dark:group-hover:text-teal-300",
    green: "group-hover:text-green-600 dark:group-hover:text-green-300",
    red: "group-hover:text-red-600 dark:group-hover:text-red-300",
    pink: "group-hover:text-pink-600 dark:group-hover:text-pink-300",
    purple: "group-hover:text-purple-600 dark:group-hover:text-purple-300",
    orange: "group-hover:text-orange-600 dark:group-hover:text-orange-300",
    yellow: "group-hover:text-yellow-500 dark:group-hover:text-yellow-300",
  };

  const [postType, setPostType] = useState("all");

  const handleFilter = (e) => {
    setPostType(e.target.textContent.toLowerCase())
  }

  // useEffect(() => {
  //   data = data.filter(post => {
  //     return post.node.type.includes(postType)
  //   })
  //   console.log(data.length)
  // }, [postType])


  return (
    <>
      {data.filter(post => {
           return true;
         }).map((postData) => {
        const post = postData.node;
        const date = new Date(post.date);
        let formattedDate = "";
        if (!isNaN(date.getTime())) {
          formattedDate = format(date, "MMM dd, yyyy");
        }


        return (
          <Link
            key={post._sys.filename}
            href={`/blog/` + post._sys.filename}
            className="group lg:basis-[30%] lg:w-[400px] max-w-[400px] max-h-[400px] mx-5 my-10 mb-8 last:mb-0 "
          >
            {/*             transition-all duration-150 ease-out */}
              {post.heroImg && (
                <div className="relative w-full ">
                  <div
                    data-tina-field={tinaField(post, "heroImg")}
                    className="absolute block z-0 overflow-hidden"
                  >
                    {/* <img
                      src={post.heroImg}
                      className="absolute block rounded-lg w-full h-full blur-2xl brightness-150 contrast-[0.9] dark:brightness-150 saturate-200 opacity-50 dark:opacity-30 mix-blend-multiply dark:mix-blend-hard-light object-cover"
                      aria-hidden="true"
                    /> */}
                    <img
                      src={post.heroImg}
                      alt={post.title}
                      className="relative w-full rounded-lg h-[400px] object-cover "
                    />
                  </div>
                </div>
              )}
              <div className="invisible relative group-hover:visible bg-gray-50 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-1000 rounded-md shadow-sm h-[400px] overflow-scroll
             hover:shadow-md hover:to-gray-50 dark:hover:to-gray-800 z-[10]">
              <h3
                  className={`text-gray-700 dark:text-white text-2xl lg:text-3xl text-center font-semibold title-font mb-5  ${
                    titleColorClasses[theme.color]
                  }`}
                >
                  {post.title}{" "}
                  <span className="inline-block opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out">
                    <BsArrowRight className="inline-block h-8 -mt-1 ml-1 w-auto opacity-70" />
                  </span>
                </h3>
                <div className="prose dark:prose-dark w-full max-w-none mb-5 opacity-70">
                  <TinaMarkdown content={post.excerpt} />
                </div>
              </div>

          </Link>
        );
      })}
    </>
  );
};
