"use client";

import { useEffect, useState } from "react";
import Card from "../components/card.js";
import data from "../data";
import Header from "../components/header.js";

export default function Home() {
  let [datas, setDatas] = useState([]);
  useEffect(() => {
    setDatas(data);
    console.log(data);
  }, []);
  return (
    <main className="card-box">
      <Header head="Blogs Posts" />
      <div class="flex flex-wrap mt-20 pt-20">
        {datas && datas.map((val, index) => <Card key={index} data={val} />)}
      </div>
    </main>
  );
}
