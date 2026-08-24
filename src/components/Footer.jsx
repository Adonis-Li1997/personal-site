export default function Footer() {
  return (
    <footer className="relative border-t border-ink-900/5 py-12">
      <div className="max-w-7xl 2xl:max-w-[1440px] mx-auto px-6 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <span className="font-display font-bold text-xl text-ink-900">李建国</span>
            <span className="text-ink-500 text-sm">AI Product Manager</span>
          </div>

          {/* Copyright */}
          <div className="text-xs text-ink-500">
            © {new Date().getFullYear()} 李建国. All rights reserved.
          </div>
        </div>

        {/* Big footer text */}
        <div className="mt-16 overflow-hidden">
          <div className="font-display font-bold text-[20vw] md:text-[12vw] leading-none text-ink-100 text-center select-none -mb-8">
            LI JIANGUO
          </div>
        </div>
      </div>
    </footer>
  )
}
