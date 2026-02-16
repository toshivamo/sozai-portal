import Link from "next/link";
import { functionalClaims } from "@/data/ingredients";

export default function ClaimsPage() {
  return (
    <div className="bg-white min-h-screen">
      <div className="border-b border-[#efefef]">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-8">
          <p className="text-[11px] text-[#888] uppercase tracking-widest mb-2">Claims Database</p>
          <h1 className="text-2xl sm:text-3xl font-light text-black">
            機能性表示食品データベース
          </h1>
          <p className="mt-2 text-[13px] text-[#888]">
            届出された機能性表示食品の情報を検索・閲覧
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-8">
        {/* Table for desktop */}
        <div className="hidden md:block border border-[#efefef] rounded overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="bg-[#fafafa]">
                <th className="text-left px-5 py-3 text-[11px] font-medium text-[#888] uppercase tracking-wider">
                  届出番号
                </th>
                <th className="text-left px-5 py-3 text-[11px] font-medium text-[#888] uppercase tracking-wider">
                  商品名
                </th>
                <th className="text-left px-5 py-3 text-[11px] font-medium text-[#888] uppercase tracking-wider">
                  届出者
                </th>
                <th className="text-left px-5 py-3 text-[11px] font-medium text-[#888] uppercase tracking-wider">
                  関与成分
                </th>
                <th className="text-left px-5 py-3 text-[11px] font-medium text-[#888] uppercase tracking-wider">
                  届出日
                </th>
              </tr>
            </thead>
            <tbody>
              {functionalClaims.map((claim) => (
                <tr
                  key={claim.id}
                  className="border-t border-[#efefef] hover:bg-[#fafafa] transition-colors"
                >
                  <td className="px-5 py-4 text-[13px] text-black font-medium">
                    {claim.届出番号}
                  </td>
                  <td className="px-5 py-4">
                    <p className="text-[13px] font-medium text-black">
                      {claim.productName}
                    </p>
                    <p className="text-[11px] text-[#aaa] mt-1 line-clamp-2">
                      {claim.claim}
                    </p>
                  </td>
                  <td className="px-5 py-4 text-[13px] text-[#555]">
                    {claim.company}
                  </td>
                  <td className="px-5 py-4">
                    <span className="text-[11px] px-2 py-0.5 bg-[#fafafa] text-[#888] rounded">
                      {claim.ingredient}
                    </span>
                  </td>
                  <td className="px-5 py-4 text-[13px] text-[#888]">
                    {claim.date}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Cards for mobile */}
        <div className="md:hidden space-y-3">
          {functionalClaims.map((claim) => (
            <div
              key={claim.id}
              className="border border-[#efefef] rounded p-5"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-[13px] text-black font-medium">
                  {claim.届出番号}
                </span>
                <span className="text-[11px] text-[#888]">{claim.date}</span>
              </div>
              <h3 className="text-[14px] font-medium text-black mb-1">
                {claim.productName}
              </h3>
              <p className="text-[11px] text-[#888] mb-3">{claim.company}</p>
              <span className="inline-block text-[11px] px-2 py-0.5 bg-[#fafafa] text-[#888] rounded mb-3">
                {claim.ingredient}
              </span>
              <p className="text-[13px] text-[#888]">{claim.claim}</p>
            </div>
          ))}
        </div>

        {/* Info */}
        <div className="mt-8 border border-[#efefef] rounded p-5">
          <p className="text-[13px] text-[#888]">
            ※ このデータベースはサンプルデータを表示しています。実際の機能性表示食品届出情報は
            <Link
              href="https://www.caa.go.jp/policies/policy/food_labeling/foods_with_function_claims/"
              className="text-[#306FDC] hover:opacity-60 transition-opacity"
              target="_blank"
            >
              消費者庁の公式サイト
            </Link>
            をご確認ください。
          </p>
        </div>
      </div>
    </div>
  );
}
