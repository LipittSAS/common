export var MediaStatus;
(function (MediaStatus) {
    MediaStatus["uploaded"] = "uploaded";
    MediaStatus["awaitingProcessing"] = "awaiting_process";
    MediaStatus["processing"] = "processing";
    MediaStatus["ready"] = "ready";
    MediaStatus["downloaded"] = "downloaded";
    MediaStatus["stopped"] = "stopped";
    MediaStatus["error"] = "error";
})(MediaStatus || (MediaStatus = {}));
//remove task from queue if processing , 
//# sourceMappingURL=media-status.enum.js.map