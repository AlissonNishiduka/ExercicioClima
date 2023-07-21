"use client";
import { InfoCard } from "./components/InfoCard.jsx";
import SearchBar from "./components/SearchBar.jsx";
import Card from "./components/Card.jsx";
import { useEffect, useState } from "react";

const Page = () => {
  const [clima, setClima] = useState();

 
  useEffect(() => {
    fetch(
      "https://api.hgbrasil.com/weather?format=json-cors&key=ab31f1a1&city_name=Itapetininga,Sp"
    )
      .then((res) => res.json())
      .then((dados) => setClima(dados?.results));
  }, []);

  return (
    <div className="w-screen h-screen items-center text-center justify-center flex flex-col bg-gray-200">
      <Card className=" ">
        <div className="flex place-content-between">
          <p className="mr-5">Insira sua localização</p>
          <SearchBar className="" />
        </div>

        <div className="flex place-content-around">
          <InfoCard data={clima?.temp} />
          <InfoCard data={clima?.description} />
        </div>
        <InfoCard data={clima?.city} />
      </Card>
    </div>
  );
};
export default Page;
