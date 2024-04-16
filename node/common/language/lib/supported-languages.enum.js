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
    exports.SupportedLanguages = void 0;
    var SupportedLanguages;
    (function (SupportedLanguages) {
        SupportedLanguages["frFR"] = "fr-FR";
        SupportedLanguages["frCA"] = "fr-CA";
        SupportedLanguages["enUS"] = "en-US";
        SupportedLanguages["enGB"] = "en-GB";
        SupportedLanguages["enCA"] = "en-CA";
        SupportedLanguages["enAU"] = "en-AU";
        SupportedLanguages["ja"] = "ja";
        SupportedLanguages["zh"] = "zh";
        SupportedLanguages["de"] = "de";
        SupportedLanguages["hi"] = "hi";
        SupportedLanguages["ko"] = "ko";
        SupportedLanguages["ptBR"] = "pt-BR";
        SupportedLanguages["ptPT"] = "pt-PT";
        SupportedLanguages["it"] = "it";
        SupportedLanguages["esES"] = "es-ES";
        SupportedLanguages["esMX"] = "es-MX";
        SupportedLanguages["id"] = "id";
        SupportedLanguages["nl"] = "nl";
        SupportedLanguages["tr"] = "tr";
        SupportedLanguages["tlPH"] = "tl-PH";
        SupportedLanguages["pl"] = "pl";
        SupportedLanguages["svSE"] = "sv-SE";
        SupportedLanguages["bg"] = "bg";
        SupportedLanguages["ro"] = "ro";
        SupportedLanguages["arXA"] = "ar-XA";
        SupportedLanguages["arSA"] = "ar-SA";
        SupportedLanguages["arAE"] = "ar-AE";
        SupportedLanguages["csCZ"] = "cs-CZ";
        SupportedLanguages["elGR"] = "elGR";
        SupportedLanguages["fi"] = "fi";
        SupportedLanguages["hr"] = "hr";
        SupportedLanguages["msMY"] = "ms-MY";
        SupportedLanguages["sk"] = "sk";
        SupportedLanguages["daDK"] = "da-DK";
        SupportedLanguages["taIN"] = "ta-IN";
        SupportedLanguages["ukUA"] = "uk-UA";
    })(SupportedLanguages || (exports.SupportedLanguages = SupportedLanguages = {}));
});
//# sourceMappingURL=supported-languages.enum.js.map