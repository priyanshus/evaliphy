"use client";

import { Check } from "lucide-react";
import { useState } from "react";

export function CopyInstallButton({ command }: { command: string }) {
  const [isCopied, setIsCopied] = useState(false);

  const copy = async () => {
    await navigator.clipboard.writeText(command);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <button
      onClick={copy}
      className="group relative px-8 py-3 bg-zinc-900 text-white rounded-lg font-mono text-sm hover:bg-zinc-800 transition-colors flex items-center gap-2"
    >
      {command}
      {isCopied ? (
        <Check className="w-4 h-4 text-emerald-400" />
      ) : (
        <svg
          className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"
          />
        </svg>
      )}
    </button>
  );
}
