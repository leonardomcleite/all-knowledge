export class CountriesModel {
  thumbnail: string;
  codeLanguage: string;
  fullName: string;
  shortName: string;

  constructor(thumbnail: string, codeLanguage: string, fullName: string, shortName: string) {
    this.thumbnail = thumbnail;
    this.codeLanguage = codeLanguage;
    this.fullName = fullName;
    this.shortName = shortName;
  }

}
