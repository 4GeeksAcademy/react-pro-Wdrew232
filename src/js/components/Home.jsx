import React from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import Footer from "./Footer";
import Cards from "./Cards";

const Cardinfo = [
  {
    cardTitle: "Mi Amor",
    description:
      "It is a long established fact that a reader will be distracted...",
    image: "https://picsum.photos/300/301",
  },
  {
    cardTitle: "Mi Pasion",
    description:
      "It's a long established fact that a reader will be distracted...",
    image: "https://picsum.photos/300/302",
  },
  {
    cardTitle: "Mi Razon",
    description:
      "It is a long established fact that a reader will be distracted...",
    image: "https://picsum.photos/300/303",
  },
  {
    cardTitle: "Mi Miedo",
    description:
      "It is a long established fact that a reader will be distracted...",
    image: "https://picsum.photos/300/304",
  },
];

const Headerinfo = [
  {
    headerTitle: "A Warm Welcome!",
    headerText:
      "Contrary to popular belief, Lorem Ipsum is not simply random text...",
    image: "https://picsum.photos/600/200",
  },
];

const Home = () => {
  return (
    <div className="parent">
      <Navbar />
      {Headerinfo.map((Headerobj) => (
        <Header key={Headerobj.headerTitle} {...Headerobj} />
      ))}
      <div className="cards">
        {Cardinfo.map((personObj) => (
          <Cards key={personObj.cardTitle} cardData={personObj} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Home;
