export const API = {
  TRAFFIC_IMAGES: {
    LOCATIONS: {
      path: '/locations',
    },
  },
  WEATHER_FORECAST: {
    path: '/forecast24-hours',
    NEXT_2_HOURS: {
      path: '/forecast24-hours/2-hours-forecast',
    },
  },
  API_KEY: {
    path: '/api-key',
  },
  QUERY_REPORT: {
    MY_RECENTLY: {
      path: '/query-report/my-recently',
    },
    ALL_RECENTLY: {
      path: '/query-report/all-recently',
    },
    LOG_LOCATION_SEARCH: {
      path: '/query-report/log-history',
    },
  },
};

export const HEADER_KEY = {
  API_KEY: 'API-KEY',
};
