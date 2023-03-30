import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/GitHub">
              {" "}
              <div className="mainContainer">
                <header className="headerOuter">
                  <span className="fontfooter">@Miep1194390 - &copy;2023</span>
                </header>{" "}
              </div>
            </Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
};

export default Layout;
