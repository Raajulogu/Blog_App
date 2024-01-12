"use client";

import Card from "./components/card";
import { useEffect, useState } from "react";
import data from "./data.js";
import Header from "./components/header";

export default function Home() {
  let [datas, setDatas] = useState([]);
  useEffect(() => {
    setDatas(data);
    console.log(data);
  }, []);
  return (
    <main className="card-box">
       <Header head="Blogs Posts"/>
      <div class="flex flex-wrap">
        {datas && datas.map((val, index) => <Card key={index} data={val} />)}
      </div>
    </main>
  );
}
