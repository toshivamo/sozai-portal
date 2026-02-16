"use client";

import Link from "next/link";
import { useState, useMemo } from "react";
import { ingredients, categories, functionTags } from "@/data/ingredients";

export default function IngredientsPage() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedFunction, setSelectedFunction] = useState("");
  const [selectedEvidence, setSelectedEvidence] = useState("");

  const filtered = useMemo(() => {
    return ingredients.filter((ing) => {
      const matchSearch =
        !search ||
        ing.name.toLowerCase().includes(search.toLowerCase()) ||
        ing.nameEn.toLowerCase().includes(search.toLowerCase()) ||
        ing.description.includes(search);
      const matchCategory =
        !selectedCategory || ing.category === selectedCategory;
      const matchFunction =
        !selectedFunction || ing.functions.includes(selectedFunction);
      const matchEvidence =
        !selectedEvidence || ing.evidenceLevel === selectedEvidence;
      return matchSearch && matchCategory && matchFunction && matchEvidence;
    });
  }, [search, selectedCategory, selectedFunction, selectedEvidence]);

  return (
    <div className="bg-white min-h-screen">
      {/* Page Header */}
      <div className="border-b border-[#efefef]">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-8">
          <p className="text-[11px] text-[#888] uppercase tracking-widest mb-2">Ingredients</p>
          <h1 className="text-2xl sm:text-3xl font-light text-black">
            素材を探す
          </h1>
          <p className="mt-2 text-[13px] text-[#888]">
            {ingredients.length}件の機能性素材から検索
          </p>

          {/* Search */}
          <div className="mt-6 max-w-md">
            <div className="flex items-center border border-[#ddd] rounded overflow-hidden focus-within:border-black transition-colors">
              <svg
                className="ml-3 w-4 h-4 text-[#bbb] shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <input
                type="text"
                placeholder="素材名、英名、キーワードで検索..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="flex-1 px-3 py-3 text-[13px] bg-transparent outline-none"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <aside className="lg:w-56 shrink-0">
            <div className="border border-[#efefef] rounded p-5 space-y-6 sticky top-24">
              {/* Category */}
              <div>
                <h3 className="text-[11px] text-[#888] uppercase tracking-wider mb-3">
                  カテゴリ
                </h3>
                <div className="space-y-0.5">
                  <button
                    onClick={() => setSelectedCategory("")}
                    className={`block w-full text-left px-3 py-1.5 text-[13px] rounded transition-colors ${
                      !selectedCategory
                        ? "bg-black text-white"
                        : "text-[#555] hover:text-black"
                    }`}
                  >
                    すべて
                  </button>
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`block w-full text-left px-3 py-1.5 text-[13px] rounded transition-colors ${
                        selectedCategory === cat
                          ? "bg-black text-white"
                          : "text-[#555] hover:text-black"
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Evidence Level */}
              <div>
                <h3 className="text-[11px] text-[#888] uppercase tracking-wider mb-3">
                  エビデンスレベル
                </h3>
                <div className="space-y-0.5">
                  {["", "高", "中", "低"].map((level) => (
                    <button
                      key={level}
                      onClick={() => setSelectedEvidence(level)}
                      className={`block w-full text-left px-3 py-1.5 text-[13px] rounded transition-colors ${
                        selectedEvidence === level
                          ? "bg-black text-white"
                          : "text-[#555] hover:text-black"
                      }`}
                    >
                      {level || "すべて"}
                    </button>
                  ))}
                </div>
              </div>

              {/* Function */}
              <div>
                <h3 className="text-[11px] text-[#888] uppercase tracking-wider mb-3">
                  効果・効能
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {functionTags.map((fn) => (
                    <button
                      key={fn}
                      onClick={() =>
                        setSelectedFunction(selectedFunction === fn ? "" : fn)
                      }
                      className={`px-2.5 py-1 text-[11px] rounded transition-colors ${
                        selectedFunction === fn
                          ? "bg-black text-white"
                          : "border border-[#efefef] text-[#888] hover:border-black hover:text-black"
                      }`}
                    >
                      {fn}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Results */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-4">
              <p className="text-[13px] text-[#888]">
                {filtered.length}件の素材が見つかりました
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                  <h3 className="text-[14px] font-medium text-black group-hover:opacity-60 transition-opacity mb-1">
                    {ing.name}
                  </h3>
                  <p className="text-[11px] text-[#aaa] mb-2">{ing.nameEn}</p>
                  <p className="text-[13px] text-[#888] line-clamp-2 mb-3">
                    {ing.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {ing.functions.map((fn) => (
                      <span
                        key={fn}
                        className="text-[11px] px-2 py-0.5 border border-[#efefef] text-[#888] rounded"
                      >
                        {fn}
                      </span>
                    ))}
                  </div>
                </Link>
              ))}
            </div>

            {filtered.length === 0 && (
              <div className="text-center py-20">
                <p className="text-[13px] text-[#888]">
                  条件に一致する素材が見つかりませんでした
                </p>
                <button
                  onClick={() => {
                    setSearch("");
                    setSelectedCategory("");
                    setSelectedFunction("");
                    setSelectedEvidence("");
                  }}
                  className="mt-4 px-5 py-2 text-[13px] text-black border border-black rounded hover:bg-black hover:text-white transition-all"
                >
                  フィルターをリセット
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
