"use client";

import { useEffect, useState } from "react";

async function getStyles() {
  const res = await fetch(`/api/v1/aivibe/sd-styles`, {
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MTYxMTUwMDUsImlhdCI6MTcxNTg1NTgwNSwiaW5mbyI6IntcImxvY2FsaXphdGlvblwiOlwiemgtQ05cIn0iLCJpc3MiOiJtZXRhbCIsInJ0IjoiODllNjE2NGMtOTQ2MS0xY2QyLWUyZWQtMTdkMWIyMmQ4ZTVkIiwicnRlIjoxNzE3MTUxODA1LCJzdWIiOiI0NzAxMTc0MzM5NDQ4NzMzNjgifQ.7hJtN5kvoOPxUDSL7smxcFyHh3bx5oeSt-I_lwcG3-uf_FBMKEvzWOOmpuQN3MBbOdWGtZCNrJHsCeu5IZuw3w",
    },
  });

  return res.json();
}

export default function Page() {
  const [data, setData] = useState<any>();
  const styleData = getStyles();
  // console.log(styleData, "--styleData");

  useEffect(() => {
    console.log(styleData, "--styleData");
  }, [styleData]);

  //   useEffect(() => {
  //     const data = GET("api/v1/aivibe/sd-styles");
  //     console.log(data, "--data");
  //   }, []);

  //   useEffect(() => {
  //     // 定义一个异步函数来获取数据
  //     const fetchData = async () => {
  //       try {
  //         const response = await axios.get("/api/v1/aivibe/sd-styles");
  //         console.log(response, "--response");
  //         setData(response.data);
  //       } catch (error) {
  //         // setError(error);
  //       } finally {
  //         // setLoading(false);
  //       }
  //     };

  //     // 调用异步函数
  //     fetchData();
  //   }, []);
  const [name, setName] = useState("");
  return (
    <main className="flex items-center justify-center">
      <div>文生图</div>
    </main>
  );
}
