import { Injectable } from '@angular/core'

export interface Menu {
  state: string
  name: string
  type: string
  icon: string
}

const MENUITEMS = [
  { state: 'administrators', type: 'link', name: 'Administratori', icon: 'build' },
  { state: 'users', type: 'link', name: 'Korisnici', icon: 'people' },
  { state: 'ads', type: 'link', name: 'Delovi / Oprema', icon: 'airport_shuttle' },
  { state: 'tires', type: 'link', name: 'Gume', icon: 'album' },
  { state: 'rims', type: 'link', name: 'Felne i ratkapne', icon: 'camera' },
  { state: 'banners', type: 'link', name: 'Baneri', icon: 'vertical_split' },
]

@Injectable()
export class MenuItems {
  getMenuitem(): Menu[] {
    return MENUITEMS
  }
}
