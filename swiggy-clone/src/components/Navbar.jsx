import swiggyHomeLogo from "../assets/swiggyHomeIcon.png";
import {
  ChevronDown,
  BriefcaseBusiness,
  Search,
  BadgePercent,
  LifeBuoy,
  LogIn,
  ShoppingCart,
} from "lucide-react";

function Navbar() {
  return (
    <nav className="max-h-14 flex items-center border-0 shadow-2xl w-full">
      {/* for home icon which enlarge on hovering */}
      <div className="mx-4 p-3">
        <img
          src={swiggyHomeLogo}
          alt="Home Logo"
          className="h-10 w-auto cursor-pointer hover:scale-125 transition duration-400"
        />
      </div>
      <div className="flex items-center mx-1 group cursor-pointer">
        <p className="font-bold text-gray-600 border-b-2 border-gray-400  group-hover:text-orange-500  group-hover:border-orange-500">
          Other
        </p>
        <ChevronDown className="text-gray-600  group-hover:text-orange-500 "></ChevronDown>
      </div>
      {/* the below division for entire right items */}
      <div className="flex items-center justify-between ml-auto">
        <div className="flex items-center mx-8  hover:text-orange-500 cursor-pointer">
          <BriefcaseBusiness />
          <span className="">Swiggy Corporate</span>
        </div>
        <div className="flex items-center mx-6  hover:text-orange-500 cursor-pointer">
          <Search />
          <span>Search</span>
        </div>
        <div className="flex items-center mx-6  hover:text-orange-500 cursor-pointer">
          <BadgePercent></BadgePercent>
          <span>Offers</span>
        </div>
        <div className="flex items-center mx-6  hover:text-orange-500 cursor-pointer">
          <LifeBuoy></LifeBuoy>
          <span>Help</span>
        </div>
        <div className="flex items-center mx-6  hover:text-orange-500 cursor-pointer">
          <LogIn></LogIn>
          <span>Sign In</span>
        </div>
        <div className="flex items-center mx-6  hover:text-orange-500 cursor-pointer">
          <ShoppingCart></ShoppingCart>
          <span>Cart</span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
