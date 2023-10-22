import { Metadata } from "./metadata.interface";

export interface ListResponse<T> {
    items: T[];
    metadata: Metadata<T>;
}