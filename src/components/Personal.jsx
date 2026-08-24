import { useState } from 'react'

const base = import.meta.env.BASE_URL

// 个人创作板块 - 私下做的内容展示
const creations = [
  {
    id: 1,
    type: '个人项目',
    title: 'Claudio',
    desc: '个人 AI 电台，读懂你的听歌习惯，像 DJ 一样为你播报。',
    status: '已完成 Demo',
    detail: {
      category: 'AI × 音乐',
      video: `${base}claudio-demo.mp4`,
      poster: `${base}claudio-demo-poster.jpg`,
      summary:
        'Claudio 是一个个人 AI 电台项目。我希望它不只是一个播放器，而是一个能理解心情、时间、天气和个人音乐偏好的 AI DJ，用自然语言陪你聊天、点歌、串场和播报。',
      highlights: [
        'LLM 负责理解用户意图、心情和场景，生成 DJ 话术与推荐理由',
        '接入网易云音乐曲库，支持自然语言点歌、风格切换和播放队列',
        '通过 TTS 生成电台式语音播报，并加入 ducking 体验，让语音不生硬打断音乐',
        '接入天气、作息和音乐偏好语料，让推荐更贴近日常使用场景',
        '支持 PWA 页面、桌面小组件、早间播报和整点提醒等陪伴式体验',
      ],
      tags: ['AI DJ', 'TTS 播报', '网易云音乐', '天气感知', 'PWA'],
    },
  },
  {
    id: 2,
    type: '提效工具',
    title: '库存处理决策计算器',
    desc: '给家人做的库存定价提效工具，用数据判断现在止损还是继续持有。',
    status: '已投入使用',
    detail: {
      category: '效率工具',
      summary:
        '这是我给老婆做的一个库存处理小工具。她在处理得物、鞋服、潮玩等库存时，经常要判断一件货是现在降价卖掉止损，还是继续压仓等涨价。这个工具把成本、仓租、预期涨价概率和等待时间放到同一个计算模型里，直接给出更清晰的决策参考。',
      highlights: [
        '围绕真实经营场景设计输入项：进货成本、运费、当前售价、入库日期、体积档位、预期涨价价格和涨价把握',
        '内置得物阶梯仓租规则，自动计算当前库龄、已付仓租、等待期仓租和仓租死线',
        '用“概率期望 + 仓租成本”的方式判断继续持有是否划算，减少凭感觉拍脑袋',
        '提供 7 天、15 天、30 天、45 天、60 天、90 天情景对比，方便快速看不同等待周期的盈亏变化',
        '做了手机端三屏滑动布局、计算器式数字键盘、自动缓存和授权码机制，适合日常高频使用',
      ],
      metrics: [
        { label: '工具类型', value: '单件库存决策' },
        { label: '使用场景', value: '得物 / 鞋服 / 潮玩' },
        { label: '核心模型', value: '概率期望 + 仓租死线' },
        { label: '部署方式', value: '纯前端单文件' },
      ],
      tags: ['库存决策', '仓租计算', '移动端工具', 'localStorage', '授权码'],
    },
  },
]

export default function Personal() {
  const [activeCreation, setActiveCreation] = useState(null)

  return (
    <section id="personal" className="relative section-padding overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 right-0 w-96 h-96 rounded-full bg-white/3 blur-[120px] -translate-y-1/2" />

      <div className="max-w-7xl 2xl:max-w-[1440px] mx-auto px-6 md:px-8 relative">
        {/* Section Header */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-sm text-ink-400 tracking-widest uppercase">Personal</span>
            <span className="flex-1 h-px bg-gradient-to-r from-ink-200 to-transparent max-w-xs" />
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h2 className="heading-display text-4xl md:text-6xl 2xl:text-7xl max-w-2xl">
              个人
              <span className="text-ink-500"> 创作与探索</span>
            </h2>
            <p className="text-ink-400 whitespace-nowrap">
              工作之外的一些个人项目和思考，记录我对AI产品的持续探索。
            </p>
          </div>
        </div>

        {/* Creations Grid */}
        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {creations.map((item, index) => {
            const isClickable = Boolean(item.detail)

            return (
              <button
                key={item.id}
                type="button"
                onClick={() => item.detail && setActiveCreation(item)}
                className={`group glass rounded-3xl p-8 hover:bg-white/5 transition-all duration-500 flex flex-col text-left min-h-[240px] ${
                  isClickable ? 'cursor-pointer hover:-translate-y-1' : 'cursor-default'
                }`}
              >
                {/* Top row: number + type */}
                <div className="flex items-center justify-between mb-6">
                  <div className="text-4xl font-display font-bold text-ink-200 group-hover:text-ink-300 transition-colors">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <span className="text-xs text-ink-400 tracking-widest uppercase">
                    {item.type}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-medium mb-3 group-hover:text-ink-900 transition-colors">
                  {item.title}
                </h3>

                {/* Desc */}
                <p className="text-sm text-ink-600 leading-relaxed flex-1">
                  {item.desc}
                </p>

                {/* Status */}
                <div className="mt-6 pt-4 border-t border-ink-900/10">
                  <span className="inline-flex items-center gap-2 text-xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-ink-400 group-hover:bg-ink-900 transition-colors" />
                    <span className="text-ink-500">
                      {isClickable ? '点击查看详情' : item.status}
                    </span>
                  </span>
                </div>
              </button>
            )
          })}
        </div>

        {/* Note */}
        <div className="mt-16 text-center">
          <p className="text-ink-500 text-sm">
            更多内容正在整理中，敬请期待 ✨
          </p>
        </div>
      </div>

      {/* Claudio Detail Modal */}
      {activeCreation && (
        <div
          className="modal-overlay fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 bg-ink-900/30 backdrop-blur-sm"
          onClick={() => setActiveCreation(null)}
        >
          <div
            className="modal-content relative w-full max-w-5xl max-h-[92vh] overflow-y-auto bg-white rounded-3xl border border-ink-900/10 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveCreation(null)}
              className="absolute top-4 right-4 md:top-6 md:right-6 w-10 h-10 rounded-full flex items-center justify-center text-ink-500 hover:text-ink-900 hover:bg-ink-900/5 transition-all duration-300 z-20"
              aria-label="关闭"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            <div className="p-8 md:p-10">
              <div className="mb-8 pr-12">
                <div className="flex items-center gap-3 mb-4 flex-wrap">
                  <span className="text-xs text-ink-400 tracking-widest uppercase">
                    {activeCreation.detail.category}
                  </span>
                  <span className="w-1 h-1 rounded-full bg-ink-300" />
                  <span className="text-xs text-ink-400">个人项目</span>
                  <span className="w-1 h-1 rounded-full bg-ink-300" />
                  <span className="text-xs text-ink-400">{activeCreation.status}</span>
                </div>
                <h3 className="heading-display text-3xl md:text-5xl text-ink-900 leading-tight">
                  {activeCreation.title}
                </h3>
              </div>

              <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-8 items-start">
                {activeCreation.detail.video ? (
                  <div className="rounded-3xl overflow-hidden border border-ink-900/10 bg-ink-50">
                    <video
                      className="block w-full aspect-video object-cover"
                      controls
                      playsInline
                      preload="metadata"
                      poster={activeCreation.detail.poster}
                    >
                      <source src={activeCreation.detail.video} type="video/mp4" />
                    </video>
                  </div>
                ) : (
                  <div className="rounded-3xl border border-ink-900/10 bg-ink-50 p-6 md:p-8">
                    <div className="mb-6">
                      <div className="text-xs text-ink-400 uppercase tracking-widest mb-3">
                        Decision Model
                      </div>
                      <div className="heading-display text-3xl md:text-4xl text-ink-900 leading-tight">
                        持有，还是现在卖？
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="rounded-2xl bg-white border border-ink-900/5 p-4">
                        <div className="text-xs text-ink-400 mb-1">核心判断</div>
                        <div className="text-sm text-ink-700 leading-relaxed">
                          涨价概率 × 涨价幅度 是否大于等待期间仓租成本
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        {activeCreation.detail.metrics.map((item) => (
                          <div
                            key={item.label}
                            className="rounded-2xl bg-white border border-ink-900/5 p-4"
                          >
                            <div className="text-xs text-ink-400 mb-1">{item.label}</div>
                            <div className="text-sm font-medium text-ink-900">{item.value}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                <div>
                  <div className="mb-7">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="w-1 h-5 bg-ink-900 rounded-full" />
                      <h4 className="text-base font-medium text-ink-900">项目介绍</h4>
                    </div>
                    <p className="text-ink-600 leading-relaxed pl-3">
                      {activeCreation.detail.summary}
                    </p>
                  </div>

                  <div className="mb-7">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="w-1 h-5 bg-ink-900 rounded-full" />
                      <h4 className="text-base font-medium text-ink-900">核心亮点</h4>
                    </div>
                    <div className="space-y-3 pl-3">
                      {activeCreation.detail.highlights.map((item, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <span className="text-ink-400 mt-1 text-xs shrink-0">0{i + 1}</span>
                          <span className="text-ink-600 leading-relaxed">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <span className="w-1 h-5 bg-ink-900 rounded-full" />
                      <h4 className="text-base font-medium text-ink-900">项目标签</h4>
                    </div>
                    <div className="flex flex-wrap gap-2 pl-3">
                      {activeCreation.detail.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-4 py-1.5 text-sm rounded-full border border-ink-900/10 text-ink-500"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
