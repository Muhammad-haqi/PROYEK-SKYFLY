import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaApple, FaFacebook, FaTiktok } from "react-icons/fa";

export default function LoginPage({ onLogin }) {
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");

  function submit(e) {
    e.preventDefault();
    if (identifier.trim() && password.trim()) {
      onLogin(identifier); 
    }
  }

  function loginWithGoogle() {
    onLogin("google-user"); 
  }

  return (
    <section
      className="min-h-screen flex items-center justify-center bg-cover bg-no-repeat"
      style={{
        background:
          "linear-gradient(135deg, #8ec5fc 0%, #e0c3fc 45%, #fff5b7 100%)",
      }}
    >
      <div className="bg-white/90 rounded-2xl shadow-2xl p-10 w-full max-w-md backdrop-blur-lg border text-center">

        
        <h1 className="text-3xl font-bold text-blue-600 mb-1">
          skyfly <span className="text-yellow-400">•</span>
        </h1>
        <p className="text-gray-500 text-sm mb-6">Pemesanan tiket pesawat</p>

        
        <button
          onClick={loginWithGoogle}
          className="w-full flex items-center justify-center gap-3 py-3 border rounded-xl mb-4 hover:bg-gray-50 transition cursor-pointer"
        >
          <FcGoogle size={22} />
          <span className="font-medium">Lanjutkan dengan Google</span>
        </button>

        
        <div className="flex items-center gap-3 my-5">
          <div className="h-[1px] flex-1 bg-gray-300"></div>
          <span className="text-gray-500 text-sm">atau</span>
          <div className="h-[1px] flex-1 bg-gray-300"></div>
        </div>

        
        <form onSubmit={submit} className="space-y-4 text-left">

          
          <div>
            <input
              type="text"
              className="w-full px-4 py-3 border rounded-xl bg-white/70 focus:ring-2 focus:ring-blue-400 outline-none"
              placeholder="Lanjut dengan nomor HP atau email"
              value={identifier}
              onChange={(e) => setIdentifier(e.target.value)}
              required
            />
          </div>

          
          <div>
            <input
              type="password"
              className="w-full px-4 py-3 border rounded-xl bg-white/70 focus:ring-2 focus:ring-blue-400 outline-none"
              placeholder="Masukkan password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-bold py-3 rounded-xl hover:bg-blue-700 transition"
          >
            Lanjutkan
          </button>
        </form>

        
        <div className="flex items-center gap-3 my-5">
          <div className="h-[1px] flex-1 bg-gray-300"></div>
          <span className="text-gray-500 text-sm">Atau lanjut dengan</span>
          <div className="h-[1px] flex-1 bg-gray-300"></div>
        </div>

        
        <div className="flex justify-center gap-5 text-gray-700">
          <button className="p-3 rounded-full border hover:bg-gray-100 transition">
            <FaApple size={24} />
          </button>
          <button className="p-3 rounded-full border hover:bg-gray-100 transition">
            <FaFacebook size={24} className="text-blue-600" />
          </button>
          <button className="p-3 rounded-full border hover:bg-gray-100 transition">
            <FaTiktok size={20} />
          </button>
        </div>

        
        <p className="text-xs text-gray-500 mt-6 leading-relaxed">
          Dengan log in, kamu menyetujui{" "}
          <span className="text-blue-600 cursor-pointer">Kebijakan Privasi</span>{" "}
          dan{" "}
          <span className="text-blue-600 cursor-pointer">
            Syarat & Ketentuan
          </span>{" "}
          SkyFly.
        </p>
      </div>
    </section>
  );
}