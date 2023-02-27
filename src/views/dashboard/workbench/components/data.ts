interface GroupItem {
  title: string;
  icon: string;
  color: string;
  desc: string;
  date: string;
  group: string;
  link: string;
}

interface NavItem {
  title: string;
  icon: string;
  color: string;
  link: string;
}

interface DynamicInfoItem {
  avatar: string;
  name: string;
  date: string;
  desc: string;
}

export const navItems: NavItem[] = [
  {
    title: '首页',
    icon: 'ion:home-outline',
    color: '#1fdaca',
    link: '/dashboard/workbench',
  },
  {
    title: '系统管理',
    icon: 'ion:settings-outline',
    color: '#3fb27f',
    link: '/system/account',
  },
  {
    title: '工具集',
    icon: 'ion:grid-outline',
    color: '#bf0c2c',
    link: '/util/picture',
  },
  {
    title: '角色管理',
    icon: 'ion:layers-outline',
    color: '#e18525',
    link: '/system/role',
  },
  {
    title: '消息中心',
    icon: 'ion:key-outline',
    color: '#4daf1bc9',
    link: '/message/publish',
  },
  {
    title: '文档处理',
    icon: 'ion:bar-chart-outline',
    color: '#00d8ff',
    link: '/util/document',
  },
];

export const dynamicInfoItems: DynamicInfoItem[] = [
  {
    avatar: 'dynamic-avatar-1|svg',
    name: '威廉',
    date: '刚刚',
    desc: `在 <a>开源组</a> 创建了项目 <a>Vue</a>`,
  },
  {
    avatar: 'dynamic-avatar-2|svg',
    name: '艾文',
    date: '1个小时前',
    desc: `关注了 <a>威廉</a> `,
  },
  {
    avatar: 'dynamic-avatar-3|svg',
    name: '克里斯',
    date: '1天前',
    desc: `发布了 <a>个人动态</a> `,
  },
  {
    avatar: 'dynamic-avatar-4|svg',
    name: 'Vbox',
    date: '2天前',
    desc: `发表文章 <a>如何编写一个Vite插件</a> `,
  },
  {
    avatar: 'dynamic-avatar-5|svg',
    name: '皮特',
    date: '3天前',
    desc: `回复了 <a>杰克</a> 的问题 <a>如何进行项目优化？</a>`,
  },
  {
    avatar: 'dynamic-avatar-6|svg',
    name: '杰克',
    date: '1周前',
    desc: `关闭了问题 <a>如何运行项目</a> `,
  },
  {
    avatar: 'dynamic-avatar-1|svg',
    name: '威廉',
    date: '1周前',
    desc: `发布了 <a>个人动态</a> `,
  },
  {
    avatar: 'dynamic-avatar-1|svg',
    name: '威廉',
    date: '2021-04-01 20:00',
    desc: `推送了代码到 <a>Github</a>`,
  },
];

export const groupItems: GroupItem[] = [
  {
    title: 'Github',
    icon: 'carbon:logo-github',
    color: '',
    desc: 'Build software better, together.',
    group: '开源社区',
    date: '2022-12-21',
    link: 'https://github.com/bboyHan/',
  },
  {
    title: 'Vue',
    icon: 'ion:logo-vue',
    color: '#3fb27f',
    desc: '渐进式 JavaScript 框架',
    group: 'Vue.js',
    date: '2022-12-21',
    link: 'https://cn.vuejs.org/',
  },
  {
    title: 'Html5',
    icon: 'ion:logo-html5',
    color: '#e18525',
    desc: 'HyperText Markup Language 5',
    group: 'HTML5',
    date: '2022-12-21',
    link: 'https://html5.org/',
  },
  {
    title: 'Angular',
    icon: 'ion:logo-angular',
    color: '#bf0c2c',
    desc: 'AngularJS是一个应用设计框架与开发平台。',
    group: 'AngularJS',
    date: '2022-12-21',
    link: 'https://angular.cn/',
  },
  {
    title: 'React',
    icon: 'bx:bxl-react',
    color: '#00d8ff',
    desc: '用于构建用户界面的JavaScript库',
    group: 'Web框架',
    date: '2022-12-21',
    link: 'https://reactjs.org/',
  },
  {
    title: 'Js',
    icon: 'ion:logo-javascript',
    color: '#4daf1bc9',
    desc: '一种具有函数优先的轻量级，解释型或即时编译型的编程语言。',
    group: 'Java Script',
    date: '2022-12-21',
    link: 'https://www.javascript.com/',
  },
  {
    title: 'Tencent',
    icon: 'tencent|svg',
    color: '#4daf1bc9',
    desc: '中国领先的在线视频媒体平台。',
    group: '腾讯视频',
    date: '2022-12-21',
    link: 'https://v.qq.com/',
  },
  {
    title: 'iQiYi',
    icon: 'iQiYi|svg',
    color: '#4daf1bc9',
    desc: '拥有海量、优质、高清的网络视频的大型视频网站。',
    group: '爱奇艺视频',
    date: '2022-12-21',
    link: 'https://www.iqiyi.com/',
  },
];
