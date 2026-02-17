// ============================================================
// 完整 78 张塔罗牌数据
// nature: "positive" | "neutral" | "challenging"
// ============================================================

export const TAROT_CARDS = [
  // ==================== 大阿卡纳 (0-21) ====================
  {
    id: 0, name: "愚者", nameEn: "The Fool", numeral: "0", suit: "major",
    element: "风", nature: "neutral",
    keywords: ["新开始", "冒险", "天真", "自由"],
    upright: {
      meaning: "新的旅程即将开启，充满无限可能。你正处于一个全新的起点，内心充满对未知的渴望和勇气。不要害怕迈出第一步，宇宙会为你的勇敢铺路。",
      love: "一段新恋情可能即将到来，或现有关系将进入新阶段。保持开放的心态。",
      career: "事业上可能有新的机遇或转变。保持乐观和开放的态度，勇于尝试新事物。",
      advice: "相信自己的直觉，勇敢地追随内心的召唤。"
    },
    reversed: {
      meaning: "你可能正在逃避现实，或者过于鲁莽地做出决定。停下来，审视一下自己的方向是否正确。",
      love: "感情中可能存在不成熟或不负责任的态度，需要更加认真地对待你的感情。",
      career: "工作中可能因为缺乏计划而陷入困境，需要更加谨慎地规划前进的方向。",
      advice: "三思而后行，在冒险之前做好准备。"
    },
    image: "♠"
  },
  {
    id: 1, name: "魔术师", nameEn: "The Magician", numeral: "I", suit: "major",
    element: "水星", nature: "positive",
    keywords: ["创造力", "意志力", "技巧", "资源"],
    upright: {
      meaning: "你拥有实现目标所需的一切资源和能力。现在是将想法付诸行动的最佳时机，你的创造力和意志力将帮助你化不可能为可能。",
      love: "你有能力创造理想的感情关系。展现你的魅力和真诚，主动出击会有好结果。",
      career: "你具备成功所需的所有技能。信心十足地展示你的才华，成功近在咫尺。",
      advice: "集中精力，运用你所有的资源和才能去创造你想要的现实。"
    },
    reversed: {
      meaning: "你可能没有充分利用自己的潜力，或者在用才能做不正当的事情。重新审视你的意图。",
      love: "感情中可能存在欺骗或操控，需要保持警惕和诚实。",
      career: "才华可能被浪费或误用，需要重新找到正确的方向。",
      advice: "审视自己的动机，确保你在正确地使用自己的天赋。"
    },
    image: "✧"
  },
  {
    id: 2, name: "女祭司", nameEn: "The High Priestess", numeral: "II", suit: "major",
    element: "月亮", nature: "positive",
    keywords: ["直觉", "智慧", "神秘", "潜意识"],
    upright: {
      meaning: "相信你的直觉，它正在引导你走向真理。内在的智慧比外在的喧嚣更值得倾听。静下心来，答案就在你的内心深处。",
      love: "感情中需要更多的倾听和感受。不要急于表达，先去感受对方的内心世界。",
      career: "依靠直觉做出判断，有些真相尚未浮出水面，耐心等待时机。",
      advice: "静心冥想，倾听内心的声音，真相即将揭晓。"
    },
    reversed: {
      meaning: "你可能忽略了自己的直觉，过于依赖外在的信息和他人的意见。回归内心。",
      love: "感情中可能存在隐瞒或误解，需要更坦诚的沟通。",
      career: "工作中可能忽视了重要的直觉信号，需要重新连接内在智慧。",
      advice: "不要忽视内心的声音，它比理性分析更接近真相。"
    },
    image: "☽"
  },
  {
    id: 3, name: "女皇", nameEn: "The Empress", numeral: "III", suit: "major",
    element: "金星", nature: "positive",
    keywords: ["丰饶", "母性", "美丽", "自然"],
    upright: {
      meaning: "丰收和富足的时期即将来临。你周围充满爱与美好，享受生活中的一切恩赐。创造力蓬勃发展。",
      love: "感情生活充满温暖和爱意。这是关系深化、感情升温的美好时期。",
      career: "事业上将迎来丰收，创意项目特别顺利。享受你努力的成果。",
      advice: "拥抱生活的美好，让爱与创造力自由流淌。"
    },
    reversed: {
      meaning: "你可能过于依赖他人，或忽视了自我照顾。找回与自身的连接，重新滋养自己。",
      love: "感情中可能存在过度依赖或控制欲，需要找到健康的平衡。",
      career: "创造力可能受阻，需要重新找到灵感和动力的源泉。",
      advice: "关注自我成长和自我滋养，由内而外地绽放。"
    },
    image: "♛"
  },
  {
    id: 4, name: "皇帝", nameEn: "The Emperor", numeral: "IV", suit: "major",
    element: "白羊座", nature: "positive",
    keywords: ["权威", "结构", "领导力", "稳定"],
    upright: {
      meaning: "现在是建立秩序和结构的时候。用坚定的意志和清晰的头脑来管理你的生活。你拥有领导者的气质。",
      love: "感情中需要更多的稳定性和承诺。建立清晰的界限和相互尊重的关系。",
      career: "展现你的领导能力，以结构化的方式推进项目。你的权威和决断力将带来成功。",
      advice: "建立明确的目标和计划，用纪律和决心去实现它们。"
    },
    reversed: {
      meaning: "可能存在过度控制或独裁的倾向。灵活性和同理心同样重要。",
      love: "感情中可能有控制欲过强的问题，需要学会放手和信任。",
      career: "管理风格可能过于僵化，需要更多的灵活性和开放态度。",
      advice: "在坚定与灵活之间找到平衡，权力需要智慧来驾驭。"
    },
    image: "♚"
  },
  {
    id: 5, name: "教皇", nameEn: "The Hierophant", numeral: "V", suit: "major",
    element: "金牛座", nature: "neutral",
    keywords: ["传统", "信仰", "教导", "仪式"],
    upright: {
      meaning: "遵循传统和既定的道路会带来好结果。寻求导师或精神指引，从集体智慧中获益。",
      love: "感情关系可能走向更正式的阶段，如承诺、订婚或结婚。",
      career: "遵循已有的规则和流程，向经验丰富的前辈学习。团队合作很重要。",
      advice: "尊重传统，寻求智者的指引，在既有框架中寻找自己的道路。"
    },
    reversed: {
      meaning: "你可能需要打破常规，寻找自己独特的道路。不要被教条束缚。",
      love: "可能需要重新审视感情中的传统期待，找到更适合自己的相处模式。",
      career: "可能需要创新和打破常规，传统方法不再适用。",
      advice: "勇于质疑既定规则，找到属于自己的真理。"
    },
    image: "✝"
  },
  {
    id: 6, name: "恋人", nameEn: "The Lovers", numeral: "VI", suit: "major",
    element: "双子座", nature: "positive",
    keywords: ["爱情", "选择", "和谐", "结合"],
    upright: {
      meaning: "重要的选择摆在你面前，尤其是关于感情和人际关系。跟随你的心，做出真诚的选择。",
      love: "一段深刻的感情连接正在形成或加深。这是充满爱与激情的时期。",
      career: "工作中可能面临重要选择，选择与你价值观一致的方向。",
      advice: "倾听内心的声音，做出与灵魂共鸣的选择。"
    },
    reversed: {
      meaning: "在重要的选择面前犹豫不决，或者感情中出现不和谐。需要重新审视你的价值观。",
      love: "感情中可能存在信任危机或沟通障碍，需要坦诚面对问题。",
      career: "工作中可能面临价值观冲突，避免做出违心的选择。",
      advice: "面对内心的真实渴望，不要为了迎合他人而背离自己。"
    },
    image: "♥"
  },
  {
    id: 7, name: "战车", nameEn: "The Chariot", numeral: "VII", suit: "major",
    element: "巨蟹座", nature: "positive",
    keywords: ["胜利", "意志", "决心", "前进"],
    upright: {
      meaning: "凭借坚定的决心和强大的意志力，你将克服一切障碍。胜利在望，保持前进的动力。",
      love: "在感情中积极主动地追求你想要的。坚定的态度会赢得对方的心。",
      career: "事业上即将取得重大突破。保持专注和决心，成功就在前方。",
      advice: "集中意志力，坚定地朝目标前进，胜利属于不放弃的人。"
    },
    reversed: {
      meaning: "可能失去方向感或缺乏动力。内心的冲突阻碍了前进的脚步。",
      love: "感情中可能出现方向不明确或缺乏动力的情况。",
      career: "事业上可能遇到挫折或失去动力，需要重新调整策略。",
      advice: "停下来重新审视方向，找回内心的力量和决心。"
    },
    image: "⚡"
  },
  {
    id: 8, name: "力量", nameEn: "Strength", numeral: "VIII", suit: "major",
    element: "狮子座", nature: "positive",
    keywords: ["勇气", "耐心", "内在力量", "温柔"],
    upright: {
      meaning: "真正的力量不是蛮力，而是来自内心的勇气和温柔。你拥有驾驭困难局面的内在力量。",
      love: "用温柔和耐心来经营感情，内在的力量比外在的强势更能打动人心。",
      career: "以沉着冷静的态度面对工作挑战，你的内在力量会让你脱颖而出。",
      advice: "培养内在的力量和勇气，温柔而坚定地面对一切。"
    },
    reversed: {
      meaning: "自信心不足或内心充满恐惧。你需要重新连接内在的力量源泉。",
      love: "感情中可能缺乏自信或表现出不安全感，需要自我增强。",
      career: "工作中可能感到力不从心，需要重新找回自信和勇气。",
      advice: "相信自己的内在力量，勇敢面对内心的恐惧。"
    },
    image: "∞"
  },
  {
    id: 9, name: "隐士", nameEn: "The Hermit", numeral: "IX", suit: "major",
    element: "处女座", nature: "neutral",
    keywords: ["独处", "内省", "智慧", "指引"],
    upright: {
      meaning: "现在是独处和内省的时候。暂时远离喧嚣，在安静中寻找答案。你内在的灯塔正在指引你走向智慧。",
      love: "可能需要独处一段时间来理清感情。或者你正在寻找一个灵魂深处的连接。",
      career: "适合独立工作或深入研究。暂时远离社交，专注于个人成长。",
      advice: "给自己独处的空间，在安静中聆听内心的智慧。"
    },
    reversed: {
      meaning: "过度孤立或逃避社交。虽然独处很重要，但不要完全封闭自己。",
      love: "可能过于封闭自己，需要适度地向外界敞开心扉。",
      career: "可能因为过于独立而忽视了团队合作的重要性。",
      advice: "在独处和社交之间找到平衡，不要让孤独成为逃避的借口。"
    },
    image: "☆"
  },
  {
    id: 10, name: "命运之轮", nameEn: "Wheel of Fortune", numeral: "X", suit: "major",
    element: "木星", nature: "positive",
    keywords: ["命运", "转折", "循环", "机遇"],
    upright: {
      meaning: "命运的齿轮正在转动，重大的转变即将来临。好运正在向你靠近，抓住即将到来的机遇。",
      love: "感情生活即将迎来转折点。命中注定的相遇或关系的升华正在发生。",
      career: "事业上即将出现重大机遇或转变。顺应变化，好运自然来。",
      advice: "拥抱变化，相信命运的安排，一切都会朝好的方向发展。"
    },
    reversed: {
      meaning: "你可能正在经历不顺利的时期，但请记住这只是暂时的。命运之轮终会再次转向有利的方向。",
      love: "感情中可能遇到波折，但这是成长的必经之路。保持信心。",
      career: "事业上可能遇到暂时的低谷，耐心等待转机。",
      advice: "在困难时期保持信心，命运之轮终将转向光明。"
    },
    image: "☸"
  },
  {
    id: 11, name: "正义", nameEn: "Justice", numeral: "XI", suit: "major",
    element: "天秤座", nature: "neutral",
    keywords: ["公正", "真理", "因果", "平衡"],
    upright: {
      meaning: "因果循环，公正即将到来。你过去的行为将得到应有的回报。保持诚实和公正。",
      love: "感情中需要公平和诚实。种下什么因，就会收获什么果。",
      career: "公正的评价即将到来。你的努力会得到认可，保持正直。",
      advice: "以公正和诚实的态度面对一切，因果报应终不虚。"
    },
    reversed: {
      meaning: "可能存在不公正或不诚实的情况。需要面对真相，纠正错误。",
      love: "感情中可能存在不公平的状况，需要坦诚地面对和解决。",
      career: "工作中可能遇到不公正的对待，需要为自己的权益发声。",
      advice: "勇于面对真相，即使它不是你想听到的。"
    },
    image: "⚖"
  },
  {
    id: 12, name: "倒吊人", nameEn: "The Hanged Man", numeral: "XII", suit: "major",
    element: "海王星", nature: "challenging",
    keywords: ["牺牲", "等待", "新视角", "放下"],
    upright: {
      meaning: "有时候停下脚步，换个角度看问题，会获得全新的领悟。暂时的牺牲和等待是为了更大的收获。",
      love: "感情中可能需要暂时的等待或妥协。换位思考会带来新的理解。",
      career: "事业上可能需要暂时搁置计划，用新的视角重新审视。",
      advice: "学会放下执念，在等待中获得新的智慧和视角。"
    },
    reversed: {
      meaning: "你可能在做无谓的牺牲，或者固执地拒绝改变视角。该放手的时候就放手。",
      love: "感情中可能在做无谓的牺牲，需要重新评估这段关系的价值。",
      career: "可能因为固执而错失机会，需要更加灵活地应对变化。",
      advice: "停止无意义的坚持，该转变的时候就勇敢转变。"
    },
    image: "♃"
  },
  {
    id: 13, name: "死神", nameEn: "Death", numeral: "XIII", suit: "major",
    element: "天蝎座", nature: "challenging",
    keywords: ["结束", "转变", "重生", "放下"],
    upright: {
      meaning: "一个阶段即将结束，但这并不意味着终结，而是预示着全新的开始。旧的事物必须离去，新的才能到来。",
      love: "一段关系可能面临重大转变。放下过去，才能迎来新的爱情篇章。",
      career: "职业生涯可能面临重大转型。旧的工作模式需要被新的取代。",
      advice: "勇敢地告别过去，在结束中寻找新生的种子。"
    },
    reversed: {
      meaning: "你可能抗拒必要的改变和结束，紧紧抓住不再适合你的事物不放。",
      love: "可能在一段已经结束的感情中无法自拔，需要学会放手。",
      career: "可能害怕职业转变，但改变是不可避免的。",
      advice: "接受生命的自然循环，不要害怕必要的结束。"
    },
    image: "♏"
  },
  {
    id: 14, name: "节制", nameEn: "Temperance", numeral: "XIV", suit: "major",
    element: "射手座", nature: "positive",
    keywords: ["平衡", "和谐", "耐心", "调和"],
    upright: {
      meaning: "在极端之间找到平衡与和谐。耐心地调和不同的元素，创造出完美的结合。",
      love: "感情需要平衡和和谐。互相包容，耐心磨合，感情会越来越好。",
      career: "工作中需要平衡各方面的需求。耐心和灵活性是成功的关键。",
      advice: "在所有事物中寻找中庸之道，和谐来自内外的平衡。"
    },
    reversed: {
      meaning: "生活失去平衡，过度沉溺于某些方面而忽视其他。需要重新找到和谐。",
      love: "感情关系可能失去平衡，一方付出太多而另一方太少。",
      career: "工作和生活可能失衡，需要重新调整优先级。",
      advice: "审视生活中的不平衡，主动调整以恢复和谐。"
    },
    image: "△"
  },
  {
    id: 15, name: "恶魔", nameEn: "The Devil", numeral: "XV", suit: "major",
    element: "摩羯座", nature: "challenging",
    keywords: ["束缚", "诱惑", "物质", "阴暗面"],
    upright: {
      meaning: "小心那些束缚你的事物——可能是执念、坏习惯或不健康的关系。你有能力挣脱枷锁，但首先需要认识到这些束缚的存在。",
      love: "感情中可能存在不健康的依赖或控制关系。认清真相，做出选择。",
      career: "可能被物质利益或不健康的工作环境所束缚。思考什么才是真正重要的。",
      advice: "面对你的阴暗面，认识并打破那些束缚你的枷锁。"
    },
    reversed: {
      meaning: "你正在从束缚中解脱出来。继续保持这种觉醒，真正的自由就在眼前。",
      love: "正在从不健康的感情模式中走出来，继续前进。",
      career: "正在摆脱不好的工作处境，保持这种积极的转变。",
      advice: "你已经开始觉醒，继续打破限制你的枷锁。"
    },
    image: "♑"
  },
  {
    id: 16, name: "塔", nameEn: "The Tower", numeral: "XVI", suit: "major",
    element: "火星", nature: "challenging",
    keywords: ["突变", "觉醒", "解放", "真相"],
    upright: {
      meaning: "突如其来的变化将打破现有的格局。虽然过程可能令人不安，但这是清除虚假、迎来真实的必要过程。",
      love: "感情中可能面临突然的冲击或真相的揭露。痛苦的经历最终会带来解放。",
      career: "职业上可能经历突然的变动。虽然动荡，但最终会走向更好的方向。",
      advice: "接受突变，在混乱中保持冷静，这是通往真实的必经之路。"
    },
    reversed: {
      meaning: "你可能在试图避免不可避免的变化。抗拒只会让过程更加痛苦。",
      love: "感情中可能在逃避必要的变化或真相，但躲避不是长久之计。",
      career: "可能在试图维持一个注定要改变的局面。顺其自然。",
      advice: "不要害怕倒塌，因为只有旧的结构被拆除，新的才能被建立。"
    },
    image: "⚡"
  },
  {
    id: 17, name: "星星", nameEn: "The Star", numeral: "XVII", suit: "major",
    element: "水瓶座", nature: "positive",
    keywords: ["希望", "灵感", "宁静", "信念"],
    upright: {
      meaning: "经历风雨之后，星光指引你走向希望。这是一个充满灵感和宁静的时期，相信未来会更好。",
      love: "充满希望和灵感的感情时光。一段纯净美好的缘分正在降临。",
      career: "灵感不断涌现，创造力处于高峰。保持乐观，你的星途一片光明。",
      advice: "保持希望和信念，你值得拥有美好的一切。"
    },
    reversed: {
      meaning: "可能暂时失去希望或信心。但请记住，星星始终在那里，只是暂时被云层遮挡。",
      love: "感情上可能感到失望或迷茫，但不要放弃对爱的信念。",
      career: "可能缺乏灵感或对未来感到悲观。休息一下，灵感会回来的。",
      advice: "即使在最黑暗的夜晚，星星依然闪耀。保持信念。"
    },
    image: "★"
  },
  {
    id: 18, name: "月亮", nameEn: "The Moon", numeral: "XVIII", suit: "major",
    element: "双鱼座", nature: "challenging",
    keywords: ["幻觉", "恐惧", "潜意识", "迷惑"],
    upright: {
      meaning: "事物并非如表面所见，注意辨别真假。月光下的阴影可能让你产生恐惧和迷惑。深入探索你的潜意识。",
      love: "感情中可能存在误解或欺骗。不要被表象迷惑，用心去感受真相。",
      career: "工作中情况可能不够明朗，避免在信息不完整时做重大决定。",
      advice: "穿越恐惧的迷雾，相信黎明终将到来。"
    },
    reversed: {
      meaning: "混乱和迷惑正在消散，真相即将浮出水面。你正在从恐惧中走出来。",
      love: "感情中的误解正在被解开，真相大白的时刻即将到来。",
      career: "工作中的不确定因素正在消除，局势趋于明朗。",
      advice: "迷雾正在散去，保持耐心，真相即将显现。"
    },
    image: "☾"
  },
  {
    id: 19, name: "太阳", nameEn: "The Sun", numeral: "XIX", suit: "major",
    element: "太阳", nature: "positive",
    keywords: ["喜悦", "成功", "活力", "光明"],
    upright: {
      meaning: "阳光普照，一切都在向好的方向发展！这是充满喜悦、成功和活力的时期。享受生命的温暖和光明。",
      love: "感情生活充满阳光和快乐。幸福和满足感洋溢在关系中。",
      career: "事业蒸蒸日上，成功和认可接踵而至。尽情享受你的辉煌时刻。",
      advice: "散发你的光芒，用积极的能量感染身边的每一个人。"
    },
    reversed: {
      meaning: "内心的喜悦可能暂时被遮蔽。但太阳永远在云层之上，重新找回你的快乐。",
      love: "感情中可能暂时缺乏热情或快乐，需要重新点燃内心的火焰。",
      career: "事业上可能暂时缺乏动力或成就感，调整心态。",
      advice: "找回内心的阳光，不要让暂时的阴霾遮挡你的光芒。"
    },
    image: "☀"
  },
  {
    id: 20, name: "审判", nameEn: "Judgement", numeral: "XX", suit: "major",
    element: "冥王星", nature: "neutral",
    keywords: ["觉醒", "重生", "召唤", "反思"],
    upright: {
      meaning: "灵魂深处的召唤正在响起。这是觉醒和重生的时刻，审视过去，放下遗憾，以崭新的自我迎接未来。",
      love: "感情中迎来觉醒的时刻。放下过去的伤痛，以全新的心态面对爱情。",
      career: "职业上可能迎来重要的转折点或使命的召唤。遵从内心的呼唤。",
      advice: "倾听灵魂深处的声音，勇敢地回应命运的召唤。"
    },
    reversed: {
      meaning: "你可能在逃避自我审视，或者无法释怀过去。放下才能重生。",
      love: "可能被过去的感情经历所困扰，需要勇敢地面对和释怀。",
      career: "可能在逃避重要的职业决定或忽视内心的真实渴望。",
      advice: "面对真实的自己，不要害怕审视过去，它是通往新生的大门。"
    },
    image: "♇"
  },
  {
    id: 21, name: "世界", nameEn: "The World", numeral: "XXI", suit: "major",
    element: "土星", nature: "positive",
    keywords: ["完满", "成就", "圆满", "新循环"],
    upright: {
      meaning: "恭喜你！一个重要的生命周期即将圆满完成。你的努力和成长获得了丰厚的回报。",
      love: "感情达到圆满的状态。和谐、完整、幸福的爱情正在你身边。",
      career: "事业上取得了重大成就。一个项目或阶段圆满完成，新的机遇即将开启。",
      advice: "庆祝你的成就，感恩一路走来的经历，新的精彩篇章即将展开。"
    },
    reversed: {
      meaning: "你可能还有未完成的事项阻碍了你前进。完成剩余的功课，才能真正开启新篇章。",
      love: "感情中可能还有未解决的问题需要处理，完成它才能进入新阶段。",
      career: "可能有未完成的目标或项目，需要善始善终。",
      advice: "不要半途而废，完成你开始的事情，圆满即将到来。"
    },
    image: "⊕"
  },

  // ==================== 权杖牌组 Wands (22-35) ====================
  {
    id: 22, name: "权杖王牌", nameEn: "Ace of Wands", numeral: "A", suit: "wands",
    element: "火", nature: "positive",
    keywords: ["灵感", "新机遇", "热情", "潜力"],
    upright: { meaning: "一股全新的创造力和灵感正在涌入你的生命。这是播下热情种子的绝佳时机，大胆行动吧！", love: "一段充满激情的新恋情或关系中注入新鲜的火花。", career: "事业上出现令人兴奋的新机遇或创业灵感，勇敢抓住它。", advice: "把握这股创造力的浪潮，大胆开始新的冒险。" },
    reversed: { meaning: "创造力受阻，缺乏方向或动力。灵感虽在但执行力不足。", love: "感情缺乏热情或新鲜感，可能对开始新关系犹豫不决。", career: "好的想法难以落地，需要更清晰的规划。", advice: "重新点燃内心的热情，找到阻碍你行动的根源。" },
    image: "🔥"
  },
  {
    id: 23, name: "权杖二", nameEn: "Two of Wands", numeral: "2", suit: "wands",
    element: "火", nature: "neutral",
    keywords: ["计划", "决策", "远见", "探索"],
    upright: { meaning: "你正站在十字路口，拥有广阔的视野。制定计划，为未来的成功做好准备，世界正等待你去探索。", love: "考虑感情的未来方向，可能面临关于关系进展的重要决定。", career: "事业规划的关键时期，做好长远打算，可能涉及合作或扩展。", advice: "胸怀远大目标，勇敢走出舒适区去追寻你的愿景。" },
    reversed: { meaning: "缺乏计划或对未来感到迷茫。恐惧阻碍你迈出下一步。", love: "对感情的未来方向感到不确定，害怕做出承诺。", career: "计划受阻或缺乏远见，需要重新审视目标。", advice: "克服恐惧，不要让犹豫错过了最佳时机。" },
    image: "🔥"
  },
  {
    id: 24, name: "权杖三", nameEn: "Three of Wands", numeral: "3", suit: "wands",
    element: "火", nature: "positive",
    keywords: ["扩展", "远见", "进步", "领导"],
    upright: { meaning: "你的计划正在顺利推进，成果即将显现。继续保持前瞻的视野，更大的舞台在等着你。", love: "感情关系正在稳步发展，可能走向更深层的承诺或一起规划未来。", career: "事业版图正在扩大，海外机遇或新市场的大门正在打开。", advice: "保持耐心和远见，你播下的种子即将结出硕果。" },
    reversed: { meaning: "扩展计划遇到阻碍，回报来得比预期慢。", love: "对感情的期望可能过高，双方的节奏需要调整。", career: "项目推进不如预期，可能需要调整策略。", advice: "审视计划中的不足，灵活调整才能走得更远。" },
    image: "🔥"
  },
  {
    id: 25, name: "权杖四", nameEn: "Four of Wands", numeral: "4", suit: "wands",
    element: "火", nature: "positive",
    keywords: ["庆祝", "和谐", "家庭", "里程碑"],
    upright: { meaning: "值得庆祝的时刻到来了！无论是搬新家、结婚还是达成目标，这是和谐与欢乐的时光。", love: "感情关系稳定幸福，可能迎来订婚、结婚或同居等里程碑。", career: "项目取得阶段性成功，团队氛围融洽，值得庆祝的成就。", advice: "享受这份来之不易的喜悦，与亲友一起分享幸福。" },
    reversed: { meaning: "庆祝时刻被推迟，或家庭关系出现一些不和谐。", love: "感情中可能有些小摩擦影响了和谐氛围。", career: "项目完成但缺乏成就感，或团队内部有分歧。", advice: "关注身边的不和谐因素，主动沟通化解矛盾。" },
    image: "🔥"
  },
  {
    id: 26, name: "权杖五", nameEn: "Five of Wands", numeral: "5", suit: "wands",
    element: "火", nature: "challenging",
    keywords: ["竞争", "冲突", "挑战", "多元"],
    upright: { meaning: "你正面临竞争和挑战，各种意见和力量在碰撞。这是检验实力的时候，也是成长的契机。", love: "感情中可能出现争吵或与情敌的竞争。需要学会在冲突中寻找共识。", career: "职场竞争激烈，同事间可能有意见分歧，但良性竞争催人进步。", advice: "不要回避冲突，在竞争中磨练自己，化对抗为合作。" },
    reversed: { meaning: "冲突正在平息，或你选择了回避竞争。", love: "感情中的争吵趋于缓和，双方开始寻求妥协。", career: "职场纷争减少，但要小心内耗消磨你的斗志。", advice: "避免无意义的争斗，把精力用在真正重要的事上。" },
    image: "🔥"
  },
  {
    id: 27, name: "权杖六", nameEn: "Six of Wands", numeral: "6", suit: "wands",
    element: "火", nature: "positive",
    keywords: ["胜利", "荣誉", "认可", "自信"],
    upright: { meaning: "你即将赢得众人的认可和赞赏！过去的努力终于有了回报，享受这个胜利的高光时刻。", love: "在感情中收获认可和赞美，魅力值满满，备受瞩目。", career: "事业上取得耀眼成就，获得晋升、奖励或公开表彰。", advice: "自信地接受荣耀，同时保持谦逊和感恩之心。" },
    reversed: { meaning: "胜利被推迟或努力未获得应有的认可，自信心受到打击。", love: "在感情中可能感到不被欣赏或认可。", career: "成就未被看到，可能有人抢了你的功劳。", advice: "不要为了外界的认可而活，你的价值不由他人定义。" },
    image: "🔥"
  },
  {
    id: 28, name: "权杖七", nameEn: "Seven of Wands", numeral: "7", suit: "wands",
    element: "火", nature: "neutral",
    keywords: ["坚守", "防御", "毅力", "立场"],
    upright: { meaning: "你正在捍卫自己的立场和信念。虽然压力重重，但你占据有利位置，坚持就是胜利。", love: "感情中可能需要捍卫你的底线，不要为了维持关系而放弃原则。", career: "面对竞争对手的挑战，坚守你的专业和地位。", advice: "站稳脚跟，不要被外界的压力动摇你的信念。" },
    reversed: { meaning: "感到疲惫不堪，开始动摇。是否值得继续坚持需要重新评估。", love: "在感情中感到精疲力竭，可能因妥协太多而失去自我。", career: "面对太多的挑战感到力不从心，需要调整策略。", advice: "适时的退让不是懦弱，学会选择真正值得坚守的战场。" },
    image: "🔥"
  },
  {
    id: 29, name: "权杖八", nameEn: "Eight of Wands", numeral: "8", suit: "wands",
    element: "火", nature: "positive",
    keywords: ["迅速", "行动", "进展", "消息"],
    upright: { meaning: "事情正在以前所未有的速度推进！好消息接踵而至，一切都在快速运转。趁势而上！", love: "感情进展迅速，可能很快收到表白、约会邀请或重要消息。", career: "项目快速推进，出差旅行的可能性大增，效率极高。", advice: "顺应这股加速的能量，果断行动，不要犹豫。" },
    reversed: { meaning: "进展受阻或出现延误。信息不畅或计划被打乱。", love: "感情进展缓慢，消息迟迟不来，需要耐心等待。", career: "项目延期，沟通不畅，可能遇到意外阻碍。", advice: "不要急躁，利用这段等待的时间做好充分准备。" },
    image: "🔥"
  },
  {
    id: 30, name: "权杖九", nameEn: "Nine of Wands", numeral: "9", suit: "wands",
    element: "火", nature: "neutral",
    keywords: ["坚韧", "警觉", "最后考验", "毅力"],
    upright: { meaning: "你已经走过了很长的路，虽然伤痕累累但依然坚强。最后的考验就在眼前，再坚持一下就好。", love: "感情中可能因过去的伤害而保持警惕。相信这段关系值得你再试一次。", career: "即将到达目标但最后阶段格外艰难，不要在终点前放弃。", advice: "你比自己想象的更坚强，胜利就在最后一步。" },
    reversed: { meaning: "防备心太重，身心俱疲。也许是时候放下包袱了。", love: "因过去的感情创伤而封闭自己，不敢再次信任。", career: "过度疲劳导致效率下降，需要休息和调整。", advice: "放下过度的防备，让自己脆弱一次反而会收获更多。" },
    image: "🔥"
  },
  {
    id: 31, name: "权杖十", nameEn: "Ten of Wands", numeral: "10", suit: "wands",
    element: "火", nature: "challenging",
    keywords: ["重担", "压力", "责任", "疲惫"],
    upright: { meaning: "你肩上的担子太重了。虽然责任感驱使你继续前行，但过度的负荷正在消耗你的热情。", love: "感情中承担了过多的责任，单方面的付出让你感到疲惫。", career: "工作量过大，承担了超出能力范围的任务，亟需减负。", advice: "学会说不，把不必要的重担放下，你不需要独自承受一切。" },
    reversed: { meaning: "正在学会卸下重担或找到分担压力的方式。", love: "开始重新分配感情中的责任，关系趋于平衡。", career: "学会委派任务，工作压力正在减轻。", advice: "继续放下不属于你的担子，轻装上阵才能走得更远。" },
    image: "🔥"
  },
  {
    id: 32, name: "权杖侍从", nameEn: "Page of Wands", numeral: "P", suit: "wands",
    element: "火", nature: "positive",
    keywords: ["探索", "热忱", "发现", "自由精神"],
    upright: { meaning: "一个充满热情和好奇心的新开始正在向你招手。像孩子一样勇敢探索，让冒险精神引领你。", love: "可能出现一个充满活力和魅力的追求者，或感情中注入新的激情。", career: "有机会探索新的职业方向，带着初学者的热忱去拥抱变化。", advice: "保持好奇和热情，不要被恐惧限制你探索世界的脚步。" },
    reversed: { meaning: "热情有余但执行力不足，容易半途而废或三分钟热度。", love: "感情中可能有不成熟或不稳定的表现。", career: "对新事物感兴趣但缺乏持续的行动力。", advice: "光有热情不够，培养坚持的能力同样重要。" },
    image: "🔥"
  },
  {
    id: 33, name: "权杖骑士", nameEn: "Knight of Wands", numeral: "Kn", suit: "wands",
    element: "火", nature: "positive",
    keywords: ["行动", "冒险", "热情", "冲劲"],
    upright: { meaning: "勇往直前的时刻到了！带着满腔热血和无畏的勇气去追求你的目标，行动力就是你最大的武器。", love: "一段充满激情和冒险感的浪漫即将上演，或有热情奔放的追求者出现。", career: "充满干劲地投入新项目，勇敢接受挑战，大胆尝试。", advice: "趁热打铁，把热情转化为行动，但也要注意别因冲动而失误。" },
    reversed: { meaning: "过于冲动或散漫，热情来得快去得也快。", love: "感情中可能过于急躁或善变，缺乏长期承诺的耐心。", career: "做事缺乏后续跟进，容易虎头蛇尾。", advice: "在热情中加入理性和纪律，才能把事情做到底。" },
    image: "🔥"
  },
  {
    id: 34, name: "权杖王后", nameEn: "Queen of Wands", numeral: "Q", suit: "wands",
    element: "火", nature: "positive",
    keywords: ["自信", "魅力", "独立", "温暖"],
    upright: { meaning: "你散发着自信和温暖的光芒，充满独立精神和领袖魅力。用你的热情去鼓舞和激励周围的人。", love: "在感情中展现魅力和自信，你的热情和真诚会吸引到对的人。", career: "以领袖风范驾驭工作，你的热情和能力会带领团队走向成功。", advice: "相信自己的魅力和能力，大胆绽放属于你的光芒。" },
    reversed: { meaning: "可能变得自私或控制欲过强，热情变成了专横。", love: "在感情中可能过于强势或嫉妒心重。", career: "管理方式可能过于独断，需要更多倾听。", advice: "温暖他人的同时也要照顾好自己，不要让自信变成傲慢。" },
    image: "🔥"
  },
  {
    id: 35, name: "权杖国王", nameEn: "King of Wands", numeral: "K", suit: "wands",
    element: "火", nature: "positive",
    keywords: ["领导", "远见", "果断", "魄力"],
    upright: { meaning: "你拥有天生的领导力和非凡的远见。以果断的魄力和感染力带领众人朝着目标大步前进。", love: "在感情中展现成熟而有魄力的一面，你的自信让人安心和向往。", career: "天生的企业家和领导者，你的决策力和执行力将带来辉煌成就。", advice: "以远见和气魄引领方向，同时保持对他人的尊重和理解。" },
    reversed: { meaning: "领导力变成了专制，远见变成了固执。需要倾听不同声音。", love: "在感情中可能过于霸道或不善于表达温柔。", career: "管理风格可能引起团队不满，需要更多民主和包容。", advice: "真正的领导者懂得倾听和包容，而非一味强势。" },
    image: "🔥"
  },

  // ==================== 圣杯牌组 Cups (36-49) ====================
  {
    id: 36, name: "圣杯王牌", nameEn: "Ace of Cups", numeral: "A", suit: "cups",
    element: "水", nature: "positive",
    keywords: ["新感情", "直觉", "情感开始", "慈悲"],
    upright: { meaning: "一段全新的感情体验正在涌入你的生命。你的心正在被爱、喜悦和灵性所充满。", love: "新恋情的开始，或已有关系中情感的升华和更新。心灵深处的连接。", career: "对工作产生新的热情，或从事与创意、疗愈相关的工作。", advice: "打开你的心扉，接受生命中即将涌入的爱和美好。" },
    reversed: { meaning: "情感受阻，可能压抑自己的感受或拒绝接受爱。", love: "可能因过去的伤害而对爱情封闭内心。", career: "工作中缺乏情感投入，感到空虚和无意义。", advice: "允许自己去感受，脆弱并不是弱点而是连接的通道。" },
    image: "💧"
  },
  {
    id: 37, name: "圣杯二", nameEn: "Two of Cups", numeral: "2", suit: "cups",
    element: "水", nature: "positive",
    keywords: ["伙伴", "结合", "吸引", "相互尊重"],
    upright: { meaning: "两颗心灵的美妙连接。无论是爱情、友情还是合作，你正在与另一个灵魂建立深刻的纽带。", love: "真挚的两情相悦，灵魂伴侣级别的连接。感情中的相互理解和尊重。", career: "优秀的合作关系正在形成，彼此互补，携手共进。", advice: "珍惜与你产生共鸣的人，真诚的连接是生命中最珍贵的礼物。" },
    reversed: { meaning: "关系中出现裂痕或不平等，连接正在被削弱。", love: "感情中可能出现分歧或失衡，沟通出了问题。", career: "合作关系出现问题，双方目标不一致。", advice: "正视关系中的问题，主动沟通才能修复裂痕。" },
    image: "💧"
  },
  {
    id: 38, name: "圣杯三", nameEn: "Three of Cups", numeral: "3", suit: "cups",
    element: "水", nature: "positive",
    keywords: ["庆祝", "友谊", "社交", "欢聚"],
    upright: { meaning: "值得庆祝和欢聚的时刻！友情、社交和团体活动带给你满满的快乐和归属感。", love: "社交场合可能遇到心仪之人，或与朋友们一起享受快乐时光。", career: "团队合作融洽，项目成功值得庆祝，人际关系是你的财富。", advice: "与挚友分享喜悦，生命因分享而更加丰盛。" },
    reversed: { meaning: "社交过度或友情出现裂痕，可能感到孤立或被排斥。", love: "可能出现三角关系的困扰，或友情与爱情产生冲突。", career: "团队关系紧张，可能有八卦或小团体问题。", advice: "注意维护真诚的友谊，远离虚情假意的社交。" },
    image: "💧"
  },
  {
    id: 39, name: "圣杯四", nameEn: "Four of Cups", numeral: "4", suit: "cups",
    element: "水", nature: "challenging",
    keywords: ["冷漠", "倦怠", "内省", "忽视"],
    upright: { meaning: "你对现状感到厌倦和不满足，以至于忽略了身边已有的美好和新的机遇。", love: "对感情感到麻木或厌倦，可能忽视了伴侣的付出和关爱。", career: "工作失去热情，对新机会视而不见，陷入倦怠状态。", advice: "从冥想中醒来，睁开眼看看身边那些被你忽视的美好事物。" },
    reversed: { meaning: "正在走出倦怠状态，重新对生活燃起兴趣，愿意接受新机会。", love: "重新对感情产生热情，愿意给关系注入新活力。", career: "走出职业倦怠，准备接受新的挑战和机遇。", advice: "欢迎这份重新觉醒的热情，勇敢接受新的可能。" },
    image: "💧"
  },
  {
    id: 40, name: "圣杯五", nameEn: "Five of Cups", numeral: "5", suit: "cups",
    element: "水", nature: "challenging",
    keywords: ["失落", "悲伤", "遗憾", "聚焦损失"],
    upright: { meaning: "你正沉浸在失去和悲伤的情绪中，但别忘了——并非一切都已失去，身后还有未倒的杯子等待你回头发现。", love: "感情中的失望或失去让你难以释怀。允许自己悲伤，但不要迷失其中。", career: "项目的失败或损失让你沮丧，但还有可以挽回和珍惜的部分。", advice: "转过身来，你会发现还有希望和爱在等着你。悲伤终将过去。" },
    reversed: { meaning: "正在从悲伤中恢复，开始接受现实并向前看。", love: "从感情的伤痛中逐渐走出，愿意给自己和爱情新的机会。", career: "从挫折中汲取教训，准备重新出发。", advice: "你已经迈出了最难的一步——选择了继续前行。" },
    image: "💧"
  },
  {
    id: 41, name: "圣杯六", nameEn: "Six of Cups", numeral: "6", suit: "cups",
    element: "水", nature: "positive",
    keywords: ["回忆", "纯真", "重逢", "童年"],
    upright: { meaning: "美好的回忆正在温暖你的心。也许你会与旧友重逢，或者重新找回那份纯真和快乐。", love: "旧爱可能重新出现，或你在回忆中感悟到真爱的模样。", career: "过去的经历和技能在此刻发挥作用，老同事可能带来帮助。", advice: "珍惜美好的回忆，同时用那份纯真的心面对当下。" },
    reversed: { meaning: "过于沉溺于过去，无法活在当下。需要放下怀旧的执念。", love: "沉浸在旧情中无法自拔，影响了当下的关系发展。", career: "过于依赖过去的方法，需要与时俱进。", advice: "感恩过去，但不要被它束缚。最好的时光可以是现在。" },
    image: "💧"
  },
  {
    id: 42, name: "圣杯七", nameEn: "Seven of Cups", numeral: "7", suit: "cups",
    element: "水", nature: "neutral",
    keywords: ["幻想", "选择", "诱惑", "迷幻"],
    upright: { meaning: "眼前出现了太多选择和诱惑，有些是真实的机遇，有些只是美丽的幻象。你需要分辨真假。", love: "感情中可能面临多个选择或不切实际的幻想，需要脚踏实地。", career: "面前有太多方向，容易眼花缭乱。需要聚焦最务实的选项。", advice: "梦想美好，但脚踏实地才能实现。分清幻象和真实的机遇。" },
    reversed: { meaning: "从幻想中醒来，开始做出清晰务实的决定。", love: "不再追逐不切实际的浪漫幻想，开始面对真实的感情。", career: "确定了明确的方向，不再被各种可能性迷惑。", advice: "清醒和果断是你当前最需要的品质。" },
    image: "💧"
  },
  {
    id: 43, name: "圣杯八", nameEn: "Eight of Cups", numeral: "8", suit: "cups",
    element: "水", nature: "challenging",
    keywords: ["离开", "放弃", "寻找更深意义", "转身"],
    upright: { meaning: "你意识到眼前的一切已无法满足你的内心。是时候勇敢离开，去寻找更深层的人生意义了。", love: "可能需要离开一段已经无法给你满足感的关系，虽然痛苦但必要。", career: "对现有工作失去热情，内心渴望追寻更有意义的事业。", advice: "勇敢地放下不再滋养你灵魂的事物，更好的在前方等你。" },
    reversed: { meaning: "犹豫是否该离开，或害怕改变而选择留在原地。", love: "明知该离开却下不了决心，在痛苦中反复纠结。", career: "想换工作但缺乏勇气迈出那一步。", advice: "有时留下需要勇气，离开也一样。倾听内心最真实的声音。" },
    image: "💧"
  },
  {
    id: 44, name: "圣杯九", nameEn: "Nine of Cups", numeral: "9", suit: "cups",
    element: "水", nature: "positive",
    keywords: ["心想事成", "满足", "幸福", "愿望实现"],
    upright: { meaning: "这是「心想事成」之牌！你内心的愿望正在实现，物质和精神上都获得了极大的满足感。", love: "感情上的美好愿望正在成真，幸福满溢的甜蜜关系。", career: "事业上获得了渴望已久的成就和满足，一切如愿以偿。", advice: "尽情享受这份圆满的喜悦，你值得拥有这一切。" },
    reversed: { meaning: "表面的满足掩盖了内心的空虚，物质丰富但精神匮乏。", love: "感情看似美好但缺乏深层的满足感和灵魂连接。", career: "达成了目标却发现并不如预期那样快乐。", advice: "探索内心真正渴望的是什么，不要被表面的光鲜迷惑。" },
    image: "💧"
  },
  {
    id: 45, name: "圣杯十", nameEn: "Ten of Cups", numeral: "10", suit: "cups",
    element: "水", nature: "positive",
    keywords: ["圆满", "家庭幸福", "和谐", "天伦之乐"],
    upright: { meaning: "情感上的圆满和幸福！家庭和谐、爱意盈盈，这是塔罗中最幸福的牌之一。享受这份天伦之乐。", love: "感情达到完美和谐的状态，家庭幸福美满，爱的彩虹照耀你们。", career: "工作和生活达到完美平衡，事业有成且家庭幸福。", advice: "感恩生活中的每一份爱和温暖，幸福就在身边。" },
    reversed: { meaning: "家庭关系出现不和谐，理想中的幸福与现实有差距。", love: "感情或家庭中可能有隐藏的矛盾需要解决。", career: "工作与家庭的平衡被打破，需要重新调整。", advice: "完美的幸福需要每个人的努力和经营，主动修复裂痕。" },
    image: "💧"
  },
  {
    id: 46, name: "圣杯侍从", nameEn: "Page of Cups", numeral: "P", suit: "cups",
    element: "水", nature: "positive",
    keywords: ["感性", "创意", "直觉", "浪漫讯息"],
    upright: { meaning: "一个充满感性和创意的讯息正在向你走来。保持开放的心态，让直觉引领你发现意想不到的美好。", love: "甜蜜的示爱或浪漫的惊喜即将出现，或者你内心的浪漫情怀被唤醒。", career: "创意灵感涌现，适合从事艺术、写作或疗愈相关的工作。", advice: "用孩子般纯真的眼光看待世界，美好无处不在。" },
    reversed: { meaning: "情绪化或不够成熟，创意被阻塞，直觉被忽视。", love: "感情中可能表现得过于情绪化或不够成熟。", career: "创意枯竭或缺乏灵感，工作缺乏热情。", advice: "调整你的情绪，重新连接内在的感性和创造力。" },
    image: "💧"
  },
  {
    id: 47, name: "圣杯骑士", nameEn: "Knight of Cups", numeral: "Kn", suit: "cups",
    element: "水", nature: "positive",
    keywords: ["浪漫", "魅力", "追求", "理想主义"],
    upright: { meaning: "一个浪漫而充满魅力的能量正在进入你的生活。带着理想和深情去追求你心中的渴望。", love: "浪漫的追求者出现，或你将以骑士般的深情去赢得爱人的心。", career: "带着热情和理想投入工作，创意和灵感源源不断。", advice: "追随你的心，用浪漫和真诚去书写属于你的故事。" },
    reversed: { meaning: "过于沉溺在幻想中，不切实际的浪漫。情绪不稳定。", love: "对感情抱有不切实际的期待，或遇到不够真诚的追求者。", career: "空有理想缺乏行动，需要更务实的态度。", advice: "浪漫需要现实的基础，在追梦的同时也要脚踏实地。" },
    image: "💧"
  },
  {
    id: 48, name: "圣杯王后", nameEn: "Queen of Cups", numeral: "Q", suit: "cups",
    element: "水", nature: "positive",
    keywords: ["共情", "直觉", "温柔", "情感智慧"],
    upright: { meaning: "你拥有深邃的情感智慧和强大的共情能力。信任你的直觉，用温柔的力量去疗愈自己和他人。", love: "在感情中展现深沉的爱和理解，你的温柔是最强大的武器。", career: "适合从事需要同理心和直觉力的工作，如咨询、疗愈、艺术等。", advice: "信任你内心的声音，你的情感智慧是最珍贵的天赋。" },
    reversed: { meaning: "过度情绪化或为他人的情感所累，忽视了自我照顾。", love: "在感情中过度付出或被对方的情绪所左右。", career: "情绪影响了工作判断，需要更理性的态度。", advice: "照顾好自己的情感需求，你不需要为所有人的情绪负责。" },
    image: "💧"
  },
  {
    id: 49, name: "圣杯国王", nameEn: "King of Cups", numeral: "K", suit: "cups",
    element: "水", nature: "positive",
    keywords: ["情感成熟", "平静", "智慧", "慈悲"],
    upright: { meaning: "你展现了情感上的成熟和深沉的智慧。在暴风雨般的情感海洋中保持内心的平静，用慈悲引领一切。", love: "以成熟稳重的态度经营感情，给予伴侣安全感和深沉的爱。", career: "用情感智慧和冷静的判断力来领导团队，赢得众人尊敬。", advice: "驾驭你的情感而不是被情感驾驭，这就是真正的力量。" },
    reversed: { meaning: "情感被压抑或表现得冷漠，内心的波澜藏在平静的外表之下。", love: "在感情中过于理性或冷淡，缺乏真情流露。", career: "可能因为情感问题影响了工作表现和判断力。", advice: "允许自己表达真实的情感，脆弱并不会削弱你的力量。" },
    image: "💧"
  },

  // ==================== 宝剑牌组 Swords (50-63) ====================
  {
    id: 50, name: "宝剑王牌", nameEn: "Ace of Swords", numeral: "A", suit: "swords",
    element: "风", nature: "positive",
    keywords: ["清晰", "真相", "突破", "新思维"],
    upright: { meaning: "一把锐利的真理之剑劈开迷雾！你获得了前所未有的思维清晰度和洞察力，是做出决定的最佳时刻。", love: "对感情有了清晰的认知，真相浮出水面，帮你做出明智的选择。", career: "思维突破，新想法带来突破性的解决方案。", advice: "用清晰的头脑和锐利的洞察力去切开问题的核心。" },
    reversed: { meaning: "思维混乱，真相被扭曲或信息误导。", love: "感情中可能存在沟通不畅或信息不对称。", career: "思路不清晰，决策可能有误。", advice: "等到头脑清醒时再做重要决定，不要在混乱中仓促行动。" },
    image: "⚔"
  },
  {
    id: 51, name: "宝剑二", nameEn: "Two of Swords", numeral: "2", suit: "swords",
    element: "风", nature: "neutral",
    keywords: ["僵局", "抉择", "逃避", "内心冲突"],
    upright: { meaning: "你面临一个艰难的选择，内心充满矛盾。暂时的僵持是为了让你更清楚地看到答案。", love: "在两段感情或两种选择之间犹豫不决，无法做出取舍。", career: "面临重要的职业选择，两个方向各有利弊。", advice: "停止逃避，勇敢面对选择。有时候做出不完美的决定也比不做决定好。" },
    reversed: { meaning: "僵局被打破，被回避的真相终于浮出水面。", love: "感情中被搁置的问题终于需要面对和解决了。", career: "拖延已久的决定终于有了眉目。", advice: "既然真相已经浮现，勇敢地去面对和接受它。" },
    image: "⚔"
  },
  {
    id: 52, name: "宝剑三", nameEn: "Three of Swords", numeral: "3", suit: "swords",
    element: "风", nature: "challenging",
    keywords: ["心碎", "悲痛", "分离", "背叛"],
    upright: { meaning: "心灵正在经历痛苦的考验——可能是心碎、背叛或令人伤心的真相。允许自己悲伤，这是疗愈的第一步。", love: "感情中可能经历心碎、分手或第三者的伤害。请允许自己释放悲伤。", career: "工作中遭遇令人痛心的挫折或被信任的人背叛。", advice: "眼泪是灵魂的清洗剂。经历了这次痛苦，你会变得更加坚强和清醒。" },
    reversed: { meaning: "伤痛正在慢慢愈合，你开始从悲伤中走出来。", love: "感情的创伤正在被时间治愈，或你选择了原谅和释怀。", career: "从职场的打击中恢复，准备重新出发。", advice: "疗愈需要时间，对自己温柔一些，你已经在好起来了。" },
    image: "⚔"
  },
  {
    id: 53, name: "宝剑四", nameEn: "Four of Swords", numeral: "4", suit: "swords",
    element: "风", nature: "neutral",
    keywords: ["休息", "恢复", "冥想", "退隐"],
    upright: { meaning: "你的身心都需要深度的休息和恢复。暂时放下一切，给自己一段安静的疗愈时间。", love: "感情中需要一段冷静期，给彼此空间去思考和恢复。", career: "工作需要暂停，充分休息才能恢复战斗力。", advice: "休息不是懒惰，而是为了更好地出发。静养身心。" },
    reversed: { meaning: "休息结束，是时候重新振作投入战斗了。", love: "冷静期结束，准备重新面对感情中的问题。", career: "充电完毕，以饱满的状态重新投入工作。", advice: "你已经恢复了力量，是时候再次出发了。" },
    image: "⚔"
  },
  {
    id: 54, name: "宝剑五", nameEn: "Five of Swords", numeral: "5", suit: "swords",
    element: "风", nature: "challenging",
    keywords: ["冲突", "失败", "自私", "双输"],
    upright: { meaning: "一场没有赢家的冲突。即使你赢了争论，也可能失去了更重要的东西。是否值得？", love: "感情中的争吵可能造成双方都受伤，赢了道理却输了感情。", career: "职场中的争斗让人身心俱疲，谨慎选择你的战场。", advice: "有些战役不值得打。学会分辨何时该战斗、何时该放手。" },
    reversed: { meaning: "冲突过后的反思，意识到争斗的徒劳，渴望和解。", love: "争吵后的冷静反思，准备放下骄傲去修复关系。", career: "从职场冲突中退一步，开始寻求和解的方式。", advice: "承认错误需要勇气，和解的第一步从放下骄傲开始。" },
    image: "⚔"
  },
  {
    id: 55, name: "宝剑六", nameEn: "Six of Swords", numeral: "6", suit: "swords",
    element: "风", nature: "neutral",
    keywords: ["过渡", "离开", "疗愈之旅", "平静水域"],
    upright: { meaning: "你正在离开风暴，驶向更平静的水域。这是一个过渡期——虽然还有悲伤，但最困难的部分已经过去。", love: "从一段痛苦的感情中走出来，正在驶向更好的未来。", career: "离开不好的工作环境，新的、更好的机会在等待。", advice: "继续前行，每一步都在带你远离痛苦、走向疗愈。" },
    reversed: { meaning: "无法放下过去，或在旅途中遇到阻碍。", love: "难以从过去的感情创伤中走出，反复回到不健康的模式。", career: "想要改变但困难重重，过渡期比预想的更艰难。", advice: "即使进展缓慢，也不要回头。坚持前行，光明就在前方。" },
    image: "⚔"
  },
  {
    id: 56, name: "宝剑七", nameEn: "Seven of Swords", numeral: "7", suit: "swords",
    element: "风", nature: "challenging",
    keywords: ["欺骗", "策略", "逃避", "隐秘行动"],
    upright: { meaning: "有人可能在暗中行事——也许是你，也许是他人。谨防欺骗和不诚实，或审视你自己是否在逃避什么。", love: "感情中可能存在隐瞒或不诚实，需要警惕欺骗行为。", career: "职场中可能有人在暗中算计你，或有不透明的操作。", advice: "诚实是最佳策略。如果你在逃避什么，是时候面对它了。" },
    reversed: { meaning: "隐藏的真相正在被揭露，谎言难以维持。", love: "感情中的秘密即将曝光，诚实面对是唯一出路。", career: "不诚实的行为被发现，需要为后果负责。", advice: "与其等真相被揭穿，不如主动坦白。" },
    image: "⚔"
  },
  {
    id: 57, name: "宝剑八", nameEn: "Eight of Swords", numeral: "8", suit: "swords",
    element: "风", nature: "challenging",
    keywords: ["困境", "束缚", "无力感", "自我限制"],
    upright: { meaning: "你感到被困住了，但很多限制其实来自你的内心。那些束缚你的剑并没有真正绑住你——你随时可以选择离开。", love: "感觉在感情中进退两难、被困住。但你比想象中拥有更多选择。", career: "觉得自己被困在不好的工作中无法脱身。", advice: "改变视角，你会发现出路就在眼前。是你的思维在困住你自己。" },
    reversed: { meaning: "开始突破自我设限，找到了走出困境的路。", love: "从感情的困境中找到出口，重获自由和力量。", career: "突破思维枷锁，找到了新的解决方案。", advice: "你已经迈出了最重要的一步——认识到了真正的枷锁在哪里。" },
    image: "⚔"
  },
  {
    id: 58, name: "宝剑九", nameEn: "Nine of Swords", numeral: "9", suit: "swords",
    element: "风", nature: "challenging",
    keywords: ["焦虑", "噩梦", "恐惧", "过度忧虑"],
    upright: { meaning: "深夜的焦虑和恐惧笼罩着你。那些令你辗转难眠的忧虑，很多只是被恐惧放大的幻影。", love: "对感情过度焦虑和担忧，恐惧比实际问题更折磨人。", career: "工作压力造成严重焦虑和失眠，需要正视心理健康。", advice: "黎明前最黑暗。那些让你恐惧的事情，大多不会真正发生。寻求帮助和支持。" },
    reversed: { meaning: "焦虑开始缓解，你正在学会面对和管理内心的恐惧。", love: "感情中的焦虑正在消散，你开始用更积极的方式面对问题。", career: "工作压力减轻，心理状态正在好转。", advice: "你正在变得更强大，那些曾经让你恐惧的东西正在失去力量。" },
    image: "⚔"
  },
  {
    id: 59, name: "宝剑十", nameEn: "Ten of Swords", numeral: "10", suit: "swords",
    element: "风", nature: "challenging",
    keywords: ["终结", "最低谷", "痛苦的结局", "黎明"],
    upright: { meaning: "事情已经到了最低谷——但这也意味着最坏的已经过去了。结束了就不会更糟了。看，地平线上已露出了曙光。", love: "一段感情可能以痛苦的方式结束。但结束意味着全新开始的可能。", career: "经历职业上的重大挫败或彻底的结束。", advice: "这就是谷底了，从此以后只会向上。允许自己倒下，然后站起来。" },
    reversed: { meaning: "最糟糕的时期已经过去，正在缓慢地从谷底回升。", love: "感情的至暗时刻已过，疗愈和新的可能性正在萌芽。", career: "从职业的最低点开始复苏，一切都在慢慢好转。", advice: "你已经挺过了最难的时刻，现在每一天都会比昨天更好。" },
    image: "⚔"
  },
  {
    id: 60, name: "宝剑侍从", nameEn: "Page of Swords", numeral: "P", suit: "swords",
    element: "风", nature: "neutral",
    keywords: ["好奇", "警觉", "机敏", "新想法"],
    upright: { meaning: "以敏锐的头脑和旺盛的好奇心面对世界。保持警觉，新的信息和想法正在涌来。", love: "对感情保持理性和观察力，用头脑和心一起判断。", career: "充满新想法和学习热情，适合启动研究或学习新技能。", advice: "保持头脑敏锐和好奇心，但也要学会在发言前三思。" },
    reversed: { meaning: "思维混乱或言辞过于刻薄，好奇变成了八卦。", love: "在感情中可能言语伤人或过于挑剔。", career: "想法太多但缺乏深度，或因言辞不当得罪人。", advice: "磨练你的沟通技巧，让锐利的思维成为建设而非破坏的工具。" },
    image: "⚔"
  },
  {
    id: 61, name: "宝剑骑士", nameEn: "Knight of Swords", numeral: "Kn", suit: "swords",
    element: "风", nature: "neutral",
    keywords: ["果断", "直接", "冲锋", "理性"],
    upright: { meaning: "以风一般的速度和锐利的决断力向目标冲锋。你的思维快如闪电，行动果敢而直接。", love: "在感情中直来直去，追求效率和明确的态度。", career: "快速推进项目，以果断的执行力和锐利的分析力取胜。", advice: "果断是美德，但别忘了考虑他人的感受。快不一定就是好。" },
    reversed: { meaning: "过于冲动和鲁莽，言行不经思考就冲了出去。", love: "在感情中过于急躁或言辞尖锐，容易伤人。", career: "仓促决策导致失误，需要放慢脚步仔细思考。", advice: "冲劲十足但缺乏方向就是鲁莽。先想清楚，再行动。" },
    image: "⚔"
  },
  {
    id: 62, name: "宝剑王后", nameEn: "Queen of Swords", numeral: "Q", suit: "swords",
    element: "风", nature: "neutral",
    keywords: ["独立", "洞察", "坦率", "理性"],
    upright: { meaning: "你拥有穿透表象看到本质的能力。以独立、理性和坦率的态度面对一切，真相是你最好的朋友。", love: "在感情中保持独立和清醒的头脑，不会被甜言蜜语蒙蔽。", career: "以出色的分析能力和判断力在职场中脱颖而出。", advice: "用理性和同理心平衡你的判断，真相需要温柔地传达。" },
    reversed: { meaning: "过于冷酷或刻薄，理性变成了冷漠和苛责。", love: "在感情中过于挑剔或冷淡，把伴侣推得太远。", career: "过于严苛的态度让同事敬而远之。", advice: "锐利不等于冷酷。保持理性的同时也要温柔。" },
    image: "⚔"
  },
  {
    id: 63, name: "宝剑国王", nameEn: "King of Swords", numeral: "K", suit: "swords",
    element: "风", nature: "neutral",
    keywords: ["权威", "公正", "清明", "理性领袖"],
    upright: { meaning: "以清明的理性和公正的态度来判断和决策。你的智慧和权威来自于对真理不懈的追求。", love: "在感情中以成熟理性的方式处理问题，公平和诚实是基石。", career: "以卓越的分析和决策能力领导团队，令人信服的权威。", advice: "让理性和公正指引你的决策，但别忘了心的温度。" },
    reversed: { meaning: "理性变成了冷酷专制，权威变成了压迫。", love: "在感情中可能过于理性而缺乏温情，或表现得控制欲强。", career: "管理方式过于严厉或不公正，引起不满。", advice: "真正的智慧不仅在于头脑的锐利，更在于心灵的温暖。" },
    image: "⚔"
  },

  // ==================== 星币牌组 Pentacles (64-77) ====================
  {
    id: 64, name: "星币王牌", nameEn: "Ace of Pentacles", numeral: "A", suit: "pentacles",
    element: "土", nature: "positive",
    keywords: ["新财运", "机遇", "物质基础", "繁荣"],
    upright: { meaning: "一个实实在在的新机遇正在向你走来——可能是新工作、投资回报或意外之财。物质丰盛的种子已经种下。", love: "一段稳固踏实的新关系开始，或感情有了更稳定的物质基础。", career: "新的工作机会、加薪或投资良机出现。", advice: "紧紧抓住这个实实在在的好机会，用心经营它必会硕果累累。" },
    reversed: { meaning: "财务上的机遇被错过或计划失败，物质基础不够稳固。", love: "感情缺乏稳固的基础，可能因物质问题产生摩擦。", career: "工作机会流失或投资失利。", advice: "重新审视你的财务和物质计划，稳扎稳打才是正道。" },
    image: "⬟"
  },
  {
    id: 65, name: "星币二", nameEn: "Two of Pentacles", numeral: "2", suit: "pentacles",
    element: "土", nature: "neutral",
    keywords: ["平衡", "适应", "灵活", "兼顾"],
    upright: { meaning: "你正在巧妙地在多项任务或角色之间保持平衡。灵活应变的能力让你游刃有余。", love: "在感情和其他生活领域之间寻找平衡。需要灵活地分配时间和精力。", career: "身兼多职或管理多个项目，需要出色的时间管理能力。", advice: "保持灵活和适应性，但也要注意不要让自己超负荷。" },
    reversed: { meaning: "失去平衡，被太多事情压得喘不过气。", love: "感情和其他事务之间失衡，陪伴时间严重不足。", career: "工作超负荷，顾此失彼，效率下降。", advice: "是时候放下一些不重要的事，专注于真正重要的事物。" },
    image: "⬟"
  },
  {
    id: 66, name: "星币三", nameEn: "Three of Pentacles", numeral: "3", suit: "pentacles",
    element: "土", nature: "positive",
    keywords: ["合作", "技艺", "学习", "团队"],
    upright: { meaning: "团队合作带来出色的成果。你的专业技能获得认可，与他人合力将创造更大的价值。", love: "感情中注重共同建设和合作，一起为未来努力。", career: "团队协作顺畅，你的专业能力受到重视和认可。", advice: "一个人走得快，一群人走得远。珍惜合作带来的力量。" },
    reversed: { meaning: "团队合作出现问题，缺乏协调或专业技能不受重视。", love: "感情中缺乏合作精神，各做各的缺乏共同目标。", career: "团队效率低下，分工不明确或能力不被认可。", advice: "主动沟通，明确分工，好的合作需要每个人的努力。" },
    image: "⬟"
  },
  {
    id: 67, name: "星币四", nameEn: "Four of Pentacles", numeral: "4", suit: "pentacles",
    element: "土", nature: "challenging",
    keywords: ["保守", "控制", "安全感", "吝啬"],
    upright: { meaning: "你紧紧抓住所拥有的东西不放——可能是金钱、地位或安全感。但过度的守护反而让你失去更多。", love: "在感情中过于保守或控制欲强，害怕失去而紧紧抓着不放。", career: "过于保守不愿冒险，错失了成长和发展的机会。", advice: "适度的安全感是必要的，但别让恐惧把你变成囚徒。" },
    reversed: { meaning: "开始放松控制，愿意分享和冒险。", love: "在感情中变得更开放和大方，愿意给彼此更多自由。", career: "开始愿意尝试新方法，不再死守旧有模式。", advice: "放下执念，你会发现给予比紧握更能让你富足。" },
    image: "⬟"
  },
  {
    id: 68, name: "星币五", nameEn: "Five of Pentacles", numeral: "5", suit: "pentacles",
    element: "土", nature: "challenging",
    keywords: ["困难", "贫困", "孤立", "危机"],
    upright: { meaning: "你可能正在经历物质或精神上的困难时期。虽然现在寒冷而艰难，但帮助就在附近——只要你愿意寻找。", love: "感情中可能经历困难期，感到被孤立或不被支持。", career: "财务困难或失业的风险，物质上面临挑战。", advice: "不要让骄傲阻止你寻求帮助。困难是暂时的，互助会让你度过难关。" },
    reversed: { meaning: "困难时期正在结束，经济或健康状况开始好转。", love: "感情中的困难正在缓解，重新找到彼此的支持。", career: "财务状况开始改善，新的工作机会出现。", advice: "最糟糕的已经过去了。保持信心，继续前行。" },
    image: "⬟"
  },
  {
    id: 69, name: "星币六", nameEn: "Six of Pentacles", numeral: "6", suit: "pentacles",
    element: "土", nature: "positive",
    keywords: ["慷慨", "施与受", "平衡", "善行"],
    upright: { meaning: "给予和接受之间的美妙平衡。你可能正在慷慨地帮助他人，或者接受来自他人的善意和帮助。", love: "感情中慷慨地付出和接受爱。关系中的给予是平衡的。", career: "获得加薪、奖金或来自贵人的帮助。", advice: "当你有能力时慷慨给予，当你需要时坦然接受。这就是丰盛的循环。" },
    reversed: { meaning: "给予和接受失衡，可能存在附带条件的帮助。", love: "感情中的付出不对等，一方觉得被利用。", career: "帮助他人但得不到回报，或受到有条件的施舍。", advice: "确保你的慷慨是真诚的，也确保你接受的帮助没有隐性代价。" },
    image: "⬟"
  },
  {
    id: 70, name: "星币七", nameEn: "Seven of Pentacles", numeral: "7", suit: "pentacles",
    element: "土", nature: "neutral",
    keywords: ["等待", "评估", "耐心", "长期投资"],
    upright: { meaning: "你辛勤种下的种子正在生长，但还没到收获的时候。耐心等待，审视你的投入是否走在正确的方向。", love: "感情的发展需要时间和耐心。现在是评估关系走向的好时机。", career: "长期投入的项目开始显现成效，但还需要继续坚持。", advice: "耐心是一种力量。好好审视你的方向，然后继续坚持。" },
    reversed: { meaning: "付出很多但回报不如预期，开始质疑这条路是否值得。", love: "对感情的未来感到焦虑，付出太多但看不到回报。", career: "对职业发展感到迷茫，投入与产出不成正比。", advice: "如果方向错了，及时调整比盲目坚持更有智慧。" },
    image: "⬟"
  },
  {
    id: 71, name: "星币八", nameEn: "Eight of Pentacles", numeral: "8", suit: "pentacles",
    element: "土", nature: "positive",
    keywords: ["精进", "工匠精神", "勤奋", "技能提升"],
    upright: { meaning: "专注于磨练技艺，精益求精。你的勤奋和对品质的追求将为你赢得丰厚的回报。", love: "用心经营感情，像工匠一样认真雕琢你们的关系。", career: "全心投入工作，技能日益精湛，专业能力获得提升。", advice: "在你热爱的事情上精益求精，匠心精神终将得到回报。" },
    reversed: { meaning: "做事敷衍了事，缺乏对品质的追求和耐心。", love: "对感情不够用心，缺乏投入和经营。", career: "工作态度马虎，缺乏进取心和精益求精的精神。", advice: "不要走捷径。真正的价值来自认真和坚持。" },
    image: "⬟"
  },
  {
    id: 72, name: "星币九", nameEn: "Nine of Pentacles", numeral: "9", suit: "pentacles",
    element: "土", nature: "positive",
    keywords: ["富足", "独立", "自律", "享受成果"],
    upright: { meaning: "通过自律和努力，你已经创造了令人羡慕的富足生活。独立而优雅，尽情享受你应得的丰盛。", love: "在感情中保持独立和自信，你不需要依赖他人也能活得精彩。", career: "事业上的成功让你过上了富足的生活，这是你应得的。", advice: "享受你辛苦赚来的成果，你值得拥有生活中的美好。" },
    reversed: { meaning: "过于追求物质享受或经济独立导致孤独，或财务受损。", love: "可能因为过于独立而让人觉得难以接近。", career: "财务上出现问题，或过于依赖物质来定义成功。", advice: "物质富足只是一部分，精神和情感的富足同样重要。" },
    image: "⬟"
  },
  {
    id: 73, name: "星币十", nameEn: "Ten of Pentacles", numeral: "10", suit: "pentacles",
    element: "土", nature: "positive",
    keywords: ["财富传承", "家族", "长久繁荣", "遗产"],
    upright: { meaning: "物质和精神上的长久繁荣。家族的财富和智慧正在传承，你正在建立可以泽被后代的根基。", love: "稳固而长久的家庭关系，代际之间的爱与传承。", career: "事业已经建立了坚实的基础，长远的财务安全有保障。", advice: "着眼长远，你现在建立的一切都将成为留给未来的宝贵遗产。" },
    reversed: { meaning: "家族纷争或财产问题，长期建立的基础可能受到动摇。", love: "家庭关系中可能有利益纷争或代际冲突。", career: "财务上遇到长期性的挑战，需要重新规划。", advice: "家和万事兴。解决家庭中的矛盾比追求更多的财富更重要。" },
    image: "⬟"
  },
  {
    id: 74, name: "星币侍从", nameEn: "Page of Pentacles", numeral: "P", suit: "pentacles",
    element: "土", nature: "positive",
    keywords: ["学习", "务实", "新技能", "踏实"],
    upright: { meaning: "怀着踏实务实的态度学习新技能或开始新的物质层面的计划。脚踏实地，一步步来。", love: "以认真踏实的态度对待感情，虽然不够浪漫但很有诚意。", career: "学习新技能、进修或开始实习，务实地为未来打基础。", advice: "每一个大师都曾是初学者。保持谦逊和勤奋，持续进步。" },
    reversed: { meaning: "学习缺乏持续性，好高骛远或缺乏实际行动。", love: "在感情中过于现实或物质化，缺乏真情实感。", career: "学习新事物时缺乏耐心和毅力，容易放弃。", advice: "空想不如行动。把你的计划落实到每一天的具体行动中。" },
    image: "⬟"
  },
  {
    id: 75, name: "星币骑士", nameEn: "Knight of Pentacles", numeral: "Kn", suit: "pentacles",
    element: "土", nature: "neutral",
    keywords: ["勤恳", "可靠", "稳步前进", "负责"],
    upright: { meaning: "以最踏实、最可靠的方式稳步推进。虽然速度不快，但你走的每一步都扎实而有效。", love: "一个可靠而忠诚的伴侣或追求者。虽然不够浪漫但绝对值得信赖。", career: "以勤恳负责的态度完成每一项工作，用可靠赢得信任。", advice: "不必追求速度，稳扎稳打才能走得最远。你的坚持终会被看到。" },
    reversed: { meaning: "过于固执保守或懒惰拖延，进展缓慢得令人沮丧。", love: "在感情中过于沉闷或缺乏激情，让人感到无趣。", career: "效率低下或过于墨守成规，缺乏进取心。", advice: "在稳重中加入一些灵活和创新，才不会被时代落下。" },
    image: "⬟"
  },
  {
    id: 76, name: "星币王后", nameEn: "Queen of Pentacles", numeral: "Q", suit: "pentacles",
    element: "土", nature: "positive",
    keywords: ["务实", "滋养", "富足", "居家"],
    upright: { meaning: "你是一位出色的经营者和照顾者，用务实的智慧创造温暖富足的生活。物质和心灵都被你照顾得很好。", love: "在感情中给予温暖踏实的爱，善于经营幸福的家庭生活。", career: "以出色的实干能力和经营智慧取得成功，工作与生活兼顾。", advice: "你有能力创造美好的生活。继续用你的务实和温暖去滋养一切。" },
    reversed: { meaning: "过于操劳或忽视了自我照顾，物质主义倾向加重。", love: "在感情中过于操心或用物质取代了真情的表达。", career: "工作与生活失衡，过于忙碌忽视了健康和家庭。", advice: "照顾好别人之前，先照顾好自己。你的身心需要休息。" },
    image: "⬟"
  },
  {
    id: 77, name: "星币国王", nameEn: "King of Pentacles", numeral: "K", suit: "pentacles",
    element: "土", nature: "positive",
    keywords: ["财富", "经验", "稳健", "成功"],
    upright: { meaning: "你已经建立了稳固的物质基础和成功的事业。以丰富的经验和稳健的判断力继续守护和增长你的财富。", love: "以成熟稳重的方式经营感情，给伴侣安全感和稳定的生活。", career: "事业有成，财务自由。你的商业头脑和务实精神带来了丰厚回报。", advice: "智慧地管理你的财富和资源，你的经验是最宝贵的资产。" },
    reversed: { meaning: "过于贪婪或固执保守，可能因为财务问题而焦虑。", love: "在感情中过于看重物质条件或用金钱衡量爱。", career: "可能因为贪婪或保守而做出错误的商业决策。", advice: "财富是工具而非目的。不要让对金钱的执着蒙蔽了你的心。" },
    image: "⬟"
  }
];

export const SPREAD_TYPES = {
  single: {
    name: "单牌占卜",
    count: 1,
    positions: ["指引"],
    description: "抽取一张牌，获得今日的指引和启示"
  },
  three: {
    name: "三牌阵",
    count: 3,
    positions: ["过去", "现在", "未来"],
    description: "揭示过去的影响、当前的状况和未来的走向"
  },
  love: {
    name: "爱情占卜",
    count: 3,
    positions: ["你的感情", "对方心意", "关系走向"],
    description: "探索你的感情世界，了解双方的心意和关系的发展"
  }
};
