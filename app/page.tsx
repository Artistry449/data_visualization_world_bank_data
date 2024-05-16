"use client"

import { useEffect, useState } from "react";
import DashedLineChart from "./components/LineChart";
import PieChart from "./components/PieChart";
import BasicGauges from "./components/Gauge";
import Tarhalt from "./components/Tarhalt";

type CountryData = {
  iso_code: string;
  name: string;
};

type GDPData = {
  date: string;
  value: number | null;
};

export default function Home() {

  const [data, setData] = useState<GDPData[]>([]);
  const [countries, setCountries] = useState<CountryData[]>([]);
  const [selectedCountry, setSelectedCountry] = useState<string>("MN");
  const [selectedCountryLabel, setSelectedCountryLabel] = useState<string>("Mongolia");

  useEffect(() => {
    async function fetchData() {
      const countries_data = await fetch(`http://localhost:3001/api/countries_data`, {
        method: "GET"
      });
      const fetchedCountries = await countries_data.json();
      console.log(fetchedCountries)

      setCountries(fetchedCountries);
    }

    fetchData();
  }, []);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`http://localhost:3001/api/world-bank-gdp`, {
        method: "POST",
        body: JSON.stringify({ country_ISO: `${selectedCountry}` })
      },);

      const fetchedData = await response.json();

      console.log(fetchedData)
      setData(fetchedData);
    }

    fetchData();
  }, [selectedCountry]);

  return (

    <>
      <h1 className="m-auto mb-5 text-center text-large"><strong>Дэлхийн банкны мэдээллийн сан</strong></h1>

      <div className="dashboard">

        <div className="dashboard-top">

          <div className="line-chart">
            <DashedLineChart propData={data} country={selectedCountryLabel} />
            <select
              value={selectedCountry}
              onChange={(e) => {
                const selectElement = e.target as HTMLSelectElement;
                setSelectedCountry(selectElement.value);
                setSelectedCountryLabel(selectElement.options[selectElement.selectedIndex].text);
              }}
            >
              {countries && countries.map((el) => (<option key={el.iso_code} value={el.iso_code} label={el.name}>{el.name}</option>))}
            </select>
          </div>

          <div className="gauges">
            <BasicGauges />
          </div>

          <div className="pie-chart">
            <PieChart />
          </div>

        </div>

        <div className="dashboard-bottom">
          <Tarhalt />
        </div>
      </div>
    </>
  )
}
