export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden pt-20"
    >
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-30">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(rgba(0,0,0,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      {/* Glow Orbs */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 rounded-full bg-ink-200/50 blur-[100px]" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 rounded-full bg-ink-100/80 blur-[100px]" />

      {/* 背景大字 AI Product Manager */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <div className="text-[15vw] md:text-[12vw] 2xl:text-[11vw] font-display font-bold text-ink-900/[0.03] tracking-tight whitespace-nowrap select-none leading-none">
          AI Product Manager
        </div>
      </div>

      <div className="relative max-w-7xl 2xl:max-w-[1440px] mx-auto px-6 md:px-8 w-full z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="heading-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl 2xl:text-[6rem] leading-[1.1] mb-8 2xl:mb-10">
            <span className="text-ink-900">Hi，我是</span>
            <span className="text-gradient">李建国</span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl 2xl:text-2xl text-ink-500 mb-12 2xl:mb-16 leading-relaxed">
            7年产品经验，专注 AI 智能体落地。从云端 SaaS 到端侧硬件，
            <br className="hidden md:block" />
            让 AI 能力在真实产品中创造价值。
          </p>

          {/* CTA */}
          <div className="flex justify-center mb-16">
            <a
              href="#projects"
              className="group px-10 py-4 bg-ink-900 text-white rounded-full font-medium hover:bg-ink-700 transition-all duration-300 flex items-center gap-2"
            >
              项目经历
              <svg
                className="w-4 h-4 transition-transform group-hover:translate-x-1"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}
