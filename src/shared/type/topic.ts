export interface TopicItem {
  time: number;
  description: string;
}

interface DisciplineGroup {
  discipline: string;
  items: TopicItem[];
}

export type DisciplinesData = DisciplineGroup[];
