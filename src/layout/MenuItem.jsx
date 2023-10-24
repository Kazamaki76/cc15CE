// import { HouseIcon } from "../icons";
import { Link } from "react-router-dom";

export default function MenuItem({to,Icon,active}) { //receive probs
  return (
    <Link to={to}>
    <div className="px10 py-2 rounded-lg hover:bg-gray-200">
      <Icon className={`${active ? 'fill-blue-600' : 'fill-gray-500'}`} />.
    </div>
    </Link>
  );
}
