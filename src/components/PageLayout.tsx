export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="grid border place-content-center self-stretch ">
      {children}
    </main>
  );
}
