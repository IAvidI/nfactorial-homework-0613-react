import "./header.css";
// import MyIcon from "../media/moon-svgrepo-com.svg";
import { ReactComponent as IconMenu } from "../media/moon-svgrepo-com.svg";
import { format } from "date-fns";

const Header = () => {
  return (
    <>
      <div className="header-wrapper">
        <div className="header-row">
          <div className="icon-search">
            <IconMenu className="icon" />
            <span class="input">
              <input type="text" placeholder="Say hi!" />
            </span>
          </div>
          <div>{format(new Date(), "d.MM.y  HH:mm")}</div>
        </div>
      </div>
    </>
  );
};

export default Header;
