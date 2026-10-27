export default function QaAgentArchitecture() {
  const colors = {
    input: { bg: 'rgba(59,130,246,0.06)', border: 'rgba(59,130,246,0.15)', label: '#1e40af' },
    process: { bg: 'rgba(168,85,247,0.06)', border: 'rgba(168,85,247,0.15)', label: '#6b21a8' },
    agent: { bg: 'rgba(250,204,21,0.08)', border: 'rgba(250,204,21,0.25)', label: '#854d0e' },
    safety: { bg: 'rgba(236,72,153,0.06)', border: 'rgba(236,72,153,0.15)', label: '#9d174d' },
    output: { bg: 'rgba(239,68,68,0.06)', border: 'rgba(239,68,68,0.15)', label: '#991b1b' },
  }

  const Tag = ({ children }) => (
    <span className="inline-block px-2 py-1 text-[10px] rounded-md bg-white/80 border border-ink-900/5 text-ink-600">
      {children}
    </span>
  )

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

  const ArrowDown = () => (
    <div className="flex justify-center my-2">
      <svg className="w-4 h-4 text-ink-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 5v14M5 12l7 7 7-7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  )

  return (
    <div className="space-y-4 text-left">
      {/* 输入层 - 多模态入口 */}
      <div
        className="rounded-xl p-3 md:p-4 border"
        style={{ backgroundColor: colors.input.bg, borderColor: colors.input.border }}
      >
        <SectionLabel label="输入层 · 多模态提问入口" color={colors.input} sublabel="语音 / 扫描 / 拍照" />
        <div className="grid grid-cols-3 gap-2">
          {[
            { icon: '🎤', title: '语音提问', desc: 'ASR 转写 + 语义理解' },
            { icon: '📷', title: '文字扫描', desc: 'OCR 识别 + 公式提取' },
            { icon: '🖼️', title: '拍照传题', desc: '多模态图像理解' },
          ].map((item, i) => (
            <div key={i} className="bg-white/80 rounded-lg p-2.5 border border-ink-900/5 text-center">
              <div className="text-base mb-1">{item.icon}</div>
              <div className="text-xs font-medium text-ink-800">{item.title}</div>
              <div className="text-[9px] text-ink-400 mt-0.5">{item.desc}</div>
            </div>
          ))}
        </div>
      </div>

      <ArrowDown />

      {/* 确定性流程层 */}
      <div
        className="rounded-xl p-3 md:p-4 border"
        style={{ backgroundColor: colors.process.bg, borderColor: colors.process.border }}
      >
        <SectionLabel label="确定性流程层" color={colors.process} sublabel="输入校验 / 会话管理 / 结果校验" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {[
            { title: '输入校验', items: ['空输入拦截', '格式校验', '长度限制'] },
            { title: '会话状态', items: ['多轮上下文', '话题切换', '会话隔离'] },
            { title: '结果校验', items: ['答案一致性', '敏感词过滤', '输出格式'] },
            { title: '展示与播报', items: ['屏幕渲染', 'TTS 播报', '交互反馈'] },
          ].map((item, i) => (
            <div key={i} className="bg-white/80 rounded-lg p-2.5 border border-ink-900/5">
              <div className="text-xs font-medium text-ink-800 mb-1.5">{item.title}</div>
              <div className="space-y-1">
                {item.items.map((t, j) => (
                  <div key={j} className="flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-ink-400 flex-shrink-0" />
                    <span className="text-[10px] text-ink-600">{t}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <ArrowDown />

      {/* Agent 核心层 */}
      <div
        className="rounded-xl p-3 md:p-4 border"
        style={{ backgroundColor: colors.agent.bg, borderColor: colors.agent.border }}
      >
        <SectionLabel label="Agent 核心层 · 大模型能力" color={colors.agent} sublabel="题意理解 → 讲解生成 → 多轮追问" />

        {/* 交互策略 */}
        <div className="mb-3">
          <div className="text-[11px] font-medium text-ink-700 mb-1.5">交互策略</div>
          <div className="grid md:grid-cols-3 gap-2">
            <div className="bg-white/80 rounded-lg p-2.5 border border-ink-900/5">
              <div className="text-xs font-medium text-ink-800 mb-1">首轮简答</div>
              <div className="text-[10px] text-ink-500">快速给出核心答案，降低首响时延</div>
            </div>
            <div className="bg-white/80 rounded-lg p-2.5 border border-ink-900/5">
              <div className="text-xs font-medium text-ink-800 mb-1">按需展开</div>
              <div className="text-[10px] text-ink-500">用户追问后输出详细解题过程</div>
            </div>
            <div className="bg-white/80 rounded-lg p-2.5 border border-ink-900/5">
              <div className="text-xs font-medium text-ink-800 mb-1">追问解释</div>
              <div className="text-[10px] text-ink-500">针对性答疑，引导学生主动思考</div>
            </div>
          </div>
        </div>

        {/* 分层讲解深度 */}
        <div className="mb-3">
          <div className="text-[11px] font-medium text-ink-700 mb-1.5">分学段讲解深度</div>
          <div className="grid grid-cols-3 gap-2">
            {[
              { level: '小学', desc: '基础答案理解', tags: ['通俗语言', '步骤拆解', '示例类比'] },
              { level: '初中', desc: '解题方法理解', tags: ['思路引导', '方法总结', '易错提示'] },
              { level: '高中', desc: '知识迁移导向', tags: ['考点分析', '一题多解', '拓展延伸'] },
            ].map((item, i) => (
              <div key={i} className="bg-white/80 rounded-lg p-2.5 border border-ink-900/5">
                <div className="flex items-center gap-1.5 mb-1">
                  <span
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ backgroundColor: ['#22c55e', '#eab308', '#f97316'][i] }}
                  />
                  <span className="text-xs font-medium text-ink-800">{item.level}</span>
                </div>
                <div className="text-[10px] text-ink-500 mb-1.5">{item.desc}</div>
                <div className="flex flex-wrap gap-1">
                  {item.tags.map((t, j) => <Tag key={j}>{t}</Tag>)}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 异常与澄清机制 */}
        <div>
          <div className="text-[11px] font-medium text-ink-700 mb-1.5">问题澄清与异常处理</div>
          <div className="flex flex-wrap gap-1.5">
            <Tag>扫描公式受限 → 澄清</Tag>
            <Tag>题干缺失 → 澄清补全</Tag>
            <Tag>图片不完整 → 重试引导</Tag>
            <Tag>关键信息缺失 → 追问</Tag>
            <Tag>网络异常 → 友好提示</Tag>
            <Tag>切换问题 → 新建话题</Tag>
            <Tag>超纲内容 → 委婉拒绝</Tag>
          </div>
        </div>
      </div>

      <ArrowDown />

      {/* 安全合规层 */}
      <div
        className="rounded-xl p-3 md:p-4 border"
        style={{ backgroundColor: colors.safety.bg, borderColor: colors.safety.border }}
      >
        <SectionLabel label="安全与合规 · 风险兜底机制" color={colors.safety} sublabel="提示词保护 / 输出约束 / 会话隔离" />
        <div className="grid md:grid-cols-3 gap-2">
          <div className="bg-white/80 rounded-lg p-2.5 border border-ink-900/5">
            <div className="text-xs font-medium text-ink-800 mb-1.5">🔒 内容安全</div>
            <div className="space-y-1">
              <div className="flex items-center gap-1.5">
                <span className="w-1 h-1 rounded-full bg-ink-400 flex-shrink-0" />
                <span className="text-[10px] text-ink-600">知识范围限定</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-1 h-1 rounded-full bg-ink-400 flex-shrink-0" />
                <span className="text-[10px] text-ink-600">超纲内容拒绝</span>
              </div>
            </div>
          </div>
          <div className="bg-white/80 rounded-lg p-2.5 border border-ink-900/5">
            <div className="text-xs font-medium text-ink-800 mb-1.5">🛡️ 提示词保护</div>
            <div className="space-y-1">
              <div className="flex items-center gap-1.5">
                <span className="w-1 h-1 rounded-full bg-ink-400 flex-shrink-0" />
                <span className="text-[10px] text-ink-600">Prompt 注入防护</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-1 h-1 rounded-full bg-ink-400 flex-shrink-0" />
                <span className="text-[10px] text-ink-600">角色一致性约束</span>
              </div>
            </div>
          </div>
          <div className="bg-white/80 rounded-lg p-2.5 border border-ink-900/5">
            <div className="text-xs font-medium text-ink-800 mb-1.5">⚠️ 输出保障</div>
            <div className="space-y-1">
              <div className="flex items-center gap-1.5">
                <span className="w-1 h-1 rounded-full bg-ink-400 flex-shrink-0" />
                <span className="text-[10px] text-ink-600">结构化输出校验</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-1 h-1 rounded-full bg-ink-400 flex-shrink-0" />
                <span className="text-[10px] text-ink-600">异常兜底返回</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ArrowDown />

      {/* 输出与评测层 */}
      <div
        className="rounded-xl p-3 md:p-4 border"
        style={{ backgroundColor: colors.output.bg, borderColor: colors.output.border }}
      >
        <SectionLabel label="输出 & 评测体系" color={colors.output} sublabel="7 维度验收标准" />
        <div className="grid md:grid-cols-2 gap-3">
          <div>
            <div className="text-[11px] font-medium text-ink-700 mb-1.5">输出形式</div>
            <div className="grid grid-cols-2 gap-2">
              {[
                { name: '屏幕展示', icon: '📱' },
                { name: 'TTS 语音播报', icon: '🔊' },
                { name: '文字 + 公式', icon: '📝' },
                { name: '步骤分步呈现', icon: '👆' },
              ].map((item, i) => (
                <div key={i} className="bg-white/80 rounded-lg p-2 border border-ink-900/5 text-center">
                  <div className="text-sm mb-0.5">{item.icon}</div>
                  <div className="text-[10px] font-medium text-ink-800">{item.name}</div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="text-[11px] font-medium text-ink-700 mb-1.5">评测维度</div>
            <div className="grid grid-cols-4 gap-1.5">
              {[
                { name: '答案正确', icon: '✅' },
                { name: '问题澄清', icon: '❓' },
                { name: '角色一致', icon: '🎭' },
                { name: '多轮上下文', icon: '🔗' },
                { name: '讲解结构', icon: '📐' },
                { name: '输出格式', icon: '📋' },
                { name: '安全合规', icon: '🛡️' },
                { name: '响应时延', icon: '⚡' },
              ].map((item, i) => (
                <div key={i} className="bg-white/80 rounded-lg p-1.5 border border-ink-900/5 text-center">
                  <div className="text-sm mb-0.5">{item.icon}</div>
                  <div className="text-[9px] font-medium text-ink-800 leading-tight">{item.name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
