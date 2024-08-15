import Image from "next/image";
import styles from "./page.module.css";
import HeroSection from "@/components/ui/hero";
import ToggleContent from "@/components/ui/toggle-section";
import ContentSlide from "@/components/ui/slide-up";
import MasterSlide from "@/components/ui/master-slider";
import NewsSlide from "@/components/ui/news-slide";
import ContactSec from "@/components/ui/contact-section";
import Marquee from "@/components/ui/marqee";
import SocialSec from "@/components/ui/social-section";
import MasterExp from "@/components/ui/master-exp";
import CallToAction from "@/components/ui/call-action";
import HeroMarquee from "@/components/ui/hero/hero-marquee";

export default function Home() {
  return (
    <>
      <HeroSection />
      <HeroMarquee />
      <ToggleContent />
      <ContentSlide />
      <MasterSlide />
      <Marquee />
      <NewsSlide />
      <CallToAction />
      <MasterExp />
      <ContactSec />
      <SocialSec />
    </>
  );
}
