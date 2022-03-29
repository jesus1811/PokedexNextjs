import { useRouter } from "next/router";
const Header = () => {
  const router = useRouter();
  return (
    <div
      className="w-full py-[10px] fixed left-0 top-0 z-50
flex flex-col justify-center items-center bg-gray-900 opacity-[85%]"
    >
      <div className="w-full h-full flex justify-between items-center px-[5%]">
        <input type="checkbox" id="check" className="hidden" />
        <h1
          onClick={() => {
            router.push("/");
          }}
          className="text-white cursor-pointer text-[30px] font-semibold"
        >
          PokeDex
        </h1>
        <label htmlFor="check" className="btnCheck"></label>
        <nav className="w-full flex justify-end gap-[18px] transition-all links__nav"></nav>
      </div>
    </div>
  );
};
export default Header;
