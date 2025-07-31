import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";


export default async function HomeLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: "en" | "es" }>;
}) {

  const lang = (await params).lang;

  return (
   <>
    <Navbar lang={lang} />
      {children}
    <Footer />
   </>
  );
}