export default function ContactPage() {
  return (
    <div className="bg-[#f0f2f0] min-h-screen">
      <div className="bg-white border-b border-[#e5e7e5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-[#354341]">
            お問い合わせ
          </h1>
          <p className="mt-2 text-[#8f9695]">
            素材に関するご質問やサービスについてお気軽にお問い合わせください
          </p>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl border border-[#e5e7e5] p-8">
          <form className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-[#354341] mb-2">
                  会社名
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 text-sm border border-[#e5e7e5] rounded-xl outline-none focus:border-[#2aab9f] transition-colors"
                  placeholder="株式会社○○"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#354341] mb-2">
                  お名前 <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 text-sm border border-[#e5e7e5] rounded-xl outline-none focus:border-[#2aab9f] transition-colors"
                  placeholder="山田 太郎"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-[#354341] mb-2">
                メールアドレス <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                className="w-full px-4 py-3 text-sm border border-[#e5e7e5] rounded-xl outline-none focus:border-[#2aab9f] transition-colors"
                placeholder="example@company.com"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[#354341] mb-2">
                お問い合わせ種別
              </label>
              <select className="w-full px-4 py-3 text-sm border border-[#e5e7e5] rounded-xl outline-none focus:border-[#2aab9f] transition-colors bg-white">
                <option>素材について詳しく知りたい</option>
                <option>サンプルを依頼したい</option>
                <option>サプライヤーとして登録したい</option>
                <option>サービスについて</option>
                <option>その他</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-[#354341] mb-2">
                お問い合わせ内容 <span className="text-red-500">*</span>
              </label>
              <textarea
                rows={6}
                className="w-full px-4 py-3 text-sm border border-[#e5e7e5] rounded-xl outline-none focus:border-[#2aab9f] transition-colors resize-none"
                placeholder="お問い合わせ内容を入力してください..."
                required
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 text-sm text-white bg-[#2aab9f] rounded-full hover:bg-[#1e8a80] transition-colors font-medium"
            >
              送信する
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
