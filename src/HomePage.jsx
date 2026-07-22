import React from 'react';
import Navbar from './Navbar'; // Import it here
import WhitetripHeader from './WhitetripHeader';
import DestinationsSection from './DestinationsSection';
import Whywhitetrip from './Whywhitetrip';
import SignatureCollection from './SignatureCollection';
import PropertyCarousel from './PropertyCarousel';
import EnquirySection from './EnquirySection';
import StoriesSection from './StoriesSection';
import ListVillaBanner from './ListVillaBanner';

import {
  honeymoonSuitesData,
  guestFavoriteData,
  uniqueStaysData
} from './sectionsData';

export default function HomePage() {
  return (
    <>
      <Navbar /> {/* Now it only shows on the home page */}
      <WhitetripHeader />
      <DestinationsSection />
      <Whywhitetrip />
      <SignatureCollection />
      <PropertyCarousel title="Trending Honeymoon Suites" items={honeymoonSuitesData} />
      <PropertyCarousel title="Guest Favorite" items={guestFavoriteData} />
      <PropertyCarousel title="Unique Stays" items={uniqueStaysData} />
      <EnquirySection />
      <StoriesSection />
      {/* <ListVillaBanner /> */}
    </>
  );
}