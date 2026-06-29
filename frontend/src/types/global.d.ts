import React from "react";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      /**
       * Lottie web component
       * Docs: https://github.com/LottieFiles/lottie-player
       */
      "lottie-player": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      > & {
        src?: string;
        background?: string;
        speed?: string | number;
        style?: React.CSSProperties;
        loop?: boolean;
        autoplay?: boolean;
      };
    }
  }
}

// This file needs to be a module to be picked up.
export {};
