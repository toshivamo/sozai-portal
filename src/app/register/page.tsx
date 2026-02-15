import Link from "next/link";

export default function RegisterPage() {
  return (
    <div className="bg-[#f0f2f0] min-h-screen">
      <div className="bg-gradient-to-br from-[#f5fcfb] via-white to-[#f0f2f0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center max-w-2xl mx-auto">
            <h1 className="text-3xl sm:text-4xl font-bold text-[#354341]">
              SOZAIに素材を掲載する
            </h1>
            <p className="mt-4 text-lg text-[#8f9695]">
              機能性素材の情報を発信し、健康食品メーカーや開発企業とつながりましょう
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 pb-16">
        {/* Plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl border border-[#e5e7e5] p-8">
            <h3 className="text-lg font-semibold text-[#354341]">フリー</h3>
            <div className="mt-4">
              <span className="text-3xl font-bold text-[#354341]">¥0</span>
              <span className="text-sm text-[#8f9695]">/月</span>
            </div>
            <ul className="mt-6 space-y-3 text-sm text-[#475a57]">
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-[#2aab9f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                素材3件まで登録
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-[#2aab9f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                基本情報の掲載
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-[#2aab9f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                お問い合わせ受付
              </li>
            </ul>
            <Link
              href="/contact"
              className="block mt-8 text-center px-6 py-3 text-sm border border-[#2aab9f] text-[#2aab9f] rounded-full hover:bg-[#f5fcfb] transition-colors"
            >
              無料で始める
            </Link>
          </div>

          <div className="bg-white rounded-2xl border-2 border-[#2aab9f] p-8 relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#2aab9f] text-white text-xs rounded-full">
              おすすめ
            </div>
            <h3 className="text-lg font-semibold text-[#354341]">スタンダード</h3>
            <div className="mt-4">
              <span className="text-3xl font-bold text-[#354341]">¥30,000</span>
              <span className="text-sm text-[#8f9695]">/月</span>
            </div>
            <ul className="mt-6 space-y-3 text-sm text-[#475a57]">
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-[#2aab9f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                素材20件まで登録
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-[#2aab9f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                詳細情報・資料掲載
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-[#2aab9f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                優先表示
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-[#2aab9f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                アクセス解析
              </li>
            </ul>
            <Link
              href="/contact"
              className="block mt-8 text-center px-6 py-3 text-sm bg-[#2aab9f] text-white rounded-full hover:bg-[#1e8a80] transition-colors"
            >
              申し込む
            </Link>
          </div>

          <div className="bg-white rounded-2xl border border-[#e5e7e5] p-8">
            <h3 className="text-lg font-semibold text-[#354341]">プレミアム</h3>
            <div className="mt-4">
              <span className="text-3xl font-bold text-[#354341]">¥80,000</span>
              <span className="text-sm text-[#8f9695]">/月</span>
            </div>
            <ul className="mt-6 space-y-3 text-sm text-[#475a57]">
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-[#2aab9f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                素材数無制限
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-[#2aab9f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                トップページ掲載
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-[#2aab9f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                PR記事掲載
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-[#2aab9f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                専任サポート
              </li>
            </ul>
            <Link
              href="/contact"
              className="block mt-8 text-center px-6 py-3 text-sm border border-[#2aab9f] text-[#2aab9f] rounded-full hover:bg-[#f5fcfb] transition-colors"
            >
              お問い合わせ
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
