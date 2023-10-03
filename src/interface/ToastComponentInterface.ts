import { TOAST_TYPE } from 'types/Toast';

export interface ToastComponentInterface {
  type: TOAST_TYPE | string;
  text: string;
  description: string;
  timeout: number;
}
