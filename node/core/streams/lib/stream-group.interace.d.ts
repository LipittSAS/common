import { Stream } from "./stream.interface";
export interface StreamGroup {
    id: string;
    name: string;
    streams: Stream[];
    type: StreamGroupType;
}
export declare enum StreamGroupType {
    DEFAULT = "default",
    PLAYGROUND = "playground"
}
