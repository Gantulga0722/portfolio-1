import { Header, Footer } from "@/components";
import { useTheme } from "@/context/ThemeContex";

const Layout = ({ children }) => {
  const { theme, setTheme } = useTheme();

  const changeThemeHandler = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  const divBgClassName = theme == "light" ? "bg-[#FFF]" : "bg-[#030712]";
  return (
    <>
      <div className={`mx-auto flex flex-col ${divBgClassName}`}>
        <Header />
        <main className="max-w-[1440px] mx-auto">{children}</main>
      </div>
      <Footer />
    </>
  );
};
export default Layout;
