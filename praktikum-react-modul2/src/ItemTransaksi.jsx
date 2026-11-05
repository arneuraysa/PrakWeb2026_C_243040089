
function ItemTransaksi({ item, onHapus }) {
  return (
    <li className="item-transaksi">

      <div>
        <strong>{item.keterangan}</strong>

        <p className="jenis-transaksi">
          {item.jenis}
        </p>
      </div>

      <div className="aksi-transaksi">

        <strong
          className={
            item.jenis === 'pemasukan'
              ? 'hijau'
              : 'merah'
          }
        >
          {item.jenis === 'pemasukan' ? '+' : '-'}
          Rp {Number(item.nominal).toLocaleString('id-ID')}
        </strong>

        <button
          className="tombol-hapus"
          onClick={() => onHapus(item.id)}
        >
          Hapus
        </button>

      </div>

    </li>
  );
}

export default ItemTransaksi;
