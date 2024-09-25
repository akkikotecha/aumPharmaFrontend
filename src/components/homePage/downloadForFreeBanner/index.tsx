import Image from "next/image";
import "@/css/downloadAppBanner.css"

export default function DownloadAppBanner() {
  return (
    <div className="bg-[url('/homeImage/mobileBanner.png')] bg-cover text-white py-14 mt-14 w-full">
      <div className="container mx-auto  mt-10">
        <h2 className="downloadBannerText text-white mb-2 ">Download Our Free App</h2>
        <p className="downloadBannerTextSmall mb-8">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>

        <div className="flex space-x-4 mb-12 mt-10">
          <a
            href="https://play.google.com"
            target="_blank"
            rel="noopener noreferrer">
            <Image
              src="/homeImage/downloadPlayStore.svg" // Replace this with your background image path
              layout="cover"
              width="170"
              height="170"
              alt="Pharmacy Banner"
            />
          </a>
          <a
            href="https://www.apple.com/app-store/"
            target="_blank"
            rel="noopener noreferrer">
            <Image
              src="/homeImage/downloadApp.svg" // Replace this with your background image path
              layout="cover"
              width="170"
              height="170"
              alt="Pharmacy Banner"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
