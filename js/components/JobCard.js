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