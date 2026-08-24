export default function LearningPlanArchitecture() {
  const colors = {
    input: { bg: 'rgba(59,130,246,0.06)', border: 'rgba(59,130,246,0.15)', label: '#1e40af' },
    scene: { bg: 'rgba(168,85,247,0.06)', border: 'rgba(168,85,247,0.15)', label: '#6b21a8' },
    algorithm: { bg: 'rgba(250,204,21,0.08)', border: 'rgba(250,204,21,0.25)', label: '#854d0e' },
    resource: { bg: 'rgba(34,197,94,0.06)', border: 'rgba(34,197,94,0.15)', label: '#166534' },
    output: { bg: 'rgba(239,68,68,0.06)', border: 'rgba(239,68,68,0.15)', label: '#991b1b' },
    student: { bg: 'rgba(6,182,212,0.06)', border: 'rgba(6,182,212,0.15)', label: '#0e7490' },
    teacher: { bg: 'rgba(249,115,22,0.06)', border: 'rgba(249,115,22,0.15)', label: '#9a3412' },
  }

  // 小型标签卡片
  const Tag = ({ children, color = 'ink-900/10', textColor = 'text-ink-700' }) => (
    <span
      className={`inline-block px-2.5 py-1 text-[10px] md:text-xs rounded-md border ${textColor}`}
      style={{ borderColor: `rgba(0,0,0,0.08)`, backgroundColor: 'rgba(255,255,255,0.7)' }}
    >
      {children}
    </span>
  )

  // 层标题
  const SectionLabel = ({ label, color, sublabel }) => (
    <div className="flex items-center gap-2 mb-2.5">
      <span
        className="text-[10px] md:text-[11px] font-medium tracking-wide px-2.5 py-1 rounded-full"
        style={{ color: color.label, backgroundColor: color.bg, border: `1px solid ${color.border}` }}
      >
        {label}
      </span>
      {sublabel && <span className="text-[9px] md:text-[10px] text-ink-400">{sublabel}</span>}
    </div>
  )

  // 流程步骤块
  const StepBlock = ({ step, title, items, color, desc }) => (
    <div
      className="relative rounded-xl p-3 md:p-4 border flex-1"
      style={{ backgroundColor: color.bg, borderColor: color.border }}
    >
      <div className="flex items-center gap-2 mb-2">
        <span
          className="w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold text-white flex-shrink-0"
          style={{ backgroundColor: color.label }}
        >
          {step}
        </span>
        <span className="text-xs md:text-sm font-medium text-ink-800 leading-tight">{title}</span>
      </div>
      {desc && <p className="text-[10px] text-ink-500 mb-2 leading-relaxed">{desc}</p>}
      <div className="flex flex-wrap gap-1.5">
        {items.map((item, i) => (
          <span
            key={i}
            className="px-2 py-1 text-[10px] rounded-md bg-white/80 border border-ink-900/5 text-ink-600"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  )

  // 箭头向下
  const ArrowDown = () => (
    <div className="flex justify-center my-2">
      <svg className="w-4 h-4 text-ink-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 5v14M5 12l7 7 7-7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  )

  return (
    <div className="space-y-4 text-left">
      {/* 顶部：双端入口 */}
      <div className="grid md:grid-cols-2 gap-3">
        {/* 学生端 */}
        <div
          className="rounded-xl p-3 md:p-4 border"
          style={{ backgroundColor: colors.student.bg, borderColor: colors.student.border }}
        >
          <div className="flex items-center gap-2 mb-2.5">
            <span className="text-base">🎒</span>
            <span className="text-sm font-medium" style={{ color: colors.student.label }}>
              学生端规划
            </span>
            <span className="text-[10px] text-ink-400 ml-auto">个性化学习任务</span>
          </div>
          <div className="flex flex-wrap gap-1.5">
            <Tag>同步巩固</Tag>
            <Tag>备考冲刺</Tag>
            <Tag>预习</Tag>
            <Tag>寒暑学习</Tag>
          </div>
        </div>

        {/* 教师端 */}
        <div
          className="rounded-xl p-3 md:p-4 border"
          style={{ backgroundColor: colors.teacher.bg, borderColor: colors.teacher.border }}
        >
          <div className="flex items-center gap-2 mb-2.5">
            <span className="text-base">👨‍🏫</span>
            <span className="text-sm font-medium" style={{ color: colors.teacher.label }}>
              教师端规划
            </span>
            <span className="text-[10px] text-ink-400 ml-auto">班级教学任务建议</span>
          </div>
          <div className="flex flex-wrap gap-1.5">
            <Tag>自动模式</Tag>
            <Tag>指定模式</Tag>
            <Tag>混合模式</Tag>
            <Tag>学生分层</Tag>
          </div>
        </div>
      </div>

      <ArrowDown />

      {/* 数据输入层 */}
      <div
        className="rounded-xl p-3 md:p-4 border"
        style={{ backgroundColor: colors.input.bg, borderColor: colors.input.border }}
      >
        <SectionLabel label="数据输入层" color={colors.input} sublabel="多源数据融合" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {[
            { icon: '📚', title: '章节/知识点', desc: '掌握度、标签' },
            { icon: '📝', title: '错题记录', desc: '错误率、解题方法' },
            { icon: '📅', title: '教学计划', desc: '周进度、考试安排' },
            { icon: '📊', title: '规划历史', desc: '已规划次数、状态' },
          ].map((item, i) => (
            <div key={i} className="bg-white/80 rounded-lg p-2.5 border border-ink-900/5">
              <div className="text-base mb-1">{item.icon}</div>
              <div className="text-xs font-medium text-ink-800">{item.title}</div>
              <div className="text-[9px] text-ink-400 mt-0.5">{item.desc}</div>
            </div>
          ))}
        </div>
      </div>

      <ArrowDown />

      {/* 核心算法层 - 学什么 */}
      <div
        className="rounded-xl p-3 md:p-4 border"
        style={{ backgroundColor: colors.algorithm.bg, borderColor: colors.algorithm.border }}
      >
        <SectionLabel label="学什么 — 优先级算法" color={colors.algorithm} sublabel="章节 + 知识点双轨划定" />

        {/* Step 1: 阶段判定 */}
        <div className="mb-3">
          <div className="text-[11px] font-medium text-ink-700 mb-1.5">Step 1 · 学习阶段判定</div>
          <div className="flex flex-wrap gap-1.5">
            <Tag>同步巩固</Tag>
            <Tag>备考冲刺·月考</Tag>
            <Tag>备考冲刺·期中</Tag>
            <Tag>备考冲刺·期末</Tag>
            <Tag>寒暑学习</Tag>
            <Tag>预习</Tag>
          </div>
        </div>

        {/* Step 2-3: 优先级计算 */}
        <div className="grid md:grid-cols-2 gap-2.5 mb-3">
          <StepBlock
            step="2"
            title="章节优先级 Chapter Priority"
            color={{ bg: 'rgba(255,255,255,0.7)', border: 'rgba(250,204,21,0.3)', label: '#854d0e' }}
            items={['Master 40%', 'Wrong 25%', 'Forget 20%', 'Plan 15%', '学科偏置 +8']}
          />
          <StepBlock
            step="3"
            title="知识点优先级 Knowledge Priority"
            color={{ bg: 'rgba(255,255,255,0.7)', border: 'rgba(250,204,21,0.3)', label: '#854d0e' }}
            items={['Master 40%', 'Wrong 20%', 'Forget 15%', 'Frequency 10%', 'Level 10%', 'Plan 5%']}
          />
        </div>

        {/* Step 4-5: 任务数量 + 补位 */}
        <div className="grid md:grid-cols-2 gap-2.5">
          <StepBlock
            step="4"
            title="任务数量计算"
            color={{ bg: 'rgba(255,255,255,0.7)', border: 'rgba(250,204,21,0.3)', label: '#854d0e' }}
            items={['目标 20 个待学习', '单次规划 2-10 个', '章节:知识点 = 1:1', '不足补位机制']}
          />
          <StepBlock
            step="5"
            title="预习章节补位"
            color={{ bg: 'rgba(255,255,255,0.7)', border: 'rgba(250,204,21,0.3)', label: '#854d0e' }}
            items={['薄弱学科 +20', '主科修正 +10', '考频修正 +10/个', '按教材顺序排序']}
          />
        </div>
      </div>

      <ArrowDown />

      {/* 学习路径层 - 怎么学 */}
      <div
        className="rounded-xl p-3 md:p-4 border"
        style={{ backgroundColor: colors.scene.bg, borderColor: colors.scene.border }}
      >
        <SectionLabel label="怎么学 — 学习路径诊断" color={colors.scene} sublabel="5 种学习路径匹配" />

        <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
          {[
            { name: '概念理解不足', path: 'concept_learning', icon: '💡', cond: 'master < 60%' },
            { name: '练习不足', path: 'practice', icon: '✏️', cond: '60%≤master<80% + 错题≥5%' },
            { name: '易错强化', path: 'wrong_question', icon: '🎯', cond: '错误率 ≥ 10%' },
            { name: '遗忘', path: 'review', icon: '🔄', cond: 'master≥60% + Forget≥80' },
            { name: '能力提升', path: 'advanced', icon: '🚀', cond: 'master≥90% + 错题≤90%' },
          ].map((item, i) => (
            <div key={i} className="bg-white/80 rounded-lg p-2.5 border border-ink-900/5 text-center">
              <div className="text-lg mb-1">{item.icon}</div>
              <div className="text-[11px] font-medium text-ink-800 leading-tight">{item.name}</div>
              <div className="text-[9px] text-ink-400 mt-1 leading-tight">{item.cond}</div>
            </div>
          ))}
        </div>

        <div className="mt-2.5 pt-2.5 border-t border-ink-900/10">
          <div className="text-[10px] text-ink-500 mb-1.5">优先级：概念理解不足 ＞ 练习不足 ＞ 易错强化 ＞ 遗忘 ＞ 需要能力提升</div>
        </div>
      </div>

      <ArrowDown />

      {/* 资源推荐层 - 学哪些 */}
      <div
        className="rounded-xl p-3 md:p-4 border"
        style={{ backgroundColor: colors.resource.bg, borderColor: colors.resource.border }}
      >
        <SectionLabel label="学哪些 — 资源包推荐" color={colors.resource} sublabel="视频 + 学案 + 习题多维匹配" />

        <div className="grid md:grid-cols-3 gap-2.5">
          {/* 视频推荐 */}
          <div className="bg-white/80 rounded-lg p-3 border border-ink-900/5">
            <div className="flex items-center gap-1.5 mb-2">
              <span className="text-sm">🎬</span>
              <span className="text-xs font-medium text-ink-800">视频推荐</span>
            </div>
            <div className="space-y-1.5">
              <div className="flex items-center gap-1.5">
                <span className="w-1 h-1 rounded-full bg-ink-400 flex-shrink-0" />
                <span className="text-[10px] text-ink-600">视频类型：同步/备考/专项突破</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-1 h-1 rounded-full bg-ink-400 flex-shrink-0" />
                <span className="text-[10px] text-ink-600">适用难度：分层+路径+掌握度修正</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-1 h-1 rounded-full bg-ink-400 flex-shrink-0" />
                <span className="text-[10px] text-ink-600">学习目标：10 种目标标签匹配</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-1 h-1 rounded-full bg-ink-400 flex-shrink-0" />
                <span className="text-[10px] text-ink-600">排序：上架时间 ＞ 完播率</span>
              </div>
            </div>
          </div>

          {/* 习题推荐 */}
          <div className="bg-white/80 rounded-lg p-3 border border-ink-900/5">
            <div className="flex items-center gap-1.5 mb-2">
              <span className="text-sm">📝</span>
              <span className="text-xs font-medium text-ink-800">习题推荐</span>
            </div>
            <div className="space-y-1.5">
              <div className="flex items-center gap-1.5">
                <span className="w-1 h-1 rounded-full bg-ink-400 flex-shrink-0" />
                <span className="text-[10px] text-ink-600">难度：5 级 + 错误占比修正</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-1 h-1 rounded-full bg-ink-400 flex-shrink-0" />
                <span className="text-[10px] text-ink-600">题类：7 类 + 场景权重计算</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-1 h-1 rounded-full bg-ink-400 flex-shrink-0" />
                <span className="text-[10px] text-ink-600">解题方法：错题标签统计分析</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-1 h-1 rounded-full bg-ink-400 flex-shrink-0" />
                <span className="text-[10px] text-ink-600">题量 = 基础×场景×掌握度×路径</span>
              </div>
            </div>
          </div>

          {/* 其他资源 */}
          <div className="bg-white/80 rounded-lg p-3 border border-ink-900/5">
            <div className="flex items-center gap-1.5 mb-2">
              <span className="text-sm">📚</span>
              <span className="text-xs font-medium text-ink-800">其他资源</span>
            </div>
            <div className="space-y-1.5">
              <div className="flex items-center gap-1.5">
                <span className="w-1 h-1 rounded-full bg-ink-400 flex-shrink-0" />
                <span className="text-[10px] text-ink-600">学案：章节对应反查</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-1 h-1 rounded-full bg-ink-400 flex-shrink-0" />
                <span className="text-[10px] text-ink-600">课件：章节对应反查</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-1 h-1 rounded-full bg-ink-400 flex-shrink-0" />
                <span className="text-[10px] text-ink-600">学霸笔记：知识点关联</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-1 h-1 rounded-full bg-ink-400 flex-shrink-0" />
                <span className="text-[10px] text-ink-600">试卷：备考场景推荐</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-2.5 pt-2.5 border-t border-ink-900/10">
          <div className="text-[10px] text-ink-500">
            <span className="font-medium">资源优先级：</span>
            用户偏好任务类型 ＞ 资源包内资源类型
          </div>
        </div>
      </div>

      <ArrowDown />

      {/* 输出层 */}
      <div
        className="rounded-xl p-3 md:p-4 border"
        style={{ backgroundColor: colors.output.bg, borderColor: colors.output.border }}
      >
        <SectionLabel label="输出 — 个性化资源包" color={colors.output} sublabel="以任务卡片形式呈现" />
        <div className="grid md:grid-cols-2 gap-2.5">
          <div className="bg-white/80 rounded-lg p-3 border border-ink-900/5">
            <div className="text-xs font-medium text-ink-800 mb-2">📖 课程卡片</div>
            <div className="text-[10px] text-ink-500 leading-relaxed">
              章节推送 → 公共课程类型<br />
              知识点推送 → 知识点视频类型<br />
              含推荐理由、分层标签
            </div>
          </div>
          <div className="bg-white/80 rounded-lg p-3 border border-ink-900/5">
            <div className="text-xs font-medium text-ink-800 mb-2">📝 练测题卡片</div>
            <div className="text-[10px] text-ink-500 leading-relaxed">
              纯试题资源推送 → 随堂练习类型<br />
              按推荐试题数量统计<br />
              含推荐理由、难度标签
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
