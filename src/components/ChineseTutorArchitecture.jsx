export default function ChineseTutorArchitecture() {
  const colors = {
    scene: { bg: 'rgba(23,23,23,0.03)', border: 'rgba(23,23,23,0.08)', label: '#171717' },
    metric: { bg: 'rgba(250,204,21,0.08)', border: 'rgba(250,204,21,0.25)', label: '#854d0e' },
    pipeline: { bg: 'rgba(59,130,246,0.06)', border: 'rgba(59,130,246,0.15)', label: '#1e40af' },
    capability: { bg: 'rgba(168,85,247,0.06)', border: 'rgba(168,85,247,0.15)', label: '#6b21a8' },
    content: { bg: 'rgba(34,197,94,0.06)', border: 'rgba(34,197,94,0.15)', label: '#166534' },
  }

  const LayerCard = ({ label, items, color, sublabel }) => (
    <div
      className="relative rounded-2xl p-4 md:p-5 border mb-3 md:mb-4"
      style={{ backgroundColor: color.bg, borderColor: color.border }}
    >
      <div className="flex items-center gap-3 mb-3 md:mb-4">
        <span
          className="text-[11px] md:text-xs font-medium tracking-wide px-2.5 py-1 rounded-full"
          style={{ color: color.label, backgroundColor: 'rgba(255,255,255,0.7)', border: `1px solid ${color.border}` }}
        >
          {label}
        </span>
        {sublabel && <span className="text-[10px] md:text-xs text-ink-400">{sublabel}</span>}
      </div>
      <div className="flex flex-wrap gap-2">
        {items.map((item, i) => (
          <div
            key={i}
            className="px-3 md:px-4 py-2 md:py-2.5 rounded-xl bg-white border border-ink-900/5 text-xs md:text-sm text-ink-700 flex items-center gap-2 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
          >
            <span className="w-1 h-1 rounded-full bg-ink-900/30" />
            {item}
          </div>
        ))}
      </div>
    </div>
  )

  // 小型节点卡片
  const Node = ({ icon, title, desc, highlight }) => (
    <div
      className="bg-white rounded-xl p-2.5 md:p-3 border shadow-sm text-center hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 flex-1"
      style={{ borderColor: highlight ? 'rgba(59,130,246,0.3)' : 'rgba(0,0,0,0.06)' }}
    >
      <div className="text-base md:text-lg mb-1">{icon}</div>
      <div className="text-xs font-medium text-ink-800 leading-tight">{title}</div>
      {desc && <div className="text-[9px] md:text-[10px] text-ink-400 mt-0.5 leading-tight">{desc}</div>}
    </div>
  )

  // 箭头
  const Arrow = ({ direction = 'right', label }) => (
    <div className="flex flex-col items-center justify-center px-0.5 md:px-1">
      <svg
        className={`w-3 h-3 md:w-4 md:h-4 text-ink-300 ${direction === 'down' ? 'rotate-90' : ''}`}
        viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
      >
        <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      {label && <span className="text-[9px] text-ink-400 mt-0.5 whitespace-nowrap">{label}</span>}
    </div>
  )

  return (
    <div className="w-full font-body">
      {/* 标题区 */}
      <div className="text-center mb-6 md:mb-8">
        <h4 className="heading-display text-xl md:text-2xl text-ink-900 mb-2">
          AI 中文口语老师 架构设计
        </h4>
        <p className="text-sm md:text-base text-ink-500 max-w-2xl mx-auto leading-relaxed">
          多智能体协同的中文口语训练系统，结合教研内容、ASR/TTS 与大模型，面向东南亚市场出海
        </p>
      </div>

      {/* 核心成果 */}
      <LayerCard
        label="核心成果"
        color={colors.metric}
        sublabel="项目落地数据"
        items={[
          '多智能体协同架构',
          '香港首轮千万融资',
          '东南亚市场投放',
          '教研内容体系化',
          '发音纠正算法',
          '情景对话脚本',
        ]}
      />

      {/* 应用场景 */}
      <LayerCard
        label="应用场景"
        color={colors.scene}
        sublabel="中文口语学习场景"
        items={['角色扮演对话', '口语陪练', '发音纠正', '表达润色', '对话目标达成']}
      />

      {/* ===== 对话主链路：对话进行中 ===== */}
      <div
        className="relative rounded-2xl p-4 md:p-5 border mb-3 md:mb-4"
        style={{ backgroundColor: colors.pipeline.bg, borderColor: colors.pipeline.border }}
      >
        <div className="flex items-center gap-3 mb-3 md:mb-4">
          <span
            className="text-[11px] md:text-xs font-medium tracking-wide px-2.5 py-1 rounded-full"
            style={{ color: colors.pipeline.label, backgroundColor: 'rgba(255,255,255,0.7)', border: `1px solid ${colors.pipeline.border}` }}
          >
            对话主链路 · 对话进行中
          </span>
          <span className="text-[10px] md:text-xs text-ink-400">实时交互 · 双智能体并行</span>
        </div>

        {/* 上行：输入入口 */}
        <div className="flex items-center justify-center gap-0 mb-4">
          <Node icon="🗣️" title="用户语音" desc="口语输入" />
          <Arrow />
          <Node icon="📝" title="ASR 转写" desc="语音识别" />
          <Arrow />
          <Node icon="🎯" title="对话调度" desc="场景分发" highlight />
        </div>

        {/* 分叉箭头 */}
        <div className="flex justify-center mb-2">
          <svg className="w-4 h-4 text-ink-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M12 5v14M5 12l7 7 7-7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

        {/* 双智能体并行 */}
        <div className="grid grid-cols-2 gap-3 mb-2">
          <div className="flex flex-col items-center gap-1.5">
            <Node icon="💬" title="对话智能体" desc="实时多轮对话" highlight />
          </div>
          <div className="flex flex-col items-center gap-1.5">
            <Node icon="💡" title="推荐智能体" desc="推荐回复引导" highlight />
          </div>
        </div>

        {/* 汇合 */}
        <div className="flex justify-center mb-2">
          <svg className="w-4 h-4 text-ink-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M5 12l7-7 7 7M12 5v14" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

        {/* 下行：输出 */}
        <div className="flex items-center justify-center gap-0">
          <Node icon="🔊" title="TTS 播报" desc="多语言语音" />
          <Arrow />
          <Node icon="📱" title="多模态呈现" desc="文本/拼音/翻译" />
        </div>
      </div>

      {/* ===== 对话结束：反馈分析 ===== */}
      <div
        className="relative rounded-2xl p-4 md:p-5 border mb-3 md:mb-4"
        style={{ backgroundColor: colors.pipeline.bg, borderColor: colors.pipeline.border }}
      >
        <div className="flex items-center gap-3 mb-3 md:mb-4">
          <span
            className="text-[11px] md:text-xs font-medium tracking-wide px-2.5 py-1 rounded-full"
            style={{ color: colors.pipeline.label, backgroundColor: 'rgba(255,255,255,0.7)', border: `1px solid ${colors.pipeline.border}` }}
          >
            对话结束 · 学习反馈
          </span>
          <span className="text-[10px] md:text-xs text-ink-400">事后分析 · 三智能体各有所长</span>
        </div>

        <div className="grid grid-cols-3 gap-2 md:gap-3 mb-2">
          <div className="flex flex-col items-center gap-1.5">
            <Node icon="📝" title="语法建议" desc="单句语法纠错" />
          </div>
          <div className="flex flex-col items-center gap-1.5">
            <Node icon="⭐" title="对话评价" desc="目标达成评估" />
          </div>
          <div className="flex flex-col items-center gap-1.5">
            <Node icon="✨" title="表达润色" desc="更地道的表达" />
          </div>
        </div>

        <div className="flex justify-center mb-2">
          <svg className="w-4 h-4 text-ink-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M5 12l7-7 7 7M12 5v14" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

        <div className="flex items-center justify-center gap-0">
          <Node icon="📊" title="学习反馈报告" desc="综合评价结果" highlight />
        </div>
      </div>

      {/* 核心能力 */}
      <LayerCard
        label="核心能力"
        color={colors.capability}
        sublabel="智能体底层技术栈"
        items={[
          'ASR 语音识别',
          'TTS 多语言合成',
          '发音测评算法',
          '大语言模型 LLM',
          '提示词模板',
          '多轮对话管理',
          'FewShots / COT',
          '多语言翻译',
        ]}
      />

      {/* 教研内容层 */}
      <LayerCard
        label="教研内容层"
        color={colors.content}
        sublabel="快乐中文教研体系"
        items={['情景对话脚本', '对话目标设计', '分级教学内容', '教研提示词模板']}
      />

      {/* 底部设计思路 */}
      <div className="mt-5 md:mt-6 pt-4 border-t border-ink-900/5">
        <div className="flex items-start gap-3">
          <span className="text-xs font-medium text-ink-900 shrink-0">💡 设计思路</span>
          <p className="text-xs md:text-sm text-ink-500 leading-relaxed">
            将口语教学拆解为多个专职智能体协同工作：对话进行时由对话智能体与推荐智能体实时响应，
            对话结束后触发语法建议、对话评价和表达润色智能体深度分析，形成"陪练 + 反馈"的完整学习闭环。
          </p>
        </div>
      </div>
    </div>
  )
}
