function Navbar() {
  return (
    <header className="flex items-center justify-between border-b border-zinc-800 pb-4">
      <h1 className="text-2xl font-bold">Dashboard</h1>

      <div className="flex items-center gap-4">
        <button className="text-xl">🔔</button>

        <div className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 font-bold">
            B
          </div>

          <div>
            <p className="font-medium">Bhargav</p>
            <p className="text-sm text-zinc-400">Developer</p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;