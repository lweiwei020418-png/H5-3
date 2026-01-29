/**
 * 2026考研政治祈福报喜H5 - 配置文件
 * 集中管理所有图片路径和跳转链接，方便后续修改
 */

// 图片路径配置
export const IMAGES = {
  // 首页相关图片
  HOME: {
    LOGO: '', // 品牌logo
    BANNER: '', // 首页横幅
    BACKGROUND: '', // 背景图片
  },
  
  // 页面相关图片
  PAGES: {
    // 祈福页面图片
    WISH: {
      ICON: '', // 祈福图标
      BACKGROUND: '', // 祈福页面背景
    },
    
    // 查分页面图片
    CHECK_SCORE: {
      ICON: '', // 查分图标
      BACKGROUND: '', // 查分页面背景
    },
    
    // 评价页面图片
    EVALUATE: {
      TEACHER: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=600&h=400&auto=format&fit=crop', // 名师图片
      BACKGROUND: '', // 评价页面背景
    },
    
    // 报喜页面图片
    REPORT: {
      ICON: '', // 报喜图标
      BACKGROUND: '', // 报喜页面背景
      QR_CODE: '', // 微信二维码
    },
  },
  
  // 按钮和图标
  BUTTONS: {
    SUBMIT: '', // 提交按钮图标
    SHARE: '', // 分享按钮图标
    UPLOAD: '', // 上传按钮图标
    NEXT: '', // 下一步按钮图标
    PREVIOUS: '', // 上一步按钮图标
  },
  
  // 分享缩略图
  SHARE: {
    THUMBNAIL: '', // 分享时的缩略图
  },
};

// 跳转链接配置
export const LINKS = {
  // 内页跳转
  PAGES: {
    HOME: '/', // 首页
    WISH: '/', // 祈福页面
    CHECK_SCORE: '/', // 查分页面
    EVALUATE: '/', // 评价页面
    REPORT: '/', // 报喜页面
    ADMIN: '/admin.html', // 管理后台
  },
  
  // 外部链接
  EXTERNAL: {
    // 官方链接
    OFFICIAL: {
      EDUCATION: 'https://yz.chsi.com.cn/apply/cjcx/', // 研招网查分链接
    },
    
    // 课程链接
    COURSES: {
      PUBLIC: 'https://ke.youdao.com/', // 公开课链接
      RECOMMEND: '', // 推荐课程链接
    },
    
    // 社交媒体链接
    SOCIAL: {
      WECHAT: '', // 微信公众号
      WEIBO: '', // 微博
      BILIBILI: '', // B站
    },
  },
  
  // 按钮链接
  BUTTONS: {
    SUBMIT: '', // 提交按钮链接
    SHARE: '', // 分享按钮链接
    UPLOAD: '', // 上传按钮链接
    NEXT: '', // 下一步按钮链接
    PREVIOUS: '', // 上一步按钮链接
    CONTACT: '', // 联系我们链接
  },
};

// 文字内容配置
export const TEXT = {
  // 页面标题
  TITLES: {
    HOME: '2026考研祈福墙', // 首页标题
    WISH: '2026考研祈福墙', // 祈福页面标题
    CHECK_SCORE: '查分时刻 · 梦想开启', // 查分页面标题
    EVALUATE: '名师护航 感谢有你', // 评价页面标题
    REPORT: '有道报喜台', // 报喜页面标题
  },
  
  // 页面副标题
  SUBTITLES: {
    HOME: 'MAY ALL YOUR WISHES TRUE', // 首页副标题
    WISH: 'MAY ALL YOUR WISHES TRUE', // 祈福页面副标题
    CHECK_SCORE: '这一刻，所有的汗水都将凝结成光', // 查分页面副标题
    EVALUATE: '感谢恩师，一路相伴', // 评价页面副标题
    REPORT: '分享喜悦，传递好运', // 报喜页面副标题
  },
  
  // 按钮文字
  BUTTONS: {
    SUBMIT: '提交祈福心愿', // 提交按钮
    SHARE: '分享沾好运', // 分享按钮
    UPLOAD: '上传图片', // 上传按钮
    NEXT: '继续查分之旅', // 下一步按钮
    PREVIOUS: '返回上一页', // 上一步按钮
    CONTACT: '联系我们', // 联系我们按钮
    PUBLIC_COURSE: '立即预约', // 公开课预约按钮
  },
  
  // 提示文字
  TIPS: {
    UPLOAD_SUCCESS: '✅ 图片上传成功！', // 上传成功提示
    SUBMIT_SUCCESS: '提交成功！祝你考研顺利~', // 提交成功提示
    SHARE_SUCCESS: '分享成功！愿好运与你相伴~', // 分享成功提示
    SYNC_SUCCESS: '祈福成功！心愿已同步至祈福墙。', // 同步成功提示
    PLEASE_UPLOAD: '请上传图片格式的文件！', // 上传格式提示
    PLEASE_FILL: '请填写内容后提交！', // 填写提示
  },
};

// 其他配置
export const CONFIG = {
  // 管理员配置
  ADMIN: {
    PASSWORD: 'youdao_admin_888', // 管理后台密码
  },
  
  // 云开发配置
  CLOUD: {
    ENV: 'wangyiyoudao-2gtormrfa2378fc7', // 云开发环境ID
  },
  
  // 助教联系方式
  ASSISTANT: {
    WECHAT: 'YoudaoKaoYan66', // 助教微信号
    QR_CODE_PLACEHOLDER: '微信二维码放置区', // 二维码占位文字
  },
  
  // 跑马灯文字
  MARQUEE_TEXT: '上传截图得《复试题库》 | 上传录屏最高领【全额免单】奖学金 | 转发再领10元课程券',
  
  // 奖励配置
  REWARDS: {
    FIRST_PRIZE: '录屏被选中进入宣传片，享万元奖学金池分红或全额免单。', // 一等奖
    SECOND_PRIZE: '上传有效成绩截图，立得《2026复试面试真题库》。', // 二等奖
    THIRD_PRIZE: '发布心愿卡并分享，得10元考研课程优惠券。', // 三等奖
  },
};

// 默认导出所有配置
export default {
  IMAGES,
  LINKS,
  TEXT,
  CONFIG,
};
