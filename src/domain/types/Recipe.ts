export type Category =
  | 'Pratos Principais'
  | 'Sobremesas'
  | 'Saladas'
  | 'Bebidas'
  | 'Entradas';

export type Tags = 
  | 'Raízes do Brasil' 
  | 'explorar o mundo' 
  | 'Express' 
  | 'Plant Based' 
  | 'Mar & Rio'
  | 'Churrasco & Brasa';
export interface Recipe {
  id: number;
  imagem: string;
  caracteristica: string;
  titulo: string;
  dificuldade: 'Fácil' | 'Médio' | 'Dificíl';
  categoria: Category;
  culinaria: string;
  tempo_preparo: number;
  tags: Tags[];
  dica_chefe: string;
}