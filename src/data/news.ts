export interface NewsItem {
  id: string;
  category: string;
  headline: string;
  summary: string;
  takeaways: string[];
  timestamp: string;
  sourceUrl: string;
}

export const newsData: NewsItem[] = [
  {
    id: "1",
    category: "Politics",
    headline: "Parliament Passes New Digital Act",
    summary: "The Dewan Rakyat today passed the new Digital Infrastructure Act, aimed at boosting 5G connectivity nationwide. The bill emphasizes rural coverage and faster broadband speeds for everyone. The opposition raised concerns about data privacy, but the bill secured a majority vote. Implementation is set for next year.",
    takeaways: [
      "New act focuses on nationwide 5G and broadband.",
      "Rural areas prioritized for coverage expansion.",
      "Effective implementation starting next year."
    ],
    timestamp: "10:30 AM",
    sourceUrl: "#"
  },
  {
    id: "2",
    category: "Economy",
    headline: "Ringgit Strengthens Against USD",
    summary: "The Malaysian Ringgit showed significant resilience today, climbing to a six-month high against the US Dollar. Analysts attribute this positive movement to strong export figures and recent foreign direct investment announcements. The central bank continues its monitoring to ensure market stability.",
    takeaways: [
      "Ringgit hits six-month high against USD.",
      "Driven by strong exports and foreign investment.",
      "Central bank monitoring market conditions closely."
    ],
    timestamp: "9:15 AM",
    sourceUrl: "#"
  },
  {
    id: "3",
    category: "General Malaysia",
    headline: "Klang Valley Commuters Face Delays",
    summary: "Heavy downpours this morning caused flash floods across major Klang Valley routes, leading to severe traffic congestion. The main highways were gridlocked for over two hours. Public transport services, particularly LRT and KTM, also experienced minor delays but are now resuming normal schedules.",
    takeaways: [
      "Flash floods caused severe morning gridlock.",
      "Major highways delayed by over two hours.",
      "Public transport services gradually returning to normal."
    ],
    timestamp: "8:45 AM",
    sourceUrl: "#"
  },
  {
    id: "4",
    category: "Business",
    headline: "Tech Startups Secure RM50M Funding",
    summary: "A consortium of local tech startups specializing in AI and agriculture has successfully raised RM50 million in Series A funding. The investment will primarily be used to scale operations across Southeast Asia and develop new smart-farming solutions. Investors remain highly optimistic about the region's tech potential.",
    takeaways: [
      "RM50M raised for AI and agriculture startups.",
      "Funds targeted for Southeast Asian expansion.",
      "Focus on developing smart-farming technology."
    ],
    timestamp: "Yesterday",
    sourceUrl: "#"
  },
  {
    id: "5",
    category: "Business",
    headline: "Property Market Shows Signs of Recovery",
    summary: "Recent reports indicate a slow but steady recovery in the residential property sector. Major developers are launching new affordable housing projects to meet rising demand from first-time buyers. Subsale market activity has also picked up significantly compared to the last quarter.",
    takeaways: [
      "Steady recovery in residential property sector.",
      "Increase in affordable housing project launches.",
      "Subsale market activity picking up pace."
    ],
    timestamp: "Yesterday",
    sourceUrl: "#"
  },
  {
    id: "6",
    category: "Lifestyle",
    headline: "Viral Nasi Lemak Stall Expands",
    summary: "The famous Nasi Lemak stall in PJ, which went viral last month, is opening three new branches. Known for its spicy sambal and crispy fried chicken, the owner decided to expand due to overwhelming daily queues. The new outlets will maintain the original recipe.",
    takeaways: [
      "Viral PJ Nasi Lemak stall opening three new locations.",
      "Expansion driven by long daily queues.",
      "Original recipe and quality strictly maintained."
    ],
    timestamp: "Yesterday",
    sourceUrl: "#"
  },
  {
    id: "7",
    category: "Lifestyle",
    headline: "Weekend Hack: Faster Touch 'n Go Reloads",
    summary: "A new feature in the e-wallet app now allows users to set up auto-reloads directly linked to their preferred credit cards with zero processing fees. This simple hack ensures you never face the dreaded 'baki kurang' at toll booths during rush hour.",
    takeaways: [
      "Auto-reload feature now available with zero fees.",
      "Links directly to preferred credit cards.",
      "Prevents low balance issues at toll booths."
    ],
    timestamp: "2 Days Ago",
    sourceUrl: "#"
  },
  {
    id: "8",
    category: "Entertainment",
    headline: "Genting Event: Concert This Weekend",
    summary: "A major international pop star is set to perform at the Arena of Stars this Saturday. Tickets sold out within twenty minutes of release. Organizers advise attendees to arrive early and utilize the cable car service due to expected heavy traffic on the mountain roads.",
    takeaways: [
      "International pop concert at Arena of Stars this Saturday.",
      "Tickets completely sold out in record time.",
      "Attendees advised to use cable car due to traffic."
    ],
    timestamp: "2 Days Ago",
    sourceUrl: "#"
  },
  {
    id: "9",
    category: "Entertainment",
    headline: "Platinum Casino: New Game Launch",
    summary: "The renowned Platinum Casino has introduced a highly anticipated new suite of electronic table games. Designed specifically for modern players, the setup features interactive touchscreen displays and faster betting rounds. The weekend launch event will include special promotions and complimentary drinks for members.",
    takeaways: [
      "New electronic table games launched at Platinum Casino.",
      "Features interactive displays and faster gameplay.",
      "Launch event includes promos for casino members."
    ],
    timestamp: "3 Days Ago",
    sourceUrl: "#"
  }
];

export const getNewsByCategory = (category: string) => {
  if (category === 'All' || !category) return newsData;
  return newsData.filter(item => {
    if (category === 'News') return ['Politics', 'Economy', 'General Malaysia'].includes(item.category);
    return item.category === category;
  });
};
