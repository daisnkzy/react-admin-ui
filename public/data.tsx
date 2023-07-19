export const menu = [
  {
    id: 1,
    title: '常用',
    listItems: [
      {
        id: 1,
        title: '主页  ✅',
        url: '/',
        icon: 'home.svg',
      },
      {
        id: 2,
        title: '文件',
        url: '/users/1',
        icon: 'user.svg',
      },
    ],
  },
  {
    id: 2,
    title: '列表',
    listItems: [
      {
        id: 1,
        title: '用户',
        url: '/users',
        icon: 'user.svg',
      },
      {
        id: 2,
        title: '产品',
        url: '/products',
        icon: 'product.svg',
      },
      {
        id: 3,
        title: '订单',
        url: '/orders',
        icon: 'order.svg',
      },
      {
        id: 4,
        title: '邮件',
        url: '/posts',
        icon: 'post2.svg',
      },
    ],
  },
  {
    id: 3,
    title: '一般设置',
    listItems: [
      {
        id: 1,
        title: '其他',
        url: '/',
        icon: 'element.svg',
      },
      {
        id: 2,
        title: '笔记',
        url: '/',
        icon: 'note.svg',
      },
      {
        id: 3,
        title: '表格',
        url: '/',
        icon: 'form.svg',
      },
      {
        id: 4,
        title: '日历',
        url: '/',
        icon: 'calendar.svg',
      },
    ],
  },
  {
    id: 4,
    title: '后台',
    listItems: [
      {
        id: 1,
        title: '设置',
        url: '/',
        icon: 'setting.svg',
      },
      {
        id: 2,
        title: '数据',
        url: '/',
        icon: 'backup.svg',
      },
    ],
  },
  {
    id: 5,
    title: '分析',
    listItems: [
      {
        id: 1,
        title: '图表',
        url: '/',
        icon: 'chart.svg',
      },
      {
        id: 2,
        title: '品牌',
        url: '/',
        icon: 'log.svg',
      },
    ],
  },
];

export const topDealUsers = [
  {
    id: 1,
    img: 'https://images.pexels.com/photos/8405873/pexels-photo-8405873.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load',
    username: '章三',
    email: 'hello@gmail.com',
    amount: '3.668',
  },
  {
    id: 2,
    img: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1600',
    username: '章三',
    email: 'hello@gmail.com',
    amount: '3.256',
  },
  {
    id: 3,
    img: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1600',
    username: '莉丝',
    email: 'hello@gmail.com',
    amount: '2.998',
  },
  {
    id: 4,
    img: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1600',
    username: '晚雾',
    email: 'hello@gmail.com',
    amount: '2.512',
  },
  {
    id: 5,
    img: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1600',
    username: '朝气',
    email: 'hello@gmail.com',
    amount: '2.134',
  },
  {
    id: 6,
    img: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1600',
    username: '笋黎',
    email: 'hello@gmail.com',
    amount: '1.932',
  },
  {
    id: 7,
    img: 'https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg?auto=compress&cs=tinysrgb&w=1600',
    username: '二蛋',
    email: 'hello@gmail.com',
    amount: '1.560',
  },
];

export const chartBoxUser = {
  color: '#8884d8',
  icon: '/userIcon.svg',
  title: '用户量',
  number: '11.238',
  dataKey: '人数',
  percentage: 45,
  chartData: [
    { 日期: 'Sun', 人数: 400 },
    { 日期: 'Mon', 人数: 600 },
    { 日期: 'Tue', 人数: 500 },
    { 日期: 'Wed', 人数: 700 },
    { 日期: 'Thu', 人数: 400 },
    { 日期: 'Fri', 人数: 500 },
    { 日期: 'Sat', 人数: 450 },
  ],
};

export const chartBoxProduct = {
  color: 'skyblue',
  icon: '/productIcon.svg',
  title: '产品',
  number: '238',
  dataKey: '个数',
  percentage: 21,
  chartData: [
    { 日期: 'Sun', 个数: 400 },
    { 日期: 'Mon', 个数: 600 },
    { 日期: 'Tue', 个数: 500 },
    { 日期: 'Wed', 个数: 700 },
    { 日期: 'Thu', 个数: 400 },
    { 日期: 'Fri', 个数: 500 },
    { 日期: 'Sat', 个数: 450 },
  ],
};
export const chartBoxRevenue = {
  color: 'teal',
  icon: '/revenueIcon.svg',
  title: '回报率',
  number: '$56.432',
  dataKey: '回报',
  percentage: -12,
  chartData: [
    { 日期: 'Sun', 回报: 400 },
    { 日期: 'Mon', 回报: 600 },
    { 日期: 'Tue', 回报: 500 },
    { 日期: 'Wed', 回报: 700 },
    { 日期: 'Thu', 回报: 400 },
    { 日期: 'Fri', 回报: 500 },
    { 日期: 'Sat', 回报: 450 },
  ],
};
export const chartBoxConversion = {
  color: 'gold',
  icon: '/conversionIcon.svg',
  title: '总比例',
  number: '2.6',
  dataKey: '比例',
  percentage: 12,
  chartData: [
    { 日期: 'Sun', 比例: 400 },
    { 日期: 'Mon', 比例: 600 },
    { 日期: 'Tue', 比例: 500 },
    { 日期: 'Wed', 比例: 700 },
    { 日期: 'Thu', 比例: 400 },
    { 日期: 'Fri', 比例: 500 },
    { 日期: 'Sat', 比例: 450 },
  ],
};

export const barChartBoxRevenue = {
  title: '收益',
  color: '#8884d8',
  dataKey: '收益',
  chartData: [
    {
      日期: 'Sun',
      收益: 4000,
    },
    {
      日期: 'Mon',
      收益: 3000,
    },
    {
      日期: 'Tue',
      收益: 2000,
    },
    {
      日期: 'Wed',
      收益: 2780,
    },
    {
      日期: 'Thu',
      收益: 1890,
    },
    {
      日期: 'Fri',
      收益: 2390,
    },
    {
      日期: 'Sat',
      收益: 3490,
    },
  ],
};

export const barChartBoxVisit = {
  title: '访问率',
  color: '#FF8042',
  dataKey: '访问',
  chartData: [
    {
      日期: 'Sun',
      访问: 4000,
    },
    {
      日期: 'Mon',
      访问: 3000,
    },
    {
      日期: 'Tue',
      访问: 2000,
    },
    {
      日期: 'Wed',
      访问: 2780,
    },
    {
      日期: 'Thu',
      访问: 1890,
    },
    {
      日期: 'Fri',
      访问: 2390,
    },
    {
      日期: 'Sat',
      访问: 3490,
    },
  ],
};
