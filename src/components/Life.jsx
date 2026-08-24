const base = import.meta.env.BASE_URL

// 生活碎片板块 - 照片墙 + 短视频展示
const photos = [
  { id: 1, src: `${base}life/life-01.jpg`, title: '牛木线徒步' },
  { id: 2, src: `${base}life/life-02.jpg`, title: '玉龙雪山' },
  { id: 3, src: `${base}life/life-03.jpg`, title: '三观顶' },
  { id: 4, src: `${base}life/life-04.jpg`, title: '望郎归' },
  { id: 5, src: `${base}life/life-05.jpg`, title: '阿里云栖大会' },
  { id: 6, src: `${base}life/life-06.jpg`, title: '教育装备展' },
  { id: 7, src: `${base}life/life-07.jpg`, title: '爱好篮球' },
  { id: 8, src: `${base}life/life-08.jpg`, title: '发现美好' },
]

export default function Life() {
  return (
    <section id="life" className="relative section-padding bg-ink-50/50 overflow-hidden">
      {/* Top gradient fade */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white to-transparent pointer-events-none" />

      <div className="max-w-7xl 2xl:max-w-[1440px] mx-auto px-6 md:px-8 relative">
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-sm text-ink-400 tracking-widest uppercase">Life</span>
            <span className="flex-1 h-px bg-gradient-to-r from-ink-200 to-transparent max-w-xs" />
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h2 className="heading-display text-4xl md:text-6xl 2xl:text-7xl max-w-2xl">
              生活
              <span className="text-ink-500"> 碎片</span>
            </h2>
            <p className="text-ink-500 whitespace-nowrap">
              工作之外的我，喜欢探索生活中的小美好。
            </p>
          </div>
        </div>

        {/* Masonry-like Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {photos.map((photo, i) => {
            // 不同高度制造错落感
            const heights = ['h-64', 'h-48', 'h-72', 'h-56', 'h-56', 'h-64', 'h-72', 'h-56']
            const heightsMd = ['md:h-80', 'md:h-64', 'md:h-96', 'md:h-72', 'md:h-72', 'md:h-80', 'md:h-96', 'md:h-72']

            return (
              <div
                key={photo.id}
                className={`group relative rounded-2xl overflow-hidden ${heights[i]} ${heightsMd[i]} cursor-pointer`}
              >
                <img
                  src={photo.src}
                  alt={photo.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
                  <span className="text-sm text-white font-medium">{photo.title}</span>
                </div>

                {/* Number label */}
                <div className="absolute top-3 left-3 text-xs text-white/80 font-mono drop-shadow">
                  {String(photo.id).padStart(2, '0')}
                </div>
              </div>
            )
          })}
        </div>

        {/* Caption */}
        <div className="mt-12 text-center">
          <p className="text-ink-500 text-sm">
            📷 更多生活记录慢慢更新中
          </p>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none" />
    </section>
  )
}
