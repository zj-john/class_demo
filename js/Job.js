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


