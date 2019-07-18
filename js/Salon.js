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


