export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="grid  place-content-center self-stretch overflow-y-auto ">
      {children}
    </main>
  );
}
