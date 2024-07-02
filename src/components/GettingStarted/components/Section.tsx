import React from "react";

interface SectionProps {
  border?: boolean;
  children: React.ReactNode;
}

export const Section: React.FC<SectionProps> = ({ border, children }) => {
  const sectionClasses = [
    "flex",
    "flex-col",
    "w-full",
    "mb-6",
    "border",
    "border-gray-200",
  ].join(" ");

  return <div className={sectionClasses}>{children}</div>;
};
