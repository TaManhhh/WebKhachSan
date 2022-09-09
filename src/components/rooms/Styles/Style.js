import "./Style.css";
import { Title } from "./Title";
import { Link, NavLink } from "react-router-dom";
// import useFetch from "./useEffect";
export const Style = () => {
  // const { data } = useFetch("http://127.0.0.1:5000/user/room");
  // console.log(data);
  return (
    <div>
      <div className="row-style">
        <NavLink className='hover-card'  to="62e26ef06982e28714ab5bf4">
          <Title
            img="	https://erios.webhotel.vn/images/room-5-768x624.jpg"
            title="Luxury Rooms"
          />
        </NavLink>
        <NavLink className='hover-card' to="62e272396982e28714ab5bf5">
          {" "}
          <Title
            img="	https://erios.webhotel.vn/images/room-1-768x624.jpg"
            title="Double Rooms"
          />
        </NavLink>
        <NavLink className='hover-card' to="62e274ef6982e28714ab5bfb">
          <Title
            img="	https://erios.webhotel.vn/images/room-5-768x624.jpg"
            title="Classic Rooms"
          />
        </NavLink>
        <NavLink className='hover-card' to="62e2748f6982e28714ab5bfa">
          {" "}
          <Title
            img="	https://erios.webhotel.vn/images/room-6-768x624.jpg"
            title="Premium Rooms"
          />
        </NavLink>
        <NavLink className='hover-card' to="62e2772ea4492a3727771c11">
          <Title
            img="	https://erios.webhotel.vn/images/room-1-768x624.jpg
          "
            title="Standard Rooms"
          />
        </NavLink>
        <NavLink className='hover-card' to="62e275616982e28714ab5bfd">
          <Title
            img="		https://erios.webhotel.vn/images/room-1-768x624.jpg"
            title="Double Rooms"
          />
        </NavLink>
        <NavLink className='hover-card' to="62e275d6a4492a3727771c0f">
          <Title
            img="	https://erios.webhotel.vn/images/room-1-768x624.jpg"
            title="Classic Rooms"
          />
        </NavLink>
        <NavLink className='hover-card' to="62e27824a4492a3727771c19">
          {" "}
          <Title
            img="	https://erios.webhotel.vn/images/room-1-768x624.jpg"
            title="Golden Rooms"
          />
        </NavLink>
      </div>
    </div>
  );
};
