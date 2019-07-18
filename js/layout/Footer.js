const utils = require("./../services/utils.js");
class Footer {
    constructor(initData){
        let {src, alt, ...props} = initData;
        this.src = src || "./img/404.png";
        this.alt = alt;
        this.defaultProps = props;
    }

    createImg() {
        const img = document.createElement("img");
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
        let footer = document.createElement("footer");
        const img = this.createImg();
        footer.appendChild(img);
        utils.setStyle(footer, {
            height: "50px"
        });
        return footer;
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


module.exports = Footer;