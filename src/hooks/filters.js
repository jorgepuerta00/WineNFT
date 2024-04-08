import { useState, useEffect, useCallback } from "react";

const matchesFilters = (item, filters) => {
  return Object.entries(filters).every(([key, filterValue]) => {
    const attribute = item.attributes.find((attr) => attr.trait_type === key);

    if (Array.isArray(filterValue) && filterValue.length > 0) {
      if (!attribute) return false;
      const match = filterValue
        .map((v) => v.toLowerCase())
        .includes(attribute.value.toLowerCase());
      return match;
    } else if (filterValue.min !== undefined && filterValue.max !== undefined) {
      if (!attribute) return false;
      const attributeValue = parseFloat(attribute.value);
      const min = filterValue.min === "" ? 0 : parseFloat(filterValue.min);
      const max =
        filterValue.max === "" ? Infinity : parseFloat(filterValue.max);
      return attributeValue >= min && attributeValue <= max;
    } else {
      return true;
    }
  });
};

export const useFilters = (initialData) => {
  const [data, setData] = useState(initialData);
  const [filters, setFilters] = useState({
    Color: [],
    Country: [],
    Cylinder: [],
    Rarity: [],
    Type: [],
    Acceleration: { min: 0, max: Infinity },
    "Engine Size": { min: 0, max: Infinity },
    "Horse Power": { min: 0, max: Infinity },
    "Speed Increase": { min: 0, max: Infinity },
    "Top Speed": { min: 0, max: Infinity },
    Weight: { min: 0, max: Infinity },
  });

  // Update filter settings
  const updateFilter = useCallback((filterType, value) => {
    setFilters((prev) => ({ ...prev, [filterType]: value }));
  }, []);

  // Function to allow components to update the data
  const updateData = useCallback((newData) => {
    setData(newData);
  }, []);

  // Filter the data based on the current filters
  const filteredData = useCallback(() => {
    return data.filter((item) => matchesFilters(item, filters));
  }, [filters, data]);

  // If the initialData changes outside of the hook, update the hook's internal state
  useEffect(() => {
    setData(initialData);
  }, [initialData]);

  return { filters, updateFilter, filteredData, updateData };
};
