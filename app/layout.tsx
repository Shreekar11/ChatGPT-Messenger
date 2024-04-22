import SideBar from "../components/SideBar";
import "../styles/globals.css";
import ClientProvider from "../components/ClientProvider";
import { AuthProvider } from "../context/Auth";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html>
      <head />
      <body>
        <AuthProvider>
          <div className="flex">
            <div className="bg-[#202123] max-w-xs h-screen overflow-y-auto md:min-w-[20rem]">
              <SideBar />
            </div>
            {/* ClientProvider */}
            <ClientProvider />

            <div className="bg-[#343541] flex-1">{children}</div>
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}
