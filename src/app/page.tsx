import Link from "next/link";
import { ingredients, companies, categories, functionTags } from "@/data/ingredients";

export default function Home() {
  return (
    <>
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-20 sm:py-28 lg:py-36">
          <div className="max-w-2xl">
            <p className="text-[13px] text-[#888] uppercase tracking-widest mb-4">Functional Ingredients Portal</p>
            <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-light text-black leading-[1.15] tracking-tight">
              機能性素材を、<br /><span className="font-semibold">もっとスマートに。</span>
            </h1>
            <p className="mt-6 text-[15px] text-[#888] leading-relaxed max-w-lg">
              健康食品・サプリメント開発に必要な機能性素材を、効果・効能・エビデンスレベルで比較検索。素材メーカーとの出会いをサポートします。
            </p>
            <div className="mt-10 max-w-md">
              <div className="flex items-center border border-[#ddd] rounded overflow-hidden focus-within:border-black transition-colors">
                <svg className="ml-3 w-4 h-4 text-[#bbb] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                <input type="text" placeholder="素材名、効果、メーカー名で検索..." className="flex-1 px-3 py-3 text-[13px] outline-none" />
                <Link href="/ingredients" className="px-5 py-3 text-[13px] text-white bg-black hover:opacity-80 transition-opacity">検索</Link>
              </div>
            </div>
            <div className="mt-5 flex flex-wrap items-center gap-2">
              <span className="text-[12px] text-[#bbb]">人気:</span>
              {["NMN", "乳酸菌", "コラーゲン", "GABA", "ルテイン"].map((tag) => (
                <Link key={tag} href={`/ingredients?q=${tag}`} className="text-[12px] px-3 py-1 text-[#555] border border-[#ddd] rounded hover:border-black hover:text-black transition-all">{tag}</Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[#efefef] bg-[#fafafa]">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[["1,200+", "登録素材数"], ["680+", "登録企業数"], ["6,500+", "関連製品"], ["300+", "機能性表示食品"]].map(([num, label]) => (
              <div key={label} className="text-center">
                <div className="text-2xl sm:text-3xl font-light text-black">{num}</div>
                <div className="text-[12px] text-[#888] mt-1">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <h2 className="text-xl sm:text-2xl font-light text-black mb-2">カテゴリから探す</h2>
          <p className="text-[13px] text-[#888] mb-10">10のカテゴリから目的の素材を見つけましょう</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {categories.map((cat) => (
              <Link key={cat} href={`/ingredients?category=${encodeURIComponent(cat)}`} className="group flex items-center gap-3 p-4 border border-[#efefef] rounded hover:border-black transition-colors">
                <div className="w-8 h-8 rounded-full bg-[#fafafa] group-hover:bg-black flex items-center justify-center shrink-0 transition-colors">
                  <svg className="w-4 h-4 text-[#888] group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
                </div>
                <span className="text-[13px] text-[#333] group-hover:text-black transition-colors">{cat}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#fafafa]">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <h2 className="text-xl sm:text-2xl font-light text-black mb-2">効果・効能から探す</h2>
          <p className="text-[13px] text-[#888] mb-10">求める効果から最適な素材を検索できます</p>
          <div className="flex flex-wrap gap-2.5">
            {functionTags.map((tag) => (
              <Link key={tag} href={`/functions?tag=${encodeURIComponent(tag)}`} className="px-5 py-2.5 text-[13px] text-[#333] border border-[#ddd] rounded hover:bg-black hover:text-white hover:border-black transition-all duration-200">{tag}</Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="flex items-end justify-between mb-10">
            <div>
              <h2 className="text-xl sm:text-2xl font-light text-black">注目の素材</h2>
              <p className="text-[13px] text-[#888] mt-1">今話題の機能性素材をピックアップ</p>
            </div>
            <Link href="/ingredients" className="hidden sm:inline-flex text-[13px] text-black border-b border-black pb-0.5 hover:opacity-60 transition-opacity">すべて見る</Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {ingredients.slice(0, 6).map((ing) => (
              <Link key={ing.id} href={`/ingredients/${ing.id}`} className="group block border border-[#efefef] rounded p-5 hover:border-black transition-colors">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] px-2.5 py-0.5 bg-[#fafafa] text-[#888] rounded">{ing.category}</span>
                  <span className={`text-[11px] px-2 py-0.5 rounded ${ing.evidenceLevel === "高" ? "bg-[#f0f7f0] text-[#2d7a2d]" : ing.evidenceLevel === "中" ? "bg-[#fdf7ed] text-[#9a7b2d]" : "bg-[#fafafa] text-[#888]"}`}>Evidence: {ing.evidenceLevel}</span>
                </div>
                <h3 className="text-[14px] font-medium text-black group-hover:opacity-60 transition-opacity mb-2">{ing.name}</h3>
                <div className="flex flex-wrap gap-1.5">
                  {ing.functions.slice(0, 3).map((fn) => (<span key={fn} className="text-[11px] px-2 py-0.5 border border-[#efefef] text-[#888] rounded">{fn}</span>))}
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-8 text-center sm:hidden"><Link href="/ingredients" className="text-[13px] text-black border-b border-black pb-0.5">すべて見る</Link></div>
        </div>
      </section>

      <section className="py-20 bg-[#fafafa]">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="flex items-end justify-between mb-10">
            <div>
              <h2 className="text-xl sm:text-2xl font-light text-black">注目のメーカー</h2>
              <p className="text-[13px] text-[#888] mt-1">素材の開発・供給をリードする企業</p>
            </div>
            <Link href="/companies" className="hidden sm:inline-flex text-[13px] text-black border-b border-black pb-0.5 hover:opacity-60 transition-opacity">すべて見る</Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {companies.slice(0, 4).map((c) => (
              <Link key={c.id} href={`/companies/${c.id}`} className="group block bg-white border border-[#efefef] rounded p-5 hover:border-black transition-colors">
                <div className="w-10 h-10 rounded bg-[#fafafa] flex items-center justify-center mb-4"><span className="text-sm font-medium text-[#333]">{c.name[0]}</span></div>
                <h3 className="text-[14px] font-medium text-black group-hover:opacity-60 transition-opacity mb-1">{c.name}</h3>
                <p className="text-[12px] text-[#888] mb-3">{c.location}</p>
                <p className="text-[12px] text-[#aaa] line-clamp-2 mb-4">{c.description}</p>
                <div className="flex items-center gap-3 text-[11px] text-[#888] pt-3 border-t border-[#efefef]"><span>{c.ingredientCount}素材</span><span>{c.established}</span></div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-black">
        <div className="max-w-2xl mx-auto px-5 sm:px-8 text-center">
          <h2 className="text-xl sm:text-2xl font-light text-white mb-4">素材の情報発信を始めませんか？</h2>
          <p className="text-[13px] text-[#888] mb-8">SOZAIに素材情報を掲載して、健康食品メーカーや開発企業とつながりましょう。無料プランからスタートできます。</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link href="/register" className="px-6 py-2.5 text-[13px] text-black bg-white rounded hover:opacity-80 transition-opacity">無料で登録する</Link>
            <Link href="/contact" className="px-6 py-2.5 text-[13px] text-white border border-[#555] rounded hover:border-white transition-colors">お問い合わせ</Link>
          </div>
        </div>
      </section>
    </>
  );
}
