import Header from "../../components/site/Header"
import LandingLayout from "../../components/site/UI/LandingLayout"
import HelloScreen from "../../components/site/HelloScreen"
import Technologies from "../../components/site/Technologies"
import Industries from "../../components/site/Industries"
import Map from "../../components/site/Map"
import ContactForm from "../../components/site/ContactForm"
import Footer from "../../components/site/Footer"

export default function LandingPage() {
  return (
    <LandingLayout>
      <Header />
      <HelloScreen />
      <Technologies />
      <Industries />
      <Map />
      <ContactForm />
      <Footer />
    </LandingLayout>
  )
}
