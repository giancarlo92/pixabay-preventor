import { Hit } from "./Hit.interface";

export interface SearchResponse {
    total:     number;
    totalHits: number;
    hits:      Hit[];
}