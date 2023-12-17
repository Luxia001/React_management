import "./Header.css";
import { MdOutlineWbSunny } from "react-icons/md";
import { BsMoonStars } from "react-icons/bs";

export function Headers(props) {
  const { theme, setTheme } = props;

  function ToggleTheme() {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }
  return (
    <header>
      <div className="logo">
        <span>Task Management</span>
      </div>
      <div className="theme-container">
        <span className="icon" onClick={ToggleTheme}>
          <span>
            {theme === "light" ? (
              <MdOutlineWbSunny
                style={{
                  color: "orange",
                }}
              />
            ) : (
              <BsMoonStars
                style={{
                  color: "yellow",
                }}
              />
            )}
          </span>
        </span>
      </div>
    </header>
  );
}
