function NavButtons() {
  return (
    <div className="flex gap-1">
      <button className="btn rounded-full border-2 border-transparent hover:border-pink hover:text-pink">
        Sign In
      </button>
      <button className="btn rounded-full border-2 border-pink bg-pink hover:bg-white hover:text-pink text-white">
        Sign Out
      </button>
    </div>
  );
}

export default NavButtons;
