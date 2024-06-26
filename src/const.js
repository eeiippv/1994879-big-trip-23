const DEFAULT_EVENT_TYPE = 'flight';
const DEFAULT_FILTER = 'everything';
const DEFAULT_SORT_TYPE = 'day';

const BLANK_TRIP_EVENT = {
  type: DEFAULT_EVENT_TYPE,
  dateFrom: '',
  dateTo: '',
  destination: '',
  basePrice: 0,
  offers: [],
  isFavorite: false,
};

const EVENT_TYPES = [
  'taxi',
  'bus',
  'train',
  'ship',
  'drive',
  'flight',
  'check-in',
  'sightseeing',
  'restaurant',
];

const SortTypes = {
  DAY: 'day',
  EVENT: 'event',
  TIME: 'time',
  PRICE: 'price',
  OFFER: 'offers'
};

const SortInputTypes = [
  { type: SortTypes.DAY, sortable: true },
  { type: SortTypes.EVENT, sortable: false },
  { type: SortTypes.TIME, sortable: true },
  { type: SortTypes.PRICE, sortable: true },
  { type: SortTypes.OFFER, sortable: false },
];

const Filters = {
  EVERYTHING: 'everything',
  FUTURE: 'future',
  PRESENT: 'present',
  PAST: 'past',
};

const TripEmptyMessages = {
  [Filters.EVERYTHING]: 'Click New Event to create your first point',
  [Filters.FUTURE]: 'There are no future events now',
  [Filters.PRESENT]: 'There are no present events now',
  [Filters.PAST]: 'There are no past events now',
};

const DateFormats = {
  DAY_MONTH: 'D MMM',
  MONTH_DAY: 'MMM D',
  DATE: 'YYYY-MM-DD',
  TIME: 'HH:mm',
  DATE_TIME_SYSTEM: 'YYYY-MM-DDTHH:mm',
  DATE_TIME: 'DD/MM/YY HH:mm',
  FLATPICKR: 'd/m/y H:i',
  HOUR: 'HH[h] mm[m]',
  MINUTE: 'mm[m]',
};

const ButtonTypes = {
  SAVE: 'Save',
  SAVING: 'Saving...',
  DELETE: 'Delete',
  DELETING: 'Deleting...',
  CANCEL: 'Cancel',
};

const DefaultFlatpickrConfig = {
  dateFormat: DateFormats.FLATPICKR,
  enableTime: true,
};

const UserAction = {
  ADD: 'ADD',
  UPDATE: 'UPDATE',
  DELETE: 'DELETE',
};

const UpdateType = {
  INIT: 'INIT',
  PATCH: 'PATCH',
  MINOR: 'MINOR',
  MAJOR: 'MAJOR',
  ERROR: 'ERROR',
};

const FormMode = {
  VIEW: 'View',
  EDIT: 'Edit',
};

const Messages = {
  LOADING: 'Loading...',
  ERROR: 'Failed to load latest route information'
};

const UiBlockerConfig = {
  lowerLimit: 350,
  upperLimit: 1000
};

const Selectors = {
  TRIP_LIST: '.trip-events',
  TRIP_FILTER: '.trip-controls__filters',
  TRIP_INFO: '.trip-main',
  ADD_BUTTON: '.trip-main__event-add-btn',
};

export {
  BLANK_TRIP_EVENT,
  EVENT_TYPES,
  DEFAULT_FILTER,
  DEFAULT_SORT_TYPE,
  SortTypes,
  SortInputTypes,
  Filters,
  TripEmptyMessages,
  DateFormats,
  ButtonTypes,
  DefaultFlatpickrConfig,
  UserAction,
  UpdateType,
  FormMode,
  Messages,
  UiBlockerConfig,
  Selectors
};
