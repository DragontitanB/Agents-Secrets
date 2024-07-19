import { Alert } from 'react-native';
import * as FileSystem from 'expo-file-system';
import * as ImagePicker from 'expo-image-picker';
import * as SQLite from 'expo-sqlite/legacy';



//Bryan DANIEL Quiñones Garcia 
// 2022-0150

const db = SQLite.openDatabase('911_Tarea7.db');


//Bryan DANIEL Quiñones Garcia 
// 2022-0150
export const pickImage = async (setImage: (image: string | null) => void) => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
        Alert.alert('Permiso necesario', 'Por favor, permite el acceso a la galería para seleccionar una imagen.');
        return;
    }

    let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        base64: true,
        quality: 1,
    });

    if (!result.canceled) {
        try {
            const base64Image = await FileSystem.readAsStringAsync(result.assets[0].uri, { encoding: FileSystem.EncodingType.Base64 });
            setImage(base64Image); // Actualizar el estado con la imagen seleccionada
        } catch (error) {
            console.error('Error al leer la imagen:', error);
            Alert.alert('Error', 'No se pudo leer la imagen seleccionada.');
        }
    }
};

