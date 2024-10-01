import Image from "next/image";
import Main from "@/components/MainContent";
import SocialIcons from '../components/SocialIcons';
import About from "./read/page";
const crypto = require("crypto");
const jwtSecret = crypto.randomBytes(32).toString("hex");
console.log("jwt is");
console.log(jwtSecret);
export default function Home() {


  return (
    <div>
      <Main />
      <SocialIcons/>
      <About/>

    </div>
  );
}
