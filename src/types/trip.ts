export interface Trip {
  id?: string;
  startDate: Date;
  endDate: Date;
  title: string;
  description: string;
  price: number;
  imageUrl: string;
  thumbnailUrl?: string;
  cancelled?: boolean;
}
