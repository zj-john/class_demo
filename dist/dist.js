(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const BaseContent = require("./components/BaseContent");
class Focus extends BaseContent{
    constructor(initData) {
        super(initData)
        const {title , dataList = []} = initData;
        this.itemList = dataList;
        this.title = title;
    }

    createTitle() {
        let divElem = document.createElement("div");
        divElem.classList.add("title");

        let spanLeftElem = document.createElement("span");
        spanLeftElem.classList.add("left");
        spanLeftElem.innerHTML = "&nbsp;&nbsp;" + this.title;
        divElem.appendChild(spanLeftElem);

        let spanRightElem = document.createElement("span");
        spanRightElem.classList.add("right");
        divElem.appendChild(spanRightElem);

        let moreLeftElem = document.createElement("span");
        moreLeftElem.classList.add("lunbo-btn");
        moreLeftElem.innerHTML = "<"
        spanRightElem.appendChild(moreLeftElem);
        let moreRightElem = document.createElement("span");
        moreRightElem.classList.add("lunbo-btn");
        moreRightElem.innerHTML = ">"
        spanRightElem.appendChild(moreRightElem);
        divElem.appendChild(spanRightElem);

        let hr = document.createElement("hr");
        divElem.appendChild(hr);

        return divElem;
    }

    createContent() {
        let { src: paperImgSrc, alt: paperImgAlt } = this.itemList[0];
        let divElem = document.createElement("div");
        divElem.classList.add("propaganda-content");
        let imgElem = document.createElement("img");
        imgElem.src = paperImgSrc;
        imgElem.alt = paperImgAlt;
        divElem.appendChild(imgElem);
        return divElem;
    }
}

module.exports = Focus;



},{"./components/BaseContent":6}],2:[function(require,module,exports){
const BaseContent = require("./components/BaseContent");
const JobCard = require("./components/JobCard");

class Job extends BaseContent{
    constructor(initData){
        super(initData);
        const { dataList = []} = initData;
        this.itemList = dataList;
    }
    
    createContent() {
        let jobElem = document.createElement("div");
        jobElem.classList.add("job-content");
        let groupBy = [];
        for(var i=0,len=this.itemList.length;i<len;i+=3){
            groupBy.push(this.itemList.slice(i,i+3));
        }     
        groupBy.map((items)=>{
            let itemRow = document.createElement("div");
            itemRow.classList.add("recruitment-item-row");
            items.forEach((i)=>{
                let jobPaper = new JobCard(i);
                let divElem = jobPaper.init();
                itemRow.appendChild(divElem);
            })  
            jobElem.appendChild(itemRow);
        });
        return jobElem;
    }
}

module.exports = Job;



},{"./components/BaseContent":6,"./components/JobCard":7}],3:[function(require,module,exports){
const BaseContent = require("./components/BaseContent");
const SalonCard = require("./components/SalonCard");

class Salon extends BaseContent{
    constructor(initData){
        super(initData);
        const {dataList = []} = initData;
        this.itemList = dataList;
    }

    createContent() {
        let dryElem = document.createElement("div");
        dryElem.classList.add("salon-content");
        this.itemList.map((item)=>{
            let dryPaper = new SalonCard(item);
            let divElem = dryPaper.init();
            dryElem.appendChild(divElem);
        });
        return dryElem;
    }
}

module.exports = Salon;



},{"./components/BaseContent":6,"./components/SalonCard":8}],4:[function(require,module,exports){
const BaseContent = require("./components/BaseContent");
const TechArticleCard = require("./components/TechArticleCard");

class TechArticle extends BaseContent{
    constructor(initData) {
        super(initData);
        const {dataList = []} = initData;
        this.itemList = dataList;
    }

    createContent() {
        let dryElem = document.createElement("div");
        dryElem.classList.add("dry-content");
        this.itemList.map((item)=>{
            let dryPaper = new TechArticleCard(item);
            let divElem = dryPaper.init();
            dryElem.appendChild(divElem);
        });
        return dryElem;
    }
}

module.exports = TechArticle;
},{"./components/BaseContent":6,"./components/TechArticleCard":9}],5:[function(require,module,exports){
const utils = require("../services/utils.js");

class BaseCard {
    constructor(initData) {
        let {img, title, desc, author, category, time} = initData;
        this.img = img;
        this.title = title;
        this.desc = desc;
        this.author = author;
        this.category = category;
        this.time = time;
    }

    createImg() {
        let img = document.createElement("img");
        utils.setAttr(img, {
            src: this.img.src || "./img/404.png",
            alt: this.img.alt || ""
        });
        return img;
    }

    createTitle() {
        let title_wrapper = document.createElement("div");
        let title = document.createElement("span");
        title.innerHTML = this.title;
        title_wrapper.appendChild(title);
        return title_wrapper;
    }

    createDesc() {
        let desc_wrapper = document.createElement("div");
        let desc = document.createElement("span");
        desc.innerHTML = this.desc;
        desc_wrapper.appendChild(desc);
        return desc_wrapper;
    }

    createAuthor() {
        let author_wrapper = document.createElement("div");
        let author = document.createElement("span");
        author.innerHTML = this.author;
        author_wrapper.appendChild(author);
        return author_wrapper;
    }

    createTime() {
        let time_wrapper = document.createElement("div");
        let time = document.createElement("span");
        time.innerHTML = this.time;
        time_wrapper.appendChild(time);
        return time_wrapper;
    }

    createCategory() {
        let category_wrapper = document.createElement("div");
        let category = document.createElement("span");
        category.innerHTML = this.category;
        category_wrapper.appendChild(category);
        return category_wrapper;
    }
}

module.exports = BaseCard;
},{"../services/utils.js":14}],6:[function(require,module,exports){
class BaseContent {
    constructor(initData) {
        const {title, dataList = []} = initData;
        this.title = title;
        this.itemList = dataList;
    }

    createTitle() {        
        let divElem = document.createElement("div");
        divElem.classList.add("title");

        let spanLeftElem = document.createElement("span");
        spanLeftElem.classList.add("left");
        spanLeftElem.innerHTML = "&nbsp;&nbsp;" + this.title;
        divElem.appendChild(spanLeftElem);

        let spanRightElem = document.createElement("span");
        spanRightElem.classList.add("right");
        divElem.appendChild(spanRightElem);

        let moreElem = document.createElement("a");
        moreElem.classList.add("detail");
        moreElem.innerHTML = "More";
        spanRightElem.appendChild(moreElem);        
        divElem.appendChild(spanRightElem); 
        
        let hr = document.createElement("hr");
        divElem.appendChild(hr);

        return divElem;
    }


    createContent() {
        throw new Error("需要重写");
    }

    init() {
        let wrapper = document.createElement("div");
        wrapper.appendChild(this.createTitle());
        wrapper.appendChild(this.createContent());
        return wrapper;
    }
}

module.exports = BaseContent;
},{}],7:[function(require,module,exports){
let BaseCard = require("./BaseCard.js");

class JobCard extends BaseCard{
    constructor(initData) {
        super(initData);
    }

    init() {
        let wrapper = document.createElement("div");
        wrapper.classList.add("recruitment-item");

        let title = this.createTitle();
        wrapper.appendChild(title);
       

        let time = this.createTime();
        time.classList.add("recruitmet-time");
        wrapper.appendChild(time);


        let category = this.createCategory();
        category.classList.add("recruitmet-type");
        wrapper.appendChild(category);  

        return wrapper;
    }

}

module.exports = JobCard;
},{"./BaseCard.js":5}],8:[function(require,module,exports){
let BaseCard = require("./BaseCard.js");

class SalonCard extends BaseCard{
    constructor(initData) {
        super(initData);
    }

    init() {
        let wrapper = document.createElement("div");
        wrapper.classList.add("salon-item");

        let img = this.createImg();
        img.classList.add("salon-img");
        wrapper.appendChild(img);       

        return wrapper;
    }

}

module.exports = SalonCard;
},{"./BaseCard.js":5}],9:[function(require,module,exports){
let BaseCard = require("./BaseCard.js");

class TechArticleCard extends BaseCard{
    constructor(initData) {
        super(initData);
    }

    init() {
        let wrapper = document.createElement("div");
        wrapper.classList.add("dry-item");

        let img = this.createImg();
        wrapper.appendChild(img);

        let title = this.createTitle();
        wrapper.appendChild(title);

        let time = this.createTime();
        time.classList.add("time");
        wrapper.appendChild(time);

        let author = this.createAuthor();
        author.classList.add("owner");
        wrapper.appendChild(author);

        let desc = this.createDesc();
        desc.classList.add("description");
        wrapper.appendChild(desc);

        let category = this.createCategory();
        category.classList.add("talkElem");
        wrapper.appendChild(category);

        return wrapper;
    }

}

module.exports = TechArticleCard;
},{"./BaseCard.js":5}],10:[function(require,module,exports){
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
},{"./Focus.js":1,"./Job":2,"./Salon":3,"./TechArticle":4,"./layout/Footer.js":11,"./layout/Head.js":12,"./layout/Navbar.js":13}],11:[function(require,module,exports){
const utils = require("./../services/utils.js");
class Footer {
    constructor(initData){
        let {src, alt, ...props} = initData;
        this.src = src || "./img/404.png";
        this.alt = alt;
        this.defaultProps = props;
    }

    createImg() {
        const img = document.createElement("img");
        utils.setAttr(img, {
            src: this.src,
            alt: this.alt
        });
        utils.setStyle(img, {
            style: "100%"
        });
        return img;
    }

    init() {
        let footer = document.createElement("footer");
        const img = this.createImg();
        footer.appendChild(img);
        utils.setStyle(footer, {
            height: "50px"
        });
        return footer;
    }

    setSrc(src){
        this.src = src;
    }

    setAlt(src){
        this.alt = alt;
    }

    error(){
        
    }
}


module.exports = Footer;
},{"./../services/utils.js":14}],12:[function(require,module,exports){
const utils = require("./../services/utils.js");

class Head {
    constructor(initData){
        let {src, alt, ...props} = initData;
        this.src = src || "./img/404.png";
        this.alt = alt;
        this.defaultProps = props;
    }

    createImg() {
        let img = document.createElement("img");
        utils.setAttr(img, {
            src: this.src,
            alt: this.alt
        });
        utils.setStyle(img, {
            style: "100%"
        });
        return img;
    }


    init() {
        let head = document.createElement("header");
        const img = this.createImg();
        head.appendChild(img);
        utils.setStyle(head, {
            marginBottom: "-4px"
        });
        return head;
    }

    setSrc(src){
        this.src = src;
    }

    setAlt(src){
        this.alt = alt;
    }

    error(){
        
    }
}


module.exports = Head;
},{"./../services/utils.js":14}],13:[function(require,module,exports){
const utils = require("./../services/utils.js");

class Navbar {
    constructor(initData) {
        this.nav = initData || [];
    }

    setNav(nav) {
        this.nav = nav;
    }

    createNavItem(item) {
        let liElem = document.createElement("li");        
        let aElem = document.createElement("a");
        utils.setAttr(aElem, {
            id: item.id            
        });
        aElem.innerHTML = item.name;
        liElem.appendChild(aElem);
        return liElem;
    }

    init() {
        let ulElem = document.createElement("ul");
        ulElem.classList.add("link");
        this.nav.map((item) => {
            const liElem = this.createNavItem(item);
            ulElem.appendChild(liElem);
        });
        return ulElem;
    }
}

module.exports = Navbar;
},{"./../services/utils.js":14}],14:[function(require,module,exports){
const setAttr = function(dom, obj) {
    for(k in obj) {
        dom.setAttribute(k, obj[k]);
    }
}

const setStyle = function(dom ,obj) {
    for(k in obj) {
        dom.style[k] = obj[k]
    }
}

module.exports = { setAttr, setStyle };
},{}]},{},[10]);
