import { useTheme } from "next-themes";
import ButtonCustom from "../ButtonCustom";
import LightModeSvg from "../../assets/icons/light-mode.svg";
import DarkModeSvg from "../../assets/icons/dark-mode.svg";

export default function ThemeSwitch() {
  const { theme, setTheme } = useTheme();
  const icon = theme === "light" ? <DarkModeSvg /> : <LightModeSvg />;

  function toggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  return <ButtonCustom icon={icon} onClick={toggleTheme} />;
}
