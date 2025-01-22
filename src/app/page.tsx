import BeautifulRoom from "@/components/beautifulRoom/BeautifulRoom";
import Browserange from "@/components/browserange/Browserange";
import Hero from "@/components/hero/Hero";
import OurProducts from "@/components/ourproducts/OurProducts";
import PhotoGallery from "@/components/photogallery/PhotoGallery";





export default function Home() {
  return (
    <>
    <Hero/>
    <Browserange/>

     <OurProducts/>
    <BeautifulRoom/>

    <PhotoGallery/>
   
    </>
  );
}