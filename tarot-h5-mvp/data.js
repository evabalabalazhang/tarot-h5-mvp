// Data layer for the Tarot Learning App.
// The deck is intentionally explicit: 78 cards, one normalized schema.

const lessons = [
  {
    "day": 1,
    "type": "theory",
    "title": "塔罗是什么",
    "minutes": 25,
    "goal": "知道塔罗不是死背牌义，而是一套帮助你观察问题的象征语言。",
    "intro": "今天不用记任何复杂牌义。你只需要先知道：塔罗可以帮人看清情绪、处境、选择和行动方向。它不是替你做决定的命令，而是一面帮助你整理问题的镜子。",
    "points": [
      "维特塔罗适合小白入门，因为画面信息清楚，资料体系成熟。",
      "学习塔罗的第一步不是背答案，而是学会看图、提问和联想。",
      "每次解读都要回到现实行动：我现在能做什么？"
    ],
    "exerciseCards": [
      "fool"
    ],
    "quote": "塔罗不是替你决定未来，而是帮助你观察现实。",
    "observe": "观察下面这张案例牌，不查牌义，只写下你看到的 3 个画面细节。",
    "practice": "把这张牌想象成一个人：他现在在哪里？他的心情如何？他接下来可能想做什么？",
    "blocks": [
      {
        "type": "knowledge",
        "title": "知识点 1",
        "text": "塔罗更像一套图像语言。你先学会观察画面，再慢慢理解牌义。"
      },
      {
        "type": "question",
        "text": "如果一张牌让你感到轻松或紧张，这种第一感觉也可以成为观察的一部分。"
      },
      {
        "type": "knowledge",
        "title": "知识点 2",
        "text": "初学阶段不用追求神准。今天的目标只是学会看见细节。"
      }
    ],
    "observationExercise": {
      "type": "open",
      "cards": [
        "fool"
      ],
      "prompt": "观察愚人牌，写下你注意到的 3 个画面细节。",
      "reference": [
        "人物站在悬崖边，像是即将出发。",
        "他抬头看向远方，画面有轻松和冒险感。",
        "小狗、包袱和白花都暗示天真、提醒和新的开始。"
      ]
    },
    "practiceExercise": {
      "type": "open",
      "prompt": "把愚人想象成一个人：他现在可能在经历什么？",
      "reference": [
        "他可能刚准备开始一件新事，还没有太多经验。",
        "他有好奇和自由，也可能还没有意识到风险。"
      ]
    }
  },
  {
    "day": 2,
    "type": "theory",
    "title": "维特塔罗的结构",
    "minutes": 24,
    "goal": "认识一副标准维特塔罗的组成：22 张大牌和 56 张小牌。",
    "intro": "78 张牌听起来很多，但它不是一团乱麻。你可以先把它看成两层：大牌讲人生主题，小牌讲日常事件。",
    "points": [
      "大阿尔卡那有 22 张，像人生阶段、重大课题和深层转变。",
      "小阿尔卡那有 56 张，像工作、关系、情绪、金钱这些日常状态。",
      "初学时先认结构，再学单张牌，会轻松很多。"
    ],
    "exerciseCards": [
      "fool",
      "swords5",
      "cups3"
    ],
    "quote": "先看结构，再学单张牌，78 张牌会变得有秩序。",
    "observe": "观察下面 3 张案例牌，先找出哪张属于大阿尔卡那，哪些属于小阿尔卡那。",
    "practice": "用自己的话写一句：大牌更像什么？小牌更像什么？",
    "blocks": [
      {
        "type": "knowledge",
        "title": "知识点 1",
        "text": "一副维特塔罗有 78 张牌。"
      },
      {
        "type": "question",
        "text": "先记住两层结构：22 张大阿尔卡那，56 张小阿尔卡那。"
      },
      {
        "type": "knowledge",
        "title": "知识点 2",
        "text": "大牌更像人生主题，小牌更像每天会遇到的具体状态。"
      }
    ],
    "observationExercise": {
      "type": "recognition",
      "cards": [
        "fool",
        "swords5",
        "cups3"
      ],
      "prompt": "下面哪张牌属于大阿尔卡那？",
      "options": [
        {
          "value": "fool",
          "label": "愚人"
        },
        {
          "value": "swords5",
          "label": "宝剑五"
        },
        {
          "value": "cups3",
          "label": "圣杯三"
        }
      ],
      "correct": [
        "fool"
      ],
      "explanation": "愚人属于大阿尔卡那；宝剑五和圣杯三属于小阿尔卡那。"
    },
    "practiceExercise": {
      "type": "open",
      "prompt": "用自己的话写一句：大牌和小牌有什么区别？",
      "reference": [
        "大牌像人生主题，小牌像具体事件。",
        "大牌看深层课题，小牌看日常表现。"
      ]
    }
  },
  {
    "day": 3,
    "type": "theory",
    "title": "大牌和小牌怎么区分",
    "minutes": 22,
    "goal": "理解大牌代表主题，小牌代表具体表现。",
    "intro": "同一个问题里，如果抽到很多大牌，通常说明这件事对你影响较深。如果多数是小牌，往往更偏向具体事务和短期状态。",
    "points": [
      "大牌问的是：这件事背后的功课是什么？",
      "小牌问的是：这件事现在具体发生了什么？",
      "解读时先看有没有大牌，再看小牌怎么补充细节。"
    ],
    "exerciseCards": [
      "magician",
      "pentacles8",
      "cups3"
    ],
    "quote": "大牌看主题，小牌看日常细节。",
    "observe": "观察下面 3 张案例牌，只判断它们是大牌还是小牌，不急着解读。",
    "practice": "如果 3 张里有 2 张大牌，你觉得这代表问题偏轻还是偏重要？为什么？",
    "blocks": [
      {
        "type": "knowledge",
        "title": "知识点 1",
        "text": "看见一组牌时，可以先判断：这组牌里大牌多不多。"
      },
      {
        "type": "question",
        "text": "大牌越多，通常代表这个问题越像一个重要主题或阶段。"
      },
      {
        "type": "knowledge",
        "title": "知识点 2",
        "text": "小牌负责补充细节，比如情绪、行动、冲突、金钱和现实情况。"
      }
    ],
    "observationExercise": {
      "type": "recognition",
      "multiple": true,
      "cards": [
        "magician",
        "pentacles8",
        "cups3"
      ],
      "prompt": "下面哪些牌属于小阿尔卡那？可多选。",
      "options": [
        {
          "value": "magician",
          "label": "魔术师"
        },
        {
          "value": "pentacles8",
          "label": "星币八"
        },
        {
          "value": "cups3",
          "label": "圣杯三"
        }
      ],
      "correct": [
        "pentacles8",
        "cups3"
      ],
      "explanation": "星币八和圣杯三属于小阿尔卡那；魔术师属于大阿尔卡那。"
    },
    "practiceExercise": {
      "type": "open",
      "prompt": "如果三张牌里有两张大牌，你会怎样理解这个问题的重要性？",
      "reference": [
        "这可能说明问题背后有更大的主题。",
        "它不只是今天的小事，可能和选择、成长或阶段变化有关。"
      ]
    }
  },
  {
    "day": 4,
    "type": "theory",
    "title": "四元素入门",
    "minutes": 26,
    "goal": "记住小牌四组的基本方向。",
    "intro": "小牌有四组：权杖、圣杯、宝剑、星币。它们分别对应行动、情感、思考和现实。",
    "points": [
      "权杖：行动、热情、事业、冲劲。",
      "圣杯：感情、关系、情绪、内在感受。",
      "宝剑：思考、沟通、冲突、判断。",
      "星币：金钱、工作、身体、现实资源。"
    ],
    "exerciseCards": [
      "wands1",
      "cups3",
      "swords5",
      "pentacles8"
    ],
    "quote": "四元素是小牌的地图：行动、情感、思考、现实。",
    "observe": "观察下面 4 张案例牌，感受哪一组最热烈，哪一组最理性。",
    "practice": "看到一个问题时，先判断它更像哪种元素：行动、情绪、思考还是现实。",
    "blocks": [
      {
        "type": "knowledge",
        "title": "知识点 1",
        "text": "小牌分为四组：权杖、圣杯、宝剑、星币。"
      },
      {
        "type": "question",
        "text": "四组可以先记成四个词：行动、情感、思考、现实。"
      },
      {
        "type": "knowledge",
        "title": "知识点 2",
        "text": "先认元素，再学数字牌，牌义会更容易连接起来。"
      }
    ],
    "observationExercise": {
      "type": "recognition",
      "cards": [
        "wands1",
        "cups3",
        "swords5",
        "pentacles8"
      ],
      "prompt": "哪张牌属于宝剑牌组？",
      "options": [
        {
          "value": "wands1",
          "label": "权杖一"
        },
        {
          "value": "cups3",
          "label": "圣杯三"
        },
        {
          "value": "swords5",
          "label": "宝剑五"
        },
        {
          "value": "pentacles8",
          "label": "星币八"
        }
      ],
      "correct": [
        "swords5"
      ],
      "explanation": "宝剑五属于宝剑牌组，宝剑通常对应思考、沟通、冲突和判断。"
    },
    "practiceExercise": {
      "type": "open",
      "prompt": "看到一个问题时，先判断它更像哪种元素：行动、情绪、思考还是现实？",
      "reference": [
        "事业推进更像权杖。",
        "关系感受更像圣杯。",
        "沟通冲突更像宝剑。",
        "金钱工作更像星币。"
      ]
    }
  },
  {
    "day": 5,
    "type": "theory",
    "title": "正位和逆位",
    "minutes": 23,
    "goal": "理解逆位不是简单的坏牌。",
    "intro": "正位通常表示能量比较顺畅地表达。逆位可能表示这股能量被压住了、用过头了、还不成熟，或者正在内在发生。",
    "points": [
      "小白前期可以先学正位，减少压力。",
      "逆位可以理解为阻塞、过度、不足或内在化。",
      "不要把逆位直接等同于坏事。"
    ],
    "exerciseCards": [
      "tower"
    ],
    "quote": "逆位不是坏事，它常常是在说能量卡住了。",
    "observe": "观察下面这张案例牌，想象它正放和倒放时，给你的感觉有什么不同。",
    "practice": "选一个关键词，写出它顺畅表达和受阻表达分别是什么样。",
    "blocks": [
      {
        "type": "knowledge",
        "title": "知识点 1",
        "text": "逆位不是简单的坏牌。"
      },
      {
        "type": "question",
        "text": "你可以先把逆位理解成：能量受阻、过度、不足，或转向内在。"
      },
      {
        "type": "knowledge",
        "title": "知识点 2",
        "text": "小白初期可以先学正位，再慢慢加入逆位，不需要一次学完。"
      }
    ],
    "observationExercise": {
      "type": "open",
      "cards": [
        "tower"
      ],
      "prompt": "观察高塔牌。它让你感觉到突然、紧张，还是释放？写下你的直觉。",
      "reference": [
        "闪电击中高塔，说明旧结构突然被打破。",
        "人物坠落，画面有失控和震动。",
        "它也可能代表真相出现后，旧东西终于不能再硬撑。"
      ]
    },
    "practiceExercise": {
      "type": "open",
      "prompt": "选一个关键词，写出它顺畅表达和受阻表达分别是什么样。",
      "reference": [
        "行动顺畅是开始推进；行动受阻可能是拖延或冲动。",
        "情绪顺畅是能表达；情绪受阻可能是压抑或泛滥。"
      ]
    }
  },
  {
    "day": 6,
    "type": "theory",
    "title": "如何提出好问题",
    "minutes": 24,
    "goal": "学会问能带来行动方向的问题。",
    "intro": "塔罗问题问得越好，解读越有帮助。小白最容易问绝对答案，但更好的问题是帮助自己看清处境和选择。",
    "points": [
      "少问：他到底爱不爱我？多问：我需要看清这段关系中的什么？",
      "少问：我一定会成功吗？多问：我现在该怎样提高成功概率？",
      "好问题通常是开放式、和自己有关、能落到行动上。"
    ],
    "exerciseCards": [
      "priestess"
    ],
    "quote": "好的问题，会把注意力带回你能看见和能行动的地方。",
    "observe": "写下你最近想问的一件事。",
    "practice": "把它改写成一个开放式问题。",
    "blocks": [
      {
        "type": "knowledge",
        "title": "知识点 1",
        "text": "好问题会帮助你看清处境，而不是把决定完全交给牌。"
      },
      {
        "type": "question",
        "text": "少问“会不会”，多问“我可以如何”。"
      },
      {
        "type": "knowledge",
        "title": "知识点 2",
        "text": "开放式问题更适合学习塔罗，因为它能带来行动方向。"
      }
    ],
    "observationExercise": {
      "type": "open",
      "cards": [
        "priestess"
      ],
      "prompt": "观察女祭司牌。她像是在回答，还是在等待你安静下来？写下你的感觉。",
      "reference": [
        "女祭司坐着不动，像是在守着隐藏信息。",
        "她提醒人先观察和倾听直觉。"
      ]
    },
    "practiceExercise": {
      "type": "recognition",
      "prompt": "下面哪个问题更适合塔罗学习？",
      "options": [
        {
          "value": "closed",
          "label": "他到底会不会爱我？"
        },
        {
          "value": "open",
          "label": "我需要看清这段关系中的什么？"
        }
      ],
      "correct": [
        "open"
      ],
      "explanation": "第二个问题更好，因为它开放、和自己有关，也更容易得到行动建议。"
    }
  },
  {
    "day": 7,
    "type": "theory",
    "title": "第一次三张牌练习",
    "minutes": 30,
    "goal": "完成第一次简单牌阵：现状、阻碍、建议。",
    "intro": "今天你会用最基础的三张牌，把一个问题拆成三个角度。不要追求神准，先练习把牌义和现实问题连起来。",
    "points": [
      "第一张：现状，说明事情现在的状态。",
      "第二张：阻碍，说明卡住你的地方。",
      "第三张：建议，说明你可以尝试的行动方向。"
    ],
    "exerciseCards": [
      "fool",
      "swords5",
      "cups3"
    ],
    "quote": "三张牌不是三个答案，而是一个问题的三个角度。",
    "observe": "问题示例：我接下来如何更好地学习塔罗？先观察下面 3 张案例牌。",
    "practice": "按现状、阻碍、建议三个位置，每张写一句自己的理解。",
    "blocks": [
      {
        "type": "knowledge",
        "title": "知识点 1",
        "text": "三张牌牌阵可以把一个问题拆成三个角度。"
      },
      {
        "type": "question",
        "text": "最适合小白的结构是：现状、阻碍、建议。"
      },
      {
        "type": "knowledge",
        "title": "知识点 2",
        "text": "先每张牌写一句，再把三句话连成一个故事。"
      }
    ],
    "observationExercise": {
      "type": "open",
      "cards": [
        "fool",
        "swords5",
        "cups3"
      ],
      "prompt": "观察这组三张案例牌：愚人、宝剑五、圣杯三。写下它们给你的整体感觉。",
      "reference": [
        "愚人像开始学习的新手。",
        "宝剑五像学习中会遇到挫败或自我怀疑。",
        "圣杯三像通过朋友、社群或支持系统获得鼓励。"
      ]
    },
    "practiceExercise": {
      "type": "open",
      "prompt": "按现状、阻碍、建议三个位置，每张写一句自己的理解。",
      "reference": [
        "现状：我正在像愚人一样开始。",
        "阻碍：我可能会因为记不住而挫败。",
        "建议：找支持、分享和持续练习。"
      ]
    }
  }
];

const cards = [
  {
    "id": "fool",
    "name": "愚人",
    "englishName": "The Fool",
    "arcana": "major",
    "suit": "major",
    "number": "0",
    "keywords": [
      "开始",
      "冒险",
      "自由",
      "未知"
    ],
    "uprightMeaning": "新的开始、带着好奇出发、愿意尝试，但还没有完整经验。",
    "reversedMeaning": "鲁莽、准备不足、逃避现实，或因为害怕而不敢开始。",
    "loveMeaning": "感情中的新鲜感，也可能是不够稳定。",
    "careerMeaning": "新项目、新方向、转行念头，适合探索。",
    "moneyMeaning": "对金钱计划不够成熟，需要避免冲动消费。",
    "growthMeaning": "允许自己成为新手，先迈出第一步。",
    "memoryTip": "愚人不是傻，而是还没被经验限制的开始。",
    "image": {
      "kind": "rws",
      "src": "https://commons.wikimedia.org/wiki/Special:FilePath/RWS_Tarot_00_Fool.jpg?width=360",
      "alt": "The Fool Rider-Waite-Smith card"
    }
  },
  {
    "id": "magician",
    "name": "魔术师",
    "englishName": "The Magician",
    "arcana": "major",
    "suit": "major",
    "number": "I",
    "keywords": [
      "行动",
      "资源",
      "显化",
      "主动"
    ],
    "uprightMeaning": "你已经拥有一些资源，关键是主动整合并开始行动。",
    "reversedMeaning": "能力没有用出来、说多做少，或存在操控和虚张声势。",
    "loveMeaning": "主动表达、制造连接，也提醒看清对方是否真诚。",
    "careerMeaning": "适合启动计划、展示能力、争取机会。",
    "moneyMeaning": "通过技能和资源创造收益。",
    "growthMeaning": "把想法变成行动，不要只停留在脑内。",
    "memoryTip": "魔术师的重点是：东西都在桌上，现在该动手了。",
    "image": {
      "kind": "rws",
      "src": "https://commons.wikimedia.org/wiki/Special:FilePath/RWS_Tarot_01_Magician.jpg?width=360",
      "alt": "The Magician Rider-Waite-Smith card"
    }
  },
  {
    "id": "priestess",
    "name": "女祭司",
    "englishName": "The High Priestess",
    "arcana": "major",
    "suit": "major",
    "number": "II",
    "keywords": [
      "直觉",
      "隐藏",
      "等待",
      "内在"
    ],
    "uprightMeaning": "事情还有未显露的信息，需要安静观察，相信直觉。",
    "reversedMeaning": "忽视直觉、秘密浮现、情绪被压抑，或信息不透明。",
    "loveMeaning": "暧昧、沉默、还没有说出口的感受。",
    "careerMeaning": "适合研究、观察、收集信息，不宜急着表态。",
    "moneyMeaning": "先看清细节，再做决定。",
    "growthMeaning": "向内听，别急着找外界答案。",
    "memoryTip": "女祭司提醒你：有些答案还在水面下。",
    "image": {
      "kind": "rws",
      "src": "https://commons.wikimedia.org/wiki/Special:FilePath/RWS_Tarot_02_High_Priestess.jpg?width=360",
      "alt": "The High Priestess Rider-Waite-Smith card"
    }
  },
  {
    "id": "empress",
    "name": "皇后",
    "englishName": "The Empress",
    "arcana": "major",
    "suit": "major",
    "number": "III",
    "keywords": [
      "滋养",
      "丰盛",
      "创造",
      "接纳"
    ],
    "uprightMeaning": "丰盛、照顾、创造力、关系中的温暖和支持。",
    "reversedMeaning": "过度付出、自我忽视、依赖舒适区，或创造力受阻。",
    "loveMeaning": "温柔、亲密、被照顾，也可能需要边界。",
    "careerMeaning": "创作、审美、培养项目，适合慢慢长出来。",
    "moneyMeaning": "资源感增强，但要避免只为舒适而消费。",
    "growthMeaning": "像照顾植物一样照顾自己的成长。",
    "memoryTip": "皇后不是催你快，而是让你把东西养起来。",
    "image": {
      "kind": "rws",
      "src": "https://commons.wikimedia.org/wiki/Special:FilePath/RWS_Tarot_03_Empress.jpg?width=360",
      "alt": "The Empress Rider-Waite-Smith card"
    }
  },
  {
    "id": "emperor",
    "name": "皇帝",
    "englishName": "The Emperor",
    "arcana": "major",
    "suit": "major",
    "number": "IV",
    "keywords": [
      "秩序",
      "责任",
      "掌控",
      "规则"
    ],
    "uprightMeaning": "建立秩序、承担责任、用清晰边界稳定局面。",
    "reversedMeaning": "控制欲、僵化、逃避责任，或权威关系失衡。",
    "loveMeaning": "需要稳定承诺，也要避免只讲规则不讲感受。",
    "careerMeaning": "适合制定计划、管理团队、明确职责。",
    "moneyMeaning": "用纪律管理资源，避免过度保守。",
    "growthMeaning": "先搭结构，再谈自由。",
    "memoryTip": "皇帝提醒你：稳定来自清楚的边界。",
    "image": {
      "kind": "rws",
      "src": "https://commons.wikimedia.org/wiki/Special:FilePath/RWS_Tarot_04_Emperor.jpg?width=360",
      "alt": "The Emperor Rider-Waite-Smith card"
    }
  },
  {
    "id": "hierophant",
    "name": "教皇",
    "englishName": "The Hierophant",
    "arcana": "major",
    "suit": "major",
    "number": "V",
    "keywords": [
      "学习",
      "传统",
      "信念",
      "指导"
    ],
    "uprightMeaning": "向成熟体系学习，接受指导，遵循规则和价值观。",
    "reversedMeaning": "盲从、教条、抗拒传统，或需要走出旧框架。",
    "loveMeaning": "关系中重视承诺、价值观和社会认可。",
    "careerMeaning": "适合培训、考试、进入组织或找导师。",
    "moneyMeaning": "按规则处理金钱，不宜投机。",
    "growthMeaning": "先理解规则，再决定是否突破。",
    "memoryTip": "教皇像一位老师：先把基础讲清楚。",
    "image": {
      "kind": "rws",
      "src": "https://commons.wikimedia.org/wiki/Special:FilePath/RWS_Tarot_05_Hierophant.jpg?width=360",
      "alt": "The Hierophant Rider-Waite-Smith card"
    }
  },
  {
    "id": "lovers",
    "name": "恋人",
    "englishName": "The Lovers",
    "arcana": "major",
    "suit": "major",
    "number": "VI",
    "keywords": [
      "选择",
      "关系",
      "吸引",
      "价值观"
    ],
    "uprightMeaning": "重要选择、亲密连接、价值观对齐。",
    "reversedMeaning": "逃避选择、关系不平衡、价值冲突。",
    "loveMeaning": "强吸引和亲密感，也需要诚实选择。",
    "careerMeaning": "合作机会出现，关键是价值观是否一致。",
    "moneyMeaning": "金钱决定要符合长期价值，而不只看短期诱惑。",
    "growthMeaning": "选择之前先问：这符合真正的我吗？",
    "memoryTip": "恋人不只讲爱情，更讲选择。",
    "image": {
      "kind": "rws",
      "src": "https://commons.wikimedia.org/wiki/Special:FilePath/RWS_Tarot_06_Lovers.jpg?width=360",
      "alt": "The Lovers Rider-Waite-Smith card"
    }
  },
  {
    "id": "chariot",
    "name": "战车",
    "englishName": "The Chariot",
    "arcana": "major",
    "suit": "major",
    "number": "VII",
    "keywords": [
      "意志",
      "推进",
      "胜利",
      "控制"
    ],
    "uprightMeaning": "凭意志推进目标，协调不同力量后向前冲。",
    "reversedMeaning": "方向失控、用力过猛、目标不清。",
    "loveMeaning": "关系需要共同方向，不只是彼此拉扯。",
    "careerMeaning": "适合冲刺、竞争、推进项目。",
    "moneyMeaning": "主动规划会带来改善，避免冲动决策。",
    "growthMeaning": "决定方向后，把力量集中起来。",
    "memoryTip": "战车问你：你到底要往哪里去？",
    "image": {
      "kind": "rws",
      "src": "https://commons.wikimedia.org/wiki/Special:FilePath/RWS_Tarot_07_Chariot.jpg?width=360",
      "alt": "The Chariot Rider-Waite-Smith card"
    }
  },
  {
    "id": "strength",
    "name": "力量",
    "englishName": "Strength",
    "arcana": "major",
    "suit": "major",
    "number": "VIII",
    "keywords": [
      "勇气",
      "耐心",
      "温柔",
      "自控"
    ],
    "uprightMeaning": "用温柔而坚定的方式面对本能、压力和恐惧。",
    "reversedMeaning": "失去耐心、自我怀疑、压抑情绪或情绪爆发。",
    "loveMeaning": "用理解代替控制，关系会更有韧性。",
    "careerMeaning": "适合处理难题、稳定团队情绪、长期坚持。",
    "moneyMeaning": "耐心积累，不被短期波动吓到。",
    "growthMeaning": "真正的力量不是硬压，而是能安抚自己。",
    "memoryTip": "力量牌的强，是温柔的强。",
    "image": {
      "kind": "rws",
      "src": "https://commons.wikimedia.org/wiki/Special:FilePath/RWS_Tarot_08_Strength.jpg?width=360",
      "alt": "Strength Rider-Waite-Smith card"
    }
  },
  {
    "id": "hermit",
    "name": "隐士",
    "englishName": "The Hermit",
    "arcana": "major",
    "suit": "major",
    "number": "IX",
    "keywords": [
      "内省",
      "独处",
      "寻找",
      "智慧"
    ],
    "uprightMeaning": "暂时退后，独处思考，寻找自己的答案。",
    "reversedMeaning": "孤立、逃避社交、过度封闭，或找不到方向。",
    "loveMeaning": "需要空间和冷静，不适合逼迫关系立刻表态。",
    "careerMeaning": "适合研究、复盘、深度学习。",
    "moneyMeaning": "谨慎处理资源，先看清再行动。",
    "growthMeaning": "安静下来，答案会更清楚。",
    "memoryTip": "隐士不是孤单，是主动寻找光。",
    "image": {
      "kind": "rws",
      "src": "https://commons.wikimedia.org/wiki/Special:FilePath/RWS_Tarot_09_Hermit.jpg?width=360",
      "alt": "The Hermit Rider-Waite-Smith card"
    }
  },
  {
    "id": "wheel",
    "name": "命运之轮",
    "englishName": "Wheel of Fortune",
    "arcana": "major",
    "suit": "major",
    "number": "X",
    "keywords": [
      "转机",
      "周期",
      "变化",
      "机会"
    ],
    "uprightMeaning": "局势转动，机会和变化出现，需要顺势而为。",
    "reversedMeaning": "抗拒变化、重复旧模式、运气起伏带来不安。",
    "loveMeaning": "关系进入新阶段，可能有意外转折。",
    "careerMeaning": "环境变化明显，适合抓住窗口期。",
    "moneyMeaning": "财务有波动，避免只靠运气。",
    "growthMeaning": "看懂周期，比控制一切更重要。",
    "memoryTip": "命运之轮提醒：没有状态会永远停住。",
    "image": {
      "kind": "rws",
      "src": "https://commons.wikimedia.org/wiki/Special:FilePath/RWS_Tarot_10_Wheel_of_Fortune.jpg?width=360",
      "alt": "Wheel of Fortune Rider-Waite-Smith card"
    }
  },
  {
    "id": "justice",
    "name": "正义",
    "englishName": "Justice",
    "arcana": "major",
    "suit": "major",
    "number": "XI",
    "keywords": [
      "公平",
      "因果",
      "判断",
      "契约"
    ],
    "uprightMeaning": "理性判断、承担后果、公平处理问题。",
    "reversedMeaning": "不公、偏见、逃避责任，或事实尚未厘清。",
    "loveMeaning": "关系需要诚实和对等，不适合含糊。",
    "careerMeaning": "合同、制度、评估、法律相关事务受关注。",
    "moneyMeaning": "清账、预算、合同细节要认真。",
    "growthMeaning": "每个选择都会有结果。",
    "memoryTip": "正义牌问：事实是什么？责任在哪里？",
    "image": {
      "kind": "rws",
      "src": "https://commons.wikimedia.org/wiki/Special:FilePath/RWS_Tarot_11_Justice.jpg?width=360",
      "alt": "Justice Rider-Waite-Smith card"
    }
  },
  {
    "id": "hanged",
    "name": "倒吊人",
    "englishName": "The Hanged Man",
    "arcana": "major",
    "suit": "major",
    "number": "XII",
    "keywords": [
      "暂停",
      "换角度",
      "等待",
      "牺牲"
    ],
    "uprightMeaning": "暂停推进，换一个角度看问题，接受必要等待。",
    "reversedMeaning": "无意义拖延、抗拒放手、卡住却不反思。",
    "loveMeaning": "关系需要重新理解彼此，别急着定义。",
    "careerMeaning": "项目暂缓，适合调整视角和策略。",
    "moneyMeaning": "暂时不宜冒进，先观察资源流向。",
    "growthMeaning": "有时候慢下来才看得清。",
    "memoryTip": "倒吊人不是失败，是换个角度。",
    "image": {
      "kind": "rws",
      "src": "https://commons.wikimedia.org/wiki/Special:FilePath/RWS_Tarot_12_Hanged_Man.jpg?width=360",
      "alt": "The Hanged Man Rider-Waite-Smith card"
    }
  },
  {
    "id": "death",
    "name": "死神",
    "englishName": "Death",
    "arcana": "major",
    "suit": "major",
    "number": "XIII",
    "keywords": [
      "结束",
      "转化",
      "告别",
      "新生"
    ],
    "uprightMeaning": "旧阶段结束，清理不再适合的东西，迎来转化。",
    "reversedMeaning": "抗拒结束、拖着不放、变化停滞。",
    "loveMeaning": "旧关系模式需要结束，不一定代表真实死亡或绝对分手。",
    "careerMeaning": "工作方向、项目或身份可能进入更新期。",
    "moneyMeaning": "整理财务结构，停止消耗性投入。",
    "growthMeaning": "放下旧壳，新的空间才会出现。",
    "memoryTip": "死神多数时候讲转化，不是字面死亡。",
    "image": {
      "kind": "rws",
      "src": "https://commons.wikimedia.org/wiki/Special:FilePath/RWS_Tarot_13_Death.jpg?width=360",
      "alt": "Death Rider-Waite-Smith card"
    }
  },
  {
    "id": "temperance",
    "name": "节制",
    "englishName": "Temperance",
    "arcana": "major",
    "suit": "major",
    "number": "XIV",
    "keywords": [
      "平衡",
      "调和",
      "疗愈",
      "耐心"
    ],
    "uprightMeaning": "调和不同力量，慢慢恢复平衡，节奏温和。",
    "reversedMeaning": "失衡、急躁、过度消耗，或难以协调。",
    "loveMeaning": "关系适合沟通、修复、慢慢靠近。",
    "careerMeaning": "适合跨部门协作、整合资源、稳定推进。",
    "moneyMeaning": "控制收支节奏，避免极端。",
    "growthMeaning": "把节奏调回来，就是进步。",
    "memoryTip": "节制像调配药水：比例对了才有效。",
    "image": {
      "kind": "rws",
      "src": "https://commons.wikimedia.org/wiki/Special:FilePath/RWS_Tarot_14_Temperance.jpg?width=360",
      "alt": "Temperance Rider-Waite-Smith card"
    }
  },
  {
    "id": "devil",
    "name": "恶魔",
    "englishName": "The Devil",
    "arcana": "major",
    "suit": "major",
    "number": "XV",
    "keywords": [
      "束缚",
      "欲望",
      "执念",
      "诱惑"
    ],
    "uprightMeaning": "看见让自己上瘾、依赖或被困住的模式。",
    "reversedMeaning": "开始挣脱束缚，或仍在否认问题。",
    "loveMeaning": "强烈吸引，也可能有依赖、控制或不健康模式。",
    "careerMeaning": "利益诱惑明显，需要警惕被短期欲望绑架。",
    "moneyMeaning": "消费、借贷、欲望管理是重点。",
    "growthMeaning": "承认束缚，是松绑的第一步。",
    "memoryTip": "恶魔不是外面的怪物，常常是内在的执念。",
    "image": {
      "kind": "rws",
      "src": "https://commons.wikimedia.org/wiki/Special:FilePath/RWS_Tarot_15_Devil.jpg?width=360",
      "alt": "The Devil Rider-Waite-Smith card"
    }
  },
  {
    "id": "tower",
    "name": "高塔",
    "englishName": "The Tower",
    "arcana": "major",
    "suit": "major",
    "number": "XVI",
    "keywords": [
      "崩塌",
      "真相",
      "突变",
      "重建"
    ],
    "uprightMeaning": "旧结构被打破，真相浮现，虽然震动但有机会重建。",
    "reversedMeaning": "抗拒改变、压着不处理，或危机已经在内部累积。",
    "loveMeaning": "关系中的真相爆发，旧模式难以继续。",
    "careerMeaning": "计划突然变化，组织结构或方向需要调整。",
    "moneyMeaning": "需要检查风险，避免建立在不稳基础上的投入。",
    "growthMeaning": "承认不稳，才有机会建得更真实。",
    "memoryTip": "高塔不是为了毁灭你，而是拆掉已经撑不住的东西。",
    "image": {
      "kind": "rws",
      "src": "https://commons.wikimedia.org/wiki/Special:FilePath/RWS_Tarot_16_Tower.jpg?width=360",
      "alt": "The Tower Rider-Waite-Smith card"
    }
  },
  {
    "id": "star",
    "name": "星星",
    "englishName": "The Star",
    "arcana": "major",
    "suit": "major",
    "number": "XVII",
    "keywords": [
      "希望",
      "疗愈",
      "指引",
      "信任"
    ],
    "uprightMeaning": "从混乱后恢复希望，重新相信未来。",
    "reversedMeaning": "失望、信心不足、看不见方向。",
    "loveMeaning": "温柔疗愈的关系，适合坦诚表达。",
    "careerMeaning": "愿景清晰，适合长期规划和品牌表达。",
    "moneyMeaning": "金钱慢慢恢复，不宜急功近利。",
    "growthMeaning": "你可以重新相信自己。",
    "memoryTip": "星星是在黑夜里给方向的光。",
    "image": {
      "kind": "rws",
      "src": "https://commons.wikimedia.org/wiki/Special:FilePath/RWS_Tarot_17_Star.jpg?width=360",
      "alt": "The Star Rider-Waite-Smith card"
    }
  },
  {
    "id": "moon",
    "name": "月亮",
    "englishName": "The Moon",
    "arcana": "major",
    "suit": "major",
    "number": "XVIII",
    "keywords": [
      "迷雾",
      "潜意识",
      "不安",
      "想象"
    ],
    "uprightMeaning": "信息不清、情绪敏感、潜意识浮现，需要谨慎辨认。",
    "reversedMeaning": "迷雾散去、真相靠近，或仍被恐惧影响。",
    "loveMeaning": "暧昧、不安、猜测增多，需避免脑补。",
    "careerMeaning": "情况不明朗，适合收集信息而非贸然决定。",
    "moneyMeaning": "警惕看不清的风险和情绪化消费。",
    "growthMeaning": "先分清事实和想象。",
    "memoryTip": "月亮提醒：不是所有感觉都等于事实。",
    "image": {
      "kind": "rws",
      "src": "https://commons.wikimedia.org/wiki/Special:FilePath/RWS_Tarot_18_Moon.jpg?width=360",
      "alt": "The Moon Rider-Waite-Smith card"
    }
  },
  {
    "id": "sun",
    "name": "太阳",
    "englishName": "The Sun",
    "arcana": "major",
    "suit": "major",
    "number": "XIX",
    "keywords": [
      "清晰",
      "快乐",
      "成功",
      "生命力"
    ],
    "uprightMeaning": "事情变得明朗，快乐、自信和成果出现。",
    "reversedMeaning": "自信不足、快乐被压住，或过度自我中心。",
    "loveMeaning": "真诚、明亮、关系状态更清楚。",
    "careerMeaning": "成果可见，适合展示和推进。",
    "moneyMeaning": "收入和资源更有活力，但别过度乐观。",
    "growthMeaning": "让自己站到阳光下。",
    "memoryTip": "太阳牌的关键词很简单：看见、开心、活过来。",
    "image": {
      "kind": "rws",
      "src": "https://commons.wikimedia.org/wiki/Special:FilePath/RWS_Tarot_19_Sun.jpg?width=360",
      "alt": "The Sun Rider-Waite-Smith card"
    }
  },
  {
    "id": "judgement",
    "name": "审判",
    "englishName": "Judgement",
    "arcana": "major",
    "suit": "major",
    "number": "XX",
    "keywords": [
      "觉醒",
      "召唤",
      "复盘",
      "重生"
    ],
    "uprightMeaning": "听见内在召唤，复盘过去，做出更成熟的选择。",
    "reversedMeaning": "逃避召唤、沉溺过去、害怕被评价。",
    "loveMeaning": "旧关系议题被重新审视，可能有和解或清算。",
    "careerMeaning": "职业方向可能迎来重要决定或转型。",
    "moneyMeaning": "复盘旧账和长期规划。",
    "growthMeaning": "你已经不是过去那个自己了。",
    "memoryTip": "审判不是判你有罪，而是叫你醒来。",
    "image": {
      "kind": "rws",
      "src": "https://commons.wikimedia.org/wiki/Special:FilePath/RWS_Tarot_20_Judgement.jpg?width=360",
      "alt": "Judgement Rider-Waite-Smith card"
    }
  },
  {
    "id": "world",
    "name": "世界",
    "englishName": "The World",
    "arcana": "major",
    "suit": "major",
    "number": "XXI",
    "keywords": [
      "完成",
      "整合",
      "圆满",
      "阶段成果"
    ],
    "uprightMeaning": "一个阶段完成，经验被整合，进入更完整的状态。",
    "reversedMeaning": "临门一脚、未完成感、难以收尾。",
    "loveMeaning": "关系进入稳定完整阶段，或需要给旧阶段收尾。",
    "careerMeaning": "项目完成、毕业、交付、阶段性成功。",
    "moneyMeaning": "财务目标接近完成，适合总结。",
    "growthMeaning": "把经历整合成自己的能力。",
    "memoryTip": "世界牌说：这一圈，你走完了。",
    "image": {
      "kind": "rws",
      "src": "https://commons.wikimedia.org/wiki/Special:FilePath/RWS_Tarot_21_World.jpg?width=360",
      "alt": "The World Rider-Waite-Smith card"
    }
  },
  {
    "id": "wands1",
    "name": "权杖一",
    "englishName": "Ace of Wands",
    "arcana": "minor",
    "suit": "wands",
    "number": "ace",
    "keywords": [
      "灵感",
      "开始",
      "热情",
      "行动"
    ],
    "uprightMeaning": "新的行动机会和热情出现，适合启动。",
    "reversedMeaning": "热情不足、启动困难、冲动后无持续。",
    "loveMeaning": "心动和吸引出现，但还在萌芽。",
    "careerMeaning": "新项目、新想法、新机会。",
    "moneyMeaning": "可通过行动创造收入机会。",
    "growthMeaning": "先点燃火，再慢慢添柴。",
    "memoryTip": "权杖一是一根火柴：先亮起来。",
    "image": {
      "kind": "rws",
      "src": "https://commons.wikimedia.org/wiki/Special:FilePath/Wands01.jpg?width=360",
      "alt": "Ace of Wands Rider-Waite-Smith card"
    }
  },
  {
    "id": "wands2",
    "name": "权杖二",
    "englishName": "Two of Wands",
    "arcana": "minor",
    "suit": "wands",
    "number": "2",
    "keywords": [
      "规划",
      "选择",
      "远景",
      "等待"
    ],
    "uprightMeaning": "站在起点规划未来，评估下一步方向。",
    "reversedMeaning": "犹豫不决、视野受限、迟迟不行动。",
    "loveMeaning": "考虑关系未来，但还没真正迈步。",
    "careerMeaning": "适合做计划、看市场、定方向。",
    "moneyMeaning": "投资前先规划，别只凭冲动。",
    "growthMeaning": "看远一点，再走下一步。",
    "memoryTip": "权杖二是把世界拿在手里看。",
    "image": {
      "kind": "rws",
      "src": "https://commons.wikimedia.org/wiki/Special:FilePath/Wands02.jpg?width=360",
      "alt": "Two of Wands Rider-Waite-Smith card"
    }
  },
  {
    "id": "wands3",
    "name": "权杖三",
    "englishName": "Three of Wands",
    "arcana": "minor",
    "suit": "wands",
    "number": "3",
    "keywords": [
      "扩展",
      "远方",
      "等待成果",
      "合作"
    ],
    "uprightMeaning": "计划开始向外扩展，等待成果回流。",
    "reversedMeaning": "延迟、视野不足、合作不顺。",
    "loveMeaning": "关系有发展空间，可能涉及距离。",
    "careerMeaning": "业务扩展、合作、外部机会。",
    "moneyMeaning": "收益需要时间回流。",
    "growthMeaning": "已经出发，就耐心等船回来。",
    "memoryTip": "权杖三是看着远方的机会。",
    "image": {
      "kind": "rws",
      "src": "https://commons.wikimedia.org/wiki/Special:FilePath/Wands03.jpg?width=360",
      "alt": "Three of Wands Rider-Waite-Smith card"
    }
  },
  {
    "id": "wands4",
    "name": "权杖四",
    "englishName": "Four of Wands",
    "arcana": "minor",
    "suit": "wands",
    "number": "4",
    "keywords": [
      "庆祝",
      "稳定",
      "归属",
      "里程碑"
    ],
    "uprightMeaning": "阶段性稳定、庆祝成果、家庭或团队归属。",
    "reversedMeaning": "表面稳定、庆祝延迟、缺少归属感。",
    "loveMeaning": "适合确认关系、见家人、共同庆祝。",
    "careerMeaning": "团队达成阶段目标。",
    "moneyMeaning": "稳定收入或居住相关支出。",
    "growthMeaning": "允许自己庆祝一个小成果。",
    "memoryTip": "权杖四像搭好的庆祝拱门。",
    "image": {
      "kind": "rws",
      "src": "https://commons.wikimedia.org/wiki/Special:FilePath/Wands04.jpg?width=360",
      "alt": "Four of Wands Rider-Waite-Smith card"
    }
  },
  {
    "id": "wands5",
    "name": "权杖五",
    "englishName": "Five of Wands",
    "arcana": "minor",
    "suit": "wands",
    "number": "5",
    "keywords": [
      "竞争",
      "摩擦",
      "混乱",
      "练习"
    ],
    "uprightMeaning": "多人意见碰撞，竞争和摩擦带来成长。",
    "reversedMeaning": "逃避竞争、内耗、冲突升级或结束。",
    "loveMeaning": "关系中容易吵闹，但未必是深层伤害。",
    "careerMeaning": "团队意见多，需要协调规则。",
    "moneyMeaning": "竞争环境中要控制成本。",
    "growthMeaning": "把混乱当训练，而不是灾难。",
    "memoryTip": "权杖五是操场上的混战。",
    "image": {
      "kind": "rws",
      "src": "https://commons.wikimedia.org/wiki/Special:FilePath/Wands05.jpg?width=360",
      "alt": "Five of Wands Rider-Waite-Smith card"
    }
  },
  {
    "id": "wands6",
    "name": "权杖六",
    "englishName": "Six of Wands",
    "arcana": "minor",
    "suit": "wands",
    "number": "6",
    "keywords": [
      "胜利",
      "认可",
      "展示",
      "信心"
    ],
    "uprightMeaning": "获得认可、阶段胜利、被看见。",
    "reversedMeaning": "害怕展示、虚荣、认可不足。",
    "loveMeaning": "关系中被肯定，或需要少一点面子。",
    "careerMeaning": "汇报成功、升职、公开成果。",
    "moneyMeaning": "收入提升或因表现获得回报。",
    "growthMeaning": "站出来接受掌声。",
    "memoryTip": "权杖六是凯旋，但也要记得继续走。",
    "image": {
      "kind": "rws",
      "src": "https://commons.wikimedia.org/wiki/Special:FilePath/Wands06.jpg?width=360",
      "alt": "Six of Wands Rider-Waite-Smith card"
    }
  },
  {
    "id": "wands7",
    "name": "权杖七",
    "englishName": "Seven of Wands",
    "arcana": "minor",
    "suit": "wands",
    "number": "7",
    "keywords": [
      "防守",
      "坚持",
      "立场",
      "挑战"
    ],
    "uprightMeaning": "守住立场，应对外界挑战。",
    "reversedMeaning": "疲惫、退缩、防御过度。",
    "loveMeaning": "需要为关系立场发声，但别过度防御。",
    "careerMeaning": "竞争压力大，要守住优势。",
    "moneyMeaning": "保护资源，避免被消耗。",
    "growthMeaning": "你可以温和，但要有立场。",
    "memoryTip": "权杖七是在高处守住自己。",
    "image": {
      "kind": "rws",
      "src": "https://commons.wikimedia.org/wiki/Special:FilePath/Wands07.jpg?width=360",
      "alt": "Seven of Wands Rider-Waite-Smith card"
    }
  },
  {
    "id": "wands8",
    "name": "权杖八",
    "englishName": "Eight of Wands",
    "arcana": "minor",
    "suit": "wands",
    "number": "8",
    "keywords": [
      "速度",
      "消息",
      "推进",
      "变化"
    ],
    "uprightMeaning": "进展加速，消息到来，事情快速推进。",
    "reversedMeaning": "延误、信息混乱、太急导致失误。",
    "loveMeaning": "沟通变快，可能有突然联系。",
    "careerMeaning": "项目加速、出差、消息密集。",
    "moneyMeaning": "资金流动加快，注意细节。",
    "growthMeaning": "速度来了，也要稳住方向。",
    "memoryTip": "权杖八像一排飞出去的箭。",
    "image": {
      "kind": "rws",
      "src": "https://commons.wikimedia.org/wiki/Special:FilePath/Wands08.jpg?width=360",
      "alt": "Eight of Wands Rider-Waite-Smith card"
    }
  },
  {
    "id": "wands9",
    "name": "权杖九",
    "englishName": "Nine of Wands",
    "arcana": "minor",
    "suit": "wands",
    "number": "9",
    "keywords": [
      "警惕",
      "坚持",
      "疲惫",
      "防线"
    ],
    "uprightMeaning": "经历很多后仍在坚持，但有些疲惫和警惕。",
    "reversedMeaning": "撑不住、过度防备、需要休息。",
    "loveMeaning": "过去受伤影响现在的信任。",
    "careerMeaning": "项目接近尾声，需要最后坚持。",
    "moneyMeaning": "保守理财，先防风险。",
    "growthMeaning": "坚持重要，休息也重要。",
    "memoryTip": "权杖九是带伤站岗。",
    "image": {
      "kind": "rws",
      "src": "https://commons.wikimedia.org/wiki/Special:FilePath/Wands09.jpg?width=360",
      "alt": "Nine of Wands Rider-Waite-Smith card"
    }
  },
  {
    "id": "wands10",
    "name": "权杖十",
    "englishName": "Ten of Wands",
    "arcana": "minor",
    "suit": "wands",
    "number": "10",
    "keywords": [
      "负担",
      "责任",
      "压力",
      "完成前"
    ],
    "uprightMeaning": "责任太多，背负沉重，但接近完成。",
    "reversedMeaning": "卸下负担、分工，或继续硬撑。",
    "loveMeaning": "关系中一方承担太多。",
    "careerMeaning": "工作压力大，需要分配任务。",
    "moneyMeaning": "财务责任沉重，需整理债务或支出。",
    "growthMeaning": "不是所有东西都要你一个人背。",
    "memoryTip": "权杖十是快到终点，但太重了。",
    "image": {
      "kind": "rws",
      "src": "https://commons.wikimedia.org/wiki/Special:FilePath/Wands10.jpg?width=360",
      "alt": "Ten of Wands Rider-Waite-Smith card"
    }
  },
  {
    "id": "wands-page",
    "name": "权杖侍从",
    "englishName": "Page of Wands",
    "arcana": "minor",
    "suit": "wands",
    "number": "page",
    "keywords": [
      "探索",
      "消息",
      "好奇",
      "新手"
    ],
    "uprightMeaning": "带着热情探索新方向，可能收到行动相关消息。",
    "reversedMeaning": "三分钟热度、幼稚冲动、缺少执行。",
    "loveMeaning": "新鲜互动、主动试探。",
    "careerMeaning": "适合尝试新技能或新项目。",
    "moneyMeaning": "收入想法初现，仍需验证。",
    "growthMeaning": "允许自己先做一个好奇的新手。",
    "memoryTip": "权杖侍从是拿着火把到处看的人。",
    "image": {
      "kind": "rws",
      "src": "https://commons.wikimedia.org/wiki/Special:FilePath/Wands11.jpg?width=360",
      "alt": "Page of Wands Rider-Waite-Smith card"
    }
  },
  {
    "id": "wands-knight",
    "name": "权杖骑士",
    "englishName": "Knight of Wands",
    "arcana": "minor",
    "suit": "wands",
    "number": "knight",
    "keywords": [
      "冲刺",
      "热情",
      "冒险",
      "急躁"
    ],
    "uprightMeaning": "充满行动力，想快速推进和冒险。",
    "reversedMeaning": "鲁莽、半途而废、来得快去得快。",
    "loveMeaning": "热烈追求，但稳定性不足。",
    "careerMeaning": "适合冲刺，但要防止计划粗糙。",
    "moneyMeaning": "冲动投资或消费需谨慎。",
    "growthMeaning": "热情很好，方向也要清楚。",
    "memoryTip": "权杖骑士很燃，但刹车也要有。",
    "image": {
      "kind": "rws",
      "src": "https://commons.wikimedia.org/wiki/Special:FilePath/Wands12.jpg?width=360",
      "alt": "Knight of Wands Rider-Waite-Smith card"
    }
  },
  {
    "id": "wands-queen",
    "name": "权杖皇后",
    "englishName": "Queen of Wands",
    "arcana": "minor",
    "suit": "wands",
    "number": "queen",
    "keywords": [
      "自信",
      "魅力",
      "创造",
      "独立"
    ],
    "uprightMeaning": "自信、有吸引力、能用热情影响他人。",
    "reversedMeaning": "自信不足、嫉妒、控制或能量耗尽。",
    "loveMeaning": "有魅力、主动、关系中保持自我。",
    "careerMeaning": "适合展示、领导创意、经营个人品牌。",
    "moneyMeaning": "靠影响力和创造力带来收益。",
    "growthMeaning": "把自己的光亮出来。",
    "memoryTip": "权杖皇后是温暖又有主见的火。",
    "image": {
      "kind": "rws",
      "src": "https://commons.wikimedia.org/wiki/Special:FilePath/Wands13.jpg?width=360",
      "alt": "Queen of Wands Rider-Waite-Smith card"
    }
  },
  {
    "id": "wands-king",
    "name": "权杖国王",
    "englishName": "King of Wands",
    "arcana": "minor",
    "suit": "wands",
    "number": "king",
    "keywords": [
      "领导",
      "远见",
      "魄力",
      "开创"
    ],
    "uprightMeaning": "有远见和领导力，能带队开创新局面。",
    "reversedMeaning": "专断、急躁、野心失控或缺少耐心。",
    "loveMeaning": "关系中主动强势，需要尊重对方空间。",
    "careerMeaning": "创业、管理、决策、战略推进。",
    "moneyMeaning": "大胆布局，但要控制风险。",
    "growthMeaning": "用热情带人，而不是压人。",
    "memoryTip": "权杖国王是把火变成方向的人。",
    "image": {
      "kind": "rws",
      "src": "https://commons.wikimedia.org/wiki/Special:FilePath/Wands14.jpg?width=360",
      "alt": "King of Wands Rider-Waite-Smith card"
    }
  },
  {
    "id": "cups1",
    "name": "圣杯一",
    "englishName": "Ace of Cups",
    "arcana": "minor",
    "suit": "cups",
    "number": "ace",
    "keywords": [
      "情感",
      "开始",
      "疗愈",
      "爱"
    ],
    "uprightMeaning": "新的情感流动、爱意、疗愈和内心开放。",
    "reversedMeaning": "情绪堵住、爱意难表达、空虚。",
    "loveMeaning": "新恋情、心动、情感重新打开。",
    "careerMeaning": "适合做有温度和共情的工作。",
    "moneyMeaning": "消费受情绪影响，需觉察。",
    "growthMeaning": "先让心重新流动。",
    "memoryTip": "圣杯一是一杯开始流出来的感受。",
    "image": {
      "kind": "rws",
      "src": "https://commons.wikimedia.org/wiki/Special:FilePath/Cups01.jpg?width=360",
      "alt": "Ace of Cups Rider-Waite-Smith card"
    }
  },
  {
    "id": "cups2",
    "name": "圣杯二",
    "englishName": "Two of Cups",
    "arcana": "minor",
    "suit": "cups",
    "number": "2",
    "keywords": [
      "连接",
      "互相",
      "和解",
      "吸引"
    ],
    "uprightMeaning": "双方互相靠近，关系平等交流。",
    "reversedMeaning": "失衡、误会、关系断连。",
    "loveMeaning": "互相喜欢、和解、建立关系。",
    "careerMeaning": "合作顺利，适合一对一沟通。",
    "moneyMeaning": "合作收益需公平分配。",
    "growthMeaning": "好的连接来自互相看见。",
    "memoryTip": "圣杯二是两个人举杯相对。",
    "image": {
      "kind": "rws",
      "src": "https://commons.wikimedia.org/wiki/Special:FilePath/Cups02.jpg?width=360",
      "alt": "Two of Cups Rider-Waite-Smith card"
    }
  },
  {
    "id": "cups3",
    "name": "圣杯三",
    "englishName": "Three of Cups",
    "arcana": "minor",
    "suit": "cups",
    "number": "3",
    "keywords": [
      "庆祝",
      "朋友",
      "支持",
      "交流"
    ],
    "uprightMeaning": "朋友支持、聚会庆祝、情感交流顺畅。",
    "reversedMeaning": "小圈子问题、过度社交、关系中的排斥感。",
    "loveMeaning": "轻松愉快的互动，也可能有朋友影响关系。",
    "careerMeaning": "团队气氛好，适合协作和庆祝阶段成果。",
    "moneyMeaning": "为聚会和享受花钱，注意节制。",
    "growthMeaning": "允许自己接受支持，不必什么都一个人扛。",
    "memoryTip": "圣杯三像一句话：有人和你一起开心。",
    "image": {
      "kind": "rws",
      "src": "https://commons.wikimedia.org/wiki/Special:FilePath/Cups03.jpg?width=360",
      "alt": "Three of Cups Rider-Waite-Smith card"
    }
  },
  {
    "id": "cups4",
    "name": "圣杯四",
    "englishName": "Four of Cups",
    "arcana": "minor",
    "suit": "cups",
    "number": "4",
    "keywords": [
      "冷淡",
      "停滞",
      "不满足",
      "内省"
    ],
    "uprightMeaning": "对眼前机会兴趣不足，需要看清内在不满。",
    "reversedMeaning": "重新看见机会、走出冷淡。",
    "loveMeaning": "关系中冷淡、无聊或不回应。",
    "careerMeaning": "对工作缺乏动力，需重新找意义。",
    "moneyMeaning": "对消费或机会麻木，避免错过。",
    "growthMeaning": "问问自己真正想要什么。",
    "memoryTip": "圣杯四是机会来了，但你不一定想接。",
    "image": {
      "kind": "rws",
      "src": "https://commons.wikimedia.org/wiki/Special:FilePath/Cups04.jpg?width=360",
      "alt": "Four of Cups Rider-Waite-Smith card"
    }
  },
  {
    "id": "cups5",
    "name": "圣杯五",
    "englishName": "Five of Cups",
    "arcana": "minor",
    "suit": "cups",
    "number": "5",
    "keywords": [
      "失落",
      "遗憾",
      "悲伤",
      "剩余"
    ],
    "uprightMeaning": "关注失去和遗憾，但仍有资源留下。",
    "reversedMeaning": "走出悲伤、接受现实、看见仍拥有的东西。",
    "loveMeaning": "失恋、遗憾、关系中的悲伤。",
    "careerMeaning": "项目失利后需要复盘。",
    "moneyMeaning": "损失后整理剩余资源。",
    "growthMeaning": "失去是真的，剩下的也是真的。",
    "memoryTip": "圣杯五提醒你回头看看还站着的杯子。",
    "image": {
      "kind": "rws",
      "src": "https://commons.wikimedia.org/wiki/Special:FilePath/Cups05.jpg?width=360",
      "alt": "Five of Cups Rider-Waite-Smith card"
    }
  },
  {
    "id": "cups6",
    "name": "圣杯六",
    "englishName": "Six of Cups",
    "arcana": "minor",
    "suit": "cups",
    "number": "6",
    "keywords": [
      "回忆",
      "纯真",
      "旧人",
      "善意"
    ],
    "uprightMeaning": "过去回忆、旧人旧事、单纯善意浮现。",
    "reversedMeaning": "沉溺过去、幼稚、需要走向现在。",
    "loveMeaning": "旧爱、童年感、安全感。",
    "careerMeaning": "旧资源、熟人帮助、怀旧项目。",
    "moneyMeaning": "旧有资源可用，但别只看过去。",
    "growthMeaning": "温柔地看过去，然后回到现在。",
    "memoryTip": "圣杯六像一段带花香的回忆。",
    "image": {
      "kind": "rws",
      "src": "https://commons.wikimedia.org/wiki/Special:FilePath/Cups06.jpg?width=360",
      "alt": "Six of Cups Rider-Waite-Smith card"
    }
  },
  {
    "id": "cups7",
    "name": "圣杯七",
    "englishName": "Seven of Cups",
    "arcana": "minor",
    "suit": "cups",
    "number": "7",
    "keywords": [
      "幻想",
      "选择",
      "诱惑",
      "混乱"
    ],
    "uprightMeaning": "选择很多，想象很多，需要分辨真实可行性。",
    "reversedMeaning": "看清幻想、做出选择，或仍然逃避现实。",
    "loveMeaning": "桃花、幻想、暧昧不清。",
    "careerMeaning": "机会多但分散，需聚焦。",
    "moneyMeaning": "避免被看似美好的投资诱惑。",
    "growthMeaning": "美好的想象要落到现实步骤。",
    "memoryTip": "圣杯七是一排梦，先分真假。",
    "image": {
      "kind": "rws",
      "src": "https://commons.wikimedia.org/wiki/Special:FilePath/Cups07.jpg?width=360",
      "alt": "Seven of Cups Rider-Waite-Smith card"
    }
  },
  {
    "id": "cups8",
    "name": "圣杯八",
    "englishName": "Eight of Cups",
    "arcana": "minor",
    "suit": "cups",
    "number": "8",
    "keywords": [
      "离开",
      "寻找",
      "不满足",
      "转身"
    ],
    "uprightMeaning": "离开已经无法满足内心的状态，寻找更深意义。",
    "reversedMeaning": "不敢离开、反复回头、或重新确认留下。",
    "loveMeaning": "从不满足的关系中抽离。",
    "careerMeaning": "离职、转向、寻找更有意义的道路。",
    "moneyMeaning": "停止投入低回报的地方。",
    "growthMeaning": "离开不是失败，是诚实。",
    "memoryTip": "圣杯八是背对旧杯，走向山路。",
    "image": {
      "kind": "rws",
      "src": "https://commons.wikimedia.org/wiki/Special:FilePath/Cups08.jpg?width=360",
      "alt": "Eight of Cups Rider-Waite-Smith card"
    }
  },
  {
    "id": "cups9",
    "name": "圣杯九",
    "englishName": "Nine of Cups",
    "arcana": "minor",
    "suit": "cups",
    "number": "9",
    "keywords": [
      "满足",
      "愿望",
      "享受",
      "自足"
    ],
    "uprightMeaning": "愿望实现、情绪满足、享受成果。",
    "reversedMeaning": "表面满足、贪心、快乐不持久。",
    "loveMeaning": "感情满足，也可能过于自我享受。",
    "careerMeaning": "阶段目标达成，适合庆祝。",
    "moneyMeaning": "收入或享受提升，避免放纵。",
    "growthMeaning": "享受成果，同时保持清醒。",
    "memoryTip": "圣杯九像一句：我挺满意。",
    "image": {
      "kind": "rws",
      "src": "https://commons.wikimedia.org/wiki/Special:FilePath/Cups09.jpg?width=360",
      "alt": "Nine of Cups Rider-Waite-Smith card"
    }
  },
  {
    "id": "cups10",
    "name": "圣杯十",
    "englishName": "Ten of Cups",
    "arcana": "minor",
    "suit": "cups",
    "number": "10",
    "keywords": [
      "幸福",
      "家庭",
      "圆满",
      "归属"
    ],
    "uprightMeaning": "情感圆满、家庭和谐、归属感强。",
    "reversedMeaning": "理想破裂、家庭压力、表面幸福。",
    "loveMeaning": "长期幸福感、家庭议题、稳定关系。",
    "careerMeaning": "团队氛围好，价值一致。",
    "moneyMeaning": "为家庭和长期幸福规划财务。",
    "growthMeaning": "真正的圆满需要共同维护。",
    "memoryTip": "圣杯十是一道彩虹下的家。",
    "image": {
      "kind": "rws",
      "src": "https://commons.wikimedia.org/wiki/Special:FilePath/Cups10.jpg?width=360",
      "alt": "Ten of Cups Rider-Waite-Smith card"
    }
  },
  {
    "id": "cups-page",
    "name": "圣杯侍从",
    "englishName": "Page of Cups",
    "arcana": "minor",
    "suit": "cups",
    "number": "page",
    "keywords": [
      "感受",
      "消息",
      "想象",
      "柔软"
    ],
    "uprightMeaning": "情感消息、直觉萌芽、温柔而新鲜的感受。",
    "reversedMeaning": "情绪幼稚、逃避现实、表达不成熟。",
    "loveMeaning": "暧昧消息、害羞表达、心动。",
    "careerMeaning": "创意和灵感适合被记录。",
    "moneyMeaning": "情绪消费需注意。",
    "growthMeaning": "认真听见心里那条小鱼。",
    "memoryTip": "圣杯侍从像第一次认真感受自己的心。",
    "image": {
      "kind": "rws",
      "src": "https://commons.wikimedia.org/wiki/Special:FilePath/Cups11.jpg?width=360",
      "alt": "Page of Cups Rider-Waite-Smith card"
    }
  },
  {
    "id": "cups-knight",
    "name": "圣杯骑士",
    "englishName": "Knight of Cups",
    "arcana": "minor",
    "suit": "cups",
    "number": "knight",
    "keywords": [
      "浪漫",
      "邀请",
      "追求",
      "理想"
    ],
    "uprightMeaning": "浪漫追求、带着情感靠近、发出邀请。",
    "reversedMeaning": "不切实际、情绪化承诺、逃避现实。",
    "loveMeaning": "表白、约会、浪漫互动。",
    "careerMeaning": "适合创意提案和表达愿景。",
    "moneyMeaning": "理想很美，但预算要真实。",
    "growthMeaning": "温柔前进，也要脚踩地。",
    "memoryTip": "圣杯骑士骑着马送来一杯心意。",
    "image": {
      "kind": "rws",
      "src": "https://commons.wikimedia.org/wiki/Special:FilePath/Cups12.jpg?width=360",
      "alt": "Knight of Cups Rider-Waite-Smith card"
    }
  },
  {
    "id": "cups-queen",
    "name": "圣杯皇后",
    "englishName": "Queen of Cups",
    "arcana": "minor",
    "suit": "cups",
    "number": "queen",
    "keywords": [
      "共情",
      "温柔",
      "直觉",
      "照顾"
    ],
    "uprightMeaning": "情绪成熟、共情力强、能温柔理解他人。",
    "reversedMeaning": "情绪泛滥、过度牺牲、边界不清。",
    "loveMeaning": "深情、包容、情感滋养。",
    "careerMeaning": "适合照护、咨询、艺术和支持性角色。",
    "moneyMeaning": "金钱决定容易受感情影响。",
    "growthMeaning": "温柔要带着边界。",
    "memoryTip": "圣杯皇后会照顾别人，也要照顾自己。",
    "image": {
      "kind": "rws",
      "src": "https://commons.wikimedia.org/wiki/Special:FilePath/Cups13.jpg?width=360",
      "alt": "Queen of Cups Rider-Waite-Smith card"
    }
  },
  {
    "id": "cups-king",
    "name": "圣杯国王",
    "englishName": "King of Cups",
    "arcana": "minor",
    "suit": "cups",
    "number": "king",
    "keywords": [
      "成熟",
      "稳定",
      "包容",
      "情绪管理"
    ],
    "uprightMeaning": "情绪成熟稳定，能在波动中保持包容。",
    "reversedMeaning": "压抑情绪、表面冷静、情感操控。",
    "loveMeaning": "成熟可靠的情感支持。",
    "careerMeaning": "适合管理人际、危机沟通、情绪稳定团队。",
    "moneyMeaning": "理性处理情绪化支出。",
    "growthMeaning": "真正成熟是感受到，但不被淹没。",
    "memoryTip": "圣杯国王坐在海上，却不被浪卷走。",
    "image": {
      "kind": "rws",
      "src": "https://commons.wikimedia.org/wiki/Special:FilePath/Cups14.jpg?width=360",
      "alt": "King of Cups Rider-Waite-Smith card"
    }
  },
  {
    "id": "swords1",
    "name": "宝剑一",
    "englishName": "Ace of Swords",
    "arcana": "minor",
    "suit": "swords",
    "number": "ace",
    "keywords": [
      "真相",
      "清晰",
      "判断",
      "突破"
    ],
    "uprightMeaning": "头脑清晰、真相浮现、适合做出判断。",
    "reversedMeaning": "混乱、误解、说话伤人或想法不清。",
    "loveMeaning": "关系需要坦诚沟通。",
    "careerMeaning": "适合决策、写作、谈判、明确方向。",
    "moneyMeaning": "用清晰数据做金钱决定。",
    "growthMeaning": "先把话说清楚。",
    "memoryTip": "宝剑一是一道劈开迷雾的念头。",
    "image": {
      "kind": "rws",
      "src": "https://commons.wikimedia.org/wiki/Special:FilePath/Swords01.jpg?width=360",
      "alt": "Ace of Swords Rider-Waite-Smith card"
    }
  },
  {
    "id": "swords2",
    "name": "宝剑二",
    "englishName": "Two of Swords",
    "arcana": "minor",
    "suit": "swords",
    "number": "2",
    "keywords": [
      "僵持",
      "选择",
      "回避",
      "平衡"
    ],
    "uprightMeaning": "处在两难中，暂时关闭感受以维持平衡。",
    "reversedMeaning": "逃避结束、开始面对选择。",
    "loveMeaning": "关系冷战或不愿表态。",
    "careerMeaning": "决策卡住，需要更多信息或勇气。",
    "moneyMeaning": "资金选择犹豫，别拖太久。",
    "growthMeaning": "不选择本身也是选择。",
    "memoryTip": "宝剑二蒙着眼，说明你不想看。",
    "image": {
      "kind": "rws",
      "src": "https://commons.wikimedia.org/wiki/Special:FilePath/Swords02.jpg?width=360",
      "alt": "Two of Swords Rider-Waite-Smith card"
    }
  },
  {
    "id": "swords3",
    "name": "宝剑三",
    "englishName": "Three of Swords",
    "arcana": "minor",
    "suit": "swords",
    "number": "3",
    "keywords": [
      "心痛",
      "真相",
      "伤害",
      "释放"
    ],
    "uprightMeaning": "痛苦真相刺入心中，需要承认伤害。",
    "reversedMeaning": "疗愈开始、痛苦释放、伤口仍在。",
    "loveMeaning": "伤心、分离、被言语刺痛。",
    "careerMeaning": "坏消息或严厉反馈，需要面对。",
    "moneyMeaning": "损失或失望，先止损。",
    "growthMeaning": "承认痛，才会开始好。",
    "memoryTip": "宝剑三是心上的雨，但雨会停。",
    "image": {
      "kind": "rws",
      "src": "https://commons.wikimedia.org/wiki/Special:FilePath/Swords03.jpg?width=360",
      "alt": "Three of Swords Rider-Waite-Smith card"
    }
  },
  {
    "id": "swords4",
    "name": "宝剑四",
    "englishName": "Four of Swords",
    "arcana": "minor",
    "suit": "swords",
    "number": "4",
    "keywords": [
      "休息",
      "恢复",
      "暂停",
      "静养"
    ],
    "uprightMeaning": "停止消耗，休息、恢复、整理思绪。",
    "reversedMeaning": "休息不足、重新行动、或躲太久。",
    "loveMeaning": "关系需要冷静期。",
    "careerMeaning": "暂停工作，恢复精力比硬撑重要。",
    "moneyMeaning": "先停止焦虑性操作。",
    "growthMeaning": "休息是修复系统，不是浪费时间。",
    "memoryTip": "宝剑四是把剑放下，先睡一觉。",
    "image": {
      "kind": "rws",
      "src": "https://commons.wikimedia.org/wiki/Special:FilePath/Swords04.jpg?width=360",
      "alt": "Four of Swords Rider-Waite-Smith card"
    }
  },
  {
    "id": "swords5",
    "name": "宝剑五",
    "englishName": "Five of Swords",
    "arcana": "minor",
    "suit": "swords",
    "number": "5",
    "keywords": [
      "争执",
      "输赢",
      "伤害",
      "代价"
    ],
    "uprightMeaning": "争论中有人赢了表面，却可能伤了关系。",
    "reversedMeaning": "放下争斗、修复沟通，或仍在回避冲突后的伤口。",
    "loveMeaning": "嘴上争赢不代表关系变好，需要看见伤害。",
    "careerMeaning": "竞争、办公室冲突、沟通策略需要调整。",
    "moneyMeaning": "避免因赌气或好胜做决定。",
    "growthMeaning": "问自己：我想赢，还是想解决问题？",
    "memoryTip": "宝剑五提醒：有些胜利很贵。",
    "image": {
      "kind": "rws",
      "src": "https://commons.wikimedia.org/wiki/Special:FilePath/Swords05.jpg?width=360",
      "alt": "Five of Swords Rider-Waite-Smith card"
    }
  },
  {
    "id": "swords6",
    "name": "宝剑六",
    "englishName": "Six of Swords",
    "arcana": "minor",
    "suit": "swords",
    "number": "6",
    "keywords": [
      "过渡",
      "离开",
      "疗愈",
      "迁移"
    ],
    "uprightMeaning": "离开混乱，进入较平静的过渡期。",
    "reversedMeaning": "难以离开、旧问题拖延、旅程受阻。",
    "loveMeaning": "关系从冲突中慢慢转向平静。",
    "careerMeaning": "换环境、转岗、过渡方案。",
    "moneyMeaning": "财务逐步恢复，仍需谨慎。",
    "growthMeaning": "不是立刻变好，而是开始离开坏状态。",
    "memoryTip": "宝剑六是一艘慢慢驶离的船。",
    "image": {
      "kind": "rws",
      "src": "https://commons.wikimedia.org/wiki/Special:FilePath/Swords06.jpg?width=360",
      "alt": "Six of Swords Rider-Waite-Smith card"
    }
  },
  {
    "id": "swords7",
    "name": "宝剑七",
    "englishName": "Seven of Swords",
    "arcana": "minor",
    "suit": "swords",
    "number": "7",
    "keywords": [
      "策略",
      "隐瞒",
      "逃避",
      "取巧"
    ],
    "uprightMeaning": "需要策略行动，也可能有隐瞒或不诚实。",
    "reversedMeaning": "真相暴露、停止逃避、策略失效。",
    "loveMeaning": "关系中需警惕隐瞒和不坦诚。",
    "careerMeaning": "职场策略、保密、绕路解决问题。",
    "moneyMeaning": "避免灰色操作和侥幸心理。",
    "growthMeaning": "聪明要用在正道上。",
    "memoryTip": "宝剑七是悄悄拿剑走的人。",
    "image": {
      "kind": "rws",
      "src": "https://commons.wikimedia.org/wiki/Special:FilePath/Swords07.jpg?width=360",
      "alt": "Seven of Swords Rider-Waite-Smith card"
    }
  },
  {
    "id": "swords8",
    "name": "宝剑八",
    "englishName": "Eight of Swords",
    "arcana": "minor",
    "suit": "swords",
    "number": "8",
    "keywords": [
      "受困",
      "限制",
      "恐惧",
      "自我设限"
    ],
    "uprightMeaning": "感觉被困，但很多限制来自恐惧和想法。",
    "reversedMeaning": "松绑、看见出口、突破自我限制。",
    "loveMeaning": "关系中觉得无力，需要看见选择权。",
    "careerMeaning": "工作受限，但可先找小出口。",
    "moneyMeaning": "财务焦虑，先列出真实限制。",
    "growthMeaning": "你可能比自己想的更自由。",
    "memoryTip": "宝剑八被绑住，但脚下仍有路。",
    "image": {
      "kind": "rws",
      "src": "https://commons.wikimedia.org/wiki/Special:FilePath/Swords08.jpg?width=360",
      "alt": "Eight of Swords Rider-Waite-Smith card"
    }
  },
  {
    "id": "swords9",
    "name": "宝剑九",
    "englishName": "Nine of Swords",
    "arcana": "minor",
    "suit": "swords",
    "number": "9",
    "keywords": [
      "焦虑",
      "失眠",
      "内疚",
      "压力"
    ],
    "uprightMeaning": "焦虑和内疚加重，脑内反复消耗。",
    "reversedMeaning": "焦虑缓解、愿意求助、走出自责。",
    "loveMeaning": "关系中的担忧和过度想象。",
    "careerMeaning": "压力大，需处理心理负荷。",
    "moneyMeaning": "金钱焦虑，先面对数字而不是想象。",
    "growthMeaning": "把脑内风暴写下来。",
    "memoryTip": "宝剑九是半夜醒来的担心。",
    "image": {
      "kind": "rws",
      "src": "https://commons.wikimedia.org/wiki/Special:FilePath/Swords09.jpg?width=360",
      "alt": "Nine of Swords Rider-Waite-Smith card"
    }
  },
  {
    "id": "swords10",
    "name": "宝剑十",
    "englishName": "Ten of Swords",
    "arcana": "minor",
    "suit": "swords",
    "number": "10",
    "keywords": [
      "结束",
      "低谷",
      "放下",
      "重启前"
    ],
    "uprightMeaning": "一个痛苦阶段到达终点，无法再继续旧模式。",
    "reversedMeaning": "从低谷恢复、结束后的新开始。",
    "loveMeaning": "关系痛点明显，旧方式走到尽头。",
    "careerMeaning": "项目失败或结束，准备重整。",
    "moneyMeaning": "止损，停止继续投入坏局面。",
    "growthMeaning": "已经到底，就不会一直往下。",
    "memoryTip": "宝剑十很痛，但太阳在远处升起。",
    "image": {
      "kind": "rws",
      "src": "https://commons.wikimedia.org/wiki/Special:FilePath/Swords10.jpg?width=360",
      "alt": "Ten of Swords Rider-Waite-Smith card"
    }
  },
  {
    "id": "swords-page",
    "name": "宝剑侍从",
    "englishName": "Page of Swords",
    "arcana": "minor",
    "suit": "swords",
    "number": "page",
    "keywords": [
      "观察",
      "学习",
      "消息",
      "警觉"
    ],
    "uprightMeaning": "好奇、观察、学习新信息，消息和沟通出现。",
    "reversedMeaning": "八卦、草率发言、过度怀疑。",
    "loveMeaning": "想了解对方，可能偷偷观察。",
    "careerMeaning": "适合学习、调研、写作和收集资料。",
    "moneyMeaning": "先查清信息再做决定。",
    "growthMeaning": "保持好奇，也保持礼貌。",
    "memoryTip": "宝剑侍从是拿着剑学习表达的人。",
    "image": {
      "kind": "rws",
      "src": "https://commons.wikimedia.org/wiki/Special:FilePath/Swords11.jpg?width=360",
      "alt": "Page of Swords Rider-Waite-Smith card"
    }
  },
  {
    "id": "swords-knight",
    "name": "宝剑骑士",
    "englishName": "Knight of Swords",
    "arcana": "minor",
    "suit": "swords",
    "number": "knight",
    "keywords": [
      "快速",
      "冲锋",
      "直接",
      "急切"
    ],
    "uprightMeaning": "快速行动、直接表达、强势推进。",
    "reversedMeaning": "鲁莽、攻击性沟通、考虑不周。",
    "loveMeaning": "沟通直接但可能伤人。",
    "careerMeaning": "适合紧急推进，但要检查细节。",
    "moneyMeaning": "冲动决定可能带来损失。",
    "growthMeaning": "快之前，先确认方向。",
    "memoryTip": "宝剑骑士冲得很快，也容易冲过头。",
    "image": {
      "kind": "rws",
      "src": "https://commons.wikimedia.org/wiki/Special:FilePath/Swords12.jpg?width=360",
      "alt": "Knight of Swords Rider-Waite-Smith card"
    }
  },
  {
    "id": "swords-queen",
    "name": "宝剑皇后",
    "englishName": "Queen of Swords",
    "arcana": "minor",
    "suit": "swords",
    "number": "queen",
    "keywords": [
      "清醒",
      "边界",
      "理性",
      "独立"
    ],
    "uprightMeaning": "理性清醒、边界明确、说话直接。",
    "reversedMeaning": "冷漠、尖刻、防御过强。",
    "loveMeaning": "需要清楚表达底线。",
    "careerMeaning": "适合判断、面试、谈判、剪掉无效事务。",
    "moneyMeaning": "理性整理账目和风险。",
    "growthMeaning": "温柔可以有，边界也要有。",
    "memoryTip": "宝剑皇后看得清，也说得清。",
    "image": {
      "kind": "rws",
      "src": "https://commons.wikimedia.org/wiki/Special:FilePath/Swords13.jpg?width=360",
      "alt": "Queen of Swords Rider-Waite-Smith card"
    }
  },
  {
    "id": "swords-king",
    "name": "宝剑国王",
    "englishName": "King of Swords",
    "arcana": "minor",
    "suit": "swords",
    "number": "king",
    "keywords": [
      "权威",
      "逻辑",
      "决策",
      "原则"
    ],
    "uprightMeaning": "逻辑清晰、原则明确、适合做严肃决定。",
    "reversedMeaning": "冷酷、专断、滥用权威。",
    "loveMeaning": "关系中需要理性沟通，别只讲道理。",
    "careerMeaning": "管理、法律、策略、专业判断。",
    "moneyMeaning": "用规则和数据管理财务。",
    "growthMeaning": "清晰是力量，冷酷不是。",
    "memoryTip": "宝剑国王用头脑掌舵。",
    "image": {
      "kind": "rws",
      "src": "https://commons.wikimedia.org/wiki/Special:FilePath/Swords14.jpg?width=360",
      "alt": "King of Swords Rider-Waite-Smith card"
    }
  },
  {
    "id": "pentacles1",
    "name": "星币一",
    "englishName": "Ace of Pentacles",
    "arcana": "minor",
    "suit": "pentacles",
    "number": "ace",
    "keywords": [
      "机会",
      "资源",
      "现实",
      "种子"
    ],
    "uprightMeaning": "现实机会出现，适合开启金钱、工作或健康计划。",
    "reversedMeaning": "机会延迟、资源没落地、错过现实基础。",
    "loveMeaning": "关系有落地发展的可能。",
    "careerMeaning": "新工作、新客户、新技能投资。",
    "moneyMeaning": "新的收入机会或理财起点。",
    "growthMeaning": "把机会种进土里。",
    "memoryTip": "星币一是一颗可以长大的种子。",
    "image": {
      "kind": "rws",
      "src": "https://commons.wikimedia.org/wiki/Special:FilePath/Pents01.jpg?width=360",
      "alt": "Ace of Pentacles Rider-Waite-Smith card"
    }
  },
  {
    "id": "pentacles2",
    "name": "星币二",
    "englishName": "Two of Pentacles",
    "arcana": "minor",
    "suit": "pentacles",
    "number": "2",
    "keywords": [
      "平衡",
      "调度",
      "忙碌",
      "弹性"
    ],
    "uprightMeaning": "在多件事之间调度，保持弹性和平衡。",
    "reversedMeaning": "失衡、忙乱、财务压力。",
    "loveMeaning": "关系和现实事务需要协调。",
    "careerMeaning": "多任务、时间管理、资源调配。",
    "moneyMeaning": "收支波动，需要预算。",
    "growthMeaning": "先稳住节奏。",
    "memoryTip": "星币二是在浪里 juggling 两枚硬币。",
    "image": {
      "kind": "rws",
      "src": "https://commons.wikimedia.org/wiki/Special:FilePath/Pents02.jpg?width=360",
      "alt": "Two of Pentacles Rider-Waite-Smith card"
    }
  },
  {
    "id": "pentacles3",
    "name": "星币三",
    "englishName": "Three of Pentacles",
    "arcana": "minor",
    "suit": "pentacles",
    "number": "3",
    "keywords": [
      "合作",
      "技能",
      "建设",
      "认可"
    ],
    "uprightMeaning": "通过合作和专业技能建设成果。",
    "reversedMeaning": "合作不顺、标准不一、技能不足。",
    "loveMeaning": "关系需要一起建设，而不只靠感觉。",
    "careerMeaning": "团队协作、作品打磨、被专业认可。",
    "moneyMeaning": "靠技能和合作获得收益。",
    "growthMeaning": "让专业说话。",
    "memoryTip": "星币三是在教堂里认真施工。",
    "image": {
      "kind": "rws",
      "src": "https://commons.wikimedia.org/wiki/Special:FilePath/Pents03.jpg?width=360",
      "alt": "Three of Pentacles Rider-Waite-Smith card"
    }
  },
  {
    "id": "pentacles4",
    "name": "星币四",
    "englishName": "Four of Pentacles",
    "arcana": "minor",
    "suit": "pentacles",
    "number": "4",
    "keywords": [
      "守住",
      "安全感",
      "控制",
      "保守"
    ],
    "uprightMeaning": "守住资源、追求安全感，但可能有点紧。",
    "reversedMeaning": "松手、财务失控、或开始愿意分享。",
    "loveMeaning": "关系中占有欲或安全感议题。",
    "careerMeaning": "稳定职位，但可能不愿改变。",
    "moneyMeaning": "储蓄、保守理财，避免过度抓紧。",
    "growthMeaning": "安全感不是把一切攥死。",
    "memoryTip": "星币四抱得太紧，也会累。",
    "image": {
      "kind": "rws",
      "src": "https://commons.wikimedia.org/wiki/Special:FilePath/Pents04.jpg?width=360",
      "alt": "Four of Pentacles Rider-Waite-Smith card"
    }
  },
  {
    "id": "pentacles5",
    "name": "星币五",
    "englishName": "Five of Pentacles",
    "arcana": "minor",
    "suit": "pentacles",
    "number": "5",
    "keywords": [
      "匮乏",
      "困难",
      "求助",
      "孤立"
    ],
    "uprightMeaning": "现实压力、资源不足，容易觉得被排除在外。",
    "reversedMeaning": "接受帮助、困境缓解、重新进入支持系统。",
    "loveMeaning": "关系中有冷落或现实压力。",
    "careerMeaning": "工作和收入压力明显，需要求助。",
    "moneyMeaning": "财务吃紧，先处理基础需求。",
    "growthMeaning": "困难时别独自站在门外。",
    "memoryTip": "星币五提醒：窗里有光，可以求助。",
    "image": {
      "kind": "rws",
      "src": "https://commons.wikimedia.org/wiki/Special:FilePath/Pents05.jpg?width=360",
      "alt": "Five of Pentacles Rider-Waite-Smith card"
    }
  },
  {
    "id": "pentacles6",
    "name": "星币六",
    "englishName": "Six of Pentacles",
    "arcana": "minor",
    "suit": "pentacles",
    "number": "6",
    "keywords": [
      "给予",
      "接受",
      "公平",
      "资源流动"
    ],
    "uprightMeaning": "资源互助、给予与接受、分配问题。",
    "reversedMeaning": "不公平、亏欠、施舍感或拒绝帮助。",
    "loveMeaning": "关系中的付出是否平衡。",
    "careerMeaning": "薪酬、赞助、帮助、资源分配。",
    "moneyMeaning": "收支互助，注意平等。",
    "growthMeaning": "会给，也要会接。",
    "memoryTip": "星币六是一只手给出资源。",
    "image": {
      "kind": "rws",
      "src": "https://commons.wikimedia.org/wiki/Special:FilePath/Pents06.jpg?width=360",
      "alt": "Six of Pentacles Rider-Waite-Smith card"
    }
  },
  {
    "id": "pentacles7",
    "name": "星币七",
    "englishName": "Seven of Pentacles",
    "arcana": "minor",
    "suit": "pentacles",
    "number": "7",
    "keywords": [
      "等待",
      "评估",
      "耐心",
      "收成前"
    ],
    "uprightMeaning": "投入后等待结果，适合评估是否继续。",
    "reversedMeaning": "急躁、回报慢、投入方向需调整。",
    "loveMeaning": "关系需要时间检验。",
    "careerMeaning": "项目进入观察期，看数据和成果。",
    "moneyMeaning": "长期投资要有耐心。",
    "growthMeaning": "别每天挖开土看种子长没长。",
    "memoryTip": "星币七是站在田边等收成。",
    "image": {
      "kind": "rws",
      "src": "https://commons.wikimedia.org/wiki/Special:FilePath/Pents07.jpg?width=360",
      "alt": "Seven of Pentacles Rider-Waite-Smith card"
    }
  },
  {
    "id": "pentacles8",
    "name": "星币八",
    "englishName": "Eight of Pentacles",
    "arcana": "minor",
    "suit": "pentacles",
    "number": "8",
    "keywords": [
      "练习",
      "技能",
      "专注",
      "积累"
    ],
    "uprightMeaning": "通过重复练习提升技能，踏实积累会看到成果。",
    "reversedMeaning": "厌倦重复、粗心、缺少耐心，或努力方向需要调整。",
    "loveMeaning": "关系需要认真经营，不只是感觉。",
    "careerMeaning": "适合学习技能、打磨作品、稳定提升。",
    "moneyMeaning": "靠专业能力和持续投入带来收入。",
    "growthMeaning": "每天一点点，你会真的变强。",
    "memoryTip": "星币八就是你现在做这个产品的牌。",
    "image": {
      "kind": "rws",
      "src": "https://commons.wikimedia.org/wiki/Special:FilePath/Pents08.jpg?width=360",
      "alt": "Eight of Pentacles Rider-Waite-Smith card"
    }
  },
  {
    "id": "pentacles9",
    "name": "星币九",
    "englishName": "Nine of Pentacles",
    "arcana": "minor",
    "suit": "pentacles",
    "number": "9",
    "keywords": [
      "独立",
      "富足",
      "享受",
      "成果"
    ],
    "uprightMeaning": "独立、优雅地享受自己积累的成果。",
    "reversedMeaning": "依赖、过度消费、表面富足。",
    "loveMeaning": "独立自爱，不急着依附关系。",
    "careerMeaning": "专业成果和个人价值被看见。",
    "moneyMeaning": "财务独立、生活品质提升。",
    "growthMeaning": "你可以享受自己努力来的东西。",
    "memoryTip": "星币九是站在花园里的独立感。",
    "image": {
      "kind": "rws",
      "src": "https://commons.wikimedia.org/wiki/Special:FilePath/Pents09.jpg?width=360",
      "alt": "Nine of Pentacles Rider-Waite-Smith card"
    }
  },
  {
    "id": "pentacles10",
    "name": "星币十",
    "englishName": "Ten of Pentacles",
    "arcana": "minor",
    "suit": "pentacles",
    "number": "10",
    "keywords": [
      "家族",
      "长期",
      "资产",
      "传承"
    ],
    "uprightMeaning": "长期稳定、家庭资产、制度和传承。",
    "reversedMeaning": "家庭财务压力、长期结构不稳。",
    "loveMeaning": "适合谈长期关系、家庭和现实规划。",
    "careerMeaning": "成熟组织、稳定平台、长期成果。",
    "moneyMeaning": "资产、房产、储蓄、长期规划。",
    "growthMeaning": "把眼光放到更长的时间里。",
    "memoryTip": "星币十是现实世界的长期稳定。",
    "image": {
      "kind": "rws",
      "src": "https://commons.wikimedia.org/wiki/Special:FilePath/Pents10.jpg?width=360",
      "alt": "Ten of Pentacles Rider-Waite-Smith card"
    }
  },
  {
    "id": "pentacles-page",
    "name": "星币侍从",
    "englishName": "Page of Pentacles",
    "arcana": "minor",
    "suit": "pentacles",
    "number": "page",
    "keywords": [
      "学习",
      "机会",
      "踏实",
      "技能"
    ],
    "uprightMeaning": "认真学习现实技能，新的工作或金钱机会萌芽。",
    "reversedMeaning": "懒散、拖延、只想不练。",
    "loveMeaning": "关系中愿意慢慢了解和经营。",
    "careerMeaning": "适合学习课程、考证、打基础。",
    "moneyMeaning": "小额收入机会，需踏实执行。",
    "growthMeaning": "慢慢学，真的会有结果。",
    "memoryTip": "星币侍从是认真捧着种子的人。",
    "image": {
      "kind": "rws",
      "src": "https://commons.wikimedia.org/wiki/Special:FilePath/Pents11.jpg?width=360",
      "alt": "Page of Pentacles Rider-Waite-Smith card"
    }
  },
  {
    "id": "pentacles-knight",
    "name": "星币骑士",
    "englishName": "Knight of Pentacles",
    "arcana": "minor",
    "suit": "pentacles",
    "number": "knight",
    "keywords": [
      "稳定",
      "耐心",
      "执行",
      "可靠"
    ],
    "uprightMeaning": "稳定推进、认真执行、速度慢但可靠。",
    "reversedMeaning": "停滞、固执、效率低或过度保守。",
    "loveMeaning": "关系进展慢，但有责任感。",
    "careerMeaning": "适合长期项目、流程化执行。",
    "moneyMeaning": "稳健理财，不适合急功近利。",
    "growthMeaning": "慢不是问题，不动才是问题。",
    "memoryTip": "星币骑士走得慢，但会走到。",
    "image": {
      "kind": "rws",
      "src": "https://commons.wikimedia.org/wiki/Special:FilePath/Pents12.jpg?width=360",
      "alt": "Knight of Pentacles Rider-Waite-Smith card"
    }
  },
  {
    "id": "pentacles-queen",
    "name": "星币皇后",
    "englishName": "Queen of Pentacles",
    "arcana": "minor",
    "suit": "pentacles",
    "number": "queen",
    "keywords": [
      "照顾",
      "现实",
      "丰盛",
      "安全"
    ],
    "uprightMeaning": "现实照顾、稳定资源、让生活变得舒适。",
    "reversedMeaning": "过度操心、物质焦虑、忽略自己。",
    "loveMeaning": "踏实温暖的照顾和陪伴。",
    "careerMeaning": "适合运营、管理生活型业务、照顾团队。",
    "moneyMeaning": "财务稳健，重视生活品质。",
    "growthMeaning": "照顾别人时，也把自己算进去。",
    "memoryTip": "星币皇后让日子真正过起来。",
    "image": {
      "kind": "rws",
      "src": "https://commons.wikimedia.org/wiki/Special:FilePath/Pents13.jpg?width=360",
      "alt": "Queen of Pentacles Rider-Waite-Smith card"
    }
  },
  {
    "id": "pentacles-king",
    "name": "星币国王",
    "englishName": "King of Pentacles",
    "arcana": "minor",
    "suit": "pentacles",
    "number": "king",
    "keywords": [
      "稳定",
      "财富",
      "管理",
      "成就"
    ],
    "uprightMeaning": "成熟稳定的资源管理，事业和财富成果。",
    "reversedMeaning": "贪婪、保守、过度物质化。",
    "loveMeaning": "可靠稳定，但可能不够浪漫。",
    "careerMeaning": "管理资产、经营事业、长期成功。",
    "moneyMeaning": "财务成熟，适合长期配置。",
    "growthMeaning": "真正的富足是能稳定承载生活。",
    "memoryTip": "星币国王是把资源经营成王国的人。",
    "image": {
      "kind": "rws",
      "src": "https://commons.wikimedia.org/wiki/Special:FilePath/Pents14.jpg?width=360",
      "alt": "King of Pentacles Rider-Waite-Smith card"
    }
  }
];
