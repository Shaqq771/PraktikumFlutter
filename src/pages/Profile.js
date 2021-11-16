import { Fragment } from "react";
import CardAnggota from "../component/CardAnggota";
import "./Profile.css";
import {BsGithub} from "react-icons/bs";


export default function Profile() {
  const STAR_COLOR = "rgb(220, 117, 21)";
  const STAR_SIZE = 20;

  const anggota = [
    {
      nama: "Muhammad Ishaq Matanggwan",
      nim: "21120119130053",
      id: 1,
      github: "https://github.com/shaqq771",
      img: "https://i.pinimg.com/236x/48/59/a6/4859a69d40a06b74331a64f21268e6f7.jpg",
    },
    {
      nama: "Oddy Ramadhan",
      nim: "21120119140122",
      id: 2,
      github: "https://github.com/oddyramadhan",
      img: "https://i.pinimg.com/236x/6c/51/b9/6c51b9b1813e243ea3215b7a9fa0f038.jpg",
    },
    {
      nama: "Faris Rizqan",
      nim: "21120119100083",
      id: 3,
      github: "https://github.com/farisrizqan",
      img: "https://i.pinimg.com/236x/07/be/3f/07be3f004f08236758c157bf847affdb.jpg",
    },
    {
      nama: "Rama Pradana",
      nim: "21120119140125",
      id: 4,
      github: "https://github.com/rama1906",
      img: "https://i.pinimg.com/236x/16/11/f9/1611f9e0248ab14b50d142a2522cf1c5.jpg",
    },
  ];

    return (
      <>
      <p id="profile">ANGGOTA KELOMPOK</p>
      <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
      {anggota.map((item, index) => (
        <Fragment key={item.id}>
          <CardAnggota
            nama={item.nama}
            img={item.img}
            nim={item.nim}
            size={STAR_SIZE}
            color={STAR_COLOR}
            onClick={() => alert("Anggota " + item.id)}
          />
           <button onClick={() => 
                window.location.href=item.github}><BsGithub/></button>
          {anggota.length === index + 1 && <div style={{ marginBottom: 80 }} />}
        </Fragment>
      ))}
      </div>
      </>
    );
  }
