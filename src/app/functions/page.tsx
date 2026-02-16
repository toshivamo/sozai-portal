"use client";

import Link from "next/link";
import { useState } from "react";
import { ingredients, functionTags } from "@/data/ingredients";

export default function FunctionsPage() {
  const [selectedTag, setSelectedTag] = useState("");

  const filtered = selectedTag
    ? ingredients.filter((i) => i.functions.includes(selectedTag))
    : ingredients;

  return (
    <div className="bg-white min-h-screen">
      <div className="border-b border-[#efefef]">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-8">
          <p className="text-[11px] text-[#888] uppercase tracking-widest mb-2">Functions</p>
          <h1 className="text-2xl sm:text-3xl font-light text-black">
            効果・効能から探す
          </h1>
          <p className="mt-2 text-[13px] text-[#888]">
            求める健康効果に対応した素材を検索
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-8">
        {/* Function Tags */}
        <div className="flex flex-wrap gap-2 mb-8">
          <button
            onClick={() => setSelectedTag("")}
            className={`px-4 py-2 rounded text-[13px] transition-all duration-200 ${
              !selectedTag
                ? "bg-black text-white"
                : "border border-[#ddd] text-[#555] hover:border-black hover:text-black"
            }`}
          >
            すべて
          </button>
          {functionTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`px-4 py-2 rounded text-[13px] transition-all duration-200 ${
                selectedTag === tag
                  ? "bg-black text-white"
                  : "border border-[#ddd] text-[#555] hover:border-black hover:text-black"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        <p className="text-[13px] text-[#888] mb-4">
          {filtered.length}件の素材{selectedTag && ` - ${selectedTag}`}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((ing) => (
            <Link
              key={ing.id}
              href={`/ingredients/${ing.id}`}
              className="group block border border-[#efefef] rounded p-5 hover:border-black transition-colors"
            >
              <div className="flex items-start justify-between mb-3">
                <span className="text-[11px] px-2.5 py-0.5 bg-[#fafafa] text-[#888] rounded">
                  {ing.category}
                </span>
                <span
                  className={`text-[11px] px-2 py-0.5 rounded ${
                    ing.evidenceLevel === "高"
                      ? "bg-[#f0f7f0] text-[#2d7a2d]"
                      : ing.evidenceLevel === "中"
                      ? "bg-[#fdf7ed] text-[#9a7b2d]"
                      : "bg-[#fafafa] text-[#888]"
                  }`}
                >
                  Evidence: {ing.evidenceLevel}
                </span>
              </div>
              <h3 className="text-[14px] font-medium text-black group-hover:opacity-60 transition-opacity mb-2">
                {ing.name}
              </h3>
              <p className="text-[13px] text-[#888] line-clamp-2 mb-3">
                {ing.description}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {ing.functions.map((fn) => (
                  <span
                    key={fn}
                    className={`text-[11px] px-2 py-0.5 rounded ${
                      fn === selectedTag
                        ? "bg-black text-white"
                        : "border border-[#efefef] text-[#888]"
                    }`}
                  >
                    {fn}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
