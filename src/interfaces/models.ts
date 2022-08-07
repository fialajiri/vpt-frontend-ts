import {ParsedUrlQuery} from 'querystring'

interface ImageObject {
  imageUrl: string;
  imageKey: string;
}

export interface ZastupitelDoc {
  id: string;
  name: string;
  image: ImageObject;
  bio: string;
  email: string;
  occupation: string;
}

export interface KandidatDoc {
  id: string;
  name: string;
  image: string;
  occupation: string;
  order: number;
}

export interface AktualitaDoc {
  id: string;
  date: string;
  title: string;
  subtitle: string;
  message: string;
  image: ImageObject;
}

export interface IParams extends ParsedUrlQuery {
  aktualitaId: string
}
