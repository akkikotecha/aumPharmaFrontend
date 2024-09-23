"use client";

import Header from "@/components/header";
import Banner from "@/components/homeBanner";
import ShopCategory from "@/components/shopByCategory"
import Trending from "@/components/trendingToday"
import SellingProduct from "@/components/bestSellingProduct"
import InTheSpotlightSlider from "@/components/inTheSpotlight"
import WinterEssentialsSlider from "@/components/winterEssentials"
import CoughAndColdMedicinesSlider from "@/components/coughAndColdMedicines"
import ExploreSomethingNewSlider from "@/components/exploreSomethingNew"
import PopularCategoriesSlider from "@/components/popularCategories"
import TrendingNowSlider from "@/components/trendingNow"
import FlashSaleDealsSlider from "@/components/flashSaleDeals"
import MinOffSlider from "@/components/minOff"
import DealsInSlider from "@/components/dealsIn"
import WhyChooseAumBanner from "@/components/whyChooseAum"
import WhyChooseAumHomeFirstBanner from "@/components/whyChooseAumHomeFirst"
import WeeklyDealsSlider from "@/components/weeklyDeals"
import BestSellingCombosSlider from "@/components/bestSellingCombos"
import EasilyRefillUploadPrescriptionsBanner from "@/components/easilyRefillUploadPrescriptions"
import DownloadForFreeBanner from "@/components/downloadForFreeBanner"
import FromTheBlog from "@/components/fromTheBlog"
import FeaturedBrands from "@/components/featuredBrands"
import HappyClients from "@/components/happyClients"

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
          
    </div>
  );
}
