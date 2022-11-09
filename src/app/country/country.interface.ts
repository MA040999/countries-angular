interface IFlag {
    svg: string,
    png: string
}

interface IName {
    official: string,
    common: string,
}

export interface ICountry {
    flags: IFlag,
    name: IName,
    population: number,
    region: string,
    capital: string[],
}