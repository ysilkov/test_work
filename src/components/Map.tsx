import { useMemo } from "react";
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";
import { RootState } from "../store/store";
import { useSelector } from "react-redux";
import { style } from "../helper/google_map";
import location_gray from "./../image/location_gray.png";

const Home = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyCAS4oGrnHvJOo5-EkotI3js26WomOo8yg",
  });
  if (!isLoaded) return <div className="text-center">...Loading</div>;
  return <Map />;
};

const Map = () => {
  const list = useSelector((state: RootState) => state.list.list);
  const position = {
    lat: list[0].location.lat,
    lng: list[0].location.long,
  };

  const icon = {
    url: "http://labs.google.com/ridefinder/images/mm_20_white.png",
    scaledSize: new google.maps.Size(15, 25),
  };
  const center = useMemo(() => position, []);
  return (
    <div className="w-[350px] h-[400px] bg-[#2A3047] border border-[#2A3047] rounded-xl">
      <div className="h-1/2 bg-[#2A3047] rounded-t-lg pt-[31px] px-[50px] text-[#E7EAF0] text-xl">
        <p className="pb-[8px]">
          {list[0].name} <br />
          University Hospital Giessen.
        </p>
        <div className="flex text-[#E8EBF3] mb-[7px]">
          <img
            src={location_gray}
            className="h-4 w-4 mt-1.5 mr-2 invert sepia md:filter-[#D8D8D8]"
          />
          <p className="text-lg">{list[0].address}</p>
        </div>
        <div className="text-lg">
          <p>{list[0].phone},</p>
          <p>{list[0].email}</p>
        </div>
      </div>
      <GoogleMap
        zoom={10}
        center={center}
        mapContainerClassName="w-[348px] h-1/2 text-sky-800 rounded-b-xl"
        options={{ styles: style }}
      >
        <MarkerF position={center} icon={icon} />
      </GoogleMap>
    </div>
  );
};
export default Home;
