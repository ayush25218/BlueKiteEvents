// data/services.ts
import { Venture } from ".";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';

export const venturesData: Venture[] = [
  {
    id: "weddings",
    title: "Weddings",
    desc: [
      "From intimate ceremonies to lavish affairs, we specialize in turning your vision of the perfect wedding into reality.",
      "Goal: To create a flawless, personalized wedding experience that you and your guests will cherish forever.",
    ],
    href: "/services/weddings",
    img: "/images/hospitality.jpg",
    fimg: "/images/services_wedding_feat.png",
    tag: "Key Offerings",
    bullets: [
      "Intimate & grand wedding setups",
      "Floral & lighting design",
      "End-to-end event management",
    ],
    links: [
      { href: "https://www.facebook.com/bluekiteevents", icon: <FaFacebookF />, label: "Facebook" },
      { href: "https://www.instagram.com/bluekite_eventspro/", icon: <FaInstagram />, label: "Instagram" },
      { href: "https://www.linkedin.com/company/bluekite-events/", icon: <FaLinkedinIn />, label: "LinkedIn" },
    ],
  },
  {
    id: "corporate-events",
    title: "Corporate Events",
    desc: [
      "Make a lasting impression with impeccably organized corporate gatherings, conferences, and product launches.",
      "Vision: Elevate your brand with professional, seamless corporate event experiences.",
    ],
    href: "/services/corporate-events",
    img: "/images/management.jpg",
    fimg: "/images/services_corporate_feat.png",
    tag: "Key Offerings",
    bullets: [
      "Conferences & seminars",
      "Product launches",
      "Team building & networking events",
    ],
    links: [
      { href: "https://www.facebook.com/bluekiteevents", icon: <FaFacebookF />, label: "Facebook" },
      { href: "https://www.instagram.com/bluekite_eventspro/", icon: <FaInstagram />, label: "Instagram" },
      { href: "https://www.linkedin.com/company/bluekite-events/", icon: <FaLinkedinIn />, label: "LinkedIn" },
    ],
  },
  {
    id: "music-concerts",
    title: "Music Concerts",
    desc: [
      "A music concert is a live event where artists perform for an audience — providing an immersive experience through live sound.",
      "From intimate settings to large arenas, offering diverse musical genres and styles.",
    ],
    href: "/services/music-concerts",
    img: "/images/media.png",
    fimg: "/images/services_concert_feat.png",
    tag: "Key Offerings",
    bullets: [
      "Artist booking & management",
      "Stage production & sound",
      "Crowd management & ticketing",
    ],
    links: [
      { href: "https://www.facebook.com/bluekiteevents", icon: <FaFacebookF />, label: "Facebook" },
      { href: "https://www.instagram.com/bluekite_eventspro/", icon: <FaInstagram />, label: "Instagram" },
      { href: "https://www.youtube.com/@bluekiteevents", icon: <FaYoutube />, label: "Youtube" },
    ],
  },
  {
    id: "comedy-shows",
    title: "Comedy Shows",
    desc: [
      "Where Laughter Takes Centre Stage! We specialize in curating uproarious comedy events that leave you in stitches.",
      "Explore our line-up, book your tickets, and prepare for a night of side-splitting humour!",
    ],
    href: "/services/comedy-shows",
    img: "/images/2149853122.webp",
    fimg: "/images/services_comedy_feat.png",
    tag: "Key Offerings",
    bullets: ["Stand-up comedy nights", "Comedy festivals", "Celebrity comedian bookings"],
    links: [
      { href: "https://www.facebook.com/bluekiteevents", icon: <FaFacebookF />, label: "Facebook" },
      { href: "https://www.instagram.com/bluekite_eventspro/", icon: <FaInstagram />, label: "Instagram" },
    ],
  },
  {
    id: "social-celebrations",
    title: "Social Celebrations",
    desc: [
      "Birthdays, anniversaries, and special milestones deserve a celebration that captures the essence of your joy.",
      "We make every special occasion truly extraordinary.",
    ],
    href: "/services/social-celebrations",
    img: "/images/online-retail.jpg",
    fimg: "/images/services_social_feat.png",
    tag: "Key Offerings",
    bullets: ["Birthday parties & anniversaries", "Baby showers & engagements", "Milestone celebrations"],
    links: [
      { href: "https://www.facebook.com/bluekiteevents", icon: <FaFacebookF />, label: "Facebook" },
      { href: "https://www.instagram.com/bluekite_eventspro/", icon: <FaInstagram />, label: "Instagram" },
    ],
  },
  {
    id: "themed-parties",
    title: "Themed Parties",
    desc: [
      "Let your imagination run wild! Our team crafts captivating themed events that transport your guests to another world.",
      "From fantasy themes to destination events, we bring your vision to life.",
    ],
    href: "/services/themed-parties",
    img: "/images/health-care.jpg",
    fimg: "/images/services_themed_feat.png",
    tag: "Key Offerings",
    bullets: ["Fantasy & costume themes", "Destination & outdoor events", "Immersive decor & staging"],
    links: [
      { href: "https://www.facebook.com/bluekiteevents", icon: <FaFacebookF />, label: "Facebook" },
      { href: "https://www.instagram.com/bluekite_eventspro/", icon: <FaInstagram />, label: "Instagram" },
    ],
  },
  {
    id: "stage-shows",
    title: "Stage Shows & Exhibition",
    desc: [
      "Performers who captivate audiences through acting, singing, and dancing — bringing stories and emotions to life on stage.",
      "We also manage exhibitions and trade shows with professional precision.",
    ],
    href: "/services/stage-shows",
    img: "/images/mining.jpg",
    fimg: "/images/services_stage_feat.png",
    bullets: ["Theatre & cultural performances", "Brand exhibitions", "Trade fair management"],
    links: [
      { href: "https://www.facebook.com/bluekiteevents", icon: <FaFacebookF />, label: "Facebook" },
      { href: "https://www.instagram.com/bluekite_eventspro/", icon: <FaInstagram />, label: "Instagram" },
      { href: "https://www.linkedin.com/company/bluekite-events/", icon: <FaLinkedinIn />, label: "LinkedIn" },
    ],
  },
];