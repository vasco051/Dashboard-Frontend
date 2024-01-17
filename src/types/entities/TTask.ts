export type TTask = {
  id: number;
  title: string;
  description: string | null;
  category: {
    name: string,
    color: string
  };
}