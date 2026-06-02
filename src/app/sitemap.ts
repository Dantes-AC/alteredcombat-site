import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.alteredcombat.com";

  return [
    // Main pages
    { url: baseUrl, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/games`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/parties-events`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/service-areas`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/contact`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/privacy-policy`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.3 },

    // West Valley
    { url: `${baseUrl}/service-areas/buckeye`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/service-areas/goodyear`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/service-areas/surprise`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/service-areas/peoria`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/service-areas/glendale`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/service-areas/avondale`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/service-areas/litchfield-park`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },

    // East Valley
    { url: `${baseUrl}/service-areas/gilbert`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/service-areas/chandler`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/service-areas/mesa`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/service-areas/tempe`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/service-areas/scottsdale`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/service-areas/apache-junction`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/service-areas/queen-creek`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },

    // Phoenix Metro
    { url: `${baseUrl}/service-areas/phoenix`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/service-areas/paradise-valley`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },

    // Northern Arizona
    { url: `${baseUrl}/service-areas/flagstaff`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/service-areas/prescott`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/service-areas/sedona`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },

    // Southern Arizona
    { url: `${baseUrl}/service-areas/tucson`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/service-areas/casa-grande`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/service-areas/maricopa`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },

    // New: Anthem
    { url: `${baseUrl}/service-areas/anthem`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
  ];
}
