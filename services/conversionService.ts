
import { ConversionCategory } from '../types';
import { CONVERSION_FACTORS } from '../constants';

const convertLengthOrWeight = (value: number, fromUnit: string, toUnit: string): number => {
  const fromFactor = CONVERSION_FACTORS[fromUnit];
  const toFactor = CONVERSION_FACTORS[toUnit];

  if (fromFactor === undefined || toFactor === undefined) {
    return NaN;
  }

  const valueInBaseUnit = value * fromFactor;
  return valueInBaseUnit / toFactor;
};

const convertTemperature = (value: number, fromUnit: string, toUnit: string): number => {
  if (fromUnit === toUnit) {
    return value;
  }

  let valueInCelsius: number;

  // First, convert to Celsius
  switch (fromUnit) {
    case '°F':
      valueInCelsius = (value - 32) * 5 / 9;
      break;
    case 'K':
      valueInCelsius = value - 273.15;
      break;
    case '°C':
    default:
      valueInCelsius = value;
      break;
  }

  // Then, convert from Celsius to target unit
  switch (toUnit) {
    case '°F':
      return (valueInCelsius * 9 / 5) + 32;
    case 'K':
      return valueInCelsius + 273.15;
    case '°C':
    default:
      return valueInCelsius;
  }
};


export const convert = (
  value: number,
  fromUnit: string,
  toUnit: string,
  category: ConversionCategory
): number => {
  if (isNaN(value)) {
    return 0;
  }

  switch (category) {
    case ConversionCategory.Length:
    case ConversionCategory.Weight:
      return convertLengthOrWeight(value, fromUnit, toUnit);
    case ConversionCategory.Temperature:
      return convertTemperature(value, fromUnit, toUnit);
    default:
      return NaN;
  }
};
