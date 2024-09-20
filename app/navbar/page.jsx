import Link from "next/link";
import { AiFillCodeSandboxCircle } from "react-icons/ai";

const NavBar = () => {
  return <div className=" bg-gray-200 flex  text-black space-x-9 text-xl font-bold items-center   p-3">
    
        <Link href=  "/"> <AiFillCodeSandboxCircle  className="size-8"/> </Link><br></br>
        <Link href=  "/"> Home </Link><br></br>
       <Link href=  "/topMovies"  > Top Movies </Link><br></br>
       <Link href=  "/movies"  >Movies</Link>
       <Link href=  "/"  > Search</Link><br></br>
     
    </div>;
};

// [GET] https://api.escuelajs.co/api/v1/products


export default NavBar;
