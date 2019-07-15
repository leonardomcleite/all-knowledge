export class PaginatorModel {
  limit: number;
  offset: number;
  orderBy: string;
  searchBy: string;
  first: number = 0;
  totalElements: number;
  numberElements: number;
  content: Array<any>;
}
