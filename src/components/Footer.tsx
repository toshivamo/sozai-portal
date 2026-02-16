import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <span className="font-semibold text-lg tracking-tight">SOZAI</span>
            <p className="mt-4 text-[13px] text-[#888] leading-relaxed">
              健康食品・サプリメントの<br />機能性素材ポータルサイト
            </p>
          </div>

          <div>
            <h3 className="text-[13px] font-medium mb-4 uppercase tracking-wider text-[#888]">素材</h3>
            <ul className="space-y-2.5 text-[13px]">
              <li><Link href="/ingredients" className="text-[#bbb] hover:text-white transition-colors">素材一覧</Link></li>
              <li><Link href="/functions" className="text-[#bbb] hover:text-white transition-colors">効果・効能から探す</Link></li>
              <li><Link href="/ingredients?category=植物エキス" className="text-[#bbb] hover:text-white transition-colors">植物エキス</Link></li>
              <li><Link href="/ingredients?category=乳酸菌" className="text-[#bbb] hover:text-white transition-colors">乳酸菌・プロバイオティクス</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-[13px] font-medium mb-4 uppercase tracking-wider text-[#888]">サービス</h3>
            <ul className="space-y-2.5 text-[13px]">
              <li><Link href="/companies" className="text-[#bbb] hover:text-white transition-colors">メーカー一覧</Link></li>
              <li><Link href="/claims" className="text-[#bbb] hover:text-white transition-colors">機能性表示食品DB</Link></li>
              <li><Link href="/register" className="text-[#bbb] hover:text-white transition-colors">サプライヤー登録</Link></li>
              <li><Link href="/contact" className="text-[#bbb] hover:text-white transition-colors">お問い合わせ</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-[13px] font-medium mb-4 uppercase tracking-wider text-[#888]">サポート</h3>
            <ul className="space-y-2.5 text-[13px]">
              <li><Link href="#" className="text-[#bbb] hover:text-white transition-colors">利用ガイド</Link></li>
              <li><Link href="#" className="text-[#bbb] hover:text-white transition-colors">利用規約</Link></li>
              <li><Link href="#" className="text-[#bbb] hover:text-white transition-colors">プライバシーポリシー</Link></li>
              <li><Link href="#" className="text-[#bbb] hover:text-white transition-colors">運営会社</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-[#333] text-center">
          <p className="text-[12px] text-[#666]">&copy; 2025 SOZAI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
