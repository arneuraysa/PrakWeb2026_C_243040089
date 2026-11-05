
import { useState, useEffect } from 'react';
import './App.css';
import FormTransaksi from './FormTransaksi';
import DaftarTransaksi from './DaftarTransaksi';

function App() {

  // State untuk menyimpan daftar transaksi
  const [transaksi, setTransaksi] = useState(() => {
    const dataTersimpan = localStorage.getItem('catatan-keuangan');

    return dataTersimpan
      ? JSON.parse(dataTersimpan)
      : [];
  });

  // Menyimpan transaksi ke localStorage
  useEffect(() => {
    localStorage.setItem(
      'catatan-keuangan',
      JSON.stringify(transaksi)
    );
  }, [transaksi]);

  // Fungsi menambahkan transaksi
  const tambahTransaksi = (dataBaru) => {
    const transaksiBaru = {
      id: Date.now(),
      ...dataBaru
    };

    setTransaksi((dataLama) => [
      ...dataLama,
      transaksiBaru
    ]);
  };

  // Fungsi menghapus transaksi
  const hapusTransaksi = (id) => {
    setTransaksi((dataLama) =>
      dataLama.filter((item) => item.id !== id)
    );
  };

  // Menghitung total saldo
  const totalSaldo = transaksi.reduce((total, item) => {
    const nominal = Number(item.nominal);

    if (item.jenis === 'pemasukan') {
      return total + nominal;
    }

    return total - nominal;
  }, 0);

  return (
    <div className="wadah-keuangan">

      <h1>Catatan Keuangan Mini</h1>
      <p className="deskripsi">
        Aplikasi pencatatan pemasukan dan pengeluaran.
      </p>

      <div className="saldo">
        <h3>Total Saldo</h3>
        <h2>
          Rp {totalSaldo.toLocaleString('id-ID')}
        </h2>
      </div>

      <FormTransaksi onTambah={tambahTransaksi} />

      <DaftarTransaksi
        transaksi={transaksi}
        onHapus={hapusTransaksi}
      />

    </div>
  );
}

export default App;

