import { getDocBySlug } from "@/lib/docs";
import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";
import remarkGfm from "remark-gfm";

interface DocPageProps {
  params: Promise<{
    slug: string;
  }>;
}

const components = {
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => {
    const id = props.children?.toString()
      .toLowerCase()
      .replace(/[^\w\s-]/g, "")
      .replace(/\s+/g, "-");
    return <h2 {...props} id={id} />;
  },
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => {
    const id = props.children?.toString()
      .toLowerCase()
      .replace(/[^\w\s-]/g, "")
      .replace(/\s+/g, "-");
    return <h3 {...props} id={id} />;
  },
};

export default async function DocPage({ params }: DocPageProps) {
  const { slug } = await params;
  const content = await getDocBySlug(slug);

  if (!content) {
    notFound();
  }

  return (
    <div className="prose prose-zinc max-w-none prose-headings:scroll-mt-20 prose-headings:font-bold prose-a:text-blue-600 prose-a:underline hover:prose-a:text-blue-800 prose-pre:bg-zinc-900 prose-pre:border prose-pre:border-zinc-800">
      <MDXRemote
        source={content}
        components={components}
        options={{
          mdxOptions: {
            remarkPlugins: [remarkGfm],
          },
        }}
      />
    </div>
  );
}
