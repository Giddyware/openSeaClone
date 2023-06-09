import { useDispatch } from "react-redux";
import { pullFromMarket, pushToMarket } from "../../context/nft/nftActions";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Card = ({
  id,
  nftId,
  imageWidth,
  nftInMarket,
  photo,
  floor,
  totalVolume,
  priceInEtherium,
  name,
  inDashboard,
  imgUrl,
}) => {
  const [enabled, setEnabled] = useState(nftInMarket);
  const BASE_URL = "https://alphapp.tech";
  const imageURL = `${BASE_URL}${photo}`;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleToggleMarket = () => {
    enabled ? dispatch(pullFromMarket(id)) : dispatch(pushToMarket(id));
  };
  return (
    // <div className="h-56">
    <a
      href="#"
      className="flex flex-col gap-2 bg-white rounded-lg shadow-lg min-h-[350px] min-w-220px]"
    >
      <div className="w-full h-full bg-white shadow-md rounded-b-2xl">
        <div className="w-full h-[75%] max-h-[290px]">
          <img
            crossOrigin="anonymous"
            src={imgUrl || imageURL}
            alt=""
            className="object-cover w-full h-full rounded-t-2xl"
          />
        </div>
        <div className="relative flex flex-col p-4 rounded-b-2xl h-fit">
          <h3 className="pb-4 text-sm font-bold">{name}</h3>
          <div className="flex justify-between mb-5 font-bold">
            <div className="flex justify-between w-full">
              <p className="text-gray-600">FLOOR</p>
              <p className="">{priceInEtherium} ETH</p>
            </div>
          </div>
          {inDashboard && (
            <>
              <div className="md:mb-10 lg:mb-10">
                <label className="relative inline-flex items-center mb-5 ml-auto mr-auto cursor-pointer">
                  <span className="mr-3 font-medium text-gray-900 ">
                    Push to market
                  </span>
                  <input
                    // type="checkbox"
                    // onChange={handleToggleMarket}
                    // className="sr-only peer"
                    type="checkbox"
                    className="sr-only peer"
                    checked={nftInMarket}
                    readOnly
                  />
                  <div
                    onClick={handleToggleMarket}
                    className="w-14 h-8 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:right-[16px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"
                  ></div>
                </label>
              </div>
            </>
          )}
        </div>
      </div>
    </a>
    // </div>
  );
};
export default Card;

// import { useDispatch } from "react-redux";
// import { pullFromMarket, pushToMarket } from "../../context/nft/nftActions";
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { GoVerified } from "react-icons/go";

// const Card = ({
//   id,
//   nftId,
//   imageWidth,
//   nftInMarket,
//   photo,
//   floor,
//   totalVolume,
//   priceInEtherium,
//   name,
//   inDashboard,
//   imgUrl,
// }) => {
//   const [enabled, setEnabled] = useState(nftInMarket);
//   const BASE_URL = "https://alphapp.tech";
//   const imageURL = `${BASE_URL}${photo}`;

//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const handleToggleMarket = () => {
//     enabled ? dispatch(pullFromMarket(id)) : dispatch(pushToMarket(id));
//   };
//   return (
//     <div className="inline-block w-full">
//       <a href="" className="">
//         <div className="cardWrapper">
//           <div className="h-0 relative pb-[66.6667%]">
//             <span className="relative inline-block max-w-full p-0 m-0 overflow-hidden border-0 opacity-1 h-initial">
//               <img
//                 crossOrigin="anonymous"
//                 src={imgUrl || imageURL}
//                 alt=""
//                 className="absolute block object-cover w-0 h-0 max-w-full max-h-full min-w-full min-h-full m-auto"
//               />
//             </span>
//           </div>
//           <div className="absolute invisible w-1 h-1 z-[-9999]"></div>
//           <div className="flex p-4 rounded-xl">
//             <div className="flex flex-col w-full overflow-hidden">
//               <div className="flex items-center justify-start">
//                 <h3 className="pb-4 text-sm font-bold">{name || "Giddy"}</h3>
//                 <GoVerified color="#2081E2" />
//               </div>
//               <div className="flex mb-5 font-bold">
//                 <p className="text-gray-600">FLOOR</p>
//                 <p className="">{priceInEtherium}ETH</p>
//               </div>
//             </div>
//           </div>
//         </div>
//         {inDashboard && (
//           <>
//             <label className="relative inline-flex items-center mb-5 ml-auto mr-auto cursor-pointer">
//               <span className="ml-3 mr-3 font-medium text-gray-900 dark:text-gray-300">
//                 Push to market
//               </span>
//               <input
//                 // type="checkbox"
//                 // onChange={handleToggleMarket}
//                 // className="sr-only peer"
//                 type="checkbox"
//                 className="sr-only peer"
//                 checked={nftInMarket}
//                 readOnly
//               />
//               <div
//                 onClick={handleToggleMarket}
//                 className="w-14 h-8 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:right-[16px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"
//               ></div>
//             </label>
//           </>
//         )}
//       </a>
//     </div>
//   );
// };
// export default Card;
