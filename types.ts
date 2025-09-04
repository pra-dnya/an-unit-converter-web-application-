
export enum ConversionCategory {
  Length = 'Length',
  Weight = 'Weight',
  Temperature = 'Temperature',
}

export interface Unit {
  name: string;
  symbol: string;
}
