import Header from "../Header"
import HelloScreen from "../HelloScreen"
import Technologies from "../Technologies"
import Industries from "../Industries"
import Map from "../Map"
import ContactForm from "../ContactForm"
import Footer from "../Footer"

import './LandingLayout.css'

export default function LandingLayout({children}) {
  return (
    <div className="App">
      {/* { children } */}
      <Header />
      <HelloScreen />
      <Technologies />
      <Industries />
      <Map />
      <ContactForm />
      <Footer />
    </div>
  );
}
