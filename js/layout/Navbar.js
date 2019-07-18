const utils = require("./../services/utils.js");

class Navbar {
    constructor(initData) {
        this.nav = initData || [];
    }

    setNav(nav) {
        this.nav = nav;
    }

    createNavItem(item) {
        let liElem = document.createElement("li");        
        let aElem = document.createElement("a");
        utils.setAttr(aElem, {
            id: item.id            
        });
        aElem.innerHTML = item.name;
        liElem.appendChild(aElem);
        return liElem;
    }

    init() {
        let ulElem = document.createElement("ul");
        ulElem.classList.add("link");
        this.nav.map((item) => {
            const liElem = this.createNavItem(item);
            ulElem.appendChild(liElem);
        });
        return ulElem;
    }
}

module.exports = Navbar;