
  export interface SourceCategory {
      id: number;
      name: string;
  }

  export interface Article {
      sourceID: number;
      id: number;
      showOnHomepage: boolean;
      title: string;
      description: string;
      urlToImage: string;
      publishedAt: Date;
      content: string;
      category: SourceCategory
  }

  export interface News {
      status: string;
      sourceCategory: SourceCategory[];
      articles: Article[];
  }


