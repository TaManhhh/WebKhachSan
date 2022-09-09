import "./Style.css";
export const Title = (props) => {
  return (
    <div className="hover:bg-teal-100">
      <div className="col-lg-4 col-md-6 inner-style  ">
        <div className="relative overflow-hidden bg-no-repeat bg-cover max-w-xs">
          <img src={props.img} className="max-w-xs" alt="Louvre" />
          <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0  transition duration-300 ease-in-out "></div>
        </div>
      </div>
      <div className="text-white">
        <p>Form$120/Night</p>
      </div>
      <div className="style-title">
        <h3> {props.title}</h3>
        <div>
          <a href>20m2 |</a>

          <a href>Balcony |</a>

          <a href>Lake View</a>
        </div>
      </div>
    </div>
  );
};
