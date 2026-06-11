export default function Navbar() {
  return (
    <nav
      className="
      fixed
      top-0
      w-full
      z-50
      backdrop-blur-lg
      bg-black/30
      border-b
      border-white/10
      "
    >
      <div
        className="
        max-w-7xl
        mx-auto
        px-6
        py-4
        flex
        justify-between
        items-center
        "
      >
        <h1 className="font-bold text-xl text-white">
          Gomti Kumari
        </h1>

        <div className="flex gap-6 text-gray-300">
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </nav>
  );
}