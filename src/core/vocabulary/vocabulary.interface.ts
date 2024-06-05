export interface Vocabulary {
    id: string;
    terms: string[];
    userId: string;
}
export interface UpdateVocabularyRequest {
    terms: string[];
}