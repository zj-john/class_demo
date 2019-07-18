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