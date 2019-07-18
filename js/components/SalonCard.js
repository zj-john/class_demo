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