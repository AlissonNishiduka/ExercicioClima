"use client";
import { InfoCard } from "./components/InfoCard.jsx";
import SearchBar from "./components/SearchBar.jsx";
import Card from "./components/Card.jsx";
import { useEffect, useState } from "react";

const Page = () => {
  const [clima, setClima] = useState();
  useEffect(() => {
    fetch(
      "https://api.hgbrasil.com/weather?format=json-cors&key=ab31f1a1&lat=-23.682&lon=-46.875&user_ip=remote"
    )
      .then((res) => res.json())
      .then((dados) => setClima(dados?.results));
  }, []);

  return (
    <div className="w-screen h-screen items-center justify-center flex flex-col">
      <Card >
        <SearchBar className="" />
        <InfoCard data={clima?.condition_slug} />
      </Card>
    </div>
  );
};
export default Page;
