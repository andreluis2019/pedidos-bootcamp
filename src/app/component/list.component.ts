export abstract class ListComponent<T> {
  loading = false;
  lista: T[];
  cols: any[];

  protected constructor() {
  }
}
