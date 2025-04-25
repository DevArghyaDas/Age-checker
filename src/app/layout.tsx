import Header from "@/components/Header/Header";
import ThemeProvider from "@/components/ThemeProvider";
import "./globals.css";
import ToastProvider from "@/components/ToastProvider";

type RootLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html
      lang="en"
      suppressHydrationWarning
    >
      <body className="">
        <ThemeProvider
          attribute={"class"}
          enableSystem={true}
        >
          <ToastProvider />
          <Header />

          <main className="container mx-auto px-6 py-3">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
