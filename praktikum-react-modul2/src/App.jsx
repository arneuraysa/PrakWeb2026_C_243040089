import { useState, useEffect } from 'react';
import './App.css';
import Kartu from './Kartu';
import Penghitung from './Penghitung';
import FormTugas from './FormTugas';
import ItemTugas from './ItemTugas';

function App() {
  const [daftarTugas, setDaftarTugas] = useState(() => {
    const dataTersimpan = localStorage.getItem('daftar-tugas');

    if (dataTersimpan) {
      return JSON.parse(dataTersimpan);
    }

    return [
      { id: 1, judul: 'Install Node.js dan Vite', selesai: true },
      { id: 2, judul: 'Pelajari useState', selesai: false },
    ];
  });

  // State untuk filter tugas
  const [filter, setFilter] = useState('semua');

  useEffect(() => {
    console.log('Aplikasi Daftar Tugas siap digunakan!');
  }, []);

  useEffect(() => {
    const sisa = daftarTugas.filter((tugas) => !tugas.selesai).length;
    document.title = `(${sisa}) Tugas Belum Selesai`;
  }, [daftarTugas]);

  useEffect(() => {
    localStorage.setItem('daftar-tugas', JSON.stringify(daftarTugas));
  }, [daftarTugas]);

  const tambahTugas = (judul) => {
    const tugasBaru = {
      id: Date.now(),
      judul: judul,
      selesai: false,
    };

    setDaftarTugas([...daftarTugas, tugasBaru]);
  };

  const ubahStatus = (id) => {
    const daftarBaru = daftarTugas.map((tugas) => {
      if (tugas.id === id) {
        return { ...tugas, selesai: !tugas.selesai };
      }

      return tugas;
    });

    setDaftarTugas(daftarBaru);
  };

  const hapusTugas = (id) => {
    setDaftarTugas(
      daftarTugas.filter((tugas) => tugas.id !== id)
    );
  };

  // Menghapus semua tugas yang sudah selesai
  const hapusSemuaSelesai = () => {
    setDaftarTugas(
      daftarTugas.filter((tugas) => !tugas.selesai)
    );
  };

  const jumlahSelesai = daftarTugas.filter(
    (tugas) => tugas.selesai
  ).length;

  // Filter tugas sebelum ditampilkan menggunakan map()
  const tugasDitampilkan = daftarTugas.filter((tugas) => {
    if (filter === 'belum') {
      return !tugas.selesai;
    }

    if (filter === 'selesai') {
      return tugas.selesai;
    }

    return true;
  });

  return (
    <div className="wadah">
      <h1 className="judul">Daftar Tugas Praktikum</h1>

      <p className="subjudul">
        Laboratorium Informatika - Modul 2: React Lanjutan
      </p>

      <Penghitung />

      <Kartu judul="Tambah Tugas Baru">
        <FormTugas onTambah={tambahTugas} />
      </Kartu>

      <Kartu judul="Daftar Tugas">
        <p className="ringkasan">
          {jumlahSelesai} dari {daftarTugas.length} tugas selesai
        </p>

        {/* Tombol filter */}
        <div className="baris-filter">
          <button
            className={`tombol-filter ${
              filter === 'semua' ? 'aktif' : ''
            }`}
            onClick={() => setFilter('semua')}
          >
            Semua
          </button>

          <button
            className={`tombol-filter ${
              filter === 'belum' ? 'aktif' : ''
            }`}
            onClick={() => setFilter('belum')}
          >
            Belum Selesai
          </button>

          <button
            className={`tombol-filter ${
              filter === 'selesai' ? 'aktif' : ''
            }`}
            onClick={() => setFilter('selesai')}
          >
            Selesai
          </button>
        </div>

        {/* Tombol hapus semua tugas selesai */}
        {jumlahSelesai > 0 && (
          <button
            className="tombol tombol-merah tombol-hapus-semua"
            onClick={hapusSemuaSelesai}
          >
            Hapus Semua yang Selesai
          </button>
        )}

        {tugasDitampilkan.length === 0 ? (
          <p className="kosong">
            Tidak ada tugas pada kategori ini.
          </p>
        ) : (
          <ul className="daftar">
            {tugasDitampilkan.map((tugas) => (
              <ItemTugas
                key={tugas.id}
                tugas={tugas}
                onUbahStatus={ubahStatus}
                onHapus={hapusTugas}
              />
            ))}
          </ul>
        )}
      </Kartu>
    </div>
  );
}

export default App;