const workHistory = [
  {
    id: 1,
    company: '广东宜教通科技有限公司',
    position: 'UI设计师',
    period: '2019.03 - 2020.03',
    duration: '1年',
    points: [
      '负责公司产品UI设计，包括移动端、Web端界面设计',
      '参与产品需求讨论，输出高质量设计稿和交互原型',
    ],
  },
  {
    id: 2,
    company: '广东宜教通科技有限公司',
    position: '产品经理',
    period: '2020.04 - 2025.05',
    duration: '5年1个月',
    points: [
      '完成产品概念设计、需求调研、原型设计，交付高质量产品文档',
      '组织竞品分析，持续优化用户体验，推动产品开发落地',
      '主导公司底层支撑系统规划设计与框架搭建',
      '提升需求转化效率 30%+，校园项目落地转化率提高 18%',
    ],
  },
  {
    id: 3,
    company: '深圳市九学王信息科技有限公司',
    position: 'AI产品经理',
    period: '2025.06 - 至今',
    duration: '在职',
    points: [
      '负责公司 AI 能力建设与业务落地，主导模型选型、方案设计和 Demo 验证',
      '围绕题库加工、AI 对话智能体等场景，拆解业务流程与验收标准',
      '协调算法、工程、业务团队，推进智能体开发与效果调优',
      '保障 AI 能力在生产业务中的稳定性、成本可控性和可复用性',
    ],
  },
]

export default function Work() {
  return (
    <section id="work" className="relative section-padding">
      <div className="max-w-7xl 2xl:max-w-[1440px] mx-auto px-6 md:px-8">
        {/* Section Header */}
        <div className="mb-16 md:mb-20">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-sm text-ink-400 tracking-widest uppercase">Experience</span>
            <span className="flex-1 h-px bg-gradient-to-r from-ink-200 to-transparent max-w-xs" />
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h2 className="heading-display text-4xl md:text-6xl 2xl:text-7xl max-w-2xl text-ink-900">
              工作
              <span className="text-ink-500"> 经历</span>
            </h2>
            <p className="text-ink-500 whitespace-nowrap">
              从 UI 设计到 B 端产品经理，再到 AI 产品经理，8 年行业深耕。
            </p>
          </div>
        </div>

        {/* 横向时间条 - 桌面端 */}
        <div className="hidden md:block relative pb-8">
          {/* 节点卡片 */}
          <div className="grid grid-cols-3 gap-6 mb-6">
            {workHistory.map((job) => (
              <div key={job.id} className="relative">
                <div className="glass rounded-2xl p-6 hover:bg-ink-900/5 transition-all duration-500">
                  {/* Period + Duration */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="text-xs text-ink-500 tracking-wider">
                      {job.period}
                    </div>
                    <span className="px-2.5 py-0.5 text-[10px] rounded-full border border-ink-900/10 text-ink-500">
                      {job.duration}
                    </span>
                  </div>

                  {/* Position */}
                  <h3 className="text-lg font-display font-medium text-ink-900 mb-1">
                    {job.position}
                  </h3>

                  {/* Company */}
                  <div className="text-ink-500 text-sm mb-4">{job.company}</div>

                  {/* Divider */}
                  <div className="h-px bg-ink-900/5 mb-4" />

                  {/* Points */}
                  <ul className="space-y-2">
                    {job.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-ink-600 leading-relaxed">
                        <span className="text-ink-400 mt-0.5 shrink-0">—</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* 连接线 - 卡片底部连到时间线 */}
                <div className="absolute left-1/2 -translate-x-1/2 top-full w-px h-6 bg-ink-200" />
              </div>
            ))}
          </div>

          {/* 时间线 */}
          <div className="relative h-px bg-gradient-to-r from-ink-200 via-ink-300 to-ink-200">
            {/* 节点圆点 */}
            <div className="grid grid-cols-3 gap-6 absolute inset-0">
              {workHistory.map((job) => (
                <div key={job.id} className="flex justify-center">
                  <div className="w-4 h-4 rounded-full bg-ink-900 border-4 border-white shadow-sm -mt-[7px]" />
                </div>
              ))}
            </div>
          </div>

          {/* 年份标签 */}
          <div className="grid grid-cols-3 gap-6 mt-4">
            {workHistory.map((job) => (
              <div key={job.id} className="text-center text-xs text-ink-400">
                {job.period.split(' - ')[0]}
              </div>
            ))}
          </div>
        </div>

        {/* 竖向时间轴 - 移动端 */}
        <div className="md:hidden relative">
          {/* Vertical line */}
          <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-ink-200 via-ink-200 to-transparent" />

          <div className="space-y-8">
            {workHistory.map((job) => (
              <div key={job.id} className="relative flex">
                {/* Dot */}
                <div className="absolute left-4 top-6 -translate-x-1/2 w-3 h-3 rounded-full bg-ink-900 border-4 border-white z-10" />

                {/* Content Card */}
                <div className="ml-12 flex-1">
                  <div className="glass rounded-2xl p-5 hover:bg-ink-900/5 transition-all duration-500">
                    <div className="flex items-start justify-between mb-3 flex-wrap gap-2">
                      <div>
                        <div className="text-xs text-ink-500 tracking-wider mb-1">
                          {job.period}
                        </div>
                        <h3 className="text-base font-display font-medium text-ink-900">
                          {job.position}
                        </h3>
                        <div className="text-ink-500 text-xs mt-1">{job.company}</div>
                      </div>
                      <span className="px-2.5 py-0.5 text-[10px] rounded-full border border-ink-900/10 text-ink-500">
                        {job.duration}
                      </span>
                    </div>

                    <div className="h-px bg-ink-900/5 my-3" />

                    <ul className="space-y-2">
                      {job.points.map((point, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-ink-600 leading-relaxed">
                          <span className="text-ink-400 mt-0.5 shrink-0">—</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
