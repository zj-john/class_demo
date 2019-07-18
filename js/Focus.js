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


