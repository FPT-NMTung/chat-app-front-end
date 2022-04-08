import {LegacyRef, MouseEventHandler} from 'react'

export interface ElementMenu {
  id: number,
  title: string,
  url: string,
  subUrl: string[],
  iconDe: string,
  iconAc: string,
}

export interface PropsInterface {
  text: string,
  ref?: LegacyRef<HTMLButtonElement>,
  size?: 'small' | 'medium' | 'large',
  color?: 'primary' | 'secondary' | 'danger' | 'warning',
  disabled?: boolean,
  onClick?: MouseEventHandler<HTMLButtonElement>
}