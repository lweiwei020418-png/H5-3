
import React from 'react';

export const COLORS = {
  MAIN_RED: '#991B1B',
  GOLD: '#FFD700',
  SOFT_GOLD: '#FCD34D'
};

export const INITIAL_CONFIG = {
  adminPassword: 'youdao_admin_888', // 管理员登录密码
  global: {
    brandName: '网易有道考研',
    shareAlertText: '正在生成专属上岸链接...\n请点击右上角分享给研友，好运翻倍！'
  },
  wishPage: {
    title: '2026考研祈福墙',
    subTitle: 'MAY ALL YOUR WISHES TRUE',
    mainHeading: ['写下心愿', '高分上岸'],
    publicCourse: {
      title: '出分公开课',
      desc: '有道名师团·出分避坑指南',
      buttonText: '立即预约',
      link: 'https://ke.youdao.com/' // 占位链接，后续可手动补充
    },
    syncSuccessAlert: '祈福成功！心愿已同步至祈福墙。'
  },
  checkScorePage: {
    heading: '查分时刻 · 梦想开启',
    description: '这一刻，所有的汗水都将凝结成光。记录下你开启成绩单的真实瞬间，',
    rewardHighlight: '查分后返回本页面报喜，可瓜分万元礼金！',
    officialLink: 'https://yz.chsi.com.cn/apply/cjcx/',
    dialogTitle: '查完分了吗？',
    dialogDesc: '上传素材即可领取【复试面试真题库】+ 参与瓜分万元奖学金！'
  },
  evaluatePage: {
    heading: '名师护航 感谢有你',
    teacherImg: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=600&h=400&auto=format&fit=crop',
    teacherTag: '有道政治名师团 · 倾情守护'
  },
  reportPage: {
    heading: '有道报喜台',
    marqueeText: '上传截图得《复试题库》 | 上传录屏最高领【全额免单】奖学金 | 转发再领10元课程券',
    assistantWx: 'YoudaoKaoYan66',
    qrCodePlaceholder: '微信二维码放置区'
  }
};

// 统计初始化数据
export const INITIAL_STATS = {
  impressions: 0,
  shares: 0,
  wishSubmits: 0,
  reportSubmits: 0,
  stageReach: {
    WISH: 0,
    CHECK: 0,
    EVALUATE: 0,
    REPORT: 0
  }
};

export const POSTER_TEMPLATES = [
  { 
    id: 1, 
    title: '超常发挥', 
    color: 'bg-[#1a432e]', 
    subText: 'ACHIEVE VICTORY', 
    bottomLeft: '马到成功', 
    bottomRight: 'WIN SUCCESS', 
    accent: '#d4af37',
    textColor: 'text-[#d4af37]' 
  },
  { 
    id: 2, 
    title: '金榜题名', 
    color: 'bg-[#f4e6d4]', 
    subText: 'SUCCEED IN AN EXAM', 
    bottomLeft: 'KEEP TRYING', 
    bottomRight: 'GET EASIER', 
    darkText: true,
    accent: '#8b2b2b',
    textColor: 'text-[#8b2b2b]' 
  },
  { 
    id: 3, 
    title: '考神保佑', 
    color: 'bg-[#2a3a6a]', 
    subText: 'GOD BLESS', 
    bottomLeft: 'IS A CHANGE', 
    bottomRight: 'FOR BETTER', 
    accent: '#e9c46a',
    textColor: 'text-[#e9c46a]' 
  },
  { 
    id: 4, 
    title: '逢考必过', 
    color: 'bg-[#a32626]', 
    subText: 'BREEZE THROUGH THE EXAMS', 
    bottomLeft: 'GOOD LUCK', 
    bottomRight: 'GOOD LUCK', 
    accent: '#f4d35e',
    textColor: 'text-[#f4d35e]' 
  }
];
