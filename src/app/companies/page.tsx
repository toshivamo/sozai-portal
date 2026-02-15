import Link from "next/link";
import { companies } from "@/data/ingredients";

export default function CompaniesPage() {
  return (
    <div className="bg-[#f0f2f0] min-h-screen">
      <div className="bg-white border-b border-[#e5e7e5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-[#354341]">
            メーカー一覧
          </h1>
          <p className="mt-2 text-[#8f9695]">
            {companies.length}社の素材メーカー・サプライヤーを掲載
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {companies.map((c) => (
            <Link
              key={c.id}
              href={`/companies/${c.id}`}
              className="group block bg-white rounded-2xl border border-[#e5e7e5] p-6 hover:shadow-lg hover:border-[#2aab9f]/30 transition-all duration-300"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-14 h-14 rounded-xl bg-[#f5fcfb] flex items-center justify-center shrink-0">
                  <span className="text-xl font-bold text-[#2aab9f]">
                    {c.name[0]}
                  </span>
                </div>
                <div>
                  <h3 className="font-semibold text-[#354341] group-hover:text-[#2aab9f] transition-colors">
                    {c.name}
                  </h3>
                  <p className="text-xs text-[#8f9695]">{c.nameEn}</p>
                </div>
              </div>
              <p className="text-sm text-[#8f9695] line-clamp-2 mb-4">
                {c.description}
              </p>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {c.categories.slice(0, 3).map((cat) => (
                  <span
                    key={cat}
                    className="text-xs px-2 py-0.5 bg-[#f5fcfb] text-[#2aab9f] rounded-full"
                  >
                    {cat}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-4 text-xs text-[#8f9695] pt-4 border-t border-[#e5e7e5]">
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
