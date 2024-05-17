import { NextResponse } from "next/server";

/**
 *
 * @param req  英文文档dosc查看具体的使用方法
 * @returns
 */
export const GET = async (req: Request) => {
  /**
   * @param {url传参地址}
   */
  /**
   * @param {获取接口地址 {"code":1,"page":"2"}}
   */
  const { searchParams } = new URL(req.url);
  const list = await fetch(
    `https://aigc.happyelements.com/api/v1/aivibe/sd-styles`
  )
    .then((res) => res.json())
    .then((res) => res.result.list);
  return NextResponse.json({ list });
};
/**
 *
 * @param req {参数 post请求}
 * @returns
 */
export const POST = async (req: Request) => {
  /**
   * @param {在终端输出info}
   */
  const info = await req.json();
  // console.log(info);
  return NextResponse.json({
    success: true,
    errorMessage: "",
    data: "新增成功",
  });
};
