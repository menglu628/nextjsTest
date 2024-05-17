import axios from "axios";

export const dynamic = "force-dynamic"; // defaults to auto

// export async function GET(request: Request) {
//   return new Response("Hello, Next.js!", {
//     status: 200,
//     headers: {
//       "Access-Control-Allow-Origin": "*",
//       "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
//       "Access-Control-Allow-Headers": "Content-Type, Authorization",
//     },
//   });
// }

export async function GET(api: string) {
  const res = await axios(`https://aigc.happyelements.com/${api}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MTYxMTUwMDUsImlhdCI6MTcxNTg1NTgwNSwiaW5mbyI6IntcImxvY2FsaXphdGlvblwiOlwiemgtQ05cIn0iLCJpc3MiOiJtZXRhbCIsInJ0IjoiODllNjE2NGMtOTQ2MS0xY2QyLWUyZWQtMTdkMWIyMmQ4ZTVkIiwicnRlIjoxNzE3MTUxODA1LCJzdWIiOiI0NzAxMTc0MzM5NDQ4NzMzNjgifQ.7hJtN5kvoOPxUDSL7smxcFyHh3bx5oeSt-I_lwcG3-uf_FBMKEvzWOOmpuQN3MBbOdWGtZCNrJHsCeu5IZuw3w",
    },
  });
  return res;
  //   const data = await res.json();

  //   return Response.json({ data });
}
