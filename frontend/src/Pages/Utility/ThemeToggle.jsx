import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../../Store/API/themeSlice";

const ThemeToggle = () => {
  const mode = useSelector((state) => state.theme.mode);
  const dispatch = useDispatch();

  return (
    <button
      onClick={() => dispatch(toggleTheme())}
      className="px-4 py-2 rounded"
    >
      Switch to {mode === "light" ? "Dark" : "Light"} Mode
    </button>
  );
};

export default ThemeToggle;
