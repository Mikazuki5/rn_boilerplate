import AsyncStorage from '@react-native-async-storage/async-storage';

type StoredItemKey = 'UserToken' | 'UserRefreshToken';

export const storeLocalStorageItem = async ({
  storageKey,
  storageValue,
}: {
  storageKey: StoredItemKey;
  storageValue: string;
}) => {
  try {
    await AsyncStorage.setItem(storageKey, storageValue);
    return;
  } catch (error) {
    return error;
  }
};

export const retrieveLocalStorageItem = async (
  storageKey: StoredItemKey,
): Promise<string> => {
  try {
    const value = await AsyncStorage.getItem(storageKey);
    if (value !== null) {
      return value;
    }
  } catch (err) {
    return '';
  }
  return '';
};

export const removeLocalStorageItem = async (storageKey: StoredItemKey) => {
  try {
    await AsyncStorage.removeItem(storageKey);
    return true;
  } catch (exception) {
    return false;
  }
};
