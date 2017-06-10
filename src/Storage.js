import {AsyncStorage} from 'react-native';
import Storage from 'react-native-storage';

global.storage = new Storage({
    size: 1000,
    storageBackend: AsyncStorage,
    defaultExpires: 1000*3600*24
})