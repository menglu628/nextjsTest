export default function Page({ params }: { params: { name: string } }) {
  return (
    <main className="flex items-center justify-center">
      <div>用户名：{params.name}</div>
    </main>
  );
}
