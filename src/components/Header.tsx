"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-[#efefef]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="flex items-center justify-between h-14">
          <Link href="/" className="flex items-center gap-2.5">
            <span className="font-semibold text-lg tracking-tight text-black">SOZAI</span>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            <Link href="/ingredients" className="text-[13px] text-[#555] hover:text-black transition-colors">
              素材を探す
            </Link>
            <Link href="/functions" className="text-[13px] text-[#555] hover:text-black transition-colors">
              効果・効能
            </Link>
            <Link href="/companies" className="text-[13px] text-[#555] hover:text-black transition-colors">
              メーカー一覧
            </Link>
            <Link href="/claims" className="text-[13px] text-[#555] hover:text-black transition-colors">
              機能性表示食品
            </Link>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/contact"
              className="px-4 py-1.5 text-[13px] text-black border border-black rounded hover:bg-black hover:text-white transition-all duration-200"
            >
              お問い合わせ
            </Link>
            <Link
              href="/register"
              className="px-4 py-1.5 text-[13px] text-white bg-black rounded hover:opacity-80 transition-opacity"
            >
              無料登録
            </Link>
          </div>

          <button
            className="md:hidden p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-[#efefef] bg-white">
          <div className="px-5 py-4 space-y-1">
            <Link href="/ingredients" className="block py-2 text-sm text-[#555] hover:text-black" onClick={() => setMobileOpen(false)}>素材を探す</Link>
            <Link href="/functions" className="block py-2 text-sm text-[#555] hover:text-black" onClick={() => setMobileOpen(false)}>効果・効能</Link>
            <Link href="/companies" className="block py-2 text-sm text-[#555] hover:text-black" onClick={() => setMobileOpen(false)}>メーカー一覧</Link>
            <Link href="/claims" className="block py-2 text-sm text-[#555] hover:text-black" onClick={() => setMobileOpen(false)}>機能性表示食品</Link>
            <div className="pt-3 flex flex-col gap-2">
              <Link href="/contact" className="py-2 text-sm text-center text-black border border-black rounded" onClick={() => setMobileOpen(false)}>お問い合わせ</Link>
              <Link href="/register" className="py-2 text-sm text-center text-white bg-black rounded" onClick={() => setMobileOpen(false)}>無料登録</Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
