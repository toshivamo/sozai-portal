import Link from "next/link";
import { notFound } from "next/navigation";
import { ingredients, companies } from "@/data/ingredients";

export function generateStaticParams() {
  return ingredients.map((ing) => ({ id: ing.id }));
}

export default async function IngredientDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const ingredient = ingredients.find((i) => i.id === id);
  if (!ingredient) return notFound();

  const relatedCompanies = companies.filter((c) =>
    ingredient.companies.includes(c.id)
  );

  const relatedIngredients = ingredients
    .filter(
      (i) =>
        i.id !== ingredient.id &&
        i.functions.some((f) => ingredient.functions.includes(f))
    )
    .slice(0, 3);

  return (
    <div className="bg-white min-h-screen">
      {/* Breadcrumb */}
      <div className="border-b border-[#efefef]">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-3">
          <nav className="flex items-center gap-2 text-[12px] text-[#888]">
            <Link href="/" className="hover:text-black transition-colors">
              ホーム
            </Link>
            <span>/</span>
            <Link href="/ingredients" className="hover:text-black transition-colors">
              素材一覧
            </Link>
            <span>/</span>
            <span className="text-black">{ingredient.name}</span>
          </nav>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="flex-1 space-y-6">
            {/* Header Card */}
            <div className="border border-[#efefef] rounded p-6 sm:p-8">
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span className="text-[11px] px-2.5 py-0.5 bg-[#fafafa] text-[#888] rounded">
                  {ingredient.category}
                </span>
                <span
                  className={`text-[11px] px-2 py-0.5 rounded ${
                    ingredient.evidenceLevel === "高"
                      ? "bg-[#f0f7f0] text-[#2d7a2d]"
                      : ingredient.evidenceLevel === "中"
                      ? "bg-[#fdf7ed] text-[#9a7b2d]"
                      : "bg-[#fafafa] text-[#888]"
                  }`}
                >
                  Evidence: {ingredient.evidenceLevel}
                </span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-light text-black mb-2">
                {ingredient.name}
              </h1>
              <p className="text-[12px] text-[#aaa] mb-6">
                {ingredient.nameEn}
              </p>
              <p className="text-[13px] text-[#555] leading-relaxed">
                {ingredient.description}
              </p>
            </div>

            {/* Details Card */}
            <div className="border border-[#efefef] rounded p-6 sm:p-8">
              <h2 className="text-[11px] text-[#888] uppercase tracking-wider mb-6">
                素材情報
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <dt className="text-[11px] text-[#aaa] mb-1">由来・原料</dt>
                  <dd className="text-[13px] text-black">
                    {ingredient.origin}
                  </dd>
                </div>
                <div>
                  <dt className="text-[11px] text-[#aaa] mb-1">カテゴリ</dt>
                  <dd className="text-[13px] text-black">
                    {ingredient.category}
                  </dd>
                </div>
                <div>
                  <dt className="text-[11px] text-[#aaa] mb-1">対象部位</dt>
                  <dd className="flex flex-wrap gap-1.5">
                    {ingredient.targetAreas.map((area) => (
                      <span
                        key={area}
                        className="text-[11px] px-2 py-0.5 border border-[#efefef] text-[#888] rounded"
                      >
                        {area}
                      </span>
                    ))}
                  </dd>
                </div>
                <div>
                  <dt className="text-[11px] text-[#aaa] mb-1">効果・効能</dt>
                  <dd className="flex flex-wrap gap-1.5">
                    {ingredient.functions.map((fn) => (
                      <span
                        key={fn}
                        className="text-[11px] px-2 py-0.5 bg-[#fafafa] text-[#888] rounded"
                      >
                        {fn}
                      </span>
                    ))}
                  </dd>
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div className="border border-[#efefef] rounded p-6 sm:p-8">
              <h2 className="text-[11px] text-[#888] uppercase tracking-wider mb-6">
                認証・規格
              </h2>
              <div className="flex flex-wrap gap-3">
                {ingredient.certifications.map((cert) => (
                  <div
                    key={cert}
                    className="flex items-center gap-2 px-4 py-2 border border-[#efefef] rounded"
                  >
                    <svg
                      className="w-3.5 h-3.5 text-[#2d7a2d]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span className="text-[13px] text-black">{cert}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Related Ingredients */}
            {relatedIngredients.length > 0 && (
              <div className="border border-[#efefef] rounded p-6 sm:p-8">
                <h2 className="text-[11px] text-[#888] uppercase tracking-wider mb-6">
                  関連する素材
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {relatedIngredients.map((ri) => (
                    <Link
                      key={ri.id}
                      href={`/ingredients/${ri.id}`}
                      className="group block p-4 border border-[#efefef] rounded hover:border-black transition-colors"
                    >
                      <span className="text-[11px] px-2 py-0.5 bg-[#fafafa] text-[#888] rounded">
                        {ri.category}
                      </span>
                      <h3 className="mt-2 text-[13px] font-medium text-black group-hover:opacity-60 transition-opacity">
                        {ri.name}
                      </h3>
                      <div className="mt-2 flex flex-wrap gap-1">
                        {ri.functions.slice(0, 2).map((fn) => (
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
              </div>
            )}
          </div>

          {/* Sidebar */}
          <aside className="lg:w-72 shrink-0 space-y-6">
            {/* CTA */}
            <div className="bg-black rounded p-6 text-white">
              <h3 className="text-[14px] font-medium mb-2">この素材に興味がありますか？</h3>
              <p className="text-[12px] text-[#888] mb-4">
                メーカーに直接お問い合わせいただけます
              </p>
              <Link
                href="/contact"
                className="block text-center px-5 py-2.5 bg-white text-black rounded text-[13px] font-medium hover:opacity-80 transition-opacity"
              >
                お問い合わせ
              </Link>
            </div>

            {/* Supplier Companies */}
            <div className="border border-[#efefef] rounded p-5">
              <h3 className="text-[11px] text-[#888] uppercase tracking-wider mb-4">
                取扱メーカー
              </h3>
              <div className="space-y-2">
                {relatedCompanies.map((c) => (
                  <Link
                    key={c.id}
                    href={`/companies/${c.id}`}
                    className="group flex items-center gap-3 p-3 rounded hover:bg-[#fafafa] transition-colors"
                  >
                    <div className="w-9 h-9 rounded bg-[#fafafa] group-hover:bg-white flex items-center justify-center shrink-0">
                      <span className="text-[12px] font-medium text-[#333]">
                        {c.name[0]}
                      </span>
                    </div>
                    <div>
                      <p className="text-[13px] font-medium text-black group-hover:opacity-60 transition-opacity">
                        {c.name}
                      </p>
                      <p className="text-[11px] text-[#aaa]">{c.location}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
