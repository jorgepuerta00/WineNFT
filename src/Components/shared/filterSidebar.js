import React, { useEffect, useState } from "react";
import { useFilters } from "../../hooks/filters";
import { FilterComponent, FilterRangeComponent } from "./filterComponent";

const FilterSideBarComponent = ({ initialData, onDataChange }) => {
  const { updateFilter, filteredData, updateData } = useFilters(initialData);

  /* Range Filters */
  const rangeFilterTypes = [
    "Acceleration",
    "Engine Size",
    "Horse Power",
    "Speed Increase",
    "Top Speed",
    "Weight",
  ];
  const rangeInitialFilters = rangeFilterTypes.reduce((acc, type) => {
    acc[type] = {
      isOpen: false,
      min: 0,
      max: 0,
    };
    return acc;
  }, {});
  /* Selectable Filters */
  const selectableFilterTypes = [
    "Color",
    "Country",
    "Cylinder",
    "Rarity",
    "Type",
  ];
  const selectableInitialFilters = selectableFilterTypes.reduce((acc, type) => {
    acc[type] = {
      isOpen: false,
      selectedValues: [],
      counts: {},
    };
    return acc;
  }, {});

  const [filters, setFilters] = useState({
    ...selectableInitialFilters,
    ...rangeInitialFilters,
  });

  const toggleMenu = (type) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [type]: {
        ...prevFilters[type],
        isOpen: !prevFilters[type].isOpen,
      },
    }));
  };

  const extractAttributes = (data, attributeKey) => {
    const allValues = data.flatMap((item) =>
      item.attributes
        .filter((attr) => attr.trait_type === attributeKey)
        .map((attr) => attr.value)
    );

    return allValues.reduce((acc, value) => {
      acc[value] = (acc[value] || 0) + 1;
      return acc;
    }, {});
  };

  /* UseEffect */
  useEffect(() => {
    // updating data
    updateData(initialData);

    // updating selectable filters
    selectableFilterTypes.forEach((type) => {
      setFilters((prevFilters) => ({
        ...prevFilters,
        [type]: {
          ...prevFilters[type],
          counts: extractAttributes(initialData, type),
        },
      }));
    });

    // Update range filters based on data
    rangeFilterTypes.forEach((type) => {
      setFilters((prevFilters) => ({
        ...prevFilters,
        [type]: {
          ...prevFilters[type],
          min: "",
          max: "",
        },
      }));
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialData, updateData]);

  useEffect(() => {
    onDataChange(filteredData());
  }, [filteredData, onDataChange]);

  useEffect(() => {
    Object.entries(filters).forEach(([type, config]) => {
      updateFilter(
        type,
        config.selectedValues || { min: config.min, max: config.max }
      );
    });
    console.log("filters", filters);
  }, [filters, updateFilter]);

  /* Handlers */
  const handleRangeChange = (type, minOrMax, value) => {
    if (!isNaN(value)) {
      setFilters((prevFilters) => ({
        ...prevFilters,
        [type]: {
          ...prevFilters[type],
          [minOrMax]: value,
        },
      }));
    }
  };

  const handleFilterChange = (type, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [type]: {
        ...prevFilters[type],
        selectedValues: prevFilters[type].selectedValues.includes(value)
          ? prevFilters[type].selectedValues.filter((v) => v !== value)
          : [...prevFilters[type].selectedValues, value],
      },
    }));
  };

  /* Selectable filters configuration */
  const selectableFiltersConfig = selectableFilterTypes.map((type) => ({
    label: type,
    type: "selectable",
    isOpen: filters[type].isOpen,
    selectedItems: filters[type].selectedValues,
    data: filters[type].counts,
    onToggle: () => toggleMenu(type),
    onItemChange: (value) => handleFilterChange(type, value),
  }));

  /* Range filters configuration */
  const rangeFiltersConfig = rangeFilterTypes.map((type) => ({
    label: type,
    type: "range",
    isOpen: filters[type].isOpen,
    min: filters[type].min,
    max: filters[type].max,
    onToggle: () => toggleMenu(type),
    onMinChange: (event) => handleRangeChange(type, "min", event.target.value),
    onMaxChange: (event) => handleRangeChange(type, "max", event.target.value),
  }));

  return (
    <div className="col-5 col-lg-3 ">
      <div className="side-bar px-lg-4 ">
        <h2 className="sidebar-h py-2">Search by Traits</h2>
        {[...selectableFiltersConfig, ...rangeFiltersConfig].map((filter) => {
          if (filter.type === "selectable") {
            return (
              <FilterComponent
                key={filter.label}
                label={filter.label}
                isOpen={filter.isOpen}
                selectedItems={filter.selectedItems}
                data={filter.data}
                onToggle={filter.onToggle}
                onItemChange={filter.onItemChange}
              />
            );
          } else if (filter.type === "range") {
            return (
              <FilterRangeComponent
                key={filter.label}
                label={filter.label}
                isOpen={filter.isOpen}
                min={filter.min}
                max={filter.max}
                onToggle={filter.onToggle}
                onMinChange={filter.onMinChange}
                onMaxChange={filter.onMaxChange}
              />
            );
          }
          return null;
        })}
      </div>
    </div>
  );
};

export default FilterSideBarComponent;
