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
    <div className="bg-[#f0f2f0] min-h-screen">
      {/* Page Header */}
      <div className="bg-white border-b border-[#e5e7e5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-[#354341]">
            素材を探す
          </h1>
          <p className="mt-2 text-[#8f9695]">
            {ingredients.length}件の機能性素材から検索
          </p>

          {/* Search */}
          <div className="mt-6 max-w-2xl">
            <div className="flex items-center bg-[#f0f2f0] rounded-full overflow-hidden">
              <svg
                className="ml-4 w-5 h-5 text-[#8f9695] shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <input
                type="text"
                placeholder="素材名、英名、キーワードで検索..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="flex-1 px-4 py-3 text-sm bg-transparent outline-none"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <aside className="lg:w-64 shrink-0">
            <div className="bg-white rounded-2xl border border-[#e5e7e5] p-6 space-y-6 sticky top-24">
              {/* Category */}
              <div>
                <h3 className="text-sm font-semibold text-[#354341] mb-3">
                  カテゴリ
                </h3>
                <div className="space-y-1">
                  <button
                    onClick={() => setSelectedCategory("")}
                    className={`block w-full text-left px-3 py-2 text-sm rounded-lg transition-colors ${
                      !selectedCategory
                        ? "bg-[#f5fcfb] text-[#2aab9f] font-medium"
                        : "text-[#8f9695] hover:bg-[#f0f2f0]"
                    }`}
                  >
                    すべて
                  </button>
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`block w-full text-left px-3 py-2 text-sm rounded-lg transition-colors ${
                        selectedCategory === cat
                          ? "bg-[#f5fcfb] text-[#2aab9f] font-medium"
                          : "text-[#8f9695] hover:bg-[#f0f2f0]"
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Evidence Level */}
              <div>
                <h3 className="text-sm font-semibold text-[#354341] mb-3">
                  エビデンスレベル
                </h3>
                <div className="space-y-1">
                  {["", "高", "中", "低"].map((level) => (
                    <button
                      key={level}
                      onClick={() => setSelectedEvidence(level)}
                      className={`block w-full text-left px-3 py-2 text-sm rounded-lg transition-colors ${
                        selectedEvidence === level
                          ? "bg-[#f5fcfb] text-[#2aab9f] font-medium"
                          : "text-[#8f9695] hover:bg-[#f0f2f0]"
                      }`}
                    >
                      {level || "すべて"}
                    </button>
                  ))}
                </div>
              </div>

              {/* Function */}
              <div>
                <h3 className="text-sm font-semibold text-[#354341] mb-3">
                  効果・効能
                </h3>
                <div className="flex flex-wrap gap-2">
                  {functionTags.map((fn) => (
                    <button
                      key={fn}
                      onClick={() =>
                        setSelectedFunction(selectedFunction === fn ? "" : fn)
                      }
                      className={`px-3 py-1 text-xs rounded-full transition-colors ${
                        selectedFunction === fn
                          ? "bg-[#2aab9f] text-white"
                          : "bg-[#f0f2f0] text-[#8f9695] hover:bg-[#e5e7e5]"
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
              <p className="text-sm text-[#8f9695]">
                {filtered.length}件の素材が見つかりました
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                  <h3 className="font-semibold text-[#354341] group-hover:text-[#2aab9f] transition-colors mb-1">
                    {ing.name}
                  </h3>
                  <p className="text-xs text-[#8f9695] mb-3">{ing.nameEn}</p>
                  <p className="text-sm text-[#8f9695] line-clamp-2 mb-4">
                    {ing.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {ing.functions.map((fn) => (
                      <span
                        key={fn}
                        className="text-xs px-2 py-0.5 bg-[#f0f2f0] text-[#8f9695] rounded-full"
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
                <p className="text-[#8f9695]">
                  条件に一致する素材が見つかりませんでした
                </p>
                <button
                  onClick={() => {
                    setSearch("");
                    setSelectedCategory("");
                    setSelectedFunction("");
                    setSelectedEvidence("");
                  }}
                  className="mt-4 px-6 py-2 text-sm text-[#2aab9f] border border-[#2aab9f] rounded-full hover:bg-[#f5fcfb] transition-colors"
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
