import AsyncStorage from "@react-native-async-storage/async-storage";

export async function getFromStorage(key: string): Promise<any> {
  try {
    const data = await AsyncStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  } catch (e) {
    console.error("Error loading data from AsyncStorage:", e);
    return null;
  }
}

export async function saveToStorage(key: string, value: any) {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    console.error("Error saving data to AsyncStorage:", e);
  }
}
