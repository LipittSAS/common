export enum MediaStatus {
    uploaded = 'uploaded',
    awaitingProcessing = 'awaiting_process',
    processing = 'processing',
    ready = 'ready',
    downloaded = 'downloaded',
    stopped = 'stopped',
    error = 'error'
}

//remove task from queue if processing , 