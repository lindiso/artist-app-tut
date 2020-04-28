export interface IArtistState {
  isLoading: boolean;
  payload: IArtist[]
}

export interface IArtist {
  name: string;
  mbid: string,
  url: string,
  image_small: string,
  image: [{
    text:string;}]
  streamable: string;
}
