export default function StructuredData() {
  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "@id": "https://www.alteredcombat.com/#business",
      "name": "Altered Combat",
      "description": "Veteran-owned mobile tactical laser tag, Nerf Wars, Water Wars, and arena-scale VR party game rental company serving Arizona and beyond.",
      "url": "https://www.alteredcombat.com",
      "telephone": "+1-623-476-4906",
      "priceRange": "$$",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Buckeye",
        "addressRegion": "AZ",
        "addressCountry": "US"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 33.3703,
        "longitude": -112.5838
      },
      "areaServed": [
        { "@type": "State", "name": "Arizona" },
        { "@type": "City", "name": "Phoenix" },
        { "@type": "City", "name": "Buckeye" },
        { "@type": "City", "name": "Goodyear" },
        { "@type": "City", "name": "Scottsdale" },
        { "@type": "City", "name": "Gilbert" },
        { "@type": "City", "name": "Chandler" },
        { "@type": "City", "name": "Mesa" },
        { "@type": "City", "name": "Tempe" },
        { "@type": "City", "name": "Flagstaff" },
        { "@type": "City", "name": "Tucson" }
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "5",
        "reviewCount": "50",
        "bestRating": "5",
        "worstRating": "1"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Tactical Laser Tag",
      "description": "Professional-grade mobile tactical laser tag with weapon modes, kill streaks, and competitive game modes. Fully hosted events for up to 20 simultaneous players.",
      "provider": { "@id": "https://www.alteredcombat.com/#business" },
      "areaServed": { "@type": "State", "name": "Arizona" },
      "serviceType": "Mobile Laser Tag Party"
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Arena-Scale VR",
      "description": "Free-roam virtual reality experiences where players physically walk around. Immersive adventures, escape rooms, and multiplayer games for up to 10 players.",
      "provider": { "@id": "https://www.alteredcombat.com/#business" },
      "areaServed": { "@type": "State", "name": "Arizona" },
      "serviceType": "Mobile VR Party"
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Nerf Wars",
      "description": "Classic foam dart battles with blasters and ammo for up to 40 players. Available as fully hosted events or pickup/drop-off rentals.",
      "provider": { "@id": "https://www.alteredcombat.com/#business" },
      "areaServed": { "@type": "State", "name": "Arizona" },
      "serviceType": "Nerf Party Rental"
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Water Wars",
      "description": "Epic water blaster battles with motorized water blasters for up to 40 players. Available as fully hosted events or pickup/drop-off rentals.",
      "provider": { "@id": "https://www.alteredcombat.com/#business" },
      "areaServed": { "@type": "State", "name": "Arizona" },
      "serviceType": "Water Party Rental"
    },
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Altered Combat",
      "url": "https://www.alteredcombat.com",
      "description": "Veteran-owned mobile tactical laser tag and party game rental company serving Arizona.",
      "telephone": "+1-623-476-4906",
      "foundingDate": "2020"
    }
  ];

  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
