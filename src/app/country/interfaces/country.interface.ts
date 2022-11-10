interface IFlag {
    svg: string,
    png: string
}

interface IName {
    official: string,
    common: string,
}

interface ICurrency {
    name: string,
    symbol: string,
}

interface INativeName {
    nativeName: {
        [key: string]: IName
    }
}

interface ICountryName extends IName, INativeName {}

export interface ICountry {
    flags: IFlag,
    name: ICountryName,
    population: number,
    region: string,
    subregion: string,
    capital: string[],
    tld: string[],
    currencies: {
        [key: string]: ICurrency
    },
    languages: {
        [key: string]: string
    },
    borders: string[],
}

export interface ITransformedCountry {
    currencies: string[];
    languages: string[];
    flags: IFlag;
    name: IName & {
        nativeName: IName
    };
    population: number;
    region: string;
    subregion: string;
    capital: string[];
    tld: string[];
    borders: string[];
}