import React, { useState, useEffect } from "react";
import { Menu, X, Search, Bell } from "lucide-react";
import { useLocation } from "react-router-dom";

export default function Navbar({ onNav, onLogout, username }) {
  const [open, setOpen] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [showNotif, setShowNotif] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);

  const [scrollUp, setScrollUp] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);

  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Pesan", path: "/pesan", mega: true },
    { name: "Riwayat", path: "/riwayat" },
    { name: "Tentang", path: "/about" },
    { name: "Bantuan", path: "/bantuan" },
  ];

  const notifItems = [
    "Promo spesial: Diskon 20% penerbangan domestik!",
  ];

  useEffect(() => {
    const handleScroll = () => {
      const curr = window.scrollY;
      if (curr > lastScroll && curr > 80) setScrollUp(false);
      else setScrollUp(true);
      setLastScroll(curr);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  const navBtnClass = (active) =>
    `relative px-3 py-2 font-semibold transition-all rounded-xl 
     ${active ? "text-blue-600" : "text-gray-700 hover:text-blue-600"}
     group`;

  const avatarLetter = username ? username.charAt(0).toUpperCase() : "U";

  return (
    <>
      {/* NAVBAR */}
      <header
        className={`
          fixed top-0 left-0 right-0 z-50 
          backdrop-blur-xl border-b border-white/20
          transition-all duration-300
          ${scrollUp ? "translate-y-0" : "-translate-y-full"}
        `}
        style={{
          background:
            "linear-gradient(to right, rgba(255,255,255,0.6), rgba(255,255,255,0.4))",
          boxShadow: "0 4px 30px rgba(0,0,0,0.05)",
        }}
      >
        <nav className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">

          {/* LOGO */}
          <div
            onClick={() => onNav("/")}
            className="cursor-pointer text-xl font-extrabold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent select-none"
            style={{ animation: "glow 4s ease-in-out infinite alternate" }}
          >
            SkyFly ✈
          </div>

          {/* DESKTOP NAV */}
          <div className="hidden md:flex items-center gap-6">

            {/* SEARCH */}
            <div className="relative group">
              <Search className="absolute left-3 top-2.5 text-gray-500" size={18} />
              <input
                type="text"
                placeholder="Cari destinasi..."
                className="
                  pl-10 pr-3 py-2 rounded-3xl w-60
                  bg-white/70
                  border border-gray-200
                  shadow focus:ring-2 focus:ring-blue-500 outline-none
                  transition-all group-hover:shadow-lg
                "
              />
            </div>

            {/* NAV BUTTONS */}
            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.mega && setMegaOpen(true)}
                onMouseLeave={() => item.mega && setMegaOpen(false)}
              >
                <button
                  onClick={() => {
                    if (item.mega) setMegaOpen(false);
                    onNav(item.path);
                  }}
                  className={navBtnClass(location.pathname === item.path)}
                >
                  {item.name}

                  <span className="
                    absolute left-0 -bottom-0.5 w-0 h-[3px] bg-blue-600 rounded-full 
                    group-hover:w-full transition-all duration-300
                  "></span>
                </button>

                {/* MEGA MENU */}
                {item.mega && megaOpen && (
                  <div
                    className="
                      absolute left-0 mt-3 p-5 w-72 rounded-xl
                      bg-white shadow-xl border
                      animate-fadeDown
                    "
                  >
                    <h3 className="font-bold text-blue-600 mb-3">Menu Pesan</h3>
                    <ul className="space-y-2 text-sm">
                      <li className="cursor-pointer hover:text-blue-600" onClick={() => onNav("/pesan")}>
                        ✈ Penerbangan Domestik
                      </li>
                      <li className="cursor-pointer hover:text-blue-600" onClick={() => onNav("/pesan")}>
                        🌍 Penerbangan Internasional
                      </li>
                      <li className="cursor-pointer hover:text-blue-600" onClick={() => onNav("/promo")}>
                        🔥 Promo & Diskon
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            ))}

            {/* NOTIFICATION */}
            <div className="relative">
              <button
                className="p-2 rounded-full hover:bg-blue-100 transition relative"
                onClick={() => setShowNotif((s) => !s)}
              >
                <Bell size={22} />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full animate-ping"></span>
              </button>

              {showNotif && (
                <div className="
                  absolute right-0 mt-3 p-4 w-64 rounded-xl
                  bg-white border
                  shadow-xl animate-fadeDown
                ">
                  <h3 className="font-bold mb-2">Notifikasi</h3>
                  <ul className="space-y-2 text-sm">
                    {notifItems.map((n, i) => (
                      <li key={i} className="p-2 rounded-lg hover:bg-gray-100">
                        {n}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* PROFILE */}
            <div className="relative">
              <button
                onClick={() => setShowProfile((s) => !s)}
                className="
                  flex items-center gap-2 px-4 py-2
                  bg-blue-600 hover:bg-blue-700
                  text-white rounded-full shadow
                  transition
                "
              >
                <div className="
                  w-7 h-7 bg-white text-blue-600 font-bold rounded-full 
                  flex items-center justify-center shadow-sm
                ">
                  {avatarLetter}
                </div>
                {username}
              </button>

              {showProfile && (
                <div className="
                  absolute right-0 mt-2 p-2 w-40 rounded-xl
                  bg-white shadow-xl border
                  animate-fadeDown
                ">
                  <button
                    onClick={onLogout}
                    className="
                      w-full text-left px-3 py-2 rounded-lg
                      text-red-600 font-semibold
                      hover:bg-red-50 transition
                    "
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-200 transition"
            onClick={() => setOpen((s) => !s)}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* MOBILE MENU */}
        {open && (
          <div className="
            md:hidden px-4 py-4 flex flex-col gap-4 
            bg-white/90 backdrop-blur-xl
            border-t animate-fadeDown
          ">
            <div className="relative">
              <Search className="absolute left-3 top-2.5 text-gray-500" size={18} />
              <input
                type="text"
                placeholder="Cari destinasi..."
                className="pl-10 pr-3 py-2 w-full rounded-xl
                  bg-white/70 border border-gray-300
                  focus:ring-2 focus:ring-blue-400 outline-none"
              />
            </div>

            {navItems.map((item) => (
              <button
                key={item.path}
                className={navBtnClass(location.pathname === item.path)}
                onClick={() => {
                  onNav(item.path);
                  setOpen(false);
                }}
              >
                {item.name}
              </button>
            ))}

            <hr className="border-gray-300" />

            <button
              onClick={onLogout}
              className="
                px-3 py-2 rounded-xl bg-red-500 text-white font-semibold 
                hover:bg-red-600 transition
              "
            >
              Logout ({username})
            </button>
          </div>
        )}
      </header>

      {/* FLOATING BUTTON */}
      <button
        onClick={() => onNav("/pesan")}
        className="
          fixed bottom-6 right-6 z-50 
          bg-blue-600 hover:bg-blue-700 text-white  
          w-14 h-14 rounded-full shadow-xl
          flex items-center justify-center text-3xl
          transition
        "
      >
        ✈
      </button>

      <style>{`
        @keyframes glow {
          from { filter: drop-shadow(0 0 4px rgba(0, 150, 255, 0.4)); }
          to   { filter: drop-shadow(0 0 10px rgba(0, 150, 255, 0.8)); }
        }

        .animate-fadeDown {
          animation: fadeDown .25s ease-out;
        }
        @keyframes fadeDown {
          from { opacity: 0; transform: translateY(-10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </>
  );
}