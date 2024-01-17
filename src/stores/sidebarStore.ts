import {makeAutoObservable} from 'mobx'

import {ISidebarStore} from "types/stores/ISidebarStore.ts";
import {localStorageConst} from "../config/localStorageConst.ts";

export class SidebarStore implements ISidebarStore {
  _isOpen: boolean = true;

  constructor() {
    this.setIsOpen(this.checkUserIsOpen());
    makeAutoObservable(this);
  }

  // gets
  get isOpen() {
    return this._isOpen;
  }

  // sets
  setIsOpen = (isOpen: boolean) => {
    localStorage.setItem(localStorageConst.isOpenSidebar, String(isOpen))
    this._isOpen = isOpen;
  }

  setToggleIsOpen = () => {
    this.setIsOpen(!this._isOpen)
  }

  checkUserIsOpen = () => {
    const isOpen = localStorage.getItem(localStorageConst.isOpenSidebar);
    return (isOpen === null || isOpen === 'true')
  }
}
