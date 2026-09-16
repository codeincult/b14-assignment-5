import HeroButtons from "./HeroButtons";

function HeroContent() {
  return (
    <div className="flex flex-col gap-11 basis-[50%]">
      <div className="flex flex-col gap-8">
        <h1 className="text-black text-6xl font-extrabold leading-15">
          Build Your Ideal
          <br />
          <span className="bg-[linear-gradient(to_right,#FF5722_0%,#D81B7E_50%,#7C3AED_100%)] bg-clip-text text-transparent">
            Development Stack
          </span>
        </h1>
        <p>
          Explore frontend, backend, database, and tooling options, compare them side by side, and
          put together the stack that fits your next project.
        </p>
      </div>
      <HeroButtons />
    </div>
  );
}

export default HeroContent;
