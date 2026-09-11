import type { ChildrenProps } from "../Utils/Types";

function HomePage({ children }: ChildrenProps) {
  return <div className="text-[#475569] font-jakarta">{children}</div>;
}

export default HomePage;
