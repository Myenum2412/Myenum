import Logo from "@/assets/iconc.png";
import Image from "next/image";
import SpotifyImg from "@/assets/blog/SpotifyAds.png";  // default import, not destructured

type PageMetadata = {
  title: string;
  description: string;
  keywords?: string;
  openGraph?: {
    title: string;
    description: string;
    url: string;
    type: string;
    images?: { url: string; width: number; height: number; alt: string }[];
  };
  twitter?: {
    card: string;
    site?: string;
    title: string;
    description: string;
    images?: string[];
  };
  socialMedia?: {
    facebook: string;
    instagram: string;
    whatsapp: string;
    youtube: string;
    linkedin: string;
  };
};

// Define metadata for each page
export const getMetadata = (page: string): PageMetadata => {
  const baseUrl = "https://www.myenum.com"; // Replace with your actual website URL

  const metadata: Record<string, PageMetadata> = {
    home: {
      title: "Transform Your Brand with MyEnum – Expert Branding, Digital Marketing & Web Development",
      description: "At MyEnum, we craft powerful brand identities, implement data-driven digital marketing strategies, and develop high-performance websites tailored for startups and businesses.",
      keywords: "branding agency, digital marketing agency, web development services, SEO optimization, e-commerce development, MyEnum digital solutions, startup branding",
      openGraph: {
        title: "Transform Your Brand with MyEnum",
        description: "We specialize in branding, digital marketing, and web development for startups and businesses.",
        url: `${baseUrl}/`,
        type: "website",
        images: [{ url: `${baseUrl}/og-image.jpg`, width: 1200, height: 630, alt: "MyEnum Branding" }]
      },
      twitter: {
        card: "summary_large_image",
        site: "@MyEnum",
        title: "Transform Your Brand with MyEnum",
        description: "Expert Branding, Digital Marketing & Web Development.",
        images: [`${baseUrl}/og-image.jpg`]
      },
      socialMedia: {
        facebook: "https://www.facebook.com/profile.php?id=61572140267076",
        instagram: "https://www.instagram.com/myenum.in",
        whatsapp: "https://wa.me/919042376479",
        youtube: "https://www.youtube.com/myenum",
        linkedin: "https://linkedin.com/in/myenum-am-45aa56349"
      }
    },

    about: {
      title: "About MyEnum – Your Partner in Digital Success",
      description: "Discover MyEnum’s mission and expertise in branding, digital marketing, and web development. Learn how we help businesses thrive in the digital era.",
      keywords: "about MyEnum, company mission, branding experts, digital marketing team, website development company",
      openGraph: {
        title: "About MyEnum",
        description: "Our mission is to help businesses thrive with top-notch branding, digital marketing, and web development services.",
        url: "https://www.myenum.in/about",
        type: "website",
        images: [{ url: `${baseUrl}/about-og.jpg`, width: 1200, height: 630, alt: "About MyEnum" }]
      },
      socialMedia: {
        facebook: "https://www.facebook.com/profile.php?id=61572140267076",
        instagram: "https://www.instagram.com/myenum.in",
        whatsapp: "https://wa.me/919042376479",
        youtube: "https://www.youtube.com/myenum",
        linkedin: "https://linkedin.com/in/myenum-am-45aa56349"
      }
    },
    
    blog: {
      title: "MyEnum Blog – Insights on Branding, Marketing & Web Development",
      description: "Stay updated with the latest trends, tips, and strategies in branding, digital marketing, and web development through MyEnum's expert blog posts.",
      keywords: "branding blog, digital marketing tips, web development trends, SEO strategies, content marketing, MyEnum blog, startup marketing ideas",
      openGraph: {
        title: "MyEnum Blog – Expert Insights & Industry Updates",
        description: "Explore our blog for expert advice on branding, marketing, SEO, and website development for startups and businesses.",
        url: "https://www.myenum.in/blog",
        type: "website",
        images: [{ url: `${baseUrl}/blog-og.jpg`, width: 1200, height: 630, alt: "MyEnum Blog" }],
      },
      socialMedia: {
        facebook: "https://www.facebook.com/profile.php?id=61572140267076",
        instagram: "https://www.instagram.com/myenum.in",
        whatsapp: "https://wa.me/919042376479",
        youtube: "https://www.youtube.com/myenum",
        linkedin: "https://linkedin.com/in/myenum-am-45aa56349",
      },
    },

    services: {
      title: "MyEnum Services – Web Development, Branding & Digital Growth",
      description: "Explore our expert services in website development, branding, and digital marketing, designed to help startups and businesses achieve success online.",
      keywords: "branding services, digital marketing solutions, web development company, SEO services, social media marketing agency, e-commerce web design",
      openGraph: {
        title: "Our Services – MyEnum",
        description: "Discover our professional services in branding, digital marketing, and web development.",
        url: "https://www.myenum.in/services",
        type: "website",
        images: [{ url: `${baseUrl}/services-og.jpg`, width: 1200, height: 630, alt: "MyEnum Services" }]
      },
      socialMedia: {
        facebook: "https://www.facebook.com/profile.php?id=61572140267076",
        instagram: "https://www.instagram.com/myenum.in",
        whatsapp: "https://wa.me/919042376479",
        youtube: "https://www.youtube.com/myenum",
        linkedin: "https://linkedin.com/in/myenum-am-45aa56349"
      }
    },
    contact: {
      title: "Contact MyEnum – Let’s Build Your Digital Presence",
      description: "Reach out to MyEnum for expert branding, digital marketing, and website development solutions. Let’s bring your vision to life.",
      keywords: "contact MyEnum, get in touch, business inquiries, digital marketing support, web development consultation",
      openGraph: {
        title: "Contact MyEnum",
        description: "Reach out to us for expert branding, marketing, and web development services.",
        url: "https://www.myenum.in/contact",
        type: "website",
        images: [{ url: `${baseUrl}/contact-og.jpg`, width: 1200, height: 630, alt: "Contact MyEnum" }]
      },
      socialMedia: {
        facebook: "https://www.facebook.com/profile.php?id=61572140267076",
        instagram: "https://www.instagram.com/myenum.in",
        whatsapp: "https://wa.me/919042376479",
        youtube: "https://www.youtube.com/myenum",
        linkedin: "https://linkedin.com/in/myenum-am-45aa56349"
      }
    },

      googleBusiness: {
      title: "Boost Your Business with Google Business Profile | Rank #1 in Local Search",
      description: "Get more customers with an optimized Google Business Profile. Learn how to rank #1 in your city using powerful SEO strategies. Contact Myenum for expert help.",
      keywords: "contact MyEnum, get in touch, business inquiries, digital marketing support, web development consultation",
      openGraph: {
        title: "GoogleBusiness MyEnum",
        description: "Get more customers with an optimized Google Business Profile.",
        url: "https://www.myenum.in/contact",
        type: "website",
        images: [{ url: `${baseUrl}/contact-og.jpg`, width: 1200, height: 630, alt: "Contact MyEnum" }]
      },
      socialMedia: {
        facebook: "https://www.facebook.com/profile.php?id=61572140267076",
        instagram: "https://www.instagram.com/myenum.in",
        whatsapp: "https://wa.me/919042376479",
        youtube: "https://www.youtube.com/myenum",
        linkedin: "https://linkedin.com/in/myenum-am-45aa56349"
      }
    },

    spotifyAds: {
      title: "Boost Your Business with Spotify Advertising – Strategy, Formats & ROI | MyEnum Blog",
      description: "Discover how Spotify Ads can skyrocket your brand with targeted audio and visual marketing. Learn ad formats, strategies, and real-time analytics insights.",
      keywords: "Spotify advertising, Spotify ads for business, audio marketing, digital advertising, Spotify ad formats, Spotify for brands, podcast advertising, mobile ads, programmatic audio, MyEnum blog",
      openGraph: {
        title: "Spotify Advertising Strategies for Business Growth | MyEnum",
        description: "Learn how to use Spotify advertising to target audiences, reduce ad fatigue, and increase brand engagement with real-time analytics.",
        url: `${baseUrl}/blog/spotify-advertising`,
        type: "article",
        images: [
          {
            url: `${baseUrl}${SpotifyImg.src}`,  // Use imported image src with baseUrl
            width: 1200,
            height: 630,
            alt: "Spotify Advertising for Businesses"
          }
        ]
      },
    }
  };

  return metadata[page] || metadata["home"];
};
