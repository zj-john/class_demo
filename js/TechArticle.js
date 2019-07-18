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