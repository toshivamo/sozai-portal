import Link from "next/link";
import { companies } from "@/data/ingredients";

export default function CompaniesPage() {
  return (
    <div className="bg-white min-h-screen">
      <div className="border-b border-[#efefef]">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-8">
          <p className="text-[11px] text-[#888] uppercase tracking-widest mb-2">Companies</p>
          <h1 className="text-2xl sm:text-3xl font-light text-black">
            メーカー一覧
          </h1>
          <p className="mt-2 text-[13px] text-[#888]">
            {companies.length}社の素材メーカー・サプライヤーを掲載
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {companies.map((c) => (
            <Link
              key={c.id}
              href={`/companies/${c.id}`}
              className="group block border border-[#efefef] rounded p-5 hover:border-black transition-colors"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded bg-[#fafafa] flex items-center justify-center shrink-0">
                  <span className="text-lg font-medium text-[#333]">
                    {c.name[0]}
                  </span>
                </div>
                <div>
                  <h3 className="text-[14px] font-medium text-black group-hover:opacity-60 transition-opacity">
                    {c.name}
                  </h3>
                  <p className="text-[11px] text-[#aaa]">{c.nameEn}</p>
                </div>
              </div>
              <p className="text-[13px] text-[#888] line-clamp-2 mb-4">
                {c.description}
              </p>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {c.categories.slice(0, 3).map((cat) => (
                  <span
                    key={cat}
                    className="text-[11px] px-2 py-0.5 bg-[#fafafa] text-[#888] rounded"
                  >
                    {cat}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-4 text-[11px] text-[#888] pt-3 border-t border-[#efefef]">
                <span>{c.location}</span>
                <span>{c.ingredientCount}素材</span>
                <span>{c.established}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
