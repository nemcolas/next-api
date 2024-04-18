import Image from "next/image";
import {Client}  from "./api/clients/interfaces";

export default async function Home() {
  const response = await fetch ('http://localhost:3000/api/clients');
  const json = await response.json();

return(
  <main>
    {
      json.map((item: Client) =>{
        return(
          <>
          <div className = "border bg-gray-400 justify center">
          <div className = 'flex 1'>{item.name}</div>
          <div className = 'uppercase flex 1 italic'>{item.address}</div>
          </div>
          </>
        );
      })
    }
  </main>
);
  }
