import "../globals.css";
import localFont from "next/font/local";
import type { Metadata } from "next";
import { metaData } from "../config";
import { ThemeProvider } from "./(components)/theme-switch";
import { Navbar } from "./(components)/nav";
import Footer from "./(components)/footer"

const geistSans = localFont({
   src: "../fonts/GeistVF.woff",
   variable: "--font-geist-sans",
   weight: "100 900",
});
const geistMono = localFont({
   src: "../fonts/GeistMonoVF.woff",
   variable: "--font-geist-mono",
   weight: "100 900",
});

// export const metadata: Metadata = {
//   title: "Christopher Watson Portfolio",
//   description: "Christopher Watson - Software Engineer | Researcher",
// };

export const metadata: Metadata = {
   metadataBase: new URL(metaData.baseUrl),
   title: {
      default: metaData.title,
      template: `%s | ${metaData.title}`,
   },
   description: metaData.description,
   openGraph: {
      images: metaData.ogImage,
      title: metaData.title,
      description: metaData.description,
      url: metaData.baseUrl,
      siteName: metaData.name,
      locale: "en_US",
      type: "website",
   },
   robots: {
      index: true,
      follow: true,
      googleBot: {
         index: true,
         follow: true,
         "max-video-preview": -1,
         "max-image-preview": "large",
         "max-snippet": -1,
      },
   },
   twitter: {
      title: metaData.name,
      card: "summary_large_image",
   },
   icons: {
      icon: "/favicon.ico",
   },
};

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang="en" className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
         <head>
            <link
               rel="alternate"
               type="application/rss+xml"
               href="/rss.xml"
               title="RSS Feed"
            />
            <link
               rel="alternate"
               type="application/atom+xml"
               href="/atom.xml"
               title="Atom Feed"
            />
            <link
               rel="alternate"
               type="application/feed+json"
               href="/feed.json"
               title="JSON Feed"
            />
         </head>
         <body className="antialiased flex flex-col items-center justify-center mx-auto mt-2 lg:mt-8 mb-20 lg:mb-40">
            <ThemeProvider
               attribute="class"
               defaultTheme="system"
               enableSystem
               disableTransitionOnChange
            >
               <main className="flex-auto min-w-0 mt-2 md:mt-6 flex flex-col px-6 sm:px-4 md:px-0 max-w-[840px] w-full">
                  <Navbar />
                  {children}
                  <Footer />
                  {/* <Analytics /> */}
                  {/* <SpeedInsights /> */}
               </main>
            </ThemeProvider>
         </body>
      </html>
   );
}
