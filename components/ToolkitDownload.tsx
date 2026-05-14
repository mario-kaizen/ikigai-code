"use client";

import { useState } from "react";

type Props = {
  filename: string;
  content: string;
  label: string;
};

export function ToolkitDownload({ filename, content, label }: Props) {
  const [downloaded, setDownloaded] = useState(false);

  const handleDownload = () => {
    const blob = new Blob([content], { type: "text/markdown" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 3000);
  };

  return (
    <button
      type="button"
      onClick={handleDownload}
      className="w-full mt-4 py-2.5 px-4 bg-forest-muted text-warm-white font-medium tracking-wide uppercase text-xs hover:bg-forest-light transition-colors text-left flex items-center justify-between"
    >
      <span>{downloaded ? "✓ Downloaded" : label}</span>
      <span aria-hidden>↓</span>
    </button>
  );
}
