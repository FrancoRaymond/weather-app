import React from "react";

type SkeletonProps = {
  width?: string;
  height?: string;
  rounded?: boolean;
};

const Skeleton: React.FC<SkeletonProps> = ({ width = "100%", height = "1rem", rounded = false }) => {
  return (
    <div
      className="animate-pulse bg-[#2f2f57] boder border border-gray-800 py-5 rounded-md"
      style={{
        width,
        height,
        borderRadius: rounded ? "9999px" : "4px",
      }}
    />
  );
};

export default Skeleton;
