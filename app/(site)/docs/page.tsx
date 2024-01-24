// import SidebarLink from "@/components/Docs/SidebarLink";
// // import { Metadata } from "next";
// // export const metadata: Metadata = {
// //   title: "Docs Page - Solid SaaS Boilerplate",
// //   description: "This is Docs page for Solid Pro",
// //   // other metadata
// // };

// // export default function DocsPage() {
// //   return (
// //     <>

    





// //     </>
// //   );
// // }

// import Link from 'next/link'
// import Date from '@/components/Date'
// import { siteTitle } from '@/app/layout'
// import utilStyles from './utils.module.scss'

// import { getSortedpostsData } from '@/lib/posts'

// type AllpostsData = {
//   date: string
//   title: string
//   id: string
// }[]

// export const metadata = {
//   title: siteTitle,
// }

// export default function Home() {
//   const allpostsData: AllpostsData = getSortedpostsData()

//   return (
//     <>
//          <section className="pb-16 pt-24 md:pb-20 md:pt-28 lg:pb-24 lg:pt-32">
//         <div className="container mx-auto">
//           <div className="-mx-4 flex flex-wrap">
//             <div className="w-full px-4 lg:w-1/4">
//               <div className="sticky top-[74px] rounded-lg border border-white p-4 shadow-solid-4  transition-all  dark:border-strokedark dark:bg-blacksection">
//                 <ul className="space-y-2">
//                   <SidebarLink />
//                 </ul>
//               </div>
//             </div>

//       <section className={`${utilStyles.headingMd} text-gray-600`}>
//         <p>
//           Hello, I&apos;m <b>Emanuele</b>. I&apos;m a software engineer in love
//           with front end development. You can contact me on{' '}
//           <a href='https://www.linkedin.com/in/emanuele-favero/'>Linkedin</a>.
//         </p>
//         <p>
//           <i>
//             Check out my projects on{' '}
//             <a target='_blank' href='https://github.com/emanuelefavero'>
//               GitHub
//             </a>{' '}
//           </i>
//         </p>
//         <p>(This is a Next.js sample website)</p>
//         <h3>posts</h3>
//       </section>

//       <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
//         <h2 className={utilStyles.headingLg}>Blog</h2>
//         <ul className={utilStyles.list}>
//           {allpostsData.map(({ id, date, title }) => (
//             <li className={utilStyles.listItem} key={id}>
//               <div className='font-medium mb-1 mt-5'>
//                 <Link href={`/posts/${id}`}>{title}</Link>
//               </div>
//               {/* <br /> */}
//               <small className='text-gray-500 font-medium'>
//                 <Date dateString={date} />
//               </small>
//             </li>
//           ))}
//         </ul>
//       </section>

//       <div className="w-full px-4 lg:w-3/4">
//               <div className="blog-details blog-details-docs shadow-three dark:bg-gray-dark rounded-sm bg-white px-8 py-11 sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]">
//                 <h1>Welcome to Startup Documentation</h1>

               
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   )
// }
