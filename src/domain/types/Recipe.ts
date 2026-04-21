export type Category =
  | 'Pratos Principais'
  | 'Sobremesas'
  | 'Saladas'
  | 'Bebidas'
  | 'Entradas';

export interface Recipe {
  id: number;
  imagem: string;
  caracteristica: string;
  titulo: string;
  dificuldade: string;
  categoria: Category;
  culinaria: string;
  tempo_preparo: string; 
  dica_chefe: string;
}