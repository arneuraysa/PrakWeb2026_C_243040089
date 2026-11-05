
import { useState } from 'react';

function FormTransaksi({ onTambah }) {
  const [keterangan, setKeterangan] = useState('');
  const [nominal, setNominal] = useState('');
  const [jenis, setJenis] = useState('pemasukan');

  const tanganiKirim = (event) => {
    event.preventDefault();

    // Validasi input
    if (keterangan.trim() === '' || nominal === '') {
      alert('Semua kolom harus diisi!');
      return;
    }

    if (Number(nominal) <= 0) {
      alert('Nominal harus lebih dari 0!');
      return;
    }

    // Mengirim data ke komponen App
    onTambah({
      keterangan: keterangan.trim(),
      nominal: nominal,
      jenis: jenis
    });

    // Mengosongkan formulir
    setKeterangan('');
    setNominal('');
    setJenis('pemasukan');
  };

  return (
    <div className="kartu">
      <h2>Tambah Transaksi</h2>

      <form onSubmit={tanganiKirim}>

        <label>Keterangan</label>
        <input
          type="text"
          placeholder="Contoh: Uang saku"
          value={keterangan}
          onChange={(event) =>
            setKeterangan(event.target.value)
          }
          className="input-keuangan"
        />

        <label>Nominal (Rp)</label>
        <input
          type="number"
          placeholder="Contoh: 50000"
          value={nominal}
          onChange={(event) =>
            setNominal(event.target.value)
          }
          className="input-keuangan"
          min="1"
        />

        <label>Jenis Transaksi</label>
        <select
          value={jenis}
          onChange={(event) =>
            setJenis(event.target.value)
          }
          className="input-keuangan"
        >
          <option value="pemasukan">Pemasukan</option>
          <option value="pengeluaran">Pengeluaran</option>
        </select>

        <button type="submit" className="tombol-tambah">
          Tambah Transaksi
        </button>

      </form>
    </div>
  );
}

export default FormTransaksi;
