export default function ContactPage() {
  return (
    <div className="bg-white min-h-screen">
      <div className="border-b border-[#efefef]">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-8">
          <p className="text-[11px] text-[#888] uppercase tracking-widest mb-2">Contact</p>
          <h1 className="text-2xl sm:text-3xl font-light text-black">
            お問い合わせ
          </h1>
          <p className="mt-2 text-[13px] text-[#888]">
            素材に関するご質問やサービスについてお気軽にお問い合わせください
          </p>
        </div>
      </div>

      <div className="max-w-xl mx-auto px-5 sm:px-8 py-12">
        <div className="border border-[#efefef] rounded p-6 sm:p-8">
          <form className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-[11px] text-[#888] uppercase tracking-wider mb-2">
                  会社名
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2.5 text-[13px] border border-[#efefef] rounded outline-none focus:border-black transition-colors"
                  placeholder="株式会社○○"
                />
              </div>
              <div>
                <label className="block text-[11px] text-[#888] uppercase tracking-wider mb-2">
                  お名前 <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2.5 text-[13px] border border-[#efefef] rounded outline-none focus:border-black transition-colors"
                  placeholder="山田 太郎"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-[11px] text-[#888] uppercase tracking-wider mb-2">
                メールアドレス <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                className="w-full px-4 py-2.5 text-[13px] border border-[#efefef] rounded outline-none focus:border-black transition-colors"
                placeholder="example@company.com"
                required
              />
            </div>

            <div>
              <label className="block text-[11px] text-[#888] uppercase tracking-wider mb-2">
                お問い合わせ種別
              </label>
              <select className="w-full px-4 py-2.5 text-[13px] border border-[#efefef] rounded outline-none focus:border-black transition-colors bg-white">
                <option>素材について詳しく知りたい</option>
                <option>サンプルを依頼したい</option>
                <option>サプライヤーとして登録したい</option>
                <option>サービスについて</option>
                <option>その他</option>
              </select>
            </div>

            <div>
              <label className="block text-[11px] text-[#888] uppercase tracking-wider mb-2">
                お問い合わせ内容 <span className="text-red-500">*</span>
              </label>
              <textarea
                rows={6}
                className="w-full px-4 py-2.5 text-[13px] border border-[#efefef] rounded outline-none focus:border-black transition-colors resize-none"
                placeholder="お問い合わせ内容を入力してください..."
                required
              />
            </div>

            <button
              type="submit"
              className="w-full py-2.5 text-[13px] text-white bg-black rounded hover:opacity-80 transition-opacity"
            >
              送信する
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
