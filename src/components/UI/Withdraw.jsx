import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

const Withdraw = ({ show, modalStatus }) => {
  const [showMore, setShowMore] = useState(false);

  const changeShowMore = () => {
    setShowMore((prev) => !prev);
  };
  return (
    <div
      className="fixed mx-auto sm:left-[30%] sm:top-[15%] h-[70%] w-[90%] sm:w-[40%] text-3xl font-poppins font-[500] z-[10000] text-black bg-white rounded-2xl px-10 py-12"
      style={{
        transform: show ? "translateY(0)" : "translateY(-1500px)",
        opacity: show ? "1" : "0",
        transition: "all 1s",
      }}
    >
      {/* <div className="flex flex-col w-full h-full gap-6 px-10 bg-white rounded-3xl">
        <div className="flex justify-between w-full mt-5">
          <h3 className="py-6 text-center">Add funds to purchase</h3>
          <div className="cursor-pointer"> */}
      {/* onClick = {() => props.handler()} */}
      {/* <div
              className="flex items-center justify-center py-6"
              onClick={modalStatus}
            >
              <AiOutlineClose fontSize={20} />
            </div>
          </div>
        </div>

        <h1>
          You need 0.4923 Polygon ETH +{" "}
          <span className="text-blue-900 font-[800]"> gas fees</span>
        </h1>
        <div className="opacity-[0.5]">
          Transfer funds to your wallet or add funds with a card it can take up
          to a minute for your balance to update{" "}
        </div>

        <div className="flex justify-between w-full">
          <div> Your ETH wallet</div> <span>Balance 0 ETH</span>
        </div>

        <small className="opacity-[0.5]">
          0xb07e0b22065asaksjas,hjknsa0189012012jmkabnjs1u290121
        </small>

        <button className="bg-blue-200 w-full rounded-[4px] text-white text-poppins py-3">
          Continue
        </button>
        <div className="text-center text-blue-900">Add funds with card</div>
      </div> */}

      <p>Withdraw</p>
      <p>Coin List</p>
      <div className="">
        <div className="flex justify-between">
          {/* TODO: Add the logo of the coin */}
          <p>logo ETH</p>
          <p>~19400</p>
        </div>
        <div className="flex justify-between text-gray-500">
          {/* TODO: Add the logo of the coin */}
          <p>Logo WETH</p>
          <p>~19400</p>
        </div>
      </div>
    </div>
  );
};
export default Withdraw;
