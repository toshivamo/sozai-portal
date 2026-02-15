import Link from "next/link";
import { notFound } from "next/navigation";
import { companies, ingredients } from "@/data/ingredients";

export function generateStaticParams() {
  return companies.map((c) => ({ id: c.id }));
}

export default async function CompanyDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const company = companies.find((c) => c.id === id);
  if (!company) return notFound();

  const companyIngredients = ingredients.filter((i) =>
    i.companies.includes(company.id)
  );

  return (
    <div className="bg-[#f0f2f0] min-h-screen">
      <div className="bg-white border-b border-[#e5e7e5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-2 text-sm text-[#8f9695]">
            <Link href="/" className="hover:text-[#2aab9f]">ホーム</Link>
            <span>/</span>
            <Link href="/companies" className="hover:text-[#2aab9f]">メーカー一覧</Link>
            <span>/</span>
            <span className="text-[#354341]">{company.name}</span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-1 space-y-6">
            {/* Company Header */}
            <div className="bg-white rounded-2xl border border-[#e5e7e5] p-8">
              <div className="flex items-start gap-5">
                <div className="w-16 h-16 rounded-xl bg-[#f5fcfb] flex items-center justify-center shrink-0">
                  <span className="text-2xl font-bold text-[#2aab9f]">{company.name[0]}</span>
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-[#354341]">{company.name}</h1>
                  <p className="text-sm text-[#8f9695]">{company.nameEn}</p>
                </div>
              </div>
              <p className="mt-6 text-[#475a57] leading-relaxed">{company.description}</p>
            </div>

            {/* Company Info */}
            <div className="bg-white rounded-2xl border border-[#e5e7e5] p-8">
              <h2 className="text-lg font-semibold text-[#354341] mb-6">企業情報</h2>
              <dl className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <dt className="text-xs text-[#8f9695] mb-1">所在地</dt>
                  <dd className="text-sm text-[#354341]">{company.location}</dd>
                </div>
                <div>
                  <dt className="text-xs text-[#8f9695] mb-1">設立</dt>
                  <dd className="text-sm text-[#354341]">{company.established}</dd>
                </div>
                <div>
                  <dt className="text-xs text-[#8f9695] mb-1">取扱素材数</dt>
                  <dd className="text-sm text-[#354341]">{company.ingredientCount}素材</dd>
                </div>
                <div>
                  <dt className="text-xs text-[#8f9695] mb-1">取扱カテゴリ</dt>
                  <dd className="flex flex-wrap gap-1.5">
                    {company.categories.map((cat) => (
                      <span key={cat} className="text-xs px-2 py-0.5 bg-[#f5fcfb] text-[#2aab9f] rounded-full">{cat}</span>
                    ))}
                  </dd>
                </div>
              </dl>
            </div>

            {/* Company Ingredients */}
            {companyIngredients.length > 0 && (
              <div className="bg-white rounded-2xl border border-[#e5e7e5] p-8">
                <h2 className="text-lg font-semibold text-[#354341] mb-6">取扱素材</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {companyIngredients.map((ing) => (
                    <Link
                      key={ing.id}
                      href={`/ingredients/${ing.id}`}
                      className="group block p-4 rounded-xl border border-[#e5e7e5] hover:border-[#2aab9f]/30 hover:shadow-md transition-all"
                    >
                      <span className="text-xs px-2 py-0.5 bg-[#f5fcfb] text-[#2aab9f] rounded-full">{ing.category}</span>
                      <h3 className="mt-2 text-sm font-semibold text-[#354341] group-hover:text-[#2aab9f] transition-colors">{ing.name}</h3>
                      <div className="mt-2 flex flex-wrap gap-1">
                        {ing.functions.slice(0, 3).map((fn) => (
                          <span key={fn} className="text-xs px-2 py-0.5 bg-[#f0f2f0] text-[#8f9695] rounded-full">{fn}</span>
                        ))}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <aside className="lg:w-80 shrink-0">
            <div className="bg-[#2aab9f] rounded-2xl p-6 text-white sticky top-24">
              <h3 className="font-semibold mb-2">この企業に問い合わせる</h3>
              <p className="text-sm text-white/80 mb-4">素材の詳細情報やサンプル依頼など、お気軽にお問い合わせください</p>
              <Link
                href="/contact"
                className="block text-center px-6 py-3 bg-white text-[#2aab9f] rounded-full text-sm font-medium hover:bg-white/90 transition-colors"
              >
                お問い合わせ
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
