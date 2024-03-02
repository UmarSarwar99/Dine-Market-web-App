import { StaticImageData } from "next/image"

export type product = {
    id: number,
    category: string,
    section : string,
    name : string,
    price : number,
    image : StaticImageData
    imagea?: StaticImageData
    imageb?: StaticImageData
    imagec?: StaticImageData
}