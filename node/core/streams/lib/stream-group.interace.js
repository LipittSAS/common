(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.StreamGroupType = void 0;
    ;
    var StreamGroupType;
    (function (StreamGroupType) {
        StreamGroupType["DEFAULT"] = "default";
        StreamGroupType["PLAYGROUND"] = "playground";
    })(StreamGroupType || (exports.StreamGroupType = StreamGroupType = {}));
});
//# sourceMappingURL=stream-group.interace.js.map