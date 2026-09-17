const skills = [
  'AI产品设计',
  'Prompt Engineering',
  'RAG / 知识库调优',
  'Function Calling',
  '智能体搭建',
  'Workflow编排',
  'MCP插件',
  '数据分析',
  '成本测算',
  '跨团队协作',
]

export default function About() {
  return (
    <section id="about" className="relative section-padding bg-ink-50/50">
      <div className="max-w-7xl 2xl:max-w-[1440px] mx-auto px-6 md:px-8">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-16">
          <span className="text-sm text-ink-400 tracking-widest uppercase">About</span>
          <span className="flex-1 h-px bg-gradient-to-r from-ink-200 to-transparent max-w-xs" />
        </div>

        <div className="grid lg:grid-cols-5 gap-16 items-start">
          {/* Left - Title + Intro */}
          <div className="lg:col-span-3 space-y-8">
            <h2 className="heading-display text-4xl md:text-5xl text-ink-900 leading-tight">
              用产品思维，<br />
              <span className="text-ink-500">把AI能力变成业务价值。</span>
            </h2>
            <div className="text-lg text-ink-600 leading-relaxed space-y-4">
              <p>
                我是李建国，一名专注于 AI 落地的产品经理。过去8年，我从UI设计做起，逐步转型产品，
                经历了智慧校园SaaS、教育硬件、AI智能体等多个方向的产品从0到1。
              </p>
              <p>
                现在我聚焦于 AI 产品方向，擅长将大模型能力与具体业务场景结合，
                从业务目标出发拆解AI能力边界，协调算法、工程、业务团队，推动AI能力从概念验证走向业务上线。
              </p>
              <p>
                我相信好的AI产品不是炫技，而是真正解决问题、创造价值。
              </p>
            </div>

            {/* Skills */}
            <div>
              <h3 className="text-sm text-ink-500 uppercase tracking-widest mb-4">核心能力</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 text-sm rounded-full glass text-ink-600 hover:text-ink-900 hover:border-ink-900/20 transition-all duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right - Personal Info */}
          <div className="lg:col-span-2">
            <div className="glass rounded-3xl p-8 relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-ink-900/5 rounded-full blur-[60px]" />
              <div className="relative">
                <div className="text-xs text-ink-400 uppercase tracking-widest mb-6">
                  个人信息
                </div>
                <div className="space-y-5">
                  <div className="flex justify-between items-center border-b border-ink-900/5 pb-4">
                    <span className="text-ink-500 text-sm">姓名</span>
                    <span className="text-ink-900 font-medium">李建国</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-ink-900/5 pb-4">
                    <span className="text-ink-500 text-sm">性别 / 年龄</span>
                    <span className="text-ink-900">男 · 29岁</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-ink-900/5 pb-4">
                    <span className="text-ink-500 text-sm">学历</span>
                    <span className="text-ink-900">本科 · 广州大学</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-ink-900/5 pb-4">
                    <span className="text-ink-500 text-sm">工作年限</span>
                    <span className="text-ink-900">8年</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-ink-900/5 pb-4">
                    <span className="text-ink-500 text-sm">求职岗位</span>
                    <span className="text-ink-900">AI产品经理</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-ink-900/5 pb-4">
                    <span className="text-ink-500 text-sm">期望薪资</span>
                    <span className="text-ink-900">21K-22K</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-ink-500 text-sm">状态</span>
                    <span className="text-ink-900 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-ink-400 animate-pulse" />
                      在职，寻求新机会
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
