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