function HeroButtons() {
  return (
    <div className="flex gap-8">
      <button className="bg-[linear-gradient(to_right,#F97316_0%,#EC4899_100%)] hover:bg-none hover:bg-white border-2 border-transparent hover:border-pink rounded-md btn btn-active text-white hover:text-black font-semibold">
        Explore Technologies
      </button>
      <button className="btn text-[#374151] font-normal border-2 border-transparent hover:border-pink bg-white rounded-md">
        Learn More
      </button>
    </div>
  );
}

export default HeroButtons;
