// data/services.ts
import { Venture } from ".";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

const commonLinks = [
  { href: "https://www.facebook.com/bluekiteevents", icon: <FaFacebookF />, label: "Facebook" },
  { href: "https://twitter.com/bluekiteevents", icon: <FaTwitter />, label: "Twitter" },
  { href: "https://www.linkedin.com/company/blue-kite-events-production-private-limited/", icon: <FaLinkedinIn />, label: "LinkedIn" },
  { href: "https://www.instagram.com/bluekite_eventspro/", icon: <FaInstagram />, label: "Instagram" },
];

export const venturesData: Venture[] = [
  {
    id: "corporate-events",
    title: "Corporate Events",
    desc: [
      "Make a lasting impression with impeccably organized corporate gatherings, conferences, and product launches.",
      "Vision: Elevate your brand with professional, seamless corporate event experiences.",
    ],
    href: "/services/corporate-events",
    img: "/images/corporate_event.jpg",
    fimg: "/images/corporate_event.jpg",
    tag: "Key Offerings",
    bullets: [
      "Conferences & seminars",
      "Product launches",
      "Team building & networking events",
    ],
    links: commonLinks,
  },
  {
    id: "music-concerts",
    title: "Music Concerts",
    desc: [
      "A music concert is a live event where artists perform for an audience — providing an immersive experience through live sound.",
      "From intimate settings to large arenas, offering diverse musical genres and styles.",
    ],
    href: "/services/music-concerts",
    img: "/images/music_concert.jpg",
    fimg: "/images/music_concert.jpg",
    tag: "Key Offerings",
    bullets: [
      "Artist booking & management",
      "Stage production & sound",
      "Crowd management & ticketing",
    ],
    links: commonLinks,
  },
  {
    id: "sports-events",
    title: "Sports Events",
    desc: [
      "From local tournaments and school championships to professional sports meets, we manage every detail to deliver a world-class athletic experience.",
      "Goal: To create high-energy, perfectly organized sporting events that athletes and fans will remember.",
    ],
    href: "/services/sports-events",
    img: "/images/sports_event.jpg",
    fimg: "/images/sports_event.jpg",
    tag: "Key Offerings",
    bullets: [
      "Tournament scheduling & bracket setup",
      "Stadium logistics & ticketing",
      "Live broadcast & audio production",
    ],
    links: commonLinks,
  },
  {
    id: "comedy-shows",
    title: "Comedy Shows",
    desc: [
      "Where Laughter Takes Centre Stage! We specialize in curating uproarious comedy events that leave you in stitches.",
      "Explore our line-up, book your tickets, and prepare for a night of side-splitting humour!",
    ],
    href: "/services/comedy-shows",
    img: "/images/comedy_show.jpg",
    fimg: "/images/comedy_show.jpg",
    tag: "Key Offerings",
    bullets: ["Stand-up comedy nights", "Comedy festivals", "Celebrity comedian bookings"],
    links: commonLinks,
  },
  {
    id: "social-celebrations",
    title: "Social Celebrations",
    desc: [
      "Birthdays, anniversaries, and special milestones deserve a celebration that captures the essence of your joy.",
      "We make every special occasion truly extraordinary.",
    ],
    href: "/services/social-celebrations",
    img: "/images/discover_social.jpg",
    fimg: "/images/discover_social.jpg",
    tag: "Key Offerings",
    bullets: ["Birthday parties & anniversaries", "Baby showers & engagements", "Milestone celebrations"],
    links: commonLinks,
  },
  {
    id: "themed-parties",
    title: "Themed Parties",
    desc: [
      "Let your imagination run wild! Our team crafts captivating themed events that transport your guests to another world.",
      "From fantasy themes to destination events, we bring your vision to life.",
    ],
    href: "/services/themed-parties",
    img: "/images/themed_party.jpg",
    fimg: "/images/themed_party.jpg",
    tag: "Key Offerings",
    bullets: ["Fantasy & costume themes", "Destination & outdoor events", "Immersive decor & staging"],
    links: commonLinks,
  },
  {
    id: "stage-shows",
    title: "Stage Shows & Exhibition",
    desc: [
      "Performers who captivate audiences through acting, singing, and dancing — bringing stories and emotions to life on stage.",
      "We also manage exhibitions and trade shows with professional precision.",
    ],
    href: "/services/stage-shows",
    img: "/images/stage_show.jpg",
    fimg: "/images/stage_show.jpg",
    bullets: ["Theatre & cultural performances", "Brand exhibitions", "Trade fair management"],
    links: commonLinks,
  },
];
