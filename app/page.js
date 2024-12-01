import Image from "next/image";
import Main from "@/components/MainContent";
import SocialIcons from "../components/SocialIcons";
import Read from "./read/page";
const crypto = require("crypto");
const jwtSecret = crypto.randomBytes(32).toString("hex");
export default function Home() {
  return (
    <div>
      <Main />
      <SocialIcons />
      {/* <Read /> */}
    </div>
  );
}
