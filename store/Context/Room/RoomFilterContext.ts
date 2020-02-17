import { updateObject } from '@/store/Context/utility';
import { ComfortIndexGetParams } from '@/types/Requests/Comforts/ComfortRequests';
import { ComfortIndexRes } from '@/types/Requests/Comforts/ComfortResponses';
import { AxiosRes, Pagination } from '@/types/Requests/ResponseTemplate';
import { RoomIndexRes } from '@/types/Requests/Rooms/RoomResponses';
import { axios } from '@/utils/axiosInstance';
import { AxiosResponse } from 'axios';
import { createContext, Dispatch, Reducer } from 'react';
import Cookies from 'universal-cookie';

const cookies = new Cookies();
const lang = cookies.get('initLanguage');
export const MIN_PRICE = 0;
export const MAX_PRICE = lang && lang == 'vi' ? 50000000 : 5000;
export const STEP_PRICE = lang && lang == 'vi' ? 100000 : 100;

export const RoomFilterContext = createContext<IRoomFilterContext>(null as IRoomFilterContext);

export interface IRoomFilterContext {
  state: RoomFilterState;
  dispatch: Dispatch<RoomFilterAction>;
}

export type RoomFilterAction =
  | { type: 'setRooms'; rooms: RoomIndexRes[]; meta?: Pagination | null }
  | { type: 'setPrices'; price_day_from: number; price_day_to: number }
  | { type: 'setMeta'; meta: Pagination }
  | { type: 'setLoadMore'; isLoadMore: boolean }
  | { type: 'setMapOpen'; isMapOpen: boolean }
  | { type: 'setOnlyApartmentBuilding'; payload: 0 | 1 }
  | { type: 'setRating'; ratingLists: number[] }
  | { type: 'setComforts'; comforts: ComfortIndexRes[] }
  | { type: 'setRoomTypes'; roomTypes: number[] }
  | { type: 'setAmenitiesFilter'; amenities: number[] }
  | { type: 'setDistrictsFilter'; districts: number[] }
  | { type: 'setInstantBook'; payload: number };

export type RoomFilterState = {
  readonly comforts: ComfortIndexRes[];
  readonly roomTypes: number[];
  readonly price_day_from: number;
  readonly price_day_to: number;
  readonly ratingLists: number[];
  readonly amenities: number[];
  readonly districts: number[];
  readonly roomTypesFilter: number[];
  readonly instant_book: number;
  readonly only_apartment_building: 0 | 1;
};

export const RoomFilterStateInit: RoomFilterState = {
  price_day_from: MIN_PRICE,
  price_day_to: MAX_PRICE,
  roomTypes: [],
  comforts: [],
  amenities: [],
  districts: [],
  ratingLists: [],
  roomTypesFilter: [],
  instant_book: 0,
  only_apartment_building: 0
};

export const RoomFilterReducer: Reducer<RoomFilterState, RoomFilterAction> = (
  state: RoomFilterState,
  action: RoomFilterAction
): RoomFilterState => {
  switch (action.type) {
    case 'setPrices':
      return updateObject<RoomFilterState>(state, {
        price_day_from: action.price_day_from,
        price_day_to: action.price_day_to
      });
    case 'setRating':
      return updateObject<RoomFilterState>(state, { ratingLists: action.ratingLists });
    case 'setComforts':
      return updateObject<RoomFilterState>(state, { comforts: action.comforts });
    case 'setAmenitiesFilter':
      return updateObject<RoomFilterState>(state, { amenities: action.amenities });
    case 'setDistrictsFilter':
      return updateObject<RoomFilterState>(state, { districts: action.districts });
    case 'setRoomTypes':
      return updateObject<RoomFilterState>(state, { roomTypes: action.roomTypes });
    case 'setInstantBook':
      return updateObject(state, { instant_book: action.payload });
    case 'setOnlyApartmentBuilding':
      return updateObject(state, { only_apartment_building: action.payload });
    default:
      return state;
  }
};

export const fetchComforts = async () => {
  const params: ComfortIndexGetParams = {
    include: '',
    limit: -1
  };

  const url = 'rooms/count-room-by-comfort-lists';
  const res: AxiosRes<ComfortIndexRes[]> = await axios.get(url);
  return res.data;
};

export const fetchRoomType = async () => {
  const res: AxiosResponse<number[]> = await axios.get('rooms/type');
  return res.data;
};
