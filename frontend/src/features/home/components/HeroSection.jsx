export default function HeroSection() {
  return (
    <section className="bg-slate-100 min-h-[85vh] flex items-center">
      <div className="max-w-7xl mx-auto px-6">

        <p className="text-green-700 font-semibold uppercase tracking-widest">
          Website Resmi Desa Panca Tunggal
        </p>

        <h1 className="text-6xl font-bold mt-5 leading-tight">
          Membangun Desa
          <br />
          yang Modern,
          <br />
          Transparan &
          <span className="text-green-700"> Digital</span>
        </h1>

        <p className="mt-8 text-lg text-gray-600 max-w-2xl">
          SIPANDA merupakan Sistem Informasi Profil Desa
          yang menyediakan informasi desa, pelayanan publik,
          berita, galeri, potensi desa, serta transparansi
          pemerintahan desa.
        </p>

        <div className="mt-10 flex gap-4">

          <button className="bg-green-700 text-white px-7 py-3 rounded-lg">
            Profil Desa
          </button>

          <button className="border border-green-700 text-green-700 px-7 py-3 rounded-lg">
            Berita Desa
          </button>

        </div>

      </div>
    </section>
  );
}