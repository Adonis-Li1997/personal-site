const base = import.meta.env.BASE_URL

const socialLinks = [
  {
    name: 'Email',
    value: '1297937391@qq.com',
    href: 'mailto:1297937391@qq.com',
  },
  {
    name: 'Phone',
    value: '18312823691',
    href: 'tel:18312823691',
  },
  {
    name: 'WeChat',
    value: 'l1297937391',
    href: '#',
  },
]

export default function Contact() {
  return (
    <section id="contact" className="relative section-padding overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-white/5 blur-[120px]" />
      </div>

      {/* Grid bg */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="max-w-5xl mx-auto px-6 md:px-8 relative text-center">
        {/* Section label */}
        <div className="flex items-center justify-center gap-3 mb-10">
          <span className="w-12 h-px bg-ink-600" />
          <span className="text-sm text-ink-400 tracking-widest uppercase">Contact</span>
          <span className="w-12 h-px bg-ink-600" />
        </div>

        {/* Big text */}
        <h2 className="heading-display text-5xl md:text-7xl lg:text-8xl mb-8 leading-tight">
          <span className="text-gradient">有想法？</span>
          <br />
          <span className="text-ink-900">聊聊。</span>
        </h2>

        <p className="text-ink-500 text-lg max-w-xl mx-auto mb-16">
          无论是人事招聘、行业交流，还是单纯想交个朋友，
          <br className="hidden md:block" />
          欢迎随时联系我！
        </p>

        {/* Contact Cards */}
        <div className="grid sm:grid-cols-3 gap-4 max-w-3xl mx-auto mb-20">
          {socialLinks.map((link) => {
            const isWechat = link.name === 'WeChat'
            const Tag = isWechat ? 'div' : 'a'
            return (
              <Tag
                key={link.name}
                href={isWechat ? undefined : link.href}
                className={`group glass rounded-2xl p-6 transition-all duration-300 text-left ${
                  isWechat ? 'cursor-default' : 'hover:bg-ink-900/5 hover:border-white/20'
                }`}
              >
                <div className="text-xs text-ink-500 uppercase tracking-wider mb-2">
                  {link.name}
                </div>
                <div className="text-ink-900 text-sm font-medium truncate transition-colors">
                  {link.value}
                </div>
              </Tag>
            )
          })}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 -mt-12">
          <a
            href="mailto:1297937391@qq.com"
            className="inline-flex items-center gap-3 px-10 py-5 bg-ink-900 text-white rounded-full font-medium text-lg hover:bg-ink-700 transition-all duration-300 group"
          >
            发邮件给我
            <svg
              className="w-5 h-5 transition-transform group-hover:translate-x-1"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                d="M5 12h14M12 5l7 7-7 7"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
          <a
            href={`${base}resume.pdf`}
            download
            className="inline-flex items-center gap-3 px-10 py-5 border border-ink-900/20 text-ink-900 rounded-full font-medium text-lg hover:border-ink-900/40 hover:bg-ink-900/5 transition-all duration-300 group"
          >
            获取附件简历
            <svg
              className="w-5 h-5 transition-transform group-hover:translate-y-1"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M12 5v14M19 12l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
