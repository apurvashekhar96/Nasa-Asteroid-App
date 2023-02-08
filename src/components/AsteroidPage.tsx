import "./AsteroidPage.css";
import { useTypedSelector } from "../hooks/usetypedSelector";
import { AiOutlineCloseCircle } from "react-icons/ai";

const AsteroidPage = (props: any) => {
  const data = useTypedSelector((state) => state.asteroidData.data);
  const clickHnadler = () => {
    props.closeWindow();
  };
  console.log(`Asteroid came`);
  return (
    <>
      <div className="asteroidContainer">
        <div onClick={clickHnadler} className="close Window">
          <AiOutlineCloseCircle className="closeImage" />
        </div>
        <div className="asteroidName">{`Name of the Asteroid: ${data.name}`}</div>
        <div className="asteroidLink">
          <a href={data.nasa_jpl_url}>{`JPL URL: ${data.nasa_jpl_url}`}</a>
        </div>
        <div className="asteroidisDangerous">
          {data.is_potentially_hazardous_asteroid
            ? `Danger Status: You should Watch out for this One!`
            : `Danger Status: No need toworry about this Asteroid.`}
        </div>
      </div>
    </>
  );
};

export default AsteroidPage;
