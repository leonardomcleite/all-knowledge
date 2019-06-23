export class ParamsPagination {
  offset: number;
  limit: number;
  orderBy: string;
  orderByName: string;
  searchBy = null;

  first = 0;
  rows;

  constructor(offset: number, limit: number, orderBy: string, orderByName: string) {
    this.offset = offset;
    this.limit = limit;
    this.orderBy = orderBy;
    this.orderByName = orderByName;
  }
}
