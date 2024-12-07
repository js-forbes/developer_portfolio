import clsx from "clsx";

export default function Card({title = "", subtitle = "",padding = 6,classname = "" , children }) {
  const paddingClasses = {
    1: "p-1",
    2: "p-2",
    4: "p-4",
    6: "p-6",
    8: "p-8",
  };

  return (
    <div
      className={clsx(
      `bg-white border-2 border-black rounded-2xl text-center h-full ${classname}`,
        paddingClasses[padding] // Dynamically select padding class
      )}
    >
      <div className="flex mb-2">
      <h1 className="text-base font-bold">{title}</h1>
      <p  className="ml-4 text-sm text-gray-800">{subtitle}</p>

      </div>

      {children}
    </div>
  );
}
