export interface SearchQuery {
  raw: string;
  interpreted?: {
    grade?: string;
    learningArea?: string;
    strand?: string;
    resourceType?: string;
    intent?: string;
  };
}

export interface SearchResult {
  id: string;
  title: string;
  description: string;
  type: string;
  grade: string;
  learningArea: string;
  qualityScore?: number;
  downloads: number;
  rating: number;
  views: number;
  authorName: string;
  createdAt: any;
}
