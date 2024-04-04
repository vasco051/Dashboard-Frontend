import { makeAutoObservable, observable, ObservableMap, values } from "mobx";

import SphereService from "API/rest/sphereService.ts";

import { ISphereStore } from "types/stores/ISphereStore.ts";
import { TSphere } from "types/entities/TSphere.ts";

export class SphereStore implements ISphereStore {
  _spheres: ObservableMap<number, TSphere> = observable.map()
  _isLoading: boolean = false;

  constructor() {
    makeAutoObservable(this)
  }

  // gets
  get spheres() {
    return values(this._spheres)
  }

  get isLoading() {
    return this._isLoading
  }

  getSphereById = (id: number) => {
    return this._spheres.get(id) || null
  }

  // sets
  setSphere = (sphere: TSphere) => {
    this._spheres.set(sphere.id, sphere)
  }

  setLoading = (isLoading: boolean) => {
    this._isLoading = isLoading
  }

  // async
  getAll = async (projectId: number) => {
    this.setLoading(true)
    this._spheres.clear()

    const response = await SphereService.getAll(projectId);

    if ('data' in response) {
      response.data.spheres.forEach(sphere => this.setSphere(sphere))
    }

    this.setLoading(false)

    return response
  }
}