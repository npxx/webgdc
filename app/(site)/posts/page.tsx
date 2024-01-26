import Link from 'next/link'
import next, { Metadata } from "next";
import { siteTitle } from '@/app/aalayout'
import utilStyles from './utils.module.scss'
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
        <h2 className={utilStyles.headingLg}>Our recent posts</h2>
        <div className="grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:grid-cols-3 xl:gap-10">
          {allPostsData.map((post, id)=> (
            
            <>
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
