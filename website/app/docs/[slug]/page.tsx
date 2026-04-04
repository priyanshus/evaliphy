import { getDocBySlug } from "@/lib/docs";
import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";
import remarkGfm from "remark-gfm";

interface DocPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function DocPage({ params }: DocPageProps) {
  const { slug } = await params;
  const content = await getDocBySlug(slug);

  if (!content) {
    notFound();
  }

  return (
    <div className="prose prose-zinc max-w-none prose-headings:scroll-mt-20 prose-headings:font-bold prose-a:text-zinc-900 prose-a:no-underline hover:prose-a:underline prose-pre:bg-zinc-900 prose-pre:border prose-pre:border-zinc-800">
      <MDXRemote
        source={content}
        options={{
          mdxOptions: {
            remarkPlugins: [remarkGfm],
          },
        }}
      />
    </div>
  );
}
