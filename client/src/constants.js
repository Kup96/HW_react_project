const env = process.env.NODE_ENV || 'development';
const serverIP = 'localhost';
const serverPort = 5000;
export default {
  CONTACTS: {
    TEL: '(877)355-3585',
  },
  CUSTOMER: 'customer',
  CREATOR: 'creator',
  CONTEST_STATUS_ACTIVE: 'active',
  CONTEST_STATUS_FINISHED: 'finished',
  CONTEST_STATUS_PENDING: 'pending',
  NAME_CONTEST: 'name',
  LOGO_CONTEST: 'logo',
  TAGLINE_CONTEST: 'tagline',
  OFFER_STATUS_REJECTED: 'rejected',
  OFFER_STATUS_WON: 'won',
  OFFER_STATUS_PENDING: 'pending',
  STATIC_IMAGES_PATH: '/staticImages/',
  ANONYM_IMAGE_PATH: '/staticImages/anonym.png',
  BASE_URL: `http://${serverIP}:${serverPort}/`,
  ACCESS_TOKEN: 'accessToken',
  publicURL:
    env === 'production'
      ? `http://${serverIP}:80/images/`
      : `http://${serverIP}:${serverPort}/public/images/`,
  NORMAL_PREVIEW_CHAT_MODE: 'NORMAL_PREVIEW_CHAT_MODE',
  FAVORITE_PREVIEW_CHAT_MODE: 'FAVORITE_PREVIEW_CHAT_MODE',
  BLOCKED_PREVIEW_CHAT_MODE: 'BLOCKED_PREVIEW_CHAT_MODE',
  CATALOG_PREVIEW_CHAT_MODE: 'CATALOG_PREVIEW_CHAT_MODE',
  CHANGE_BLOCK_STATUS: 'CHANGE_BLOCK_STATUS',
  ADD_CHAT_TO_OLD_CATALOG: 'ADD_CHAT_TO_OLD_CATALOG',
  CREATE_NEW_CATALOG_AND_ADD_CHAT: 'CREATE_NEW_CATALOG_AND_ADD_CHAT',
  USER_INFO_MODE: 'USER_INFO_MODE',
  CASHOUT_MODE: 'CASHOUT_MODE',
  HEADER_ANIMATION_TEXT: [
    'a Company',
    'a Brand',
    'a Website',
    'a Service',
    'a Book',
    'a Business',
    'an App',
    'a Product',
    'a Startup',
  ],
  CARDS_HOME: [
    {
      img_src: `/staticImages/more-benifits-world-icon.png`,
      img_alt:'globe',
      header: 'Largest Naming Community',
      main:`Our unique approach allows you to receive an unmatched breadth of business name ideas from world's largest community of naming experts. With 75,000+ creatives and 15,000+ successful naming projects, Squadhelp is by far the largest naming platform across the globe .`,
    },
    {
      img_src:'/staticImages/more-benifits-high-quality-icon.png',
      img_alt: 'desktop',
      header: 'High Quality & Collaboration',
      main:`Using an advanced Quality Scoring Algorithm and Machine Learning, we ensure that you receive more ideas from our top-quality creatives, and Gamification best practices ensure two-way communication throughout your contest.`,
    },
    {
      img_src:'/staticImages/more-benifits-trademark-icon.png',
      img_alt:'cards',
      header: 'Agency-Level Features',
      main:`Squadhelp's high end Audience Testing service allows you to poll your target demographics to get unbiased feedback on your favorite names. Also receive Trademark support from our team of Licensed Trademark Attorneys, so you can pick your name with confidence.`,
    },
  ],
  PAY_INFO: 
    [
      {
        "title": "Pay a Fraction of cost vs hiring an agency",
        "text": "For as low as $299, our naming contests and marketplace allow you to get an amazing brand quickly and affordably.",

      },
      {
        "title": "Satisfaction Guarantee",
        "text": "Of course! We have policies in place to ensure that you are satisfied with your experience. Learn more",

      },
    ],
  FooterItems: [
    {
      title: 'SQUADHELP',
      items: ['About', 'Contact', 'How It Works?', 'Testimonials', 'Our Work'],
    },
    {
      title: 'RESOURCES',
      items: [
        'How It Works',
        'Become a Creative',
        'Business Name Generator',
        'Discussion Forum',
        'Blog',
        'Download eBook',
        'Pricing',
        'Help & FAQs',
      ],
    },
    {
      title: 'OUR SERVICES',
      items: [
        'Naming',
        'Logo Design',
        'Taglines',
        'Premium Names For Sale',
        'Creative Owned Names For Sale',
        'Audience Testing',
        'Trademark Research & Filling',
        'Managed Agency Service',
      ],
    },
    {
      title: 'LEGAL',
      items: ['Terms of Service', 'Privacy Policy', 'Cookie Policy'],
    },
  ],
};
