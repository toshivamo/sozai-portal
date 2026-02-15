"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-[#e5e7e5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-[#2aab9f] flex items-center justify-center">
              <span className="text-white font-bold text-sm">S</span>
            </div>
            <span className="font-bold text-xl text-[#354341]">SOZAI</span>
            <span className="text-xs text-[#8f9695] hidden sm:inline">
              機能性素材ポータル
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            <Link
              href="/ingredients"
              className="px-4 py-2 text-sm text-[#475a57] hover:text-[#2aab9f] hover:bg-[#f5fcfb] rounded-full transition-all duration-200"
            >
              素材を探す
            </Link>
            <Link
              href="/functions"
              className="px-4 py-2 text-sm text-[#475a57] hover:text-[#2aab9f] hover:bg-[#f5fcfb] rounded-full transition-all duration-200"
            >
              効果・効能
            </Link>
            <Link
              href="/companies"
              className="px-4 py-2 text-sm text-[#475a57] hover:text-[#2aab9f] hover:bg-[#f5fcfb] rounded-full transition-all duration-200"
            >
              メーカー一覧
            </Link>
            <Link
              href="/claims"
              className="px-4 py-2 text-sm text-[#475a57] hover:text-[#2aab9f] hover:bg-[#f5fcfb] rounded-full transition-all duration-200"
            >
              機能性表示食品
            </Link>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/contact"
              className="px-5 py-2 text-sm text-[#2aab9f] border border-[#2aab9f] rounded-full hover:bg-[#f5fcfb] transition-all duration-200"
            >
              お問い合わせ
            </Link>
            <Link
              href="/register"
              className="px-5 py-2 text-sm text-white bg-[#2aab9f] rounded-full hover:bg-[#1e8a80] transition-all duration-200"
            >
              無料登録
            </Link>
          </div>

          <button
            className="md:hidden p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <svg
              className="w-6 h-6 text-[#354341]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-[#e5e7e5] bg-white">
          <div className="px-4 py-3 space-y-1">
            <Link
              href="/ingredients"
              className="block px-4 py-2 text-sm text-[#475a57] hover:bg-[#f5fcfb] rounded-lg"
              onClick={() => setMobileOpen(false)}
            >
              素材を探す
            </Link>
            <Link
              href="/functions"
              className="block px-4 py-2 text-sm text-[#475a57] hover:bg-[#f5fcfb] rounded-lg"
              onClick={() => setMobileOpen(false)}
            >
              効果・効能
            </Link>
            <Link
              href="/companies"
              className="block px-4 py-2 text-sm text-[#475a57] hover:bg-[#f5fcfb] rounded-lg"
              onClick={() => setMobileOpen(false)}
            >
              メーカー一覧
            </Link>
            <Link
              href="/claims"
              className="block px-4 py-2 text-sm text-[#475a57] hover:bg-[#f5fcfb] rounded-lg"
              onClick={() => setMobileOpen(false)}
            >
              機能性表示食品
            </Link>
            <div className="pt-2 flex flex-col gap-2">
              <Link
                href="/contact"
                className="px-4 py-2 text-sm text-center text-[#2aab9f] border border-[#2aab9f] rounded-full"
                onClick={() => setMobileOpen(false)}
              >
                お問い合わせ
              </Link>
              <Link
                href="/register"
                className="px-4 py-2 text-sm text-center text-white bg-[#2aab9f] rounded-full"
                onClick={() => setMobileOpen(false)}
              >
                無料登録
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
