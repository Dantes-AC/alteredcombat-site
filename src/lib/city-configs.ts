export type WhyCard = {
  title: string;
  description: string;
  icon: string;
};

export type NearbyCity = {
  name: string;
  slug: string;
};

export type TravelNote = {
  title: string;
  body: string;
  footnote: string;
};

export type CityConfig = {
  name: string;
  slug: string;
  accentColor: string;
  nickname: string;
  heroTagline: string;
  whyCards: WhyCard[];
  neighborhoods?: string[];
  venues: string[];
  travelNote?: TravelNote;
  nearbyCities: NearbyCity[];
  ctaTagline: string;
};

export const cityConfigs: Record<string, CityConfig> = {
  anthem: {
    name: "Anthem",
    slug: "anthem",
    accentColor: "orange-500",
    nickname: "North Phoenix's Premier Community",
    heroTagline:
      "Anthem's wide-open parks and active community make it one of our favorite places to set up. We bring tactical laser tag, VR, Nerf wars, and water battles to your neighborhood — and we highly recommend Anthem Community Park as the perfect venue.",
    whyCards: [
      {
        title: "Community-Built for Fun",
        description:
          "Anthem's master-planned community has some of the best parks in the North Valley — wide open, well-maintained, and perfect for our games.",
        icon: "Sparkles",
      },
      {
        title: "Active Families",
        description:
          "Anthem's tight-knit community loves outdoor events. Birthday parties, HOA gatherings, and youth group activities are our bread and butter here.",
        icon: "Users",
      },
      {
        title: "Proven & Trusted",
        description:
          "We've worked with Anthem venues and know the area well. Professional setup, on-time arrivals, and 5-star service every time.",
        icon: "ShieldCheck",
      },
    ],
    venues: [
      "Anthem Civic Building",
      "Opportunity Way Park",
      "Liberty Bell Park",
      "Gavilan Peak Parkway area parks",
      "Your backyard or HOA common area",
      "Local schools & churches",
    ],
    nearbyCities: [
      { name: "Phoenix", slug: "phoenix" },
      { name: "Scottsdale", slug: "scottsdale" },
      { name: "Paradise Valley", slug: "paradise-valley" },
    ],
    ctaTagline:
      "We'll bring the action to your park, backyard, or venue — and we'll handle everything.",
  },

  "apache-junction": {
    name: "Apache Junction",
    slug: "apache-junction",
    accentColor: "amber-600",
    nickname: "Gateway to the Superstitions",
    heroTagline:
      "With the Superstition Mountains as your backdrop, Apache Junction is perfect for outdoor adventures. We bring tactical laser tag, VR, Nerf wars, and water battles to your desert event.",
    whyCards: [
      {
        title: "Desert Adventure",
        description:
          "AJ's rugged outdoor spirit matches our tactical games perfectly. Battle it out with the Superstitions in view.",
        icon: "Sparkles",
      },
      {
        title: "Big Properties",
        description:
          "Apache Junction's spacious lots and rural properties give us room to create epic battlefields.",
        icon: "Home",
      },
      {
        title: "Community Events",
        description:
          "From Lost Dutchman Days to backyard birthdays, we bring the fun to AJ's tight-knit community.",
        icon: "Users",
      },
    ],
    venues: [
      "Painted Sky Park",
      "Prospector Park",
      "Flatiron Community Park",
      "Superstition Shadows Park",
      "Your Property",
      "Local Schools & Churches",
    ],
    nearbyCities: [
      { name: "Mesa", slug: "mesa" },
      { name: "Gilbert", slug: "gilbert" },
      { name: "Queen Creek", slug: "queen-creek" },
      { name: "Chandler", slug: "chandler" },
    ],
    ctaTagline: "Adventure awaits. Book your desert battle today.",
  },

  avondale: {
    name: "Avondale",
    slug: "avondale",
    accentColor: "orange-500",
    nickname: "Home of Phoenix Raceway",
    heroTagline:
      "Avondale knows speed and excitement — and we deliver both. Tactical laser tag, VR adventures, Nerf wars, and water battles brought right to your location.",
    whyCards: [
      {
        title: "Fast-Paced Action",
        description:
          "Like the raceway, our games are all about speed and competition. Real FPS gameplay with tactical gear.",
        icon: "Zap",
      },
      {
        title: "West Valley Local",
        description:
          "Based in nearby Buckeye, we're your neighbors. Quick response times and no long travel delays.",
        icon: "MapPin",
      },
      {
        title: "All Ages Welcome",
        description:
          "From kids' birthday parties to adult competitions, we've got games everyone can enjoy together.",
        icon: "Smile",
      },
    ],
    venues: [
      "Friendship Park",
      "Festival Fields Park",
      "Alamar Park",
      "Las Ligas Park",
      "Your Backyard",
      "Local Schools & Churches",
    ],
    nearbyCities: [
      { name: "Goodyear", slug: "goodyear" },
      { name: "Buckeye", slug: "buckeye" },
      { name: "Glendale", slug: "glendale" },
      { name: "Litchfield Park", slug: "litchfield-park" },
    ],
    ctaTagline: "Start your engines — or your blasters. Book your event today.",
  },

  buckeye: {
    name: "Buckeye",
    slug: "buckeye",
    accentColor: "cyan-500",
    nickname: "Our Home Base",
    heroTagline:
      "We're your neighbors. Altered Combat is proudly based right here in Buckeye — which means faster setup, no travel fees, and the best service in the West Valley.",
    whyCards: [
      {
        title: "Local & Reliable",
        description:
          "We're based in Buckeye. No long drives, no delays — just fast, dependable service from your neighbors.",
        icon: "MapPin",
      },
      {
        title: "No Travel Fees",
        description:
          "Buckeye is home — you get our best rates with zero travel surcharges. More budget for the fun stuff.",
        icon: "DollarSign",
      },
      {
        title: "Community First",
        description:
          "We're invested in Buckeye. When you book with us, you're supporting a local, veteran-owned business.",
        icon: "Sparkles",
      },
    ],
    venues: [
      "Sundance Park",
      "Skyline Regional Park",
      "Festival Foothills Community Park",
      "Buckeye Community Center",
      "Your Backyard",
      "Local Schools & Churches",
    ],
    nearbyCities: [
      { name: "Goodyear", slug: "goodyear" },
      { name: "Avondale", slug: "avondale" },
      { name: "Litchfield Park", slug: "litchfield-park" },
      { name: "Surprise", slug: "surprise" },
    ],
    ctaTagline:
      "From backyard birthday parties to community events, we bring the action to you. Book online or give us a call.",
  },

  "casa-grande": {
    name: "Casa Grande",
    slug: "casa-grande",
    accentColor: "amber-500",
    nickname: "The Heart of Arizona",
    heroTagline:
      "Halfway between Phoenix and Tucson, Casa Grande is perfectly positioned for our mobile gaming services. We bring tactical laser tag, VR, Nerf wars, and water battles to your event.",
    whyCards: [
      {
        title: "Central Location",
        description:
          "Casa Grande's central Arizona location makes it easy for us to serve you. No extreme travel fees.",
        icon: "MapPin",
      },
      {
        title: "Growing Community",
        description:
          "Casa Grande's booming neighborhoods have the space and the families who want epic entertainment.",
        icon: "Home",
      },
      {
        title: "Family Fun",
        description:
          "Birthday parties, family reunions, community events — we bring games everyone can enjoy together.",
        icon: "Smile",
      },
    ],
    venues: [
      "Dave White Regional Park",
      "Peart Park",
      "Promenade Park",
      "McMurray Park",
      "Your Backyard",
      "Local Schools & Churches",
    ],
    nearbyCities: [
      { name: "Maricopa", slug: "maricopa" },
      { name: "Tucson", slug: "tucson" },
    ],
    ctaTagline: "Bring the action to the heart of Arizona. Book your event today.",
  },

  chandler: {
    name: "Chandler",
    slug: "chandler",
    accentColor: "blue-500",
    nickname: "Innovation Meets Entertainment",
    heroTagline:
      "Chandler's tech corridor knows innovation — and we deliver it. From Intel campus team builders to Ocotillo backyard birthdays, we bring cutting-edge games that match Chandler's forward-thinking vibe.",
    whyCards: [
      {
        title: "Tech-Forward Fun",
        description:
          "Arena-scale VR, professional laser tag systems, live scoring — our tech impresses even Chandler's most discerning engineers.",
        icon: "Monitor",
      },
      {
        title: "Corporate Events",
        description:
          "Team building that doesn't feel like team building. Get your department out of the conference room and into the action.",
        icon: "Briefcase",
      },
      {
        title: "Family-Friendly",
        description:
          "Chandler's master-planned communities have the perfect backyards for our games. We set up, you enjoy, we clean up.",
        icon: "Home",
      },
    ],
    venues: [
      "Tech Company Team Building",
      "Startup Launch Parties",
      "Backyard Birthday Parties",
      "HOA & Community Events",
      "School Field Days & Carnivals",
      "Church Youth Groups",
    ],
    nearbyCities: [
      { name: "Gilbert", slug: "gilbert" },
      { name: "Mesa", slug: "mesa" },
      { name: "Tempe", slug: "tempe" },
      { name: "Queen Creek", slug: "queen-creek" },
    ],
    ctaTagline:
      "Whether it's a corporate team builder or your kid's birthday, we deliver unforgettable games.",
  },

  flagstaff: {
    name: "Flagstaff",
    slug: "flagstaff",
    accentColor: "sky-500",
    nickname: "Arizona's Mountain Playground",
    heroTagline:
      "Flagstaff's pine forests and mountain air make the perfect backdrop for outdoor battles. We make the drive up north to bring tactical laser tag, VR, Nerf wars, and water battles to your event.",
    whyCards: [
      {
        title: "Mountain Adventure",
        description:
          "Flagstaff's outdoor culture meets tactical gaming. Battle it out among the pines for an unforgettable experience.",
        icon: "Sparkles",
      },
      {
        title: "NAU Events",
        description:
          "Greek life, dorm events, club activities — we bring games that college students actually want to play.",
        icon: "GraduationCap",
      },
      {
        title: "We Make the Trip",
        description:
          "Yes, we travel to Flagstaff! Contact us for availability and travel arrangements for your northern Arizona event.",
        icon: "ArrowLeftRight",
      },
    ],
    venues: [
      "Buffalo Park",
      "Thorpe Park",
      "Wheeler Park",
      "Fort Tuthill County Park",
      "NAU Campus Areas",
      "Your Property or Venue",
    ],
    travelNote: {
      title: "NORTHERN ARIZONA TRAVEL",
      body: "We're based in Buckeye but regularly travel to Flagstaff for events. Travel fees may apply based on your event date and package.",
      footnote: "Call us to discuss your Flagstaff event and get a custom quote.",
    },
    nearbyCities: [
      { name: "Sedona", slug: "sedona" },
      { name: "Prescott", slug: "prescott" },
    ],
    ctaTagline:
      "Bring the action to the mountains. Contact us to plan your Flagstaff event.",
  },

  gilbert: {
    name: "Gilbert",
    slug: "gilbert",
    accentColor: "green-500",
    nickname: "Arizona's #1 Family-Friendly Town",
    heroTagline:
      "Gilbert knows how to throw a party. We bring tactical laser tag, VR adventures, Nerf wars, and water battles right to your backyard, park, or school. The kids will talk about it for years.",
    whyCards: [
      {
        title: "Birthday Party Experts",
        description:
          "We've done hundreds of birthday parties. We know what kids love, what parents appreciate, and how to make the day stress-free.",
        icon: "Smile",
      },
      {
        title: "All Ages Welcome",
        description:
          "From 8-year-old birthday parties to teen hangouts to parent-vs-kids showdowns — we've got games everyone can play together.",
        icon: "Users",
      },
      {
        title: "Safe & Supervised",
        description:
          "Safety briefings, age-appropriate equipment, and professional game hosts. Parents can relax while the kids have a blast.",
        icon: "ShieldCheck",
      },
    ],
    venues: [
      "Freestone Park",
      "Gilbert Regional Park",
      "Cosmo Park",
      "Discovery Park",
      "Your Backyard",
      "Gilbert Schools & Churches",
    ],
    nearbyCities: [
      { name: "Chandler", slug: "chandler" },
      { name: "Mesa", slug: "mesa" },
      { name: "Queen Creek", slug: "queen-creek" },
      { name: "Tempe", slug: "tempe" },
    ],
    ctaTagline:
      "Give your kids the best birthday party ever — or treat the whole family to an epic game day. We bring everything.",
  },

  glendale: {
    name: "Glendale",
    slug: "glendale",
    accentColor: "red-500",
    nickname: "Arizona's Sports & Entertainment Capital",
    heroTagline:
      "Home of the Super Bowl, Cardinals, and Coyotes — Glendale knows big events. We bring that same energy to your backyard, tailgate, or party with tactical laser tag, VR, and more.",
    whyCards: [
      {
        title: "Game Day Energy",
        description:
          "Tailgates, watch parties, pre-game events — we bring competitive fun that matches Glendale's sports culture.",
        icon: "Star",
      },
      {
        title: "Historic Downtown",
        description:
          "From Westgate to Historic Downtown, we set up at parks, venues, and backyards throughout Glendale.",
        icon: "Building2",
      },
      {
        title: "Reliable & On-Time",
        description:
          "We arrive early, set up fast, and have everything ready before your guests arrive. Zero stress for you.",
        icon: "Clock",
      },
    ],
    venues: [
      "Westgate Entertainment District",
      "Thunderbird Conservation Park",
      "Sahuaro Ranch Park",
      "Glendale Heroes Regional Park",
      "Your Backyard",
      "Local Schools & Churches",
    ],
    nearbyCities: [
      { name: "Peoria", slug: "peoria" },
      { name: "Phoenix", slug: "phoenix" },
      { name: "Avondale", slug: "avondale" },
      { name: "Goodyear", slug: "goodyear" },
    ],
    ctaTagline: "Bring the action to your next event. Book online or give us a call.",
  },

  goodyear: {
    name: "Goodyear",
    slug: "goodyear",
    accentColor: "purple-500",
    nickname: "West Valley's Fastest Growing City",
    heroTagline:
      "Goodyear is booming — and so are the birthday parties. We bring tactical laser tag, VR, Nerf wars, and water wars right to your neighborhood. No driving across the valley required.",
    whyCards: [
      {
        title: "Fast & Reliable",
        description:
          "Quick booking confirmations, on-time arrivals, and seamless setup. We respect your time and deliver every time.",
        icon: "Zap",
      },
      {
        title: "Built for Groups",
        description:
          "Goodyear's growing communities have amazing parks — perfect for our games with up to 40 players.",
        icon: "Users",
      },
      {
        title: "Beat the Heat",
        description:
          "Water Wars is a Goodyear favorite. Epic water blaster battles that keep everyone cool and entertained.",
        icon: "Sun",
      },
    ],
    venues: [
      "Goodyear Community Park",
      "Estrella Mountain Regional Park",
      "PebbleCreek Recreation Centers",
      "Goodyear Ballpark Area",
      "Your Backyard or HOA Common Area",
      "Local Schools & Churches",
    ],
    nearbyCities: [
      { name: "Buckeye", slug: "buckeye" },
      { name: "Avondale", slug: "avondale" },
      { name: "Litchfield Park", slug: "litchfield-park" },
      { name: "Glendale", slug: "glendale" },
    ],
    ctaTagline:
      "Make your next birthday party, block party, or family gathering unforgettable. We handle everything.",
  },

  "litchfield-park": {
    name: "Litchfield Park",
    slug: "litchfield-park",
    accentColor: "emerald-500",
    nickname: "The West Valley's Hidden Gem",
    heroTagline:
      "Litchfield Park's tree-lined streets and beautiful parks deserve premium entertainment. We bring tactical laser tag, VR, Nerf wars, and water battles to your upscale event.",
    whyCards: [
      {
        title: "Premium Experience",
        description:
          "Professional-grade equipment, polished service, and attention to detail that matches Litchfield Park's standards.",
        icon: "Sparkles",
      },
      {
        title: "Beautiful Backyards",
        description:
          "Litchfield Park's spacious properties are perfect for our games. We set up, you enjoy, we clean up.",
        icon: "Home",
      },
      {
        title: "Hassle-Free",
        description:
          "We handle everything — setup, games, breakdown. You focus on your guests and enjoy the party.",
        icon: "Clock",
      },
    ],
    venues: [
      "Litchfield Park Recreation Center",
      "Community Park",
      "Litchfield Elementary School Fields",
      "La Loma Park",
      "Your Backyard",
      "Local Schools & Churches",
    ],
    nearbyCities: [
      { name: "Goodyear", slug: "goodyear" },
      { name: "Avondale", slug: "avondale" },
      { name: "Buckeye", slug: "buckeye" },
      { name: "Glendale", slug: "glendale" },
    ],
    ctaTagline: "Elevate your next event with games everyone will remember.",
  },

  maricopa: {
    name: "Maricopa",
    slug: "maricopa",
    accentColor: "indigo-500",
    nickname: "Arizona's Newest City",
    heroTagline:
      "Maricopa's master-planned communities and young families are perfect for our games. We bring tactical laser tag, VR, Nerf wars, and water battles to your backyard, park, or HOA event.",
    whyCards: [
      {
        title: "Perfect Backyards",
        description:
          "Maricopa's newer homes have the spacious yards we love. Plenty of room for epic laser tag battles.",
        icon: "Home",
      },
      {
        title: "HOA Events",
        description:
          "Maricopa's active HOAs and community centers are perfect for our games. We handle groups of all sizes.",
        icon: "Users",
      },
      {
        title: "Young Families",
        description:
          "Maricopa's growing population of young families means lots of birthday parties — and we're the entertainment they want.",
        icon: "Smile",
      },
    ],
    venues: [
      "Copper Sky Regional Park",
      "Pacana Park",
      "Community of Hope Park",
      "Province Community Center",
      "Your Backyard",
      "Local Schools & Churches",
    ],
    nearbyCities: [
      { name: "Casa Grande", slug: "casa-grande" },
      { name: "Chandler", slug: "chandler" },
      { name: "Gilbert", slug: "gilbert" },
      { name: "Queen Creek", slug: "queen-creek" },
    ],
    ctaTagline: "Make your next party the best one on the block. Book today.",
  },

  mesa: {
    name: "Mesa",
    slug: "mesa",
    accentColor: "red-500",
    nickname: "Arizona's Third Largest City",
    heroTagline:
      "Big city, big events. From East Mesa to Downtown, we bring tactical laser tag, VR, Nerf wars, and water battles to Mesa's diverse neighborhoods, schools, and community centers.",
    whyCards: [
      {
        title: "Schools & Churches",
        description:
          "Mesa's schools and churches love us for field days, youth group events, and fundraisers. We handle groups of all sizes.",
        icon: "Building2",
      },
      {
        title: "We Come to You",
        description:
          "East Mesa, West Mesa, Downtown — doesn't matter. We bring everything and set up wherever you need us.",
        icon: "MapPin",
      },
      {
        title: "Community Events",
        description:
          "HOA block parties, neighborhood gatherings, community center events — we're the entertainment that brings people together.",
        icon: "Users",
      },
    ],
    venues: [
      "Red Mountain Park",
      "Riverview Park",
      "Pioneer Park",
      "Eastmark Great Park",
      "Mesa Community Centers",
      "Your Backyard or Church",
    ],
    nearbyCities: [
      { name: "Gilbert", slug: "gilbert" },
      { name: "Chandler", slug: "chandler" },
      { name: "Tempe", slug: "tempe" },
      { name: "Apache Junction", slug: "apache-junction" },
    ],
    ctaTagline:
      "Whether it's a backyard birthday, a school field day, or a church youth event — we've got you covered.",
  },

  "paradise-valley": {
    name: "Paradise Valley",
    slug: "paradise-valley",
    accentColor: "violet-500",
    nickname: "Arizona's Most Exclusive Address",
    heroTagline:
      "Paradise Valley's stunning estates and mountain views deserve premium entertainment. We bring world-class tactical laser tag, VR, and party games to your private event.",
    whyCards: [
      {
        title: "White-Glove Service",
        description:
          "Professional-grade equipment, impeccable setup, and attention to detail that matches Paradise Valley's standards.",
        icon: "Sparkles",
      },
      {
        title: "Estate-Ready",
        description:
          "Paradise Valley's expansive properties are perfect for our games. We create epic battlefields on your grounds.",
        icon: "Home",
      },
      {
        title: "Discreet & Professional",
        description:
          "We understand privacy. Our team arrives on time, delivers exceptional service, and leaves your property pristine.",
        icon: "ShieldCheck",
      },
    ],
    venues: [
      "Milestone Birthday Parties",
      "Private Estate Gatherings",
      "Bar/Bat Mitzvahs",
      "Resort Events",
      "Executive Retreats",
      "Family Reunions",
    ],
    nearbyCities: [
      { name: "Scottsdale", slug: "scottsdale" },
      { name: "Phoenix", slug: "phoenix" },
      { name: "Tempe", slug: "tempe" },
    ],
    ctaTagline: "Elevate your next event with games that match your standards.",
  },

  peoria: {
    name: "Peoria",
    slug: "peoria",
    accentColor: "teal-500",
    nickname: "Where Sports & Fun Collide",
    heroTagline:
      "Peoria's got the sports spirit — and we've got the games to match. From Lake Pleasant to your backyard, we bring tactical laser tag, VR, Nerf wars, and water battles to your next event.",
    whyCards: [
      {
        title: "Competitive Spirit",
        description:
          "Peoria loves competition. Our tactical laser tag brings real FPS gameplay with kill streaks, team modes, and leaderboards.",
        icon: "Zap",
      },
      {
        title: "Team Events",
        description:
          "Sports teams, youth groups, and corporate outings. We handle groups of all sizes with structured games and tournaments.",
        icon: "Users",
      },
      {
        title: "Nearly Any Venue Works",
        description:
          "Parks, backyards, sports complexes — we set up nearly anywhere. You pick the spot, we bring the action.",
        icon: "Home",
      },
    ],
    venues: [
      "Peoria Sports Complex",
      "Pioneer Community Park",
      "Sunrise Mountain Park",
      "Rio Vista Community Park",
      "Your Backyard",
      "Local Schools & Churches",
    ],
    nearbyCities: [
      { name: "Surprise", slug: "surprise" },
      { name: "Glendale", slug: "glendale" },
      { name: "Phoenix", slug: "phoenix" },
      { name: "Goodyear", slug: "goodyear" },
    ],
    ctaTagline:
      "Whether it's a team celebration or a birthday party, we bring the games to you.",
  },

  phoenix: {
    name: "Phoenix",
    slug: "phoenix",
    accentColor: "orange-500",
    nickname: "The Valley of the Sun",
    heroTagline:
      "Phoenix is the heart of Arizona — and we serve every corner of it. From Ahwatukee to North Phoenix, we bring tactical laser tag, VR, Nerf wars, and water battles to your location.",
    whyCards: [
      {
        title: "City-Wide Coverage",
        description:
          "North Phoenix, South Phoenix, Ahwatukee, Arcadia, Maryvale — we serve every neighborhood in the city.",
        icon: "MapPin",
      },
      {
        title: "Corporate Events",
        description:
          "Downtown offices, tech campuses, company picnics — we bring team building that's actually fun.",
        icon: "Building2",
      },
      {
        title: "Any Size Event",
        description:
          "From intimate birthday parties to large-scale community events, we scale to fit your needs.",
        icon: "Users",
      },
    ],
    neighborhoods: [
      "North Phoenix",
      "South Phoenix",
      "Ahwatukee",
      "Arcadia",
      "Maryvale",
      "Desert Ridge",
      "Laveen",
      "Paradise Valley Village",
      "Downtown Phoenix",
    ],
    venues: [
      "Encanto Park",
      "Papago Park",
      "South Mountain Park",
      "Steele Indian School Park",
      "Desert Botanical Garden Area",
      "Your Backyard or Venue",
    ],
    nearbyCities: [
      { name: "Scottsdale", slug: "scottsdale" },
      { name: "Tempe", slug: "tempe" },
      { name: "Glendale", slug: "glendale" },
      { name: "Mesa", slug: "mesa" },
      { name: "Chandler", slug: "chandler" },
    ],
    ctaTagline:
      "The Valley's biggest city deserves the best games. Let's make it happen.",
  },

  prescott: {
    name: "Prescott",
    slug: "prescott",
    accentColor: "stone-500",
    nickname: "Everybody's Hometown",
    heroTagline:
      "Prescott's historic charm and outdoor spirit make it perfect for our games. We travel to Arizona's original capital to bring tactical laser tag, VR, Nerf wars, and water battles to your event.",
    whyCards: [
      {
        title: "Historic Fun",
        description:
          "Prescott's Wild West heritage meets modern tactical gaming. A unique experience in Arizona's original capital.",
        icon: "Sparkles",
      },
      {
        title: "Perfect Weather",
        description:
          "Prescott's mild climate means great outdoor gaming year-round. No extreme heat, no snow delays.",
        icon: "Home",
      },
      {
        title: "Community Events",
        description:
          "From Courthouse Square gatherings to backyard birthdays, we bring the fun to Prescott's tight-knit community.",
        icon: "Users",
      },
    ],
    venues: [
      "Watson Lake Park",
      "Granite Creek Park",
      "Mile High Middle School Fields",
      "Prescott Gateway Mall Area",
      "Embry-Riddle Campus",
      "Your Property or Venue",
    ],
    travelNote: {
      title: "NORTHERN ARIZONA TRAVEL",
      body: "We're based in Buckeye but regularly travel to Prescott for events. Travel fees may apply based on your event date and package.",
      footnote: "Call us to discuss your Prescott event and get a custom quote.",
    },
    nearbyCities: [
      { name: "Sedona", slug: "sedona" },
      { name: "Flagstaff", slug: "flagstaff" },
    ],
    ctaTagline:
      "Bring the action to Everybody's Hometown. Contact us to plan your event.",
  },

  "queen-creek": {
    name: "Queen Creek",
    slug: "queen-creek",
    accentColor: "lime-500",
    nickname: "Arizona's Fastest Growing Town",
    heroTagline:
      "Queen Creek's growing fast — and so are the birthday parties. From Schnepf Farms to your backyard, we bring tactical laser tag, VR, Nerf wars, and water battles to your event.",
    whyCards: [
      {
        title: "Big Backyards",
        description:
          "Queen Creek's spacious properties are perfect for our games. We set up an epic battlefield right at your home.",
        icon: "Home",
      },
      {
        title: "Family-First",
        description:
          "Queen Creek is all about families, and so are we. Safe, supervised games that kids and parents both love.",
        icon: "Smile",
      },
      {
        title: "Community Events",
        description:
          "HOA events, school functions, church gatherings — we bring the fun to Queen Creek's growing community.",
        icon: "Users",
      },
    ],
    venues: [
      "Founders' Park",
      "Desert Mountain Park",
      "Mansel Carter Oasis Park",
      "Frontier Family Park",
      "Your Backyard",
      "Local Schools & Churches",
    ],
    nearbyCities: [
      { name: "Gilbert", slug: "gilbert" },
      { name: "Chandler", slug: "chandler" },
      { name: "Mesa", slug: "mesa" },
      { name: "Apache Junction", slug: "apache-junction" },
    ],
    ctaTagline: "Make your next party the talk of the neighborhood.",
  },

  scottsdale: {
    name: "Scottsdale",
    slug: "scottsdale",
    accentColor: "amber-500",
    nickname: "Premium Events, Elevated Fun",
    heroTagline:
      "From North Scottsdale estates to Old Town corporate events, we deliver unforgettable games that match Scottsdale's standards. Professional-grade equipment, flawless execution.",
    whyCards: [
      {
        title: "Corporate Ready",
        description:
          "Team building that actually builds teams. Our tactical games create real collaboration, communication, and (healthy) competition.",
        icon: "Briefcase",
      },
      {
        title: "Premium Quality",
        description:
          "Professional-grade laser taggers, cutting-edge VR, and equipment that looks as good as it performs. No cheap plastic toys here.",
        icon: "Sparkles",
      },
      {
        title: "5-Star Service",
        description:
          "Perfect Google rating for a reason. We're punctual, professional, and handle everything so you can focus on your guests.",
        icon: "BadgeCheck",
      },
    ],
    venues: [
      "Corporate Team Building Events",
      "Executive Retreats & Off-Sites",
      "Milestone Birthday Parties",
      "Private Estate Gatherings",
      "Resort & Hotel Events",
      "School & Youth Group Functions",
    ],
    nearbyCities: [],
    ctaTagline:
      "From intimate gatherings to large-scale corporate events, we deliver games that exceed expectations.",
  },

  sedona: {
    name: "Sedona",
    slug: "sedona",
    accentColor: "rose-500",
    nickname: "Red Rock Country",
    heroTagline:
      "Sedona's stunning red rocks and resort atmosphere create an unforgettable backdrop for our games. We travel to bring tactical laser tag, VR, Nerf wars, and water battles to your destination event.",
    whyCards: [
      {
        title: "Destination Events",
        description:
          "Sedona weddings, corporate retreats, family reunions — we add unforgettable entertainment to your destination event.",
        icon: "Sparkles",
      },
      {
        title: "Resort-Ready",
        description:
          "We work with Sedona's resorts and venues to deliver seamless entertainment that matches the location's quality.",
        icon: "Building2",
      },
      {
        title: "Scenic Battles",
        description:
          "Imagine tactical laser tag with Cathedral Rock in the background. Sedona's scenery makes every event Instagram-worthy.",
        icon: "Image",
      },
    ],
    venues: [
      "Corporate Retreats",
      "Destination Birthdays",
      "Family Reunions",
      "Resort Guest Activities",
      "Wedding Party Events",
      "Team Building Getaways",
    ],
    travelNote: {
      title: "NORTHERN ARIZONA TRAVEL",
      body: "We're based in Buckeye but love traveling to Sedona for events. Travel fees may apply based on your event date and package.",
      footnote: "Call us to discuss your Sedona event and get a custom quote.",
    },
    nearbyCities: [
      { name: "Flagstaff", slug: "flagstaff" },
      { name: "Prescott", slug: "prescott" },
    ],
    ctaTagline:
      "Make your red rock adventure unforgettable. Contact us to plan your event.",
  },

  surprise: {
    name: "Surprise",
    slug: "surprise",
    accentColor: "yellow-500",
    nickname: "West Valley's Entertainment Destination",
    heroTagline:
      "Surprise is known for spring training and family fun — and we're here to add to it. We bring tactical laser tag, VR, Nerf wars, and water battles right to your backyard, park, or community center.",
    whyCards: [
      {
        title: "West Valley Neighbors",
        description:
          "We're based nearby in Buckeye, so Surprise is right in our backyard. Quick response times and reliable service.",
        icon: "MapPin",
      },
      {
        title: "Family-Focused Fun",
        description:
          "Surprise is all about families, and so are we. Birthday parties, block parties, and backyard battles — we've got you covered.",
        icon: "Smile",
      },
      {
        title: "All-Inclusive Setup",
        description:
          "We bring everything — equipment, bunkers, safety briefings. You just show up and play.",
        icon: "Sparkles",
      },
    ],
    venues: [
      "Surprise Stadium Park",
      "Surprise Community Park",
      "Kingswood Park",
      "Asante Community Park",
      "Your Backyard",
      "Local Schools & Churches",
    ],
    nearbyCities: [
      { name: "Buckeye", slug: "buckeye" },
      { name: "Peoria", slug: "peoria" },
      { name: "Glendale", slug: "glendale" },
      { name: "Goodyear", slug: "goodyear" },
    ],
    ctaTagline:
      "From birthday parties to community events, we bring the action to you. Book online or give us a call.",
  },

  tempe: {
    name: "Tempe",
    slug: "tempe",
    accentColor: "yellow-600",
    nickname: "Home of the Sun Devils",
    heroTagline:
      "Tempe's got the energy — college town vibes, Mill Ave nightlife, and Tempe Town Lake. We match that energy with tactical laser tag, VR, Nerf wars, and water battles for any event.",
    whyCards: [
      {
        title: "College-Ready Fun",
        description:
          "Greek life events, dorm parties, club activities — we bring games that college students actually want to play.",
        icon: "GraduationCap",
      },
      {
        title: "Group Events",
        description:
          "From 10 to 40+ players, we handle groups of all sizes with structured games and tournaments.",
        icon: "Users",
      },
      {
        title: "Tech-Forward",
        description:
          "Arena-scale VR, tactical laser tag with kill streaks — games that impress even the most tech-savvy crowd.",
        icon: "Monitor",
      },
    ],
    venues: [
      "Fraternity & Sorority Events",
      "ASU Club Activities",
      "Birthday Parties",
      "Corporate Team Building",
      "Apartment Complex Events",
      "Graduation Parties",
    ],
    nearbyCities: [
      { name: "Scottsdale", slug: "scottsdale" },
      { name: "Mesa", slug: "mesa" },
      { name: "Chandler", slug: "chandler" },
      { name: "Phoenix", slug: "phoenix" },
    ],
    ctaTagline: "Fork 'em up! Book your event and let's make it legendary.",
  },

  tucson: {
    name: "Tucson",
    slug: "tucson",
    accentColor: "red-600",
    nickname: "The Old Pueblo",
    heroTagline:
      "Tucson's desert landscape and vibrant community deserve epic entertainment. We make the trip south to bring tactical laser tag, VR, Nerf wars, and water battles to Arizona's second-largest city.",
    whyCards: [
      {
        title: "U of A Events",
        description:
          "Wildcat pride runs deep. Greek life, dorm events, club activities — we bring games that college students love.",
        icon: "GraduationCap",
      },
      {
        title: "Family Events",
        description:
          "Tucson's neighborhoods and parks are perfect for birthday parties, block parties, and family gatherings.",
        icon: "Users",
      },
      {
        title: "We Make the Trip",
        description:
          "Yes, we travel to Tucson! Contact us for availability and travel arrangements for your southern Arizona event.",
        icon: "ArrowLeftRight",
      },
    ],
    neighborhoods: [
      "Central Tucson",
      "Oro Valley",
      "Marana",
      "Catalina Foothills",
      "South Tucson",
      "Vail",
      "Sahuarita",
      "Green Valley",
      "U of A Campus Area",
    ],
    venues: [
      "Reid Park",
      "Brandi Fenton Memorial Park",
      "Udall Park",
      "Rillito Regional Park",
      "U of A Campus Areas",
      "Your Property or Venue",
    ],
    travelNote: {
      title: "SOUTHERN ARIZONA TRAVEL",
      body: "We're based in Buckeye but regularly travel to Tucson for events. Travel fees may apply based on your event date and package.",
      footnote: "Call us to discuss your Tucson event and get a custom quote.",
    },
    nearbyCities: [
      { name: "Casa Grande", slug: "casa-grande" },
      { name: "Maricopa", slug: "maricopa" },
    ],
    ctaTagline:
      "Bear Down! Contact us to bring the action to the Old Pueblo.",
  },
};
