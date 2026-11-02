import './App.css';
import KartuProfil from './KartuProfil';
import KartuProyek from './KartuProyek';

function App() {
  const daftarPraktikum = [
    {
      id: 1,
      kode: 'IF201',
      nama: 'Praktikum Pemrograman Web',
      sks: 3,
      hari: 'Selasa',
    },
    {
      id: 2,
      kode: 'IF202',
      nama: 'Praktikum Sistem Berorientasi Objek',
      sks: 3,
      hari: 'Rabu',
    },
    {
      id: 3,
      kode: 'IF203',
      nama: 'Praktikum Pemrograman II',
      sks: 3,
      hari: 'Kamis',
    },
    {
      id: 4,
      kode: 'IF204',
      nama: 'Praktikum Sistem Basis Data',
      sks: 3,
      hari: 'Jumat',
    },
  ];

  const daftarProyek = [
    {
      id: 1,
      judul: 'AksiRelawan',
      deskripsi:
        'Website informasi kegiatan relawan yang menyediakan fitur pengelolaan aktivitas, donasi, dan informasi kegiatan sosial.',
      teknologi: ['PHP', 'MySQL', 'Bootstrap'],
      linkGithub: 'https://github.com/arneuraysa',
    },
    {
      id: 2,
      judul: 'Sistem Informasi Donor Darah',
      deskripsi:
        'Prototipe sistem informasi untuk membantu proses pendaftaran donor darah dan verifikasi data calon pendonor.',
      teknologi: ['Figma', 'UI/UX', 'Prototype'],
      linkGithub: 'https://github.com/arneuraysa',
    },
    {
      id: 3,
      judul: 'Sistem Keuangan Warteg',
      deskripsi:
        'Perancangan basis data untuk mendukung pencatatan transaksi keuangan, pengelolaan data, dan pembuatan laporan usaha.',
      teknologi: ['SQL', 'Database', 'Stored Procedure'],
      linkGithub: 'https://github.com/arneuraysa',
    },
    {
      id: 4,
      judul: 'Aplikasi Koperasi Simpan Pinjam',
      deskripsi:
        'Aplikasi desktop sederhana untuk membantu pengelolaan data anggota, simpanan, dan pinjaman koperasi.',
      teknologi: ['Java', 'Java Swing', 'OOP'],
      linkGithub: 'https://github.com/arneuraysa',
    },
  ];

  const notifikasiSapaan = () => {
    alert('Halo! Selamat datang di portofolio Arneu Raysa.');
  };

  return (
    <main className="container">
      <header className="hero">
        <span className="eyebrow">MY PERSONAL PORTFOLIO</span>
        <h1>
          Hello, I'm <span>Arneu.</span>
        </h1>
        <p>
          Mahasiswa Teknik Informatika yang tertarik pada
          pengembangan sistem, teknologi, dan desain antarmuka.
        </p>
      </header>

      <section className="content-section">
        <h2>Profil Mahasiswa</h2>
        <KartuProfil
          nama="Arneu Raysa"
          npm="243040089"
          kelas="IF - Praktikum"
          status="Aktif"
          fotoUrl="https://via.placeholder.com/100"
        />
      </section>

      <section className="content-section">
        <div className="section-title">
          <div>
            <span className="eyebrow">MY WORKS</span>
            <h2>Showcase Portofolio Mini</h2>
          </div>
          <span className="total-project">04 PROJECTS</span>
        </div>

        <div className="project-grid">
          {daftarProyek.map((proyek) => (
            <KartuProyek
              key={proyek.id}
              judul={proyek.judul}
              deskripsi={proyek.deskripsi}
              teknologi={proyek.teknologi}
              linkGithub={proyek.linkGithub}
            />
          ))}
        </div>
      </section>

      <section className="content-section">
        <span className="eyebrow">MY LEARNING JOURNEY</span>
        <h2>Daftar Rencana Praktikum</h2>

        <div className="praktikum-list">
          {daftarPraktikum.map((matkul) => (
            <div className="praktikum-item" key={matkul.id}>
              <div>
                <strong>{matkul.kode}</strong>
                <span className="matkul-name">{matkul.nama}</span>
                <small>Jadwal: {matkul.hari}</small>
              </div>
              <span className="sks">{matkul.sks} SKS</span>
            </div>
          ))}
        </div>
      </section>

      <div className="interaction">
        <button onClick={notifikasiSapaan}>
          Say Hello ✦
        </button>
      </div>

      <footer>
        <p>© 2026 Arneu Raysa · Built with React</p>
      </footer>
    </main>
  );
}

export default App;
