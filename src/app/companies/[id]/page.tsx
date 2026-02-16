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
    <div className="bg-white min-h-screen">
      <div className="border-b border-[#efefef]">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-3">
          <nav className="flex items-center gap-2 text-[12px] text-[#888]">
            <Link href="/" className="hover:text-black transition-colors">ホーム</Link>
            <span>/</span>
            <Link href="/companies" className="hover:text-black transition-colors">メーカー一覧</Link>
            <span>/</span>
            <span className="text-black">{company.name}</span>
          </nav>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-1 space-y-6">
            {/* Company Header */}
            <div className="border border-[#efefef] rounded p-6 sm:p-8">
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded bg-[#fafafa] flex items-center justify-center shrink-0">
                  <span className="text-xl font-medium text-[#333]">{company.name[0]}</span>
                </div>
                <div>
                  <h1 className="text-2xl font-light text-black">{company.name}</h1>
                  <p className="text-[12px] text-[#aaa]">{company.nameEn}</p>
                </div>
              </div>
              <p className="mt-6 text-[13px] text-[#555] leading-relaxed">{company.description}</p>
            </div>

            {/* Company Info */}
            <div className="border border-[#efefef] rounded p-6 sm:p-8">
              <h2 className="text-[11px] text-[#888] uppercase tracking-wider mb-6">企業情報</h2>
              <dl className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <dt className="text-[11px] text-[#aaa] mb-1">所在地</dt>
                  <dd className="text-[13px] text-black">{company.location}</dd>
                </div>
                <div>
                  <dt className="text-[11px] text-[#aaa] mb-1">設立</dt>
                  <dd className="text-[13px] text-black">{company.established}</dd>
                </div>
                <div>
                  <dt className="text-[11px] text-[#aaa] mb-1">取扱素材数</dt>
                  <dd className="text-[13px] text-black">{company.ingredientCount}素材</dd>
                </div>
                <div>
                  <dt className="text-[11px] text-[#aaa] mb-1">取扱カテゴリ</dt>
                  <dd className="flex flex-wrap gap-1.5">
                    {company.categories.map((cat) => (
                      <span key={cat} className="text-[11px] px-2 py-0.5 bg-[#fafafa] text-[#888] rounded">{cat}</span>
                    ))}
                  </dd>
                </div>
              </dl>
            </div>

            {/* Company Ingredients */}
            {companyIngredients.length > 0 && (
              <div className="border border-[#efefef] rounded p-6 sm:p-8">
                <h2 className="text-[11px] text-[#888] uppercase tracking-wider mb-6">取扱素材</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {companyIngredients.map((ing) => (
                    <Link
                      key={ing.id}
                      href={`/ingredients/${ing.id}`}
                      className="group block p-4 border border-[#efefef] rounded hover:border-black transition-colors"
                    >
                      <span className="text-[11px] px-2 py-0.5 bg-[#fafafa] text-[#888] rounded">{ing.category}</span>
                      <h3 className="mt-2 text-[13px] font-medium text-black group-hover:opacity-60 transition-opacity">{ing.name}</h3>
                      <div className="mt-2 flex flex-wrap gap-1">
                        {ing.functions.slice(0, 3).map((fn) => (
                          <span key={fn} className="text-[11px] px-2 py-0.5 border border-[#efefef] text-[#888] rounded">{fn}</span>
                        ))}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <aside className="lg:w-72 shrink-0">
            <div className="bg-black rounded p-6 text-white sticky top-24">
              <h3 className="text-[14px] font-medium mb-2">この企業に問い合わせる</h3>
              <p className="text-[12px] text-[#888] mb-4">素材の詳細情報やサンプル依頼など、お気軽にお問い合わせください</p>
              <Link
                href="/contact"
                className="block text-center px-5 py-2.5 bg-white text-black rounded text-[13px] font-medium hover:opacity-80 transition-opacity"
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
