import "./App.css";
import ArtistSection from "./components/ArtistSection/ArtistSection";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";
import Section from "./components/Section/Section";
import { useState } from "react";


function App() {
  const [playerSong,setPlayerSong] = useState({"id":2,"name":"telepatia","imgURL":"https://i.scdn.co/image/ab67616d0000b273044a5466dac00f7b3c570b99","singer":"Kali Uchis"})
  function stateUpdate(e){
    const song = e.target.id;
    setPlayerSong(JSON.parse(song))
  }
  return (
    <div className="App">
      <NavBar />
      <Header stateUpdate={stateUpdate} />
      <Section stateUpdate={stateUpdate}  name="Recently Played" api="https://spotify-ui-clone-backend.herokuapp.com/api/v1/recentlyPlayed" />
      <Section stateUpdate={stateUpdate} name="Made For You" api="https://spotify-ui-clone-backend.herokuapp.com/api/v1/madeForYou" />
      <ArtistSection name="Artist You May Like" />
      <Footer currSong={playerSong} />
    </div>
  );
}

export default App;
