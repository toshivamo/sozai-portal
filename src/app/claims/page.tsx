import Link from "next/link";
import { functionalClaims } from "@/data/ingredients";

export default function ClaimsPage() {
  return (
    <div className="bg-[#f0f2f0] min-h-screen">
      <div className="bg-white border-b border-[#e5e7e5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-[#354341]">
            機能性表示食品データベース
          </h1>
          <p className="mt-2 text-[#8f9695]">
            届出された機能性表示食品の情報を検索・閲覧
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Table for desktop */}
        <div className="hidden md:block bg-white rounded-2xl border border-[#e5e7e5] overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="bg-[#f5fcfb]">
                <th className="text-left px-6 py-4 text-xs font-semibold text-[#354341]">
                  届出番号
                </th>
                <th className="text-left px-6 py-4 text-xs font-semibold text-[#354341]">
                  商品名
                </th>
                <th className="text-left px-6 py-4 text-xs font-semibold text-[#354341]">
                  届出者
                </th>
                <th className="text-left px-6 py-4 text-xs font-semibold text-[#354341]">
                  関与成分
                </th>
                <th className="text-left px-6 py-4 text-xs font-semibold text-[#354341]">
                  届出日
                </th>
              </tr>
            </thead>
            <tbody>
              {functionalClaims.map((claim) => (
                <tr
                  key={claim.id}
                  className="border-t border-[#e5e7e5] hover:bg-[#f5fcfb] transition-colors"
                >
                  <td className="px-6 py-4 text-sm text-[#2aab9f] font-medium">
                    {claim.届出番号}
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-sm font-medium text-[#354341]">
                      {claim.productName}
                    </p>
                    <p className="text-xs text-[#8f9695] mt-1 line-clamp-2">
                      {claim.claim}
                    </p>
                  </td>
                  <td className="px-6 py-4 text-sm text-[#475a57]">
                    {claim.company}
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-xs px-2 py-0.5 bg-[#f5fcfb] text-[#2aab9f] rounded-full">
                      {claim.ingredient}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-[#8f9695]">
                    {claim.date}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Cards for mobile */}
        <div className="md:hidden space-y-4">
          {functionalClaims.map((claim) => (
            <div
              key={claim.id}
              className="bg-white rounded-2xl border border-[#e5e7e5] p-5"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm text-[#2aab9f] font-medium">
                  {claim.届出番号}
                </span>
                <span className="text-xs text-[#8f9695]">{claim.date}</span>
              </div>
              <h3 className="font-semibold text-[#354341] mb-1">
                {claim.productName}
              </h3>
              <p className="text-xs text-[#8f9695] mb-3">{claim.company}</p>
              <span className="inline-block text-xs px-2 py-0.5 bg-[#f5fcfb] text-[#2aab9f] rounded-full mb-3">
                {claim.ingredient}
              </span>
              <p className="text-sm text-[#8f9695]">{claim.claim}</p>
            </div>
          ))}
        </div>

        {/* Info */}
        <div className="mt-8 bg-white rounded-2xl border border-[#e5e7e5] p-6">
          <p className="text-sm text-[#8f9695]">
            ※ このデータベースはサンプルデータを表示しています。実際の機能性表示食品届出情報は
            <Link
              href="https://www.caa.go.jp/policies/policy/food_labeling/foods_with_function_claims/"
              className="text-[#2aab9f] hover:underline"
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
