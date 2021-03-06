

export default {
    // 页面title
    title: "徵烨 - 灵徵之烨",
    // 社交链接
    social: {
        github: "https://github.com/hziye",
        twitter: "https://twitter.com/manerfan_china",
        linkedin: "https://www.linkedin.com/in/%E6%B0%B8%E6%B0%B8-%E6%A8%8A-705071104/",
    },
    // banner页
    banner: {
        anchor: {
            id: "banner",
            icon: "home",
            name: "首页",
        },
        title: "灵徵之烨",
        desc: [
            "我一直等待着",
            "某一天",
            "能听到",
            "你的名字",
        ],
    },
    // 正文
    // 不要修改各模块的 anchor.id
    // 通过display控制模块是否展示
    // 通过列表顺序控制模块展示顺序
    modules: [
        // 关于页
        {
            display: true,
            anchor: {
                id: "about",
                icon: "user",
                name: "关于"
            },
            header: {
                title: "information",
                subtitle: "about me",
            },
            content: {
                name: "徵烨",
                desc: [
                    "灵徵之兆",
                    "烨然之人",
                ],
                md: "鄙人徵烨，生于广东，苦读十二载，后求学于广州~\
        \n『**修德、博学、求实、创新**』这是母校给予的八字真言，四年本科生涯，良师益友收获颇多~\
        \n工作两载，游刃于前端与后台，迈步于产品，力争上游，望不负公司所托~",
            },
            // key - value 数量及内容完全自定义，链接自动识别
            keys: {
                "主页": "http://192.168.0.103:8080",
                "博客": "https://blog.csdn.net/hgy1329852351"
            },
        },
        // 履历
        {
            display: true,
            anchor: {
                id: "experience",
                icon: "idcard",
                name: "经历"
            },
            header: {
                title: "experience",
                subtitle: "my experience",
            },
            cards: [
                {
                    title: "广东省建筑科学研究院集团股份有限公司",
                    //subtitle: "2020-04 至 今",
                    md: "<!--**<u>助理研发工程师</u>**-->\
          \n\
          \n建科院是我职业生涯一座明亮的灯塔，于迷雾中指引我前进的方向，\
          \n很高兴能在此遇到各位优秀的技术大佬、算法大牛、营销大咖、谋断大神，物联鬼才，\
          \n很荣幸能与你们一起开启产品室的新篇章\
          "
                },
                {
                    title: "广东亿迅科技有限公司",
                    //subtitle: "2019-07 至 2020-04",
                    md: "<!--**<u>开发工程师</u>**-->\
          \n\
          \n做为应届生，很感激亿迅给了我一个由学生慢慢转化为职场人的空间，\
          \n但由于个人职场定位原因，不得不离开公司，虽万般不舍，但亦无悔，\
          \n我会铭记亿迅这个大家庭给予我的每一份温暖，祝尚在亿迅的诸君，一切安好",
                },
                {
                    title: "华南农业大学",
                    subtitle: "2015-09 至 2019-06",
                    md: "**<u>本科生</u>**\
          \n\
          \n<!--**专业**：计算机科学与技术-->\
          \n\
          \n第一次背井离乡，一个人背着两大袋行李，坐着大巴车,\
          \n于凌晨，等待着太阳的升起，和领我进入校园的，那个她，\
          \n踏进校园的那一刻，有激动，有惶恐，身如一叶轻舟，眼前尽是茫然，\
          \n四年象牙塔生活甘甜中带着点苦涩，当面包车带着行李和我驶出校门的那一刻，才发现自己竟是如此的不舍",
                },
            ],
        },
        // 博客页
        {
            display: true,
            anchor: {
                id: "blog",
                icon: "profile",
                name: "日常",
            },
            header: {
                title: "daily sharing",
                subtitle: "latest daily sharing",
            },
            blog: "https://blog.csdn.net/hgy1329852351",
            rss: "",
        },
    ],
}