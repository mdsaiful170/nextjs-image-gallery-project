export type CatagoryType = 'photo' | 'vector';
export interface ImageTyepe {
  id: string;
  name: string;
  url: string;
  catagory: categoryType;
  liks: number;
  shares: number;
}

export type IconP = { color: string; w: number; h: number };
