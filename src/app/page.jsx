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
    <body>
      <header className="w-screen h-24 flex items-center justify-center bg-gray-400  ">
        <p className="text- font-bold ">Projeto Simples de consumo de API</p>
      </header>

      <div className="w-full h-screen items-center  flex flex-col place-content-center bg-gray-200">
        <div className="mb-5">
          <Card>
            <div>
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
            </div>
          </Card>
        </div>

        <div>
          <Card className="flex flex-col place-content-between">
            <div className="flex place-content-between">
              <InfoCard className="text-7xl mr-8 " data={`${clima?.temp}ºC `} />
              <IconsWeather icon={clima?.condition_code} />
            </div>
            <InfoCard
              className="text-2xl font-mono text-center"
              data={clima?.description}
            />
            <InfoCard
              className="text-2xl font-mono text-center"
              data={clima?.city}
            />
          </Card>
        </div>
      </div>

      <footer className="w-screen h-24 bg-gray-400  "></footer>
    </body>
  );
};
export default Page;
