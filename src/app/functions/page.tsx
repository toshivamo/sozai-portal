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
    <div className="bg-[#f0f2f0] min-h-screen">
      <div className="bg-white border-b border-[#e5e7e5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-[#354341]">
            効果・効能から探す
          </h1>
          <p className="mt-2 text-[#8f9695]">
            求める健康効果に対応した素材を検索
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Function Tags */}
        <div className="flex flex-wrap gap-3 mb-8">
          <button
            onClick={() => setSelectedTag("")}
            className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${
              !selectedTag
                ? "bg-[#2aab9f] text-white shadow-md"
                : "bg-white text-[#354341] hover:bg-[#2aab9f] hover:text-white shadow-sm"
            }`}
          >
            すべて
          </button>
          {functionTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${
                selectedTag === tag
                  ? "bg-[#2aab9f] text-white shadow-md"
                  : "bg-white text-[#354341] hover:bg-[#2aab9f] hover:text-white shadow-sm"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        <p className="text-sm text-[#8f9695] mb-4">
          {filtered.length}件の素材{selectedTag && ` - ${selectedTag}`}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((ing) => (
            <Link
              key={ing.id}
              href={`/ingredients/${ing.id}`}
              className="group block bg-white rounded-2xl border border-[#e5e7e5] p-6 hover:shadow-lg hover:border-[#2aab9f]/30 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-3">
                <span className="text-xs px-3 py-1 bg-[#f5fcfb] text-[#2aab9f] rounded-full">
                  {ing.category}
                </span>
                <span
                  className={`text-xs px-2 py-1 rounded-full ${
                    ing.evidenceLevel === "高"
                      ? "bg-green-50 text-green-700"
                      : ing.evidenceLevel === "中"
                      ? "bg-yellow-50 text-yellow-700"
                      : "bg-gray-50 text-gray-500"
                  }`}
                >
                  エビデンス: {ing.evidenceLevel}
                </span>
              </div>
              <h3 className="font-semibold text-[#354341] group-hover:text-[#2aab9f] transition-colors mb-2">
                {ing.name}
              </h3>
              <p className="text-sm text-[#8f9695] line-clamp-2 mb-3">
                {ing.description}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {ing.functions.map((fn) => (
                  <span
                    key={fn}
                    className={`text-xs px-2 py-0.5 rounded-full ${
                      fn === selectedTag
                        ? "bg-[#2aab9f] text-white"
                        : "bg-[#f0f2f0] text-[#8f9695]"
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
