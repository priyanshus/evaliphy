import { codeToHtml } from "shiki";
import { CopyButton } from "./CopyButton";

interface CodeBlockProps {
  code: string;
  language?: string;
  filename?: string;
}

export async function CodeBlock({
  code,
  language = "typescript",
  filename,
}: CodeBlockProps) {
  const html = await codeToHtml(code, {
    lang: language,
    theme: "github-dark",
  });

  return (
    <div className="rounded-xl bg-zinc-950 shadow-2xl border border-zinc-800 overflow-hidden">
      <div className="flex items-center justify-between px-4 py-2 border-b border-zinc-800 bg-zinc-900/50">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-zinc-800" />
            <div className="w-3 h-3 rounded-full bg-zinc-800" />
            <div className="w-3 h-3 rounded-full bg-zinc-800" />
          </div>
          {filename && (
            <span className="ml-2 text-xs font-mono text-zinc-500">
              {filename}
            </span>
          )}
        </div>
        <CopyButton text={code} />
      </div>
      <div
        className="p-6 overflow-x-auto text-sm font-mono leading-relaxed shiki-container"
        dangerouslySetInnerHTML={{ __html: html }}
      />
      <style dangerouslySetInnerHTML={{ __html: `
        .shiki-container pre {
          background-color: transparent !important;
          margin: 0 !important;
          padding: 0 !important;
        }
      `}} />
    </div>
  );
}
