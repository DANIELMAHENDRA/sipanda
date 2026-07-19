import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-green-700 text-white shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        <h1 className="text-2xl font-bold">
          SIPANDA
        </h1>

        <ul className="flex gap-8 font-medium">

          <li>
            <NavLink to="/">Beranda</NavLink>
          </li>

          <li>
            <NavLink to="/profil">
              Profil Desa
            </NavLink>
          </li>

          <li>
            <NavLink to="/berita">
              Berita
            </NavLink>
          </li>

          <li>
            <NavLink to="/galeri">
              Galeri
            </NavLink>
          </li>

          <li>
            <NavLink to="/kontak">
              Kontak
            </NavLink>
          </li>

        </ul>

      </div>
    </nav>
  );
}