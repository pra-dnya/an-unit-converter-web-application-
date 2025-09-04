
import React, { useState, useMemo, useEffect } from 'react';
import { ConversionCategory } from './types';
import { CATEGORIES, UNITS } from './constants';
import { convert } from './services/conversionService';
import CategoryTabs from './components/CategoryTabs';
import UnitInput from './components/UnitInput';
import SwapButton from './components/SwapButton';

const App: React.FC = () => {
  const [category, setCategory] = useState<ConversionCategory>(ConversionCategory.Length);
  const [fromValue, setFromValue] = useState<string>('1');
  const [fromUnit, setFromUnit] = useState<string>(UNITS[category][0].symbol);
  const [toUnit, setToUnit] = useState<string>(UNITS[category][1].symbol);

  const handleCategoryChange = (newCategory: ConversionCategory) => {
    setCategory(newCategory);
    const newUnits = UNITS[newCategory];
    setFromUnit(newUnits[0].symbol);
    setToUnit(newUnits[1].symbol);
    setFromValue('1');
  };
  
  const toValue = useMemo(() => {
    const value = parseFloat(fromValue);
    if (isNaN(value)) {
      return '';
    }
    const result = convert(value, fromUnit, toUnit, category);
    // Format to a reasonable number of decimal places
    return parseFloat(result.toFixed(5)).toString();
  }, [fromValue, fromUnit, toUnit, category]);

  const handleSwap = () => {
    const currentToUnit = toUnit;
    const currentFromUnit = fromUnit;
    setToUnit(currentFromUnit);
    setFromUnit(currentToUnit);
    setFromValue(toValue);
  };
  
  const currentUnits = UNITS[category];

  useEffect(() => {
    // Ensure units are valid for the current category, preventing mismatches on initial load or state changes.
    if (!currentUnits.some(u => u.symbol === fromUnit)) {
      setFromUnit(currentUnits[0].symbol);
    }
    if (!currentUnits.some(u => u.symbol === toUnit)) {
      setToUnit(currentUnits[1].symbol);
    }
  }, [category, fromUnit, toUnit, currentUnits]);


  return (
    <div className="bg-gray-900 min-h-screen flex flex-col items-center justify-center p-4 text-white font-sans">
        <div className="w-full max-w-2xl mx-auto">
            <header className="text-center mb-10">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white">Unit Converter</h1>
                <p className="mt-2 text-lg text-gray-400">Fast and reliable conversions at your fingertips.</p>
            </header>

            <main className="bg-gray-800/50 backdrop-blur-sm p-6 md:p-8 rounded-2xl border border-gray-700 shadow-2xl shadow-indigo-900/20">
                <CategoryTabs 
                    categories={CATEGORIES}
                    activeCategory={category}
                    onCategoryChange={handleCategoryChange}
                />
                
                <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] md:items-center gap-4">
                    <UnitInput 
                        label="From"
                        value={fromValue}
                        onValueChange={setFromValue}
                        selectedUnit={fromUnit}
                        onUnitChange={setFromUnit}
                        units={currentUnits}
                    />
                    
                    <div className="md:mt-8">
                      <SwapButton onClick={handleSwap} />
                    </div>

                    <UnitInput 
                        label="To"
                        value={toValue}
                        onValueChange={() => {}} // Read-only, so no-op
                        selectedUnit={toUnit}
                        onUnitChange={setToUnit}
                        units={currentUnits}
                        isReadOnly
                    />
                </div>
            </main>

            <footer className="text-center mt-10 text-gray-500 text-sm">
                <p>Powered by React & Tailwind CSS</p>
            </footer>
        </div>
    </div>
  );
};

export default App;
