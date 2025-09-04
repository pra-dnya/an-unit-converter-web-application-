
import React from 'react';
import { ConversionCategory } from '../types';

interface CategoryTabsProps {
  categories: ConversionCategory[];
  activeCategory: ConversionCategory;
  onCategoryChange: (category: ConversionCategory) => void;
}

const CategoryTabs: React.FC<CategoryTabsProps> = ({ categories, activeCategory, onCategoryChange }) => {
  return (
    <div className="flex justify-center bg-gray-800 rounded-lg p-1 space-x-1 mb-8">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`w-full px-4 py-2 text-sm font-medium rounded-md transition-colors duration-200 focus:outline-none ${
            activeCategory === category
              ? 'bg-indigo-600 text-white shadow-md'
              : 'text-gray-300 hover:bg-gray-700'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryTabs;
