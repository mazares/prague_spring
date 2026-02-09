import PageLayout from "./PageLayout";
import Header from "./Header";
import Footer from "./Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="grid  h-screen w-[95vw] md:w-[90vw] lg:w-[85vw] ">
      <Header />
      <PageLayout>{children}</PageLayout>
      <Footer />
    </main>
  );
}
