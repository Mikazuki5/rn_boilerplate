import { IconType } from 'types/Icon';

export interface ToastComponentInterface {
  type: IconType;
  text: string;
  description: string;
  timeout: number;
}
