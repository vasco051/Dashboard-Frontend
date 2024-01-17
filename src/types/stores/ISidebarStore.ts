export interface ISidebarStore {
  _isOpen: boolean;

  // gets
  get isOpen(): boolean;

  // sets
  setIsOpen(isOpen: boolean): void
  setToggleIsOpen(): void
}