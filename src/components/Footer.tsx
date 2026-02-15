import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#354341] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-[#2aab9f] flex items-center justify-center">
                <span className="text-white font-bold text-sm">S</span>
              </div>
              <span className="font-bold text-xl">SOZAI</span>
            </div>
            <p className="text-sm text-[#a0b0ad] leading-relaxed">
              健康食品・サプリメントの機能性素材を
              <br />
              簡単に比較・検索できるポータルサイト
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-sm">素材を探す</h3>
            <ul className="space-y-2 text-sm text-[#a0b0ad]">
              <li>
                <Link href="/ingredients" className="hover:text-[#2aab9f] transition-colors">
                  素材一覧
                </Link>
              </li>
              <li>
                <Link href="/functions" className="hover:text-[#2aab9f] transition-colors">
                  効果・効能から探す
                </Link>
              </li>
              <li>
                <Link href="/ingredients?category=植物エキス" className="hover:text-[#2aab9f] transition-colors">
                  植物エキス
                </Link>
              </li>
              <li>
                <Link href="/ingredients?category=乳酸菌" className="hover:text-[#2aab9f] transition-colors">
                  乳酸菌・プロバイオティクス
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-sm">サービス</h3>
            <ul className="space-y-2 text-sm text-[#a0b0ad]">
              <li>
                <Link href="/companies" className="hover:text-[#2aab9f] transition-colors">
                  メーカー一覧
                </Link>
              </li>
              <li>
                <Link href="/claims" className="hover:text-[#2aab9f] transition-colors">
                  機能性表示食品データベース
                </Link>
              </li>
              <li>
                <Link href="/register" className="hover:text-[#2aab9f] transition-colors">
                  サプライヤー登録
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#2aab9f] transition-colors">
                  お問い合わせ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-sm">サポート</h3>
            <ul className="space-y-2 text-sm text-[#a0b0ad]">
              <li>
                <Link href="#" className="hover:text-[#2aab9f] transition-colors">
                  利用ガイド
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#2aab9f] transition-colors">
                  利用規約
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#2aab9f] transition-colors">
                  プライバシーポリシー
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#2aab9f] transition-colors">
                  運営会社
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[#475a57] text-center">
          <p className="text-sm text-[#8f9695]">
            &copy; 2025 SOZAI - 機能性素材ポータル. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
