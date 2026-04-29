export interface TopicItem {
  title: string;
  time: number;
  description: string;
}

interface DisciplineGroup {
  discipline: string;
  items: TopicItem[];
}

export type DisciplinesData = DisciplineGroup[];