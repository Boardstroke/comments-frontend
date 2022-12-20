import React, { PropsWithChildren } from "react";

export function ButtonGroup({ children }: PropsWithChildren) {
  return (
    <ul className="flex gap-x-4">
      {React.Children.map(children, (child) => {
        return <li>{child}</li>;
      })}
    </ul>
  );
}
