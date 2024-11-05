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
    exports.StreamState = void 0;
    var StreamState;
    (function (StreamState) {
        StreamState["active"] = "active";
        StreamState["paused"] = "paused";
        StreamState["stopper"] = "stopped";
    })(StreamState || (exports.StreamState = StreamState = {}));
    ;
});
//# sourceMappingURL=stream-state.enum.js.map