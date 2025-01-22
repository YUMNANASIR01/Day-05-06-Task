"use client";

import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import Image from "next/image";

export type FrameComponentType = {
  className?: string;
  trophy1: string; // Path to the image of the trophy
  highQuality?: string; // Text to display for high quality
  craftedFromTopMaterials?: string; // Text to display for materials
  /** Style props */
  frameDivJustifyContent?: CSSProperties["justifyContent"]; // Justify content style for the wrapper div
  highQualityMargin?: CSSProperties["margin"]; // Margin for the high-quality text
};

const FrameComponent: NextPage<FrameComponentType> = ({
  className = "", // Default className value
  trophy1, // Trophy image path
  highQuality, // High quality text
  craftedFromTopMaterials, // Crafted from materials text
  frameDivJustifyContent, // Justify content style for the div
  highQualityMargin, // Margin for high quality text
}) => {
  // Memoized style for the main div's justifyContent
  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      justifyContent: frameDivJustifyContent,
    };
  }, [frameDivJustifyContent]);

  // Memoized style for high-quality text margin
  const highQualityStyle: CSSProperties = useMemo(() => {
    return {
      margin: highQualityMargin,
    };
  }, [highQualityMargin]);

  return (
    <div
      className={`flex flex-row items-center justify-start gap-2.5 max-w-full text-left text-6xl text-gray-100 font-poppins mq450:flex-wrap ${className}`}
      style={frameDivStyle}
    >
      {/* Trophy image */}
      <Image
        className="h-[60px] w-[60px] relative overflow-hidden shrink-0"
        loading="lazy" // Ensures the image is lazy-loaded
        width={60} // Fixed width for the image
        height={60} // Fixed height for the image
        alt="" // Alt text (you can add a descriptive alt text for better accessibility)
        src={trophy1} // The image source passed as a prop
      />
      <div className="flex flex-col items-start justify-start gap-0.5">
        {/* High quality text */}
        <h3
          className="m-0 relative text-inherit leading-[150%] font-semibold font-[inherit] mq450:text-xl mq450:leading-[30px]"
          style={highQualityStyle} // Applied dynamic margin for high quality text
        >
          {highQuality}
        </h3>
        {/* Crafted from top materials text */}
        <div className="relative text-xl leading-[150%] font-medium text-color-gray-3 mq450:text-base mq450:leading-[24px]">
          {craftedFromTopMaterials}
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
