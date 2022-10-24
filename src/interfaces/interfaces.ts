export interface IPais {
    name: string;
  }
export interface ICountry {
    area: string;
    name:{
        common:string,
        official:string;
    }
    flags:{
        png:string;
    }
  }