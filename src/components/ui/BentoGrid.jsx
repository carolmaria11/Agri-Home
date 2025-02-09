export const BentoGrid = ({ className = "", children }) => {
  return (
    <div>
      <h1 className="text-center text-3xl md:text-5xl font-bold m-14">
        Explore Our <span style={{ color: "#007f3a" }}>Key Features</span>
      </h1>
      <div
        className={`grid md:auto-rows-[25rem] grid-cols-1 md:grid-cols-3 gap-4 min-w-[80rem] mx-auto ${className}`}
      >
        {children}
      </div>
    </div>
  );
};

export const BentoGridItem = ({
  className = "",
  title,
  description,
  header,
}) => {
  return (
    <div
      className={`row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-10 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4 ${className}`}
    >
      {header}
      <div className="group-hover/bento:translate-x-2 transition duration-200">
        <div
          className="font-sans font-bold text-xl mb-1"
          style={{ color: "#317725" }}
        >
          {title}
        </div>
        <div className="font-sans font-normal text-neutral-600 dark:text-neutral-300 text-sm">
          {description}
        </div>
      </div>
    </div>
  );
};
