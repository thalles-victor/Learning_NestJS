export type dataAuthor = {
  id: number;
  name: string;
  recipes: dataRecipes[];
  createdAt: Date;
};

export type dataRecipes = {
  id: number;
  name: string;
  author: string;
  authorId: number;
};
