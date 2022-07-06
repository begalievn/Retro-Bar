import { IPhotos } from './../../../../types/apiTypes/photo';


export interface IPhotosAnother {
  link ?: string
  border?: string
  id?:number
  title?: string
  eventName?: string
  date?:string
  class?: any
  views?: number
  photosCount?:number
  name?: string
  ad?:boolean
  text?:string
  icon?:string
  studio?:string
  button?:any
  photos?: {url:string,id:number,created:string}[] 
  newGalleryData?: IPhotos
}
