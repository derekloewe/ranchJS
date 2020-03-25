"use strict";
var ranch = /** @class */ (function () {
    function ranch(selector) {
        this.selector = document.querySelector(selector);
    }
    ranch.prototype.html = function (content) {
        if (content === void 0) { content = null; }
        if (content !== null) {
            this.selector.innerHTML = content;
        }
        return this.selector.innerHTML;
    };
    ;
    return ranch;
}());
