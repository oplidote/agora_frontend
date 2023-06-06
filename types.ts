export interface PostType {
  id: number;
  category: string;
  writer: string;
  content: string;
  password: string;
}
export interface DataType {
  postDtos: PostType[];
  projectDto: {
    createDt: string;
    id: number;
    name: string;
    title: string;
    type1: string;
    type2: string;
    type3: string;
    updateDt: string;
  };
}
