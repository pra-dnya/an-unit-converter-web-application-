
import React from 'react';
import { Unit } from '../types';

interface UnitInputProps {
  label: string;
  value: string;
  onValueChange: (value: string) => void;
  selectedUnit: string;
  onUnitChange: (unit: string) => void;
  units: Unit[];
  isReadOnly?: boolean;
}

const UnitInput: React.FC<UnitInputProps> = ({
  label,
  value,
  onValueChange,
  selectedUnit,
  onUnitChange,
  units,
  isReadOnly = false,
}) => {
  return (
    <div className="flex flex-col space-y-2">
      <label className="text-sm font-medium text-gray-400">{label}</label>
      <div className="flex items-stretch rounded-lg shadow-sm bg-gray-900 border border-gray-700 focus-within:ring-2 focus-within:ring-indigo-500 transition-shadow">
        <input
          type="number"
          value={value}
          onChange={(e) => onValueChange(e.target.value)}
          readOnly={isReadOnly}
          className={`w-full p-3 text-2xl text-white bg-transparent outline-none appearance-none [moz-appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none ${isReadOnly ? 'cursor-default' : ''}`}
          placeholder="0"
        />
        <div className="border-l border-gray-700">
          <select
            value={selectedUnit}
            onChange={(e) => onUnitChange(e.target.value)}
            className="h-full bg-gray-800 text-white p-3 rounded-r-lg outline-none cursor-pointer hover:bg-gray-700 transition-colors appearance-none"
            aria-label={`Select unit for ${label}`}
          >
            {units.map((unit) => (
              <option key={unit.symbol} value={unit.symbol}>
                {unit.name} ({unit.symbol})
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default UnitInput;
