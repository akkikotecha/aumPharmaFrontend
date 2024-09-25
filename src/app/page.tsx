"use client";

import Header from "@/components/header";
import Banner from "@/components/homePage/homeBanner";
import ShopCategory from "@/components/homePage/shopByCategory"
import Trending from "@/components/homePage/trendingToday"
import SellingProduct from "@/components/homePage/bestSellingProduct"
import InTheSpotlightSlider from "@/components/homePage/inTheSpotlight"
import WinterEssentialsSlider from "@/components/homePage/winterEssentials"
import CoughAndColdMedicinesSlider from "@/components/homePage/coughAndColdMedicines"
import ExploreSomethingNewSlider from "@/components/homePage/exploreSomethingNew"
import PopularCategoriesSlider from "@/components/homePage/popularCategories"
import TrendingNowSlider from "@/components/homePage/trendingNow"
import FlashSaleDealsSlider from "@/components/homePage/flashSaleDeals"
import MinOffSlider from "@/components/homePage/minOff"
import DealsInSlider from "@/components/homePage/dealsIn"
import WhyChooseAumBanner from "@/components/homePage/whyChooseAum"
import WhyChooseAumHomeFirstBanner from "@/components/homePage/whyChooseAumHomeFirst"
import WeeklyDealsSlider from "@/components/homePage/weeklyDeals"
import BestSellingCombosSlider from "@/components/homePage/bestSellingCombos"
import EasilyRefillUploadPrescriptionsBanner from "@/components/homePage/easilyRefillUploadPrescriptions"
import DownloadForFreeBanner from "@/components/homePage/downloadForFreeBanner"
import FromTheBlog from "@/components/homePage/fromTheBlog"
import FeaturedBrands from "@/components/homePage/featuredBrands"
import HappyClients from "@/components/homePage/happyClients"
import ShippinLocationSupport from "@/components/homePage/shippinLocationSupport"
import WhyChooseUs from "@/components/homePage/whyChooseUs"
import Faq from "@/components/homePage/faq"
import Footer from "@/components/footer/"

export default function Home() {

  return (
    <div className="">
          <Header></Header>
          <Banner></Banner>
          <ShopCategory></ShopCategory>
          <Trending></Trending>
          <SellingProduct></SellingProduct>
          <InTheSpotlightSlider></InTheSpotlightSlider>
          <WhyChooseAumHomeFirstBanner></WhyChooseAumHomeFirstBanner>
          <WeeklyDealsSlider></WeeklyDealsSlider>
          <BestSellingCombosSlider></BestSellingCombosSlider>
          <WinterEssentialsSlider></WinterEssentialsSlider>
          <WhyChooseAumBanner></WhyChooseAumBanner>
          <CoughAndColdMedicinesSlider></CoughAndColdMedicinesSlider>
          <ExploreSomethingNewSlider></ExploreSomethingNewSlider>
          <PopularCategoriesSlider></PopularCategoriesSlider>
          <TrendingNowSlider></TrendingNowSlider>
          <EasilyRefillUploadPrescriptionsBanner></EasilyRefillUploadPrescriptionsBanner>
          <FlashSaleDealsSlider></FlashSaleDealsSlider>
          <MinOffSlider></MinOffSlider>
          <DealsInSlider></DealsInSlider>
          <DownloadForFreeBanner></DownloadForFreeBanner>
          <FromTheBlog></FromTheBlog>
          <FeaturedBrands></FeaturedBrands>
          <HappyClients></HappyClients>
          <ShippinLocationSupport></ShippinLocationSupport>
          <WhyChooseUs></WhyChooseUs>
          <Faq></Faq>
          <Footer></Footer>
    </div>
  );
}
