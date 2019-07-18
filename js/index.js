const Footer = require("./layout/Footer.js");
const Head = require("./layout/Head.js");
const Navbar = require("./layout/Navbar.js");

const Focus = require("./Focus.js");
const TechArticle = require("./TechArticle");
const Salon = require("./Salon");
const Job = require("./Job");

class Main {
    constructor(id) {
        const wrapper = document.getElementById(id);
        this.wrapper = wrapper;
    }

    createHeader() {
        const headInit = { src: "./img/header.png", alt: "header", id: "head", class: "header" };
        let header = new Head(headInit);
        this.wrapper.appendChild(header.init());
    }

    createNav() {
        const navConf = [
            {
                id: "index",
                name: "首页"
            }, {
                id: "dry",
                name: "技术干货"
            }, {
                id: "salon",
                name: "技术沙龙"
            }, {
                id: "job",
                name: "最新职位"
            }, {
                id: "contact",
                name: "联系我们"
            }
        ];
        let navbar = new Navbar(navConf);
        this.wrapper.appendChild(navbar.init());
    }

    createFooter() {
        const footerInit = { src: "./img/header.png", alt: "footer", id: "foot", class: "footer" };
        let footer = new Footer(footerInit);
        this.wrapper.appendChild(footer.init());
    }

    createFocus() {
        let contentPropa = new Focus({
            title: "宣传",
            dataList: [
                {
                    "src": "./img/propaganda.png",
                    "alt": "propa"
                }
            ]
        });
        this.content.appendChild(contentPropa.init());
    }

    createTechArticle() {
        const dryConf = [
            {
                title: "浅谈nodejs在编程的应用",
                time: "2019-06-11",
                author: "桃子",
                desc: "携程在2019年9月份正式上线node.js应用，本文主要介绍近两年node.js技术栈....",
                category: "技术栈",
                img: {
                    src: "./img/dry1.png",
                    alt: "dry1"
                }
            },
            {
                title: "全球顶级算法赛事",
                time: "2019-06-11",
                author: "桃子",
                desc: "随着人工智能和大数据的飞快发展，推荐系统几年来非常流行....",
                category: "技术栈",
                img: {
                    src: "./img/dry2.png",
                    alt: "dry2"
                }
            },
            {
                title: "云时代携程的网络架构变迁",
                time: "2019-06-11",
                author: "桃子",
                desc: "本文介绍技术栈云时代计算以来携程在私有云和公有云上的几代网络解决方案，希望这些",
                category: "计算",
                img: {
                    src: "./img/dry3.png",
                    alt: "dry3"
                }
            },
            {
                title: "小程序开发背后的黑科技",
                time: "2019-06-11",
                author: "桃子",
                desc: "本文将分享携程，本文主要介绍近两年node.js技术栈....",
                category: "技术栈",
                img: {
                    src: "./img/dry4.png",
                    alt: "dry4"
                }
            }
        ];
        let contentDry = new TechArticle({
            title: "技术干货",
            dataList: dryConf
        });
        this.content.appendChild(contentDry.init());
    }

    createSalon() {
        const salonConf = [
            {
                title: "浅谈nodejs在编程的应用",
                time: "2019-06-11",
                author: "桃子",
                desc: "携程在2019年9月份正式上线node.js应用，本文主要介绍近两年node.js技术栈....",
                category: "技术栈",
                img: {
                    src: "./img/salon1.png",
                    alt: "salon1"
                }
            },
            {
                title: "全球顶级算法赛事",
                time: "2019-06-11",
                author: "桃子",
                desc: "随着人工智能和大数据的飞快发展，推荐系统几年来非常流行....",
                category: "技术栈",
                img: {
                    src: "./img/salon2.png",
                    alt: "salon2"
                }
            },
            {
                title: "云时代携程的网络架构变迁",
                time: "2019-06-11",
                author: "桃子",
                desc: "本文介绍技术栈云时代计算以来携程在私有云和公有云上的几代网络解决方案，希望这些",
                category: "计算",
                img: {
                    src: "./img/salon3.png",
                    alt: "salon3"
                }
            }
        ];
        let contentSalon = new Salon({
            title: "技术沙龙-往期回顾",
            dataList: salonConf
        });
        this.content.appendChild(contentSalon.init());
    }

    createJob() {
        const jobConf = [
            {
                title: "高级/资深网络工程师",
                time: "2019-06-11",
                category: "运维",
            },
            {
                title: "网络工程师",
                time: "2019-06-11",
                category: "运维",
            },
            {
                title: "技术支持工程师",
                time: "2019-05-26",
                category: "运维",
            },
            {
                title: "elasticSearch工程师",
                time: "2019-06-14",
                category: "运维",
            },
            {
                title: "技术支持工程师",
                time: "2019-05-26",
                category: "运维",
            },
            {
                title: "elasticSearch工程师",
                time: "2019-06-14",
                category: "运维",
            },
            {
                title: "技术支持工程师",
                time: "2019-05-26",
                category: "运维",
            },
            {
                title: "elasticSearch工程师",
                time: "2019-06-14",
                category: "运维",
            },
            {
                title: "elasticSearch工程师",
                time: "2019-06-14",
                category: "运维",
            }
        ];
        let contentJob = new Job({
            title: "人才招聘",
            dataList: jobConf
        });
        this.content.appendChild(contentJob.init());
    }


    init() {
        this.createHeader();
        this.createNav();        
        
        let content = document.createElement("div");
        content.classList.add("main");
        this.content = content;

        this.createFocus();
        this.createTechArticle();
        this.createSalon();
        this.createJob();
        this.wrapper.appendChild(this.content);

        this.createFooter();
    }
}

const app = new Main("app");
app.init();