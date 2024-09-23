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
    exports.ConstantUtils = void 0;
    class ConstantUtils {
    }
    exports.ConstantUtils = ConstantUtils;
    // see for email max length https://www.rfc-editor.org/errata/eid1690
    ConstantUtils.emailMaxLength = 320;
    ConstantUtils.nameMaxLength = 64;
    ConstantUtils.identifierMaxLength = 64;
    ConstantUtils.urlMaxLength = 255;
    ConstantUtils.hashLength = 128;
    ConstantUtils.basicHashMaxLength = 64;
    ConstantUtils.localeMaxLength = 35;
    ConstantUtils.uuidLength = 36;
    ConstantUtils.version = 'v1';
    ConstantUtils.supportedVideoMimeTypes = ['video/mp4', 'video/mpeg', 'video/quicktime', 'video/x-msvideo'];
    ConstantUtils.supportedAudioMimeTypes = ['audio/mp3', 'audio/flac', 'audio/wav'];
});
//# sourceMappingURL=constants.utils.js.map