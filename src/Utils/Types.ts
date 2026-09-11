import type { ReactNode } from "react";

interface ChildrenProps {
  children: ReactNode;
}

type ClickEvent<T> = React.MouseEvent<T>;

export type { ChildrenProps, ClickEvent };
