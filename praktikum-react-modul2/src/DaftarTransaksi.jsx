
import ItemTransaksi from './ItemTransaksi';

function DaftarTransaksi({ transaksi, onHapus }) {
  return (
    <div className="kartu">
      <h2>Daftar Transaksi</h2>

      {transaksi.length === 0 ? (
        <p className="kosong">
          Belum ada transaksi. Silakan tambahkan transaksi!
        </p>
      ) : (
        <ul className="daftar-transaksi">

          {transaksi.map((item) => (
            <ItemTransaksi
              key={item.id}
              item={item}
              onHapus={onHapus}
            />
          ))}

        </ul>
      )}

    </div>
  );
}

export default DaftarTransaksi;
