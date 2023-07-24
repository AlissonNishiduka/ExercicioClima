"use client";
import { InfoCard } from "./components/InfoCard.jsx";
import SearchBar from "./components/SearchBar.jsx";
import Card from "./components/Card.jsx";
import { IconsWeather } from "./components/IconsWeather.jsx";
import { useEffect, useState } from "react";

const Page = () => {
  const [clima, setClima] = useState();
  useEffect(() => {
    fetch(
      `https://api.hgbrasil.com/weather?format=json-cors&key=ab31f1a1&city_name=itapetininga,sp`
    )
      .then((res) => res.json())
      .then((dados) => setClima(dados?.results));
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const city = event.target.elements.city.value;
    const uf = event.target.elements.uf.value;
    fetch(
      `https://api.hgbrasil.com/weather?format=json-cors&key=ab31f1a1&city_name=${city},${uf}`
    )
      .then((res) => res.json())
      .then((dados) => setClima(dados?.results));
  };

  return (
    <div className="w-screen h-screen items-center text-center justify-center flex flex-col bg-gray-200">
      <Card className=" ">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex place-content-between">
            <p className="mr-5">Insira sua cidade</p>
            <SearchBar name="city" />
          </div>

          <div className="flex place-content-between">
            <p>Insira seu estado</p>
            <SearchBar name="uf" />
          </div>
          <button
            type="submit"
            className="outline outline-1 outline-slate-500 bg-slate-700 text-white"
          >
            Procurar
          </button>
        </form>

        <div className="flex flex-col place-content-between">
          <div className="flex place-content-around">
            <InfoCard data={`${clima?.temp}ºC `} />
            <IconsWeather icon={clima?.condition_code } />
          </div>
          <InfoCard data={clima?.description} />
          <InfoCard data={clima?.city} />
        </div>
      </Card>
    </div>
  );
};
export default Page;
