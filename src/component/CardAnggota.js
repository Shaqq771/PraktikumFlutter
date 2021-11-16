import "./CardAnggota.css";

export default function CardAnggota({ nama, nim, img, onClick }) {
  return (
    <div className="card" onClick={onClick}>
      <img src={img} alt="" className="photos" />
      <div className="description">
        <div>
          <p id="nama">{nama}</p>
          <p id="nim">{nim}</p>
        </div>
      </div>
    </div>
  );
}