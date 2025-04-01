export interface Metadata<T> {
    take: number;
    skip: number;
    total: number;
    filters?: Record<keyof T, unknown>;
}
