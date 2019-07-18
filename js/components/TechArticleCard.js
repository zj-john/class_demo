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