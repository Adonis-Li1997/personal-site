export default function QuestionBankArchitecture() {
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

  // 节点卡片
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

  // 向下箭头
  const DownArrow = () => (
    <div className="flex justify-center py-1">
      <svg className="w-4 h-4 text-ink-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
        <path d="M12 5v14M5 12l7 7 7-7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  )

  // 阶段面板
  const PhasePanel = ({ label, sublabel, children }) => (
    <div
      className="relative rounded-xl p-3 md:p-4 border mb-3 md:mb-4"
      style={{ backgroundColor: colors.pipeline.bg, borderColor: colors.pipeline.border }}
    >
      <div className="flex items-center gap-2 mb-2 md:mb-3">
        <span
          className="text-[10px] md:text-xs font-medium tracking-wide px-2 py-0.5 rounded-full"
          style={{ color: colors.pipeline.label, backgroundColor: 'rgba(255,255,255,0.7)', border: `1px solid ${colors.pipeline.border}` }}
        >
          {label}
        </span>
        <span className="text-[10px] text-ink-400">{sublabel}</span>
      </div>
      {children}
    </div>
  )

  return (
    <div className="w-full font-body">
      {/* 标题区 */}
      <div className="text-center mb-6 md:mb-8">
        <h4 className="heading-display text-xl md:text-2xl text-ink-900 mb-2">
          AI 题库建设 架构设计
        </h4>
        <p className="text-sm md:text-base text-ink-500 max-w-2xl mx-auto leading-relaxed">
          基于大模型的习题加工入库与智能标注全流程，大幅提升题库生产效率与内容质量
        </p>
      </div>

      {/* 核心成果 */}
      <LayerCard
        label="核心成果"
        color={colors.metric}
        sublabel="项目落地数据"
        items={[
          '试卷入库 4h → 76min',
          '百万试题智能标注',
          '大幅降低标注成本',
          '试题结构化标准',
          '内容生产效率提升',
        ]}
      />

      {/* 应用场景 */}
      <LayerCard
        label="应用场景"
        color={colors.scene}
        sublabel="题库建设场景"
        items={['教辅入库', '散题入库', '试卷入库', '试题结构化', '格式审校', '内容审校', '智能标注', '批量入库']}
      />

      {/* ===== 第一阶段：制作教辅/试卷结构 ===== */}
      <PhasePanel label="① 制作教辅 / 试卷结构" sublabel="多来源资源录入">
        {/* 三入口并行 */}
        <div className="grid grid-cols-3 gap-2 mb-1">
          <div className="flex flex-col items-center gap-1">
            <Node icon="📚" title="教辅入库" desc="PDF / 图片 / 压缩包" />
          </div>
          <div className="flex flex-col items-center gap-1">
            <Node icon="📄" title="散题入库" desc="PDF / 图片" />
          </div>
          <div className="flex flex-col items-center gap-1">
            <Node icon="📝" title="试卷入库" desc="PDF / 图片 / Word" />
          </div>
        </div>
        <DownArrow />
        <div className="flex justify-center">
          <div className="w-1/2">
            <Node icon="📋" title="目录内容整理" desc="OCR + 页码识别" highlight />
          </div>
        </div>
      </PhasePanel>

      {/* ===== 第二阶段：试题自动提取 ===== */}
      <PhasePanel label="② 试题自动提取" sublabel="OCR 识别 + 结构化解析">
        <div className="grid grid-cols-2 gap-2 mb-1">
          <Node icon="🔍" title="OCR 识别切片" desc="多任务排队处理" highlight />
          <Node icon="🧩" title="Word 数据整理" desc="图片 + 公式" />
        </div>
        <DownArrow />
        <div className="grid grid-cols-2 gap-2 mb-1">
          <Node icon="🧹" title="HTML 重整理" desc="题目内容清洗" />
          <Node icon="🧹" title="试卷结构 HTML" desc="结构重新整理" />
        </div>
        <DownArrow />
        <div className="flex justify-center">
          <div className="w-1/2">
            <Node icon="📦" title="试题内容 JSON 整理" desc="多题结构化输出" highlight />
          </div>
        </div>
      </PhasePanel>

      {/* ===== 第三阶段：数资部审查 ===== */}
      <PhasePanel label="③ 数资部审查" sublabel="人工纠错 + 可选标注">
        <div className="grid grid-cols-3 gap-2 mb-1">
          <Node icon="🏷️" title="题型标注" desc="可选" />
          <Node icon="✏️" title="人工纠错" desc="增删改查" highlight />
          <Node icon="🎯" title="作答区域标注" desc="可选" />
        </div>
        <DownArrow />
        <div className="grid grid-cols-2 gap-2 mb-1">
          <Node icon="🌳" title="父子题结构化" desc="可选" />
          <Node icon="🛠️" title="编辑工具" desc="截图 / 拖拉拽" />
        </div>
        <DownArrow />
        <div className="flex justify-center">
          <div className="w-1/3">
            <Node icon="📥" title="初入库" desc="进入标注阶段" highlight />
          </div>
        </div>
      </PhasePanel>

      {/* ===== 第四阶段：试题自动化标注 ===== */}
      <PhasePanel label="④ 试题自动化标注" sublabel="大模型多维度标注">
        <div className="grid grid-cols-5 gap-1.5 mb-1">
          <Node icon="📊" title="难度定级" desc="难度定级标签" />
          <Node icon="✅" title="试题答案" desc="参考答案生成" />
          <Node icon="💡" title="试题解析" desc="生成解析" />
          <Node icon="📖" title="讲解解析" desc="极速 + 深度" />
          <Node icon="📍" title="知识点标注" desc="知识点清单" />
        </div>
        <DownArrow />
        <div className="flex justify-center">
          <div className="w-1/3">
            <Node icon="✅" title="完整试题" desc="全维度标注完成" highlight />
          </div>
        </div>
      </PhasePanel>

      {/* ===== 第五阶段：教研部审查 ===== */}
      <PhasePanel label="⑤ 教研部审查" sublabel="最终质量把关">
        <div className="grid grid-cols-3 gap-2 mb-1">
          <div className="col-start-2 flex flex-col items-center gap-1">
            <Node icon="🔎" title="教研人工纠错" desc="增删改查" highlight />
          </div>
        </div>
        <div className="flex justify-center">
          <div className="text-[10px] text-ink-400 mb-1">可选 → 重标注</div>
        </div>
        <DownArrow />
        <div className="flex justify-center">
          <div className="w-1/3">
            <Node icon="🎉" title="完成入库" desc="正式入题库" highlight />
          </div>
        </div>
      </PhasePanel>

      {/* 核心能力 */}
      <LayerCard
        label="核心能力"
        color={colors.capability}
        sublabel="AI 技术栈"
        items={[
          'OCR 文字识别',
          '大语言模型 LLM',
          'Prompt 工程',
          'Workflow 编排',
          '多任务排队系统',
          'JSON 结构化输出',
        ]}
      />

      {/* 数据资产层 */}
      <LayerCard
        label="数据资产层"
        color={colors.content}
        sublabel="支撑标注的知识体系"
        items={['知识点清单', '学科题型库', '难度定级标准', '试题解析模板', '标签标注体系', '教研审核标准']}
      />

      {/* 底部设计思路 */}
      <div className="mt-5 md:mt-6 pt-4 border-t border-ink-900/5">
        <div className="flex items-start gap-3">
          <span className="text-xs font-medium text-ink-900 shrink-0">💡 设计思路</span>
          <p className="text-xs md:text-sm text-ink-500 leading-relaxed">
            采用"AI 自动化为主、人工审查兜底"的人机协作模式，将传统人工试卷 4 小时入库压缩至 76 分钟。
            通过多阶段流水线设计，从资源录入、结构化提取、人工审查到自动化标注、教研终审，
            确保百万级试题批量入库的效率与质量平衡。
          </p>
        </div>
      </div>
    </div>
  )
}
