import Link from "next/link";

export default function RegisterPage() {
  return (
    <div className="bg-white min-h-screen">
      <div className="border-b border-[#efefef]">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-16">
          <div className="text-center max-w-xl mx-auto">
            <p className="text-[11px] text-[#888] uppercase tracking-widest mb-4">Registration</p>
            <h1 className="text-3xl sm:text-4xl font-light text-black">
              SOZAIに素材を掲載する
            </h1>
            <p className="mt-4 text-[15px] text-[#888]">
              機能性素材の情報を発信し、健康食品メーカーや開発企業とつながりましょう
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-5 sm:px-8 py-12">
        {/* Plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="border border-[#efefef] rounded p-7">
            <h3 className="text-[14px] font-medium text-black">フリー</h3>
            <div className="mt-4">
              <span className="text-3xl font-light text-black">¥0</span>
              <span className="text-[13px] text-[#888]">/月</span>
            </div>
            <ul className="mt-6 space-y-3 text-[13px] text-[#555]">
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                素材3件まで登録
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                基本情報の掲載
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                お問い合わせ受付
              </li>
            </ul>
            <Link
              href="/contact"
              className="block mt-8 text-center px-5 py-2.5 text-[13px] border border-black text-black rounded hover:bg-black hover:text-white transition-all"
            >
              無料で始める
            </Link>
          </div>

          <div className="border-2 border-black rounded p-7 relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 bg-black text-white text-[11px] rounded">
              おすすめ
            </div>
            <h3 className="text-[14px] font-medium text-black">スタンダード</h3>
            <div className="mt-4">
              <span className="text-3xl font-light text-black">¥30,000</span>
              <span className="text-[13px] text-[#888]">/月</span>
            </div>
            <ul className="mt-6 space-y-3 text-[13px] text-[#555]">
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                素材20件まで登録
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                詳細情報・資料掲載
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                優先表示
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                アクセス解析
              </li>
            </ul>
            <Link
              href="/contact"
              className="block mt-8 text-center px-5 py-2.5 text-[13px] bg-black text-white rounded hover:opacity-80 transition-opacity"
            >
              申し込む
            </Link>
          </div>

          <div className="border border-[#efefef] rounded p-7">
            <h3 className="text-[14px] font-medium text-black">プレミアム</h3>
            <div className="mt-4">
              <span className="text-3xl font-light text-black">¥80,000</span>
              <span className="text-[13px] text-[#888]">/月</span>
            </div>
            <ul className="mt-6 space-y-3 text-[13px] text-[#555]">
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                素材数無制限
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                トップページ掲載
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                PR記事掲載
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                専任サポート
              </li>
            </ul>
            <Link
              href="/contact"
              className="block mt-8 text-center px-5 py-2.5 text-[13px] border border-black text-black rounded hover:bg-black hover:text-white transition-all"
            >
              お問い合わせ
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
