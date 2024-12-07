import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

// Grid container component
export function DisplayGrid({ columns = 12, classname, children }) {
  return (
    <div
      className={clsx(
        "grid grid-flow-row",
        `grid-cols-${columns}`,
        `${classname}`
      )}
    >
      {children}
    </div>
  );
}

// Grid item component
export function GridItem({
  default_ = 1,
  small = 1,
  medium = 1,
  large = 1,
  classname = "",
  children,
}) {
  return (
    <div
      className={clsx(
        `col-span-${default_}`,
        `sm:col-span-${small}`,
        `md:col-span-${medium}`,
        `lg:col-span-${large}`,
        `${classname}`

      )}
    >
      {children}
    </div>
  );
}

// Prop Types for Validation
DisplayGrid.propTypes = {
  default_: PropTypes.number,
  gap: PropTypes.number,
  children: PropTypes.node.isRequired,
};

GridItem.propTypes = {
  default_: PropTypes.number,
  small: PropTypes.number,
  medium: PropTypes.number,
  large: PropTypes.number,
  children: PropTypes.node.isRequired,
};
