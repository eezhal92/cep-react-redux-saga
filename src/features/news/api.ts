export type NewsItem = {
  id: number;
  title: string;
}

export function getNews() : Promise<NewsItem[]> {
  return Promise.resolve([
    { id: 1, title: 'abc' },
    { id: 2, title: 'def' },
  ]);
}
