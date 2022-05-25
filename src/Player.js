import "./Player.css";
import SideBar from "./SideBar";
import Body from "./Body";
import Footer from "./Footer";

function Player({ spotify }) {
  return (
    <div className="player">
      <div className="player_body">
        <SideBar />
        <Body />
      </div>
      <Footer />
    </div>
  );
}

export default Player;
