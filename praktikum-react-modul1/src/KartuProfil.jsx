function KartuProfil({ nama, npm, kelas, status, fotoUrl }) {
  return (
    <div className="profile-card">
      <img
        src={fotoUrl || 'https://via.placeholder.com/100'}
        alt={`Foto ${nama}`}
        className="profile-photo"
      />

      <div className="profile-info">
        <h3>{nama}</h3>
        <p>NPM: <strong>{npm}</strong></p>
        <p>Kelas: {kelas}</p>
        <span className="profile-status">
          ● Status Akademik: {status}
        </span>
      </div>
    </div>
  );
}

export default KartuProfil;
