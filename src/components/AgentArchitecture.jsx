export default function AgentArchitecture() {
  const colors = {
    scene: { bg: 'rgba(23,23,23,0.03)', border: 'rgba(23,23,23,0.08)', label: '#171717' },
    metric: { bg: 'rgba(250,204,21,0.08)', border: 'rgba(250,204,21,0.25)', label: '#854d0e' },
    pipeline: { bg: 'rgba(59,130,246,0.06)', border: 'rgba(59,130,246,0.15)', label: '#1e40af' },
    capability: { bg: 'rgba(168,85,247,0.06)', border: 'rgba(168,85,247,0.15)', label: '#6b21a8' },
    platform: { bg: 'rgba(34,197,94,0.06)', border: 'rgba(34,197,94,0.15)', label: '#166534' },
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
  const Node = ({ icon, title, desc, className = '', highlight }) => (
    <div
      className={`bg-white rounded-xl p-2.5 md:p-3 border shadow-sm text-center hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 ${className}`}
      style={{ borderColor: highlight ? 'rgba(59,130,246,0.3)' : 'rgba(0,0,0,0.06)' }}
    >
      <div className="text-base md:text-lg mb-1">{icon}</div>
      <div className="text-xs font-medium text-ink-800 leading-tight">{title}</div>
      {desc && <div className="text-[9px] md:text-[10px] text-ink-400 mt-0.5 leading-tight">{desc}</div>}
    </div>
  )

  // 箭头
  const Arrow = ({ direction = 'right', label }) => (
    <div className="flex flex-col items-center justify-center px-1">
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
          AI 对话智能体 架构设计
        </h4>
        <p className="text-sm md:text-base text-ink-500 max-w-2xl mx-auto leading-relaxed">
          基于 Function Calling + RAG 的对话智能体框架，设备端与管理后台双端协同，支持快速复用与客户定制化
        </p>
      </div>

      {/* 指标层 */}
      <LayerCard
        label="核心指标"
        color={colors.metric}
        sublabel="项目落地成果"
        items={[
          '复用多个对话智能体项目',
          'Function Calling 意图识别',
          '支持客户定制化 IP',
          '降低重复开发成本',
          'RAG 知识库增强检索',
          '出货交付效率提升',
        ]}
      />

      {/* 场景层 */}
      <LayerCard
        label="应用场景"
        color={colors.scene}
        sublabel="C 端消费硬件品类"
        items={['AI 语音交互', '情感陪伴', '语音助手', '设备控制', 'AI 儿童玩具', '智能闹钟', '学习搭子', '早教机']}
      />

      {/* ===== 对话主链路（重设计：入口 → 意图路由 → 多技能分支 → 汇合 → 输出） ===== */}
      <div
        className="relative rounded-2xl p-4 md:p-5 border mb-3 md:mb-4"
        style={{ backgroundColor: colors.pipeline.bg, borderColor: colors.pipeline.border }}
      >
        <div className="flex items-center gap-3 mb-4 md:mb-5">
          <span
            className="text-[11px] md:text-xs font-medium tracking-wide px-2.5 py-1 rounded-full"
            style={{ color: colors.pipeline.label, backgroundColor: 'rgba(255,255,255,0.7)', border: `1px solid ${colors.pipeline.border}` }}
          >
            对话主链路
          </span>
          <span className="text-[10px] md:text-xs text-ink-400">设备端实时对话流程 · Function Calling 意图路由</span>
        </div>

        {/* 第一行：输入入口 */}
        <div className="flex items-center justify-center gap-0 mb-3">
          <Node icon="🎤" title="语音输入" desc="用户说话" />
          <Arrow />
          <Node icon="📝" title="ASR 转写" desc="语音转文本" />
          <Arrow />
          <Node icon="🧠" title="意图识别" desc="Function Calling" highlight />
        </div>

        {/* 分叉箭头 */}
        <div className="flex justify-center mb-2">
          <div className="flex flex-col items-center">
            <svg className="w-4 h-4 text-ink-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M12 5v14M5 12l7 7 7-7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="text-[9px] text-ink-400">技能路由分发</span>
          </div>
        </div>

        {/* 第二行：5 个技能分支 */}
        <div className="grid grid-cols-5 gap-1.5 md:gap-2 mb-3">
          {/* 资源点播 */}
          <div className="flex flex-col items-center gap-1.5">
            <Node icon="🎵" title="资源点播" desc="故事/儿歌/国学" />
          </div>
          {/* 天气查询 */}
          <div className="flex flex-col items-center gap-1.5">
            <Node icon="🌤️" title="天气查询" desc="API 调用" />
          </div>
          {/* 联网查询 */}
          <div className="flex flex-col items-center gap-1.5">
            <Node icon="🌐" title="联网查询" desc="搜索工具" />
          </div>
          {/* 闲聊 + RAG */}
          <div className="flex flex-col items-center gap-1.5">
            <Node icon="📚" title="RAG 检索" desc="知识库增强" highlight />
            <div className="flex items-center">
              <svg className="w-3 h-3 text-ink-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M12 5v14M5 12l7 7 7-7" strokeLinecap="round" strokeLinejoin="round" transform="rotate(180 12 12)" />
              </svg>
            </div>
            <Node icon="💬" title="闲聊对话" desc="情感陪伴" />
          </div>
          {/* 设备管控 */}
          <div className="flex flex-col items-center gap-1.5">
            <Node icon="⚙️" title="设备管控" desc="音量/闹钟/灯光" />
          </div>
        </div>

        {/* 汇合箭头 */}
        <div className="flex justify-center mb-2">
          <div className="flex flex-col items-center">
            <svg className="w-4 h-4 text-ink-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12l7-7 7 7M12 5v14" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="text-[9px] text-ink-400">结果汇合</span>
          </div>
        </div>

        {/* 第三行：输出 */}
        <div className="flex items-center justify-center gap-0">
          <Node icon="🤖" title="LLM 生成" desc="角色/记忆加持" highlight />
          <Arrow />
          <Node icon="🔊" title="TTS 播报" desc="语音输出" />
          <Arrow />
          <Node icon="📻" title="设备播放" desc="硬件呈现" />
        </div>

      </div>

      {/* 能力层 */}
      <LayerCard
        label="核心能力"
        color={colors.capability}
        sublabel="智能体底层能力模块"
        items={[
          'Function Calling 路由',
          'RAG 知识库检索',
          '多轮对话管理',
          '长期记忆',
          '角色设定',
          '提示词模板',
          '设备技能封装',
          '客户定制变量',
        ]}
      />

      {/* 管理后台层 */}
      <LayerCard
        label="管理后台"
        color={colors.platform}
        sublabel="B 端出货客户配置平台"
        items={['角色 IP 设定', '音色定制', '技能配置', '知识库管理']}
      />

      {/* 底部说明 */}
      <div className="mt-5 md:mt-6 pt-4 border-t border-ink-900/5">
        <div className="flex items-start gap-3">
          <span className="text-xs font-medium text-ink-900 shrink-0">💡 关键决策</span>
          <p className="text-xs md:text-sm text-ink-500 leading-relaxed">
            用 Function Calling 取代传统 Workflow 高代码意图识别方案，将技能参数封装为函数变量，
            既降低了开发成本，又满足了出货客户的定制化配置需求，支撑对话能力在多个硬件项目中快速复用。
          </p>
        </div>
      </div>
    </div>
  )
}
