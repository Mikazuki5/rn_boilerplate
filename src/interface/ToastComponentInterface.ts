import { TOAST_TYPE } from 'types/Toast';

export interface ToastComponentInterface {
  type: TOAST_TYPE;
  text: string;
  description: string;
  timeout: number;
}
