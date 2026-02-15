import Link from "next/link";
import {
  ingredients,
  companies,
  categories,
  functionTags,
} from "@/data/ingredients";

function StatCard({
  number,
  label,
}: {
  number: string;
  label: string;
}) {
  return (
    <div className="text-center">
      <div className="text-3xl sm:text-4xl font-bold text-[#2aab9f]">
        {number}
      </div>
      <div className="text-sm text-[#8f9695] mt-1">{label}</div>
    </div>
  );
}

function IngredientCard({
  id,
  name,
  category,
  functions,
  evidenceLevel,
}: {
  id: string;
  name: string;
  category: string;
  functions: string[];
  evidenceLevel: string;
}) {
  return (
    <Link
      href={`/ingredients/${id}`}
      className="group block bg-white rounded-2xl border border-[#e5e7e5] p-6 hover:shadow-lg hover:border-[#2aab9f]/30 transition-all duration-300"
    >
      <div className="flex items-start justify-between mb-3">
        <span className="text-xs px-3 py-1 bg-[#f5fcfb] text-[#2aab9f] rounded-full">
          {category}
        </span>
        <span
          className={`text-xs px-2 py-1 rounded-full ${
            evidenceLevel === "高"
              ? "bg-green-50 text-green-700"
              : evidenceLevel === "中"
              ? "bg-yellow-50 text-yellow-700"
              : "bg-gray-50 text-gray-500"
          }`}
        >
          エビデンス: {evidenceLevel}
        </span>
      </div>
      <h3 className="font-semibold text-[#354341] group-hover:text-[#2aab9f] transition-colors mb-3">
        {name}
      </h3>
      <div className="flex flex-wrap gap-1.5">
        {functions.slice(0, 3).map((fn) => (
          <span
            key={fn}
            className="text-xs px-2 py-0.5 bg-[#f0f2f0] text-[#8f9695] rounded-full"
          >
            {fn}
          </span>
        ))}
      </div>
    </Link>
  );
}

export default function Home() {
  return (
    <>
      {/* Hero Section - KARTE style */}
      <section className="relative bg-gradient-to-br from-[#f5fcfb] via-white to-[#f0f2f0] overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#2aab9f] rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-20 w-96 h-96 bg-[#2aab9f] rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-36">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#354341] leading-tight tracking-tight">
              機能性素材を、
              <br />
              <span className="text-[#2aab9f]">もっとスマートに。</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-[#8f9695] leading-relaxed max-w-2xl">
              健康食品・サプリメント開発に必要な機能性素材を、
              効果・効能・エビデンスレベルで比較検索。
              素材メーカーとの出会いをサポートします。
            </p>

            {/* Search Bar */}
            <div className="mt-10 max-w-xl">
              <div className="flex items-center bg-white rounded-full shadow-lg shadow-[#2aab9f]/5 border border-[#e5e7e5] overflow-hidden">
                <svg
                  className="ml-5 w-5 h-5 text-[#8f9695] shrink-0"
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
                  placeholder="素材名、効果、メーカー名で検索..."
                  className="flex-1 px-4 py-4 text-sm outline-none"
                />
                <Link
                  href="/ingredients"
                  className="px-6 py-3 m-1.5 text-sm text-white bg-[#2aab9f] rounded-full hover:bg-[#1e8a80] transition-colors"
                >
                  検索
                </Link>
              </div>
            </div>

            {/* Quick tags */}
            <div className="mt-6 flex flex-wrap gap-2">
              <span className="text-xs text-[#8f9695]">人気:</span>
              {["NMN", "乳酸菌", "コラーゲン", "GABA", "ルテイン"].map(
                (tag) => (
                  <Link
                    key={tag}
                    href={`/ingredients?q=${tag}`}
                    className="text-xs px-3 py-1 text-[#2aab9f] bg-[#f5fcfb] rounded-full hover:bg-[#2aab9f] hover:text-white transition-all duration-200"
                  >
                    {tag}
                  </Link>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white border-y border-[#e5e7e5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <StatCard number="1,200+" label="登録素材数" />
            <StatCard number="680+" label="登録企業数" />
            <StatCard number="6,500+" label="関連製品" />
            <StatCard number="300+" label="機能性表示食品" />
          </div>
        </div>
      </section>

      {/* Category Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#354341]">
              カテゴリから探す
            </h2>
            <p className="mt-3 text-[#8f9695]">
              10のカテゴリから目的の素材を見つけましょう
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {categories.map((cat) => (
              <Link
                key={cat}
                href={`/ingredients?category=${encodeURIComponent(cat)}`}
                className="group flex flex-col items-center p-5 bg-[#f5fcfb] rounded-2xl hover:bg-[#2aab9f] transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-white group-hover:bg-white/20 flex items-center justify-center mb-3 transition-colors">
                  <svg
                    className="w-6 h-6 text-[#2aab9f] group-hover:text-white transition-colors"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                    />
                  </svg>
                </div>
                <span className="text-sm text-[#354341] group-hover:text-white text-center font-medium transition-colors">
                  {cat}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Function Tags Section */}
      <section className="py-20 bg-[#f0f2f0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#354341]">
              効果・効能から探す
            </h2>
            <p className="mt-3 text-[#8f9695]">
              求める効果から最適な素材を検索できます
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {functionTags.map((tag) => (
              <Link
                key={tag}
                href={`/functions?tag=${encodeURIComponent(tag)}`}
                className="px-6 py-3 bg-white text-[#354341] rounded-full text-sm font-medium hover:bg-[#2aab9f] hover:text-white shadow-sm hover:shadow-md transition-all duration-200"
              >
                {tag}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Ingredients */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-10">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#354341]">
                注目の素材
              </h2>
              <p className="mt-2 text-[#8f9695]">
                今話題の機能性素材をピックアップ
              </p>
            </div>
            <Link
              href="/ingredients"
              className="hidden sm:inline-flex px-5 py-2 text-sm text-[#2aab9f] border border-[#2aab9f] rounded-full hover:bg-[#f5fcfb] transition-colors"
            >
              すべて見る →
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {ingredients.slice(0, 6).map((ing) => (
              <IngredientCard key={ing.id} {...ing} />
            ))}
          </div>
          <div className="mt-8 text-center sm:hidden">
            <Link
              href="/ingredients"
              className="inline-flex px-6 py-3 text-sm text-[#2aab9f] border border-[#2aab9f] rounded-full"
            >
              すべて見る →
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Companies */}
      <section className="py-20 bg-[#f5fcfb]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-10">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#354341]">
                注目のメーカー
              </h2>
              <p className="mt-2 text-[#8f9695]">
                素材の開発・供給をリードする企業
              </p>
            </div>
            <Link
              href="/companies"
              className="hidden sm:inline-flex px-5 py-2 text-sm text-[#2aab9f] border border-[#2aab9f] rounded-full hover:bg-white transition-colors"
            >
              すべて見る →
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {companies.slice(0, 4).map((c) => (
              <Link
                key={c.id}
                href={`/companies/${c.id}`}
                className="group block bg-white rounded-2xl border border-[#e5e7e5] p-6 hover:shadow-lg hover:border-[#2aab9f]/30 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-[#f5fcfb] flex items-center justify-center mb-4">
                  <span className="text-lg font-bold text-[#2aab9f]">
                    {c.name[0]}
                  </span>
                </div>
                <h3 className="font-semibold text-[#354341] group-hover:text-[#2aab9f] transition-colors mb-1">
                  {c.name}
                </h3>
                <p className="text-xs text-[#8f9695] mb-3">{c.location}</p>
                <p className="text-xs text-[#8f9695] line-clamp-2 mb-4">
                  {c.description}
                </p>
                <div className="flex items-center gap-2 text-xs text-[#2aab9f]">
                  <span>{c.ingredientCount}素材</span>
                  <span className="text-[#e5e7e5]">|</span>
                  <span>{c.established}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#354341]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            素材の情報発信を始めませんか？
          </h2>
          <p className="text-[#a0b0ad] mb-8 max-w-2xl mx-auto">
            SOZAIに素材情報を掲載して、健康食品メーカーや開発企業とつながりましょう。
            無料プランからスタートできます。
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/register"
              className="px-8 py-3 text-sm text-white bg-[#2aab9f] rounded-full hover:bg-[#1e8a80] transition-colors"
            >
              無料で登録する
            </Link>
            <Link
              href="/contact"
              className="px-8 py-3 text-sm text-white border border-[#8f9695] rounded-full hover:border-white transition-colors"
            >
              お問い合わせ
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
