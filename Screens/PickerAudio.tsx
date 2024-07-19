import * as DocumentPicker from 'expo-document-picker';
import * as FileSystem from 'expo-file-system';
import { Alert } from 'react-native';

export const pickMedia = async (setAudio: (audio: string) => void) => {
  try {
    const result = await DocumentPicker.getDocumentAsync({
      type: 'audio/*',
      copyToCacheDirectory: true,
      multiple: false,
    });

    if (!result.canceled) {
      const base64Audio = await FileSystem.readAsStringAsync(result.assets[0].uri, {
        encoding: FileSystem.EncodingType.Base64,
      });
      setAudio(base64Audio);
    } else {
      console.log('Selección de audio cancelada.');
    }
  } catch (error) {
    console.error('Error al seleccionar el audio:', error);
  }
};
