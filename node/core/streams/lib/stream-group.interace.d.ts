import { Stream } from "./stream.interface";
export interface StreamGroup {
    id: string;
    name: string;
    streams: Stream[];
}
