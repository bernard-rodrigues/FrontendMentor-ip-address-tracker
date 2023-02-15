import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Map } from "./components/Map";
import { IPLocationContextProvider } from "./contexts/IPLocationContext";

export function App() {
  return (
    <IPLocationContextProvider>
      <Header />
      <Map />
      <Footer />
    </IPLocationContextProvider>
  )
}
