import { getNotionDB, getNotionBlock, getNotionMarkdown } from "@app/utils/fetch-notion";
import dayjs from "dayjs";
import { MDXRemote } from "next-mdx-remote/rsc";

export async function generateStaticParams() {
  const data = await getNotionDB();

  return data.results.map((result) => ({ id: result.id }));
}

async function getPost(id: string) {
  const data = await getNotionDB();

  return data.results.find(result => result.id === id);
}

export default async function ArchiveContentPage({ params }: { params: { id: string } }) {
  const post = (await getPost(params.id)) as any;
  const title = post.properties["Title"].title[0].plain_text;
  const tags = post.properties["Tags"].multi_select as { id: string; name: string; color: string; }[];
  const createdAt = post.properties["CreatedAt"].created_time;
  // const detail = await getNotionBlock(params.id);
  const md = await getNotionMarkdown(params.id)

  return (
    <article className="flex flex-col gap-1 min-h-screen">
      <div className="font-bold text-lg">{title}</div>
      <div className="self-end text-sm text-zinc-700">
        {dayjs(createdAt).format("YYYY-MM-DD")}
      </div>
      <div className="flex flex-row gap-2 self-end text-sm text-zinc-700">{tags.map((tag => {
        return (
          <span key={tag.id}>#{tag.name} </span>
        )
      }))}</div>
      <div className="flex flex-col gap-5 text-zinc-700 font-light dark:text-zinc-200 mb-10">
        <MDXRemote source={md} components={{
          h1: (props) => (<h1 className="font-bold text-4xl"{...props} />),
          h2: (props) => (<h2 className="font-semibold text-2xl"{...props} />),
          h3: (props) => (<h3 className="font-semibold text-xl"{...props} />),
          ul: (props) => (<ul className="list-disc" {...props} />),
          ol: (props) => (<ol className="list-decimal pl-5" {...props} />),
          img: (props) => (<img className="max-w-[50%] mx-[20%]" {...props} />),
          code: (props) => (<code className="border rounded-md text-red-500 text-sm p-0.5 dark:border-0 dark:bg-zinc-800"{...props} />)
        }} />
      </div>
    </article>
  )
}