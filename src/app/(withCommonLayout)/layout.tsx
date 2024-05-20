import Footer from "@/components/shared/Footer/Footer";
import NavbarColor from "@/components/shared/Navbar/NavbarColor";

export default function CommonLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <NavbarColor />
      {children}
      <Footer />
    </div>
  );
}
