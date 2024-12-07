import { useState } from "react";
import PropTypes from "prop-types";

// Timeline Item Component
export function TimelineItem({ title, yearStart, monthStart, yearEnd, monthEnd, subtitle, description }) {
  return (
    <div className="border-l-4 pl-2 mb-4">
      <div className="flex flex-col">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-lg font-semibold text-start">
            {title} ({yearStart}-{monthStart < 10 ? `0${monthStart}` : monthStart}
            {yearEnd && monthEnd ? ` to ${yearEnd}-${monthEnd < 10 ? `0${monthEnd}` : monthEnd}` : ""})
          </h3>
          <p className="text-sm text-gray-500 ">{subtitle}</p>
        </div>
        <p className="text-sm text-start ml-2">{description}</p>
      </div>
    </div>
  );
}

TimelineItem.propTypes = {
  title: PropTypes.string.isRequired,
  yearStart: PropTypes.number.isRequired,
  monthStart: PropTypes.number.isRequired,
  yearEnd: PropTypes.number,
  monthEnd: PropTypes.number,
  subtitle: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

// Timeline Component
export function Timeline({ events }) {
  const [sortOrder, setSortOrder] = useState("asc");

  // Sort the events based on yearStart and monthStart
  const sortedEvents = [...events].sort((a, b) => {
    if (sortOrder === "asc") {
      return a.yearStart !== b.yearStart
        ? a.yearStart - b.yearStart
        : a.monthStart - b.monthStart;
    }
    return b.yearStart !== a.yearStart
      ? b.yearStart - a.yearStart
      : b.monthStart - a.monthStart;
  });

  return (
    <div className="w-full">
      {/* Sorting Button */}
      <div className="mb-4 text-end">
        <button
          onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}
          className="px-4 py-1 bg-blue-500 text-white rounded hover:bg-blue-700"
        >
          Sort {sortOrder === "asc" ? "Descending" : "Ascending"}
        </button>
      </div>

      {/* Timeline Items */}
      <div>
        {sortedEvents.map((event, index) => (
          <TimelineItem key={index} {...event} />
        ))}
      </div>
    </div>
  );
}

Timeline.propTypes = {
  events: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      yearStart: PropTypes.number.isRequired,
      monthStart: PropTypes.number.isRequired,
      yearEnd: PropTypes.number,
      monthEnd: PropTypes.number,
      subtitle: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
};
