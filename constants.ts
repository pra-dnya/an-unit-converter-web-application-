
import { ConversionCategory, Unit } from './types';

export const CATEGORIES: ConversionCategory[] = [
  ConversionCategory.Length,
  ConversionCategory.Weight,
  ConversionCategory.Temperature,
];

export const UNITS: Record<ConversionCategory, Unit[]> = {
  [ConversionCategory.Length]: [
    { name: 'Meters', symbol: 'm' },
    { name: 'Kilometers', symbol: 'km' },
    { name: 'Centimeters', symbol: 'cm' },
    { name: 'Millimeters', symbol: 'mm' },
    { name: 'Miles', symbol: 'mi' },
    { name: 'Yards', symbol: 'yd' },
    { name: 'Feet', symbol: 'ft' },
    { name: 'Inches', symbol: 'in' },
  ],
  [ConversionCategory.Weight]: [
    { name: 'Kilograms', symbol: 'kg' },
    { name: 'Grams', symbol: 'g' },
    { name: 'Milligrams', symbol: 'mg' },
    { name: 'Pounds', symbol: 'lb' },
    { name: 'Ounces', symbol: 'oz' },
  ],
  [ConversionCategory.Temperature]: [
    { name: 'Celsius', symbol: '°C' },
    { name: 'Fahrenheit', symbol: '°F' },
    { name: 'Kelvin', symbol: 'K' },
  ],
};

// Base units: meter (m) for length, kilogram (kg) for weight
export const CONVERSION_FACTORS: Record<string, number> = {
  // Length
  m: 1,
  km: 1000,
  cm: 0.01,
  mm: 0.001,
  mi: 1609.34,
  yd: 0.9144,
  ft: 0.3048,
  in: 0.0254,
  // Weight
  kg: 1,
  g: 0.001,
  mg: 0.000001,
  lb: 0.453592,
  oz: 0.0283495,
};
