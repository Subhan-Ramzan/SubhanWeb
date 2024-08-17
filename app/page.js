import Image from "next/image";
import Main from "@/components/MainContent";
const crypto = require("crypto");
const jwtSecret = crypto.randomBytes(32).toString("hex");
console.log("jwt is");
console.log(jwtSecret);
export default function Home() {


  return (
    <div>
      <Main />
    </div>
  );
}
