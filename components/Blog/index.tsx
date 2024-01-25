// import React from "react";
import SectionHeader from "../Common/SectionHeader";
// import BlogItem from "./BlogItem";
// import BlogData from "./blogData";

// const Blog = async () => {
//   return (
//     <section className="py-20 lg:py-25 xl:py-30">
//       <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
//         {/* <!-- Section Title Start --> */}
//         <div className="animate_top mx-auto text-center">
//         </div>
//         {/* <!-- Section Title End --> */}
//       </div>

//       <div className="mx-auto mt-15 max-w-c-1280 px-4 md:px-8 xl:mt-20 xl:px-0">
//         <div className="grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:grid-cols-3 xl:gap-10">
//           {BlogData.slice(0, 3).map((blog, key) => (
//             <BlogItem blog={blog} key={key} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Blog;

import Link from 'next/link'
import next, { Metadata } from "next";
import { siteTitle } from '@/app/aalayout'
import utilStyles from '@/app/utils.module.scss'
import Date from '@/components/Date';
import { motion } from "framer-motion";
import Image from "next/image";
import nextLogo from '@/public/next.svg';
import PostItem from '@/components/Posts/PostItem';
import { Post } from '@/types/blog';

import { getSortedPostsData } from '@/lib/posts'

type AllPostsData = {
  date: string
  title: string
  id: string
  body: string
}[]

export const metadata = {
  title: siteTitle,
  // other metadata
};

export default function Posts() {
    const allPostsData: AllPostsData = getSortedPostsData()

  return (
    <>
      <section className="py-20 lg:py-25 xl:py-30">
        <div className="mx-auto mt-15 max-w-c-1280 px-4 md:px-8 xl:mt-20 xl:px-0">
          <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <SectionHeader
          headerInfo={{
            title: `UPDATES`,
            subtitle: `Our Recent Events & Posts`,
            description: ``,
          }}
        />
        <div className="grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:grid-cols-3 xl:gap-10">
          {allPostsData.slice(0,3).map((post, id)=> (
            
            <>
            {/* <div hidden> */}
            {/* <li className={utilStyles.listItem} key={id}> */}
              {/* <div className='font-medium mb-1 mt-5'> */}
                {/* <Link href={`/posts/${id}`}>{post.title}</Link> */}
              {/* </div> */}
              {/* <br /> */}
              {/* <small className='text-gray-500 font-medium'> */}
                {/* <Date dateString={date} /> */}
              {/* </small> */}
            {/* </li> */}
            {/* </div> */}
             <PostItem post={post} key={id}/>
              </>
            ))}
        </div>
            </section>
          </div>
      </section>
    </>
  );
};
