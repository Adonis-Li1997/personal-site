import { useState, useEffect, useRef, useCallback } from 'react'
import AgentArchitecture from './AgentArchitecture'
import ChineseTutorArchitecture from './ChineseTutorArchitecture'
import QuestionBankArchitecture from './QuestionBankArchitecture'
import LearningPlanArchitecture from './LearningPlanArchitecture'

const projects = [
  {
    id: 1,
    category: 'AI × 教育',
    title: 'AI题库建设：习题加工入库与智能标注',
    period: '2025.12 - 2026.07',
    role: 'AI产品经理',
    summary: '面向教育题库建设场景，利用大模型构建AI习题加工入库与智能标注流程，提升题库生产效率与内容质量。',
    overview:
      '该项目面向教育题库建设场景，针对海量试题资源入库成本高、人工结构化效率低、知识点/题型/难度等标签标注一致性差的问题，利用大模型能力构建 AI 习题加工入库与智能标注流程，实现试题结构化、格式审校、内容审校和标签自动标注，提升题库生产效率与内容质量。',
    responsibilities: [
      '主导 AI 题库建设方案设计，围绕 PDF、图片、Word 等多来源试题资源，梳理试题上传、结构化解析、格式审校、内容审校、标签标注和入库验收等核心流程，明确各环节输入输出、处理规则和验收标准。',
      '基于模型能力边界设计多种实现路径，如 Prompt + Workflow、Prompt + Workflow + RAG 等，通过 Coze 搭建 Demo 验证方案可行性，并结合测试数据评估模型效果、生产成本和大规模落地风险。',
      '协调数字资源部、教研部和 AI 应用工程师构建试题结构化与标签标注标准，针对跨页题目内容不完整、LaTeX 公式提取错乱、知识点标注不一致等 bad case 分类分析，持续调优模型输出效果。',
    ],
    achievements: [
      '推动系统 MVP 上线，原 4 小时完成一套试卷入库缩短至 76 分钟',
      '推动百万试题智能标注落地，降低题库标注成本',
      '构建试题结构化与标签标注标准，提升题库清洗质量和内容生产效率',
    ],
    tags: ['Workflow', 'OCR', '内部提效', '百万级题库'],
  },
  {
    id: 2,
    category: 'AI × 教育',
    title: 'AI个性化学习规划',
    period: '2026.05 - 至今',
    role: 'AI产品经理',
    summary: '基于学情数据为学生推荐个性化学习任务，为教师推荐教学任务与干预建议，提升教学效率。',
    overview:
      '该项目面向学生个性化学习与教师精准教学场景，基于学生学情、班级学情、教学进度和教学资源数据，为学生推荐个性化学习任务，为教师推荐班级教学任务与干预建议，提升作业布置、薄弱点巩固、分层教学和资源使用效率。',
    responsibilities: [
      '主导学习规划能力从 0 到 1 的产品规划，围绕学生端"学什么、怎么练、练到什么程度"和教师端"教什么、布置什么、干预哪些学生"等核心问题，梳理学习任务推荐与教师任务推荐的业务链路。',
      '负责算法规划侧的需求梳理与规则设计，结合学生知识点掌握情况、错题数据、作业完成情况、班级共性薄弱点等学情数据，设计学习任务生成逻辑、推荐优先级、任务触发条件和结果反馈机制。',
      '梳理教学资源在学习规划中的使用方式，明确习题、分层课程、知识点讲解内容、巩固练习等资源在预习、同步巩固、培优提升等学习场景中的匹配规则，推动资源从"内容库"转化为可被算法调用的教学任务素材。',
      '协调教研、算法、研发和业务产品团队，明确学习规划算法的输入数据、输出结果、推荐解释和验收标准，推动算法能力与前端业务页面、教师工作流、学生学习路径完成对接。',
    ],
    achievements: [
      '推动学习规划能力从 0 到 1 落地',
      '建立教学资源场景化匹配规则，推动内容库可被算法调用',
      '打通算法能力与前端业务、教师工作流、学生学习路径',
    ],
    tags: ['学习规划', '推荐系统', '算法规则', '学情分析'],
  },
  {
    id: 3,
    category: 'AI × 硬件',
    title: 'AI对话智能体-消费硬件',
    period: '2025.07 - 至今',
    role: 'AI产品经理',
    summary: '基于ASR、TTS、LLM构建AI对话智能体框架，支持快速搭建对话类硬件产品。',
    overview:
      'AI对话智能体能力主要应用于AI语音交互、情感陪伴、语音助手、设备控制等实时交互对话硬件品类。项目由设备端（基于ASR、TTS、LLM和代码构建的AI技能框架，包含长期记忆、RAG知识库边界划定等能力）和管理后台端（对话智能体角色设定、音色设定、技能设定等灵活配置）两部分组成，支持快速搭建AI儿童玩具、AI智能闹钟、AI学习搭子等对话类智能体，满足出货客户定制化角色 IP 需求。',
    responsibilities: [
      '调研行业厂家实现方案，提出利用模型的 function calling 能力进行框架搭建（取代 workflow 的高代码意图识别）。',
      '设计对话智能体的技能列表以及构建验收标准，利用 apipost 对 function calling 意图识别击中、多轮对话效果调试。',
      '提出封装函数变量到 function calling 以满足客户技能定制化配置需求，调优 RAG 知识库增强内容检索能力。',
    ],
    achievements: [
      '用 Function Calling 取代高代码意图识别，大幅降低开发成本',
      '对话能力复用到洪恩早教机、学习搭子、智能闹钟等多个硬件项目',
      '支持客户定制化角色 IP 配置，提高出货交付效率',
    ],
    tags: ['意图识别', 'Function Calling', '智能硬件', 'RAG', '对话智能体', '长期记忆'],
  },
  {
    id: 4,
    category: 'AI × 出海',
    title: 'AI中文口语老师',
    period: '2025.06 - 2025.09',
    role: 'AI产品经理',
    summary: '面向东南亚市场的中文口语训练应用，多智能体协同实现口语教学与发音纠正。',
    overview:
      'AI中文口语老师是公司面向东南亚市场出海的主干应用，结合快乐中文的教研资源开发、教学设计、发音纠正算法、ASR、TTS 以及 LLM，化身一名中文口语训练老师，满足用户开口说中文汉语的需求。',
    responsibilities: [
      '主导 AI 能力侧的方案设计，输出 AI 产品方案进行评审，包括口语对话、对话推荐、对话目标达成评价、语法建议、对话润色等多个智能体协同搭建。',
      '协助教研团队产出情景对话的对话脚本，形成提示词模板由 AI 应用工程师进行快速产出。',
      '建立智能体效果评价标准，针对输出效果持续调优。',
    ],
    achievements: [
      '口语对话、评价、建议等多智能体协同实现',
      '香港已获得第一轮千万投资',
      '25 年底成功在东南亚市场投放和招商',
    ],
    tags: ['多智能体', '出海', '教育AI', 'ASR/TTS'],
  },
  {
    id: 5,
    category: 'AI × 校园',
    title: 'AI小智 - 校园智能助手',
    period: '2024.11 - 2025.05',
    role: 'AI产品经理',
    summary: '基于LLM与多模态交互的校园智能助手，提供数据查询、业务办理、事务答疑等服务。',
    overview:
      '"AI小智"基于大语言模型（LLM）与多模态交互技术，为师生提供数据查询、业务办理、业务分析、校园事务答疑等智能服务，通过自动化流程优化校园管理效率。',
    responsibilities: [
      '主导产品前期大模型调研、测试选型以及成本计算，规划产品路线、功能边界、数据调用权限和对模型输出的要求。',
      '利用 Dify 搭建 demo 验证产品思路和猜想。',
      '运用提示词工程中的 FewShots 和 COT 技巧对接算法工程优化模型输出效果。',
      '利用意图识别、Query 重写优化 RAG 问答知识库检索效果。',
      '深入业务场景，提出接入语音转化工具，提升用户体验。',
    ],
    achievements: [
      '模型输出准确度提升 15%',
      'RAG 检索召回率提升 20%',
      '用户持续交互时长提升 20%',
    ],
    tags: ['RAG', 'FewShots', 'COT', '校园SaaS'],
  },
  {
    id: 6,
    category: '智慧校园',
    title: '智慧校园 - 运营管理平台',
    period: '2022.09 - 2024.12',
    role: '产品经理',
    summary: 'ToB SaaS模式的智慧校园运营管理平台，涵盖多租户、权限、硬件对接、产品订购等。',
    overview:
      'ToB 端、以 SaaS 模式落地的智慧校园管理平台的运营平台，涵盖多租户管理、用户管理、与主流企业协作平台对接、硬件设备对接、产品订购等关键领域，全方位满足智慧校园平台运营多样化的业务需求。',
    responsibilities: [
      '设计"角色-菜单-数据"三级权限模型，支持动态分配。',
      '主导通用 API 开发管理，实现组织架构同步（企业微信、钉钉等）。',
      '主导对接物联中台，梳理硬件物模型，结合现有业务场景梳理设备管理、故障预警等模块。',
      '深入调研产品订购需求，主导运营平台产品订购的功能设计，设计"标准化套餐+模块化定制"混合模式。',
      '规划订单中心管理，设计退费审批、多维数据报表分析等功能。',
    ],
    achievements: [
      '订单转化率提升 35%，客诉率下降 22%',
      '权限配置耗时从 2 小时缩短至 20 分钟',
      '一卡通数据采集效率提升 60%',
      '校园项目落地转化率提高 18%',
      '客诉率降低至 12%',
    ],
    tags: ['SaaS', 'B端产品', '物联网', '多租户'],
  },
  {
    id: 7,
    category: '硬件产品',
    title: '宜讯通 - 校园视频话机',
    period: '2022.01 - 2022.08',
    role: '产品经理',
    summary: '校园视频话机产品，基于微信通话SDK，满足学生与家长的沟通需求。',
    overview:
      '学生不允许带手机进校的政策倡导下，校园视频话机始终存在着巨大的市场潜力和迫切的用户需求。宜讯通基于微信开放的通话 SDK 进行接入和调试，逐渐迭代成一款成熟的产品。',
    responsibilities: [
      '主导小程序功能设计，上线后迭代留言功能（支持文字、语音、视频）。',
      '联动校园一卡通系统，嵌入在线充值功能。',
      '优化学生端功能，新增"紧急联系人一键呼叫"（覆盖班主任、校医等场景）、消息提醒机制（未读标记）。',
    ],
    achievements: [
      '落地约 50 家学校，200+ 台设备',
      'C 端付费率达约 74%',
      '消息打开率从 60% 提升至 85%',
      '家长留言日均使用量达 2000+ 条',
    ],
    tags: ['硬件产品', '小程序', '校园'],
  },
  {
    id: 8,
    category: '智慧校园',
    title: '智慧电子班牌',
    period: '2020.04 - 2020.12',
    role: '产品经理',
    summary: '集信息展示、班级管理、家校沟通于一体的校园智能化终端设备。',
    overview:
      '该项目旨在为学校打造一个集信息展示、班级管理、家校沟通等多功能于一体的智能化终端设备，以提升校园信息化管理水平和教学效率。',
    responsibilities: [
      '主导设计家校留言功能：支持文字、语音、视频留言，家长端微信服务号联动。',
      '整合校园考勤系统，实时展示班级出勤率。',
      '新增"个性化模块配置"，满足不同学校不同学生的审美需求。',
      '优化消息提醒机制（强提醒+未读标记），提升家校沟通响应速度。',
    ],
    achievements: [
      '消息触达率提升 60%',
      '教师管理效率提升 40%',
      '个性化模块配置使用率提升 25%',
      '家校沟通响应速度提高 50%',
      '推动产品在 60 所学校落地，用户满意度达 85%',
      '带动后续订单增长 200 万+',
    ],
    tags: ['硬件产品', '校园', '家校沟通', '考勤'],
  },
]

const TOTAL = projects.length
const ANGLE_PER_CARD = 360 / TOTAL

// 根据卡片在环上的相对位置计算样式
function getCardStyle(index, activeIndex, radius) {
  const diff = ((index - activeIndex + TOTAL) % TOTAL + TOTAL) % TOTAL
  const minDiff = Math.min(diff, TOTAL - diff)

  // 计算归一化距离（0 = 正前方，0.5 = 正后方）
  const normalizedDist = minDiff / (TOTAL / 2)

  // 透明度：正前方 1，两侧逐渐降低
  const opacity = Math.max(0.25, 1 - normalizedDist * 0.85)

  // 每张卡片固定在圆周上自己的位置，由 track 整体旋转来切换正面
  const rotateY = index * ANGLE_PER_CARD

  return {
    transform: `translate(-50%, -50%) rotateY(${rotateY}deg) translateZ(${radius}px)`,
    opacity,
  }
}

// 判断卡片位置类型
function getCardPosition(index, activeIndex) {
  const diff = ((index - activeIndex + TOTAL) % TOTAL + TOTAL) % TOTAL
  if (diff === 0) return 'front'
  if (diff <= TOTAL / 4 || diff >= (TOTAL * 3) / 4) return 'side'
  return 'back'
}

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [rotation, setRotation] = useState(0) // 连续旋转角度，始终递增
  const [isPaused, setIsPaused] = useState(false)
  const [modalProject, setModalProject] = useState(null)
  const containerRef = useRef(null)

  // 计算半径和卡片大小
  const [radius, setRadius] = useState(420)
  const [cardWidth, setCardWidth] = useState(320)

  useEffect(() => {
    const updateSize = () => {
      const w = window.innerWidth
      if (w < 640) {
        setRadius(280)
        setCardWidth(220)
      } else if (w < 1024) {
        setRadius(360)
        setCardWidth(280)
      } else if (w < 1536) {
        setRadius(460)
        setCardWidth(320)
      } else {
        // 1920+ 大屏
        setRadius(560)
        setCardWidth(380)
      }
    }
    updateSize()
    window.addEventListener('resize', updateSize)
    return () => window.removeEventListener('resize', updateSize)
  }, [])

  // 自动轮播（始终向前，即逆时针旋转）
  useEffect(() => {
    if (isPaused || modalProject) return
    const timer = setInterval(() => {
      setRotation((prev) => prev - ANGLE_PER_CARD)
      setActiveIndex((prev) => (prev + 1) % TOTAL)
    }, 3500)
    return () => clearInterval(timer)
  }, [isPaused, modalProject])

  const handlePrev = useCallback(() => {
    setRotation((prev) => prev + ANGLE_PER_CARD)
    setActiveIndex((prev) => (prev - 1 + TOTAL) % TOTAL)
  }, [])

  const handleNext = useCallback(() => {
    setRotation((prev) => prev - ANGLE_PER_CARD)
    setActiveIndex((prev) => (prev + 1) % TOTAL)
  }, [])

  const handleCardClick = useCallback((index) => {
    if (index === activeIndex) {
      setModalProject(projects[index])
      return
    }
    // 计算最短路径
    let diff = index - activeIndex
    // 选择更近的方向
    if (diff > TOTAL / 2) diff -= TOTAL
    if (diff < -TOTAL / 2) diff += TOTAL
    // diff 为正：需要顺时针旋转（rotation 增加）；diff 为负：逆时针（rotation 减少）
    setRotation((prev) => prev - diff * ANGLE_PER_CARD)
    setActiveIndex(index)
  }, [activeIndex])

  // ESC 关闭弹窗
  useEffect(() => {
    if (!modalProject) return
    const handleEsc = (e) => {
      if (e.key === 'Escape') setModalProject(null)
    }
    document.addEventListener('keydown', handleEsc)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleEsc)
      document.body.style.overflow = ''
    }
  }, [modalProject])

  return (
    <section
      id="projects"
      className="relative section-padding bg-ink-50/50 overflow-hidden"
    >
      {/* Top gradient fade */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white to-transparent pointer-events-none" />

      <div className="max-w-7xl 2xl:max-w-[1440px] mx-auto px-6 md:px-8 relative">
        {/* Section Header */}
        <div className="mb-16 md:mb-20">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-sm text-ink-400 tracking-widest uppercase">Projects</span>
            <span className="flex-1 h-px bg-gradient-to-r from-ink-200 to-transparent max-w-xs" />
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h2 className="heading-display text-4xl md:text-6xl 2xl:text-7xl max-w-2xl">
              项目
              <span className="text-ink-500"> 经历</span>
            </h2>
            <p className="text-ink-400 whitespace-nowrap">
              专注于AI产品应用，赋能业务落地。
            </p>
          </div>
        </div>

        {/* 3D Carousel */}
        <div
          ref={containerRef}
          className="carousel-container relative mx-auto mb-8"
          style={{ height: cardWidth * 0.85 }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div
            className="carousel-track absolute inset-0"
            style={{
              transform: `rotateY(${rotation}deg)`,
            }}
          >
            {projects.map((project, index) => {
              const style = getCardStyle(index, activeIndex, radius)
              const position = getCardPosition(index, activeIndex)
              const zIndex = position === 'front' ? 20 : position === 'side' ? 10 : 1

              return (
                <div
                  key={project.id}
                  className={`carousel-card glass rounded-2xl p-5 transition-shadow duration-500 ${
                    position === 'front'
                      ? 'is-front hover:shadow-2xl hover:shadow-ink-900/10 hover:-translate-y-1'
                      : position === 'side'
                      ? 'is-side hover:shadow-xl hover:shadow-ink-900/5'
                      : 'is-back'
                  }`}
                  style={{
                    ...style,
                    width: cardWidth,
                    zIndex,
                  }}
                  onClick={() => handleCardClick(index)}
                >
                  {/* Hover glow */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-ink-200/50 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 -translate-y-1/2 translate-x-1/2" />

                  <div className="relative">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[10px] text-ink-400 tracking-widest uppercase">
                        {project.category}
                      </span>
                      <span className="text-[10px] text-ink-400">{project.period}</span>
                    </div>

                    {/* Title */}
                    <h3 className="text-base font-display font-medium mb-3 group-hover:text-ink-900 transition-colors leading-tight truncate">
                      {project.title}
                    </h3>

                    {/* Summary */}
                    <p className="text-ink-500 text-xs leading-relaxed mb-4 line-clamp-2">
                      {project.summary}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {project.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-0.5 text-[10px] rounded-full border border-ink-900/10 text-ink-500"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* View detail hint */}
                    {position === 'front' && (
                      <div className="flex items-center gap-1.5 text-[10px] text-ink-400 pt-3 border-t border-ink-900/5">
                        <span>点击查看详情</span>
                        <svg
                          className="w-3.5 h-3.5"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                        >
                          <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                    )}
                    {position !== 'front' && (
                      <div className="flex items-center gap-1.5 text-[10px] text-ink-400 pt-3 border-t border-ink-900/5">
                        <span>点击切换到前方</span>
                      </div>
                    )}
                  </div>
                </div>
              )
            })}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            className="absolute left-2 md:left-8 top-1/2 -translate-y-1/2 z-30 w-10 h-10 md:w-12 md:h-12 rounded-full glass flex items-center justify-center text-ink-600 hover:text-ink-900 hover:bg-ink-900/5 transition-all duration-300"
            aria-label="上一个"
          >
            <svg className="w-5 h-5 md:w-6 md:h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button
            onClick={handleNext}
            className="absolute right-2 md:right-8 top-1/2 -translate-y-1/2 z-30 w-10 h-10 md:w-12 md:h-12 rounded-full glass flex items-center justify-center text-ink-600 hover:text-ink-900 hover:bg-ink-900/5 transition-all duration-300"
            aria-label="下一个"
          >
            <svg className="w-5 h-5 md:w-6 md:h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        {/* Dots indicator */}
        <div className="flex items-center justify-center gap-2 mt-[82px] relative z-10">
          {projects.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                if (i === activeIndex) return
                let diff = i - activeIndex
                if (diff > TOTAL / 2) diff -= TOTAL
                if (diff < -TOTAL / 2) diff += TOTAL
                setRotation((prev) => prev - diff * ANGLE_PER_CARD)
                setActiveIndex(i)
              }}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === activeIndex
                  ? 'w-8 bg-ink-900'
                  : 'w-2 bg-ink-300 hover:bg-ink-400'
              }`}
              aria-label={`跳转到第 ${i + 1} 个项目`}
            />
          ))}
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none" />

      {/* Project Detail Modal */}
      {modalProject && (
        <div
          className="modal-overlay fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 bg-ink-900/30 backdrop-blur-sm"
          onClick={() => setModalProject(null)}
        >
          <div
            className="modal-content relative w-full max-w-4xl max-h-[92vh] overflow-hidden bg-white rounded-3xl border border-ink-900/10 shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="sticky top-0 z-10 bg-white/95 backdrop-blur-xl border-b border-ink-900/5 px-8 pt-8 pb-6 md:px-10 md:pt-10">
              {/* Close button */}
              <button
                onClick={() => setModalProject(null)}
                className="absolute top-4 right-4 md:top-6 md:right-6 w-10 h-10 rounded-full flex items-center justify-center text-ink-500 hover:text-ink-900 hover:bg-ink-900/5 transition-all duration-300 z-20"
                aria-label="关闭"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>

              <div className="flex items-center gap-3 mb-4 pr-12 flex-wrap">
                <span className="text-xs text-ink-400 tracking-widest uppercase">
                  {modalProject.category}
                </span>
                <span className="w-1 h-1 rounded-full bg-ink-300" />
                <span className="text-xs text-ink-400">{modalProject.period}</span>
                <span className="w-1 h-1 rounded-full bg-ink-300" />
                <span className="text-xs text-ink-400">{modalProject.role}</span>
              </div>
              <h3 className="heading-display text-2xl md:text-4xl text-ink-900 leading-tight pr-12">
                {modalProject.title}
              </h3>
            </div>

            <div className="overflow-y-auto px-8 py-8 md:px-10">
            {/* 项目概述 */}
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-1 h-5 bg-ink-900 rounded-full" />
                <h4 className="text-base font-medium text-ink-900">项目概述</h4>
              </div>
              <p className="text-ink-600 leading-relaxed pl-3">
                {modalProject.overview}
              </p>
            </div>

            {/* 项目职责 */}
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-1 h-5 bg-ink-900 rounded-full" />
                <h4 className="text-base font-medium text-ink-900">项目职责</h4>
              </div>
              <div className="space-y-3 pl-3">
                {modalProject.responsibilities.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="text-ink-400 mt-1 text-xs shrink-0">0{i + 1}</span>
                    <span className="text-ink-600 leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 核心成果 */}
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-1 h-5 bg-ink-900 rounded-full" />
                <h4 className="text-base font-medium text-ink-900">核心成果</h4>
              </div>
              <div className="grid sm:grid-cols-2 gap-3 pl-3">
                {modalProject.achievements.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-ink-50 border border-ink-900/5"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-ink-900 shrink-0" />
                    <span className="text-ink-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 技术标签 */}
            <div className="mb-10">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-1 h-5 bg-ink-900 rounded-full" />
                <h4 className="text-base font-medium text-ink-900">项目标签</h4>
              </div>
              <div className="flex flex-wrap gap-2 pl-3">
                {modalProject.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-1.5 text-sm rounded-full border border-ink-900/10 text-ink-500"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* 项目实现逻辑图 */}
            {(modalProject.id === 1 || modalProject.id === 2 || modalProject.id === 3 || modalProject.id === 4) && (
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-1 h-5 bg-ink-900 rounded-full" />
                  <h4 className="text-base font-medium text-ink-900">架构设计</h4>
                </div>
                <div className="pl-3">
                  <div className="rounded-2xl border border-ink-900/5 bg-white p-4 md:p-6">
                    {modalProject.id === 1
                      ? <QuestionBankArchitecture />
                      : modalProject.id === 2
                      ? <LearningPlanArchitecture />
                      : modalProject.id === 3
                      ? <AgentArchitecture />
                      : <ChineseTutorArchitecture />}
                  </div>
                </div>
              </div>
            )}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
