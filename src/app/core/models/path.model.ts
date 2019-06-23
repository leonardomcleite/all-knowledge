export class PathModel {
  public paths: string[];
  public base: string;

  public constructor(base?: string, paths: string[] = []) {
    this.base = base;
    this.paths = paths.slice();
  }

  public create(path: string): PathModel {
    return new PathModel(this.base).append(path);
  }

  public append(path: string | any): PathModel {
    const newPaths: string[] = this.paths.slice();

    if (!(typeof path === 'string')) {
      path = '' + path;
    }

    if (path) {
      (path).trim().split('/').forEach(subpath => {
        if (subpath) {
          newPaths[newPaths.length++] = subpath;
        }
      });
    }

    return new PathModel(this.base, newPaths);
  }

  public toString(): string {
    let url = '';

    this.paths.forEach(path => {
      if (path) {
        path = path.replace(/\{.*\}/g, ''); // Limpa variáveis não preenchidas
        url += '/'.concat(path);
      }
    });
    return this.base + url;
  }
}
