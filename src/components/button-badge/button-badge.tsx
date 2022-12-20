import { PropsWithChildren } from "react";

export type ButtonBadgeProps = {
  count: number;
};

// Badge is a small, rounded box that displays a number or a short string of text.

export function ButtonBadge({
  children,
  count,
}: PropsWithChildren<ButtonBadgeProps>) {
  return (
    <div className="relative ">
      {children}

      <span className="absolute bottom-0 right-0 -mt-1 -mr-1 inline-flex items-center justify-center text-xs font-medium leading-4 text-white bg-red-400 rounded-full h-2 w-2 p-2">
        {count}
      </span>
    </div>
  );
}
