import { FaMoneyCheck } from "react-icons/fa";

import { MdCreate, MdOutlineCollections, MdSummarize } from "react-icons/md";
import { GiReceiveMoney, GiTakeMyMoney } from "react-icons/gi";
import { GrTransaction } from "react-icons/gr";
import { BiSupport } from "react-icons/bi";
import { RiLuggageDepositFill } from "react-icons/ri";
import { Link, useLocation } from "react-router-dom";

import Logo from "../../assets/logo.png";
import Logo_sm from "../../assets/logo_sm.png";
import { useTranslation } from "react-i18next";

const DashboardLinks = ({ hash, name, icon }) => {
  const location = useLocation();
  console.log(location, "location");
  return (
    <div className="flex items-center justify-start">
      {icon}
      <p className="p-2 text-2xl hidden md:inline">{name}</p>
    </div>
  );
};

const handleScroll = (ref) => {
  window.scrollTo({
    top: ref.offsetTop,
    left: 0,
    behavior: "smooth",
  });
};

const SideNav = ({ modalStatus, refs }) => {
  const { t } = useTranslation();
  return (
    <div className="h-[100%] w-full">
      <div className=" py-8 fixed top-0 left-0 bg-gray-100 h-full md:w-[250px] lg:w-[350px]">
        <a
          href="#"
          className="flex items-center md:justify-center p-2 pb-8 border-b "
        >
          <img className="hidden md:inline md:w-80" src={Logo} alt="logo" />
          <img className="md:hidden w-20" src={Logo_sm} alt="" />
          {/* <h1 className="text-2xl font-bold capitalize">OPENSEA</h1> */}
        </a>
        <ul className="flex flex-col gap-5 my-10">
          <li className="px-5 py-3 ml-3 md:ml-28 rounded-l-full cursor-pointer hover:bg-gray-300">
            <DashboardLinks
              icon={<MdSummarize size={"20px"} />}
              name={t("dashboard.account_summary")}
            />
          </li>
          <li
            className="px-5 py-3 ml-3 md:ml-28 rounded-l-full cursor-pointer hover:bg-gray-300"
            onClick={() => {
              console.log(refs.nftRef, "nftRef");
              refs.nftRef.current.scrollIntoView();
            }}
          >
            <DashboardLinks
              icon={<MdOutlineCollections size={"20px"} />}
              name={t("dashboard.NFT_Collection")}
            />
          </li>
          <Link
            to={`${location.pathname}/createNft`}
            className="px-5 py-3 ml-3 md:ml-28 rounded-l-full cursor-pointer hover:bg-gray-300"
          >
            <DashboardLinks
              icon={<MdCreate size={"10"} />}
              name={t("dashboard.Mint_Create")}
            />
          </Link>
          <li
            className="px-5 py-3 ml-3 md:ml-28 rounded-l-full cursor-pointer hover:bg-gray-300"
            onClick={() => {
              console.log(refs.transactionRef, "transactionRef");

              refs.transactionRef.current.scrollIntoView();
            }}
          >
            <DashboardLinks
              icon={<GrTransaction size={"20px"} />}
              name={t("dashboard.transaction")}
            />
          </li>

          <li
            className="px-5 py-3 ml-3 md:ml-28 rounded-l-full cursor-pointer hover:bg-gray-300"
            onClick={() => {
              console.log(refs.saleRef, "salesRef");
              refs.saleRef.current.scrollIntoView();
            }}
          >
            {/* <Link to="/#RecentSalesTable"> */}
            <DashboardLinks
              icon={<GiTakeMyMoney size={"20px"} />}
              name={t("dashboard.sales")}
              // hash="/#RecentSalesTable"
            />
            {/* </Link> */}
          </li>
          <li className="px-5 py-3 ml-3 md:ml-28 rounded-l-full cursor-pointer hover:bg-gray-300">
            <DashboardLinks
              icon={<BiSupport size={"20px"} />}
              name={t("dashboard.support")}
            />
          </li>
          {/* <li
            onClick={() => modalStatus()}
            className="px-5 py-3 ml-3 md:ml-28 rounded-l-full cursor-pointer hover:bg-gray-300"
          >
            <DashboardLinks
              icon={<GiReceiveMoney size={"20px"} />}
              name={t("dashboard.withdraw")}
            />
          </li>
          <Link
            to={`${location.pathname}/deposit`}
            className="px-5 py-3 ml-3 md:ml-28 rounded-l-full cursor-pointer hover:bg-gray-300"
          >
            <DashboardLinks
              icon={<RiLuggageDepositFill size={"20px"} />}
              name={t("dashboard.deposit")}
            />
          </Link> */}
          <Link
            to={`/marketPlace`}
            className="px-5 py-3 ml-3 md:ml-28 rounded-l-full cursor-pointer hover:bg-gray-300"
          >
            <DashboardLinks
              icon={<RiLuggageDepositFill size={"20px"} />}
              name={"Market Place"}
            />
          </Link>
        </ul>
      </div>
    </div>
  );
};
export default SideNav;
