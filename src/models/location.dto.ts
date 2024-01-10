interface LongLatDto {
  latitude: number;
  longitude: number;
}

export interface LocationDto {
  location: string;
  image: string;
  locationLongLat: LongLatDto;
}
