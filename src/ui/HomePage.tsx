import type { ChildrenProps } from "../Utils/Types";

function HomePage({ children }: ChildrenProps) {
  return <div className="text-[#475569] font-jakarta flex flex-col gap-28">{children}</div>;
}

export default HomePage;
