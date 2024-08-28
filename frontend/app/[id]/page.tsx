export default function SingleCard({
  params,
}: {
  params: {
    id: string;
  };
}) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <p>Card ID: {params.id}</p>
    </main>
  );
}
