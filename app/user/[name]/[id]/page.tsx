export default function Page({
  params,
}: {
  params: { id: string; name: string };
}) {
  return (
    <main className="flex items-center justify-center">
      <div>用户id：{params.id}</div>
      <div>用户名：{params.name}</div>
    </main>
  );
}
