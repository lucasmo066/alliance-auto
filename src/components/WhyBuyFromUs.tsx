import React from 'react';

const WhyBuyFromUsSection: React.FC = () => {
  return (
    <section className="text-center py-12">
      <h1 className="text-5xl font-bold text-accent">Why Buy From Us?</h1>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="bg-neutral p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold text-secondary">Unmatched Quality, In-House Excellence</h2>
          <p className="mt-4 text-white">
            Experience unmatched quality with our in-house team of excellence-driven mechanics, setting us apart from other dealerships in the area.
          </p>
        </div>
        <div className="bg-neutral p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold text-secondary">Quality Cars, Transparent Deals</h2>
          <p className="mt-4 text-white">
            Our commitment to quality cars goes hand in hand with transparent and trustworthy deals.
          </p>
        </div>
        <div className="bg-neutral p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold text-secondary">Upgrade with Ease, Trade with Confidence</h2>
          <p className="mt-4 text-white">
            Upgrade your vehicle with ease and trade with confidence through our exceptional trade-in and sell-to-us program.
          </p>
        </div>
        <div className="bg-neutral p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold text-secondary">Peace of Mind, Included Free</h2>
          <p className="mt-4 text-white">
            Enjoy peace of mind with our comprehensive warranty coverage, included free for the first 30 days.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyBuyFromUsSection;