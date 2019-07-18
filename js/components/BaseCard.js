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