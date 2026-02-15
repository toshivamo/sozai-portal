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
    <div className="bg-[#f0f2f0] min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-[#e5e7e5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-2 text-sm text-[#8f9695]">
            <Link href="/" className="hover:text-[#2aab9f]">
              ホーム
            </Link>
            <span>/</span>
            <Link href="/ingredients" className="hover:text-[#2aab9f]">
              素材一覧
            </Link>
            <span>/</span>
            <span className="text-[#354341]">{ingredient.name}</span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="flex-1 space-y-6">
            {/* Header Card */}
            <div className="bg-white rounded-2xl border border-[#e5e7e5] p-8">
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span className="text-xs px-3 py-1 bg-[#f5fcfb] text-[#2aab9f] rounded-full">
                  {ingredient.category}
                </span>
                <span
                  className={`text-xs px-2 py-1 rounded-full ${
                    ingredient.evidenceLevel === "高"
                      ? "bg-green-50 text-green-700"
                      : ingredient.evidenceLevel === "中"
                      ? "bg-yellow-50 text-yellow-700"
                      : "bg-gray-50 text-gray-500"
                  }`}
                >
                  エビデンス: {ingredient.evidenceLevel}
                </span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-bold text-[#354341] mb-2">
                {ingredient.name}
              </h1>
              <p className="text-sm text-[#8f9695] mb-6">
                {ingredient.nameEn}
              </p>
              <p className="text-[#475a57] leading-relaxed">
                {ingredient.description}
              </p>
            </div>

            {/* Details Card */}
            <div className="bg-white rounded-2xl border border-[#e5e7e5] p-8">
              <h2 className="text-lg font-semibold text-[#354341] mb-6">
                素材情報
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <dt className="text-xs text-[#8f9695] mb-1">由来・原料</dt>
                  <dd className="text-sm text-[#354341]">
                    {ingredient.origin}
                  </dd>
                </div>
                <div>
                  <dt className="text-xs text-[#8f9695] mb-1">カテゴリ</dt>
                  <dd className="text-sm text-[#354341]">
                    {ingredient.category}
                  </dd>
                </div>
                <div>
                  <dt className="text-xs text-[#8f9695] mb-1">対象部位</dt>
                  <dd className="flex flex-wrap gap-1.5">
                    {ingredient.targetAreas.map((area) => (
                      <span
                        key={area}
                        className="text-xs px-2 py-0.5 bg-[#f0f2f0] text-[#8f9695] rounded-full"
                      >
                        {area}
                      </span>
                    ))}
                  </dd>
                </div>
                <div>
                  <dt className="text-xs text-[#8f9695] mb-1">効果・効能</dt>
                  <dd className="flex flex-wrap gap-1.5">
                    {ingredient.functions.map((fn) => (
                      <span
                        key={fn}
                        className="text-xs px-2 py-0.5 bg-[#f5fcfb] text-[#2aab9f] rounded-full"
                      >
                        {fn}
                      </span>
                    ))}
                  </dd>
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div className="bg-white rounded-2xl border border-[#e5e7e5] p-8">
              <h2 className="text-lg font-semibold text-[#354341] mb-6">
                認証・規格
              </h2>
              <div className="flex flex-wrap gap-3">
                {ingredient.certifications.map((cert) => (
                  <div
                    key={cert}
                    className="flex items-center gap-2 px-4 py-2 bg-[#f5fcfb] rounded-xl border border-[#2aab9f]/10"
                  >
                    <svg
                      className="w-4 h-4 text-[#2aab9f]"
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
                    <span className="text-sm text-[#354341]">{cert}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Related Ingredients */}
            {relatedIngredients.length > 0 && (
              <div className="bg-white rounded-2xl border border-[#e5e7e5] p-8">
                <h2 className="text-lg font-semibold text-[#354341] mb-6">
                  関連する素材
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {relatedIngredients.map((ri) => (
                    <Link
                      key={ri.id}
                      href={`/ingredients/${ri.id}`}
                      className="group block p-4 rounded-xl border border-[#e5e7e5] hover:border-[#2aab9f]/30 hover:shadow-md transition-all"
                    >
                      <span className="text-xs px-2 py-0.5 bg-[#f5fcfb] text-[#2aab9f] rounded-full">
                        {ri.category}
                      </span>
                      <h3 className="mt-2 text-sm font-semibold text-[#354341] group-hover:text-[#2aab9f] transition-colors">
                        {ri.name}
                      </h3>
                      <div className="mt-2 flex flex-wrap gap-1">
                        {ri.functions.slice(0, 2).map((fn) => (
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
              </div>
            )}
          </div>

          {/* Sidebar */}
          <aside className="lg:w-80 shrink-0 space-y-6">
            {/* CTA */}
            <div className="bg-[#2aab9f] rounded-2xl p-6 text-white">
              <h3 className="font-semibold mb-2">この素材に興味がありますか？</h3>
              <p className="text-sm text-white/80 mb-4">
                メーカーに直接お問い合わせいただけます
              </p>
              <Link
                href="/contact"
                className="block text-center px-6 py-3 bg-white text-[#2aab9f] rounded-full text-sm font-medium hover:bg-white/90 transition-colors"
              >
                お問い合わせ
              </Link>
            </div>

            {/* Supplier Companies */}
            <div className="bg-white rounded-2xl border border-[#e5e7e5] p-6">
              <h3 className="font-semibold text-[#354341] mb-4">
                取扱メーカー
              </h3>
              <div className="space-y-3">
                {relatedCompanies.map((c) => (
                  <Link
                    key={c.id}
                    href={`/companies/${c.id}`}
                    className="group flex items-center gap-3 p-3 rounded-xl hover:bg-[#f5fcfb] transition-colors"
                  >
                    <div className="w-10 h-10 rounded-lg bg-[#f5fcfb] group-hover:bg-white flex items-center justify-center shrink-0">
                      <span className="text-sm font-bold text-[#2aab9f]">
                        {c.name[0]}
                      </span>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-[#354341] group-hover:text-[#2aab9f] transition-colors">
                        {c.name}
                      </p>
                      <p className="text-xs text-[#8f9695]">{c.location}</p>
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
