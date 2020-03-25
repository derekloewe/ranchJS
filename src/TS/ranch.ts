"use strict";

class ranch {
    constructor(selector) {
        this.selector = document.querySelector(selector);
    }

    html (content = null){
        if(content !== null){
            this.selector.innerHTML = content;
        }
        return this.selector.innerHTML;
    };
}

