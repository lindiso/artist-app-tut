export interface IArtist {
  artist: any
  name: string;
  mbid: string,
  url: string,
  image_small: string,
  image: [{
    text:string;}]
  streamable: string;
}

export interface IArtistState {
  artists: IArtist[];
}