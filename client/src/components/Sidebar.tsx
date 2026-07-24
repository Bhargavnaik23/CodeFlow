import { NavLink } from "react-router-dom";

const links = [
  { name: "Dashboard", path: "/" },
  { name: "Planner", path: "/planner" },
  { name: "Notes", path: "/notes" },
  { name: "Courses", path: "/courses" },
  { name: "Analytics", path: "/analytics" },
  { name: "Settings", path: "/settings" },
];

function Sidebar() {
  return (
    <aside className="w-64 bg-zinc-900 text-white p-6">
      <h1 className="mb-8 text-3xl font-bold">
        🚀 CodeFlow
      </h1>

      <nav className="flex flex-col gap-2">
        {links.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            className={({ isActive }) =>
              `rounded-lg px-4 py-3 transition ${
                isActive
                  ? "bg-blue-600 text-white"
                  : "text-zinc-400 hover:bg-zinc-800 hover:text-white"
              }`
            }
          >
            {link.name}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}

export default Sidebar;