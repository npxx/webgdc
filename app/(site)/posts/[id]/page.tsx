import Date from '@/components/Date'

import { getAllPostIds, getPostData } from '@/lib/posts'
import Sidebar from '@/components/Sidebar/Sidebar'
import { get } from 'http'


type Params = {
  id: string
}

type Props = {
  params: Params
}

type PostData = {
  title: string
  date: string
  body: string
  contentHtml: string
}

export async function generateMetadata({ params }: Props) {
  const postData: PostData = await getPostData(params.id)

  return {
    title: postData.title,
    date: postData.date,
    body: postData.body,
    contentHtml: postData.contentHtml
  }
}

async function getHeadings(source) {
  // Get each line individually, and filter out anything that
  // isn't a heading.
  console.log("THIS IS " + source)
  const headingLines = source.split("\n").filter((line) => {
    return line.match(/^##*\s/);
  });

  console.log("THIS HL DSUFDSK")
  console.log(headingLines)

  // Transform the string '## Some text' into an object
  // with the shape '{ text: 'Some text', level: 2 }'
  return headingLines.map((raw) => {
    const text = raw.replace(/^##*\s/, "");
    console.log(text);
    // I only care about h2 and h3.
    // If I wanted more levels, I'd need to count the
    // number of #s.
    const level = (raw.slice(0, 3) === "###") ? 3 : (raw.slice(0, 3) === "## " ? 2 : 1);
    console.log(level);

    return { text, level };
  });

  return headingLines;
}


// -< Post >-
export default async function Post({ params }: Props) {
  const postData: PostData = await getPostData(params.id);
  // const headings = parseHTML(postData.contentHtml);
  // console.log(headings);
  // console.log(postData.body);
  const headings = await getHeadings(postData.body);
  // console.log(headings);

  return (
    <>

  <div>
     <section className="py-20 lg:py-25 xl:py-30">
      <div className='grid grid-cols-6 gap-1'>
      <div></div>
     <div className="mx-2 mt-15 max-w-c-600 px-4 md:px-8 xl:mt-20 xl:px-0">     
      <Sidebar headings={headings} />
    </div>
     <div className="mx-0 col-span-4 mt-15 max-w-c-1280 px-4 md:px-8 xl:mt-20 xl:px-0">      {/* Post Title */}
      <h1 className='font-extrabold text-3xl mb-1'>{postData.title}</h1>

      <div className='text-gray-500 font-medium mb-5'>
        <Date dateString={postData.date} />
      </div>

      {/* Post Content */}
      <div
        className='text-gray-600 prose'
        dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
        />
    </div>

        </div>
     </section>
        </div>
    
    </>
  )
}

/* TIP: dangerouslySetInnerHTML is a React feature that allows you to render HTML that comes from an external source as if it were regular JSX. It replaces innerHTML used by Javascript.
Here we are rendering the HTML that comes from the markdown file thanks to remark (remark converted the markdown into HTML)
*/