import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Cookies from 'universal-cookie';
import auth_en from './auth/auth-en.json';
import auth_vi from './auth/auth-vi.json';
import book_en from './book/book-en.json';
import book_vi from './book/book-vi.json';
import home_en from './home/home-en.json';
import home_vi from './home/home-vi.json';
import layout_en from './layout/layout-en.json';
import layout_vi from './layout/layout-vi.json';
import host_en from './LongTermRental/host/host-en.json';
import host_vi from './LongTermRental/host/host-vi.json';
import basic_en from './LongTermRental/listing/basic/basic-en.json';
import basic_vi from './LongTermRental/listing/basic/basic-vi.json';
import details_en from './LongTermRental/listing/details/details-en.json';
import details_vi from './LongTermRental/listing/details/details-vi.json';
import price_en from './LongTermRental/listing/price/price-en.json';
import price_vi from './LongTermRental/listing/price/price-vi.json';
import roomlist_en from './LongTermRental/listing/roomlist/roomlist-en.json';
import roomlist_vi from './LongTermRental/listing/roomlist/roomlist-vi.json';
import longtermroom_en from './LongTermRental/longtermroom/longtermroom-en.json';
import longtermroom_vi from './LongTermRental/longtermroom/longtermroom-vi.json';
import payment_en from './payment/payment-en.json';
import payment_vi from './payment/payment-vi.json';
import profile_en from './profile/profile-en.json';
import profile_vi from './profile/profile-vi.json';
import promotion_en from './promotion/promotion-en.json';
import promotion_vi from './promotion/promotion-vi.json';
import reviews_en from './reviews/reviews-en.json';
import reviews_vi from './reviews/reviews-vi.json';
import room_en from './room/room-en.json';
import room_vi from './room/room-vi.json';
import rooms_en from './rooms/rooms-en.json';
import rooms_vi from './rooms/rooms-vi.json';
import shared_en from './shared/shared-en.json';
import shared_vi from './shared/shared-vi.json';
import user_en from './user/user-en.json';
import user_vi from './user/user-vi.json';
import longtermbooking_en from './LongTermRental/longtermbooking/longtermbooking-en.json';
import longtermbooking_vi from './LongTermRental/longtermbooking/longtermbooking-vi.json';
const cookies = new Cookies();

const languageDetector = {
  init: Function.prototype,
  type: 'languageDetector',
  async: true, // flags below detection to be async
  detect: async (callback) => {
    const savedDataJSON = cookies.get('initLanguage');
    const lng = savedDataJSON ? savedDataJSON : null;
    const selectLanguage = lng || 'en';
    callback(selectLanguage);
  },
  cacheUserLanguage: () => {}
};

i18n
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'vi',
    resources: {
      en: {
        home: home_en,
        layout: layout_en,
        rooms: rooms_en,
        room: room_en,
        book: book_en,
        payment: payment_en,
        auth: auth_en,
        user: user_en,
        profile: profile_en,
        reviews: reviews_en,
        shared: shared_en,
        promotion: promotion_en,
        details: details_en,
        roomlist: roomlist_en,
        basic: basic_en,
        longtermroom: longtermroom_en,
        longtermbooking: longtermbooking_en,
        host: host_en,
        price: price_en
      },
      vi: {
        home: home_vi,
        layout: layout_vi,
        rooms: rooms_vi,
        room: room_vi,
        book: book_vi,
        payment: payment_vi,
        auth: auth_vi,
        user: user_vi,
        profile: profile_vi,
        reviews: reviews_vi,
        shared: shared_vi,
        promotion: promotion_vi,
        details: details_vi,
        roomlist: roomlist_vi,
        basic: basic_vi,
        longtermroom: longtermroom_vi,
        longtermbooking: longtermbooking_vi,
        host: host_vi,
        price: price_vi
      }
    },

    // have a common namespace used around the full app
    ns: ['common'],
    defaultNS: 'common',

    // debug: true,

    cache: {
      enabled: true
    },

    interpolation: {
      escapeValue: false // not needed for react as it does escape per default to prevent xss!
    }
  });

export default i18n;
