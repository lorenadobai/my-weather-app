import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyCdmeu9cKQj6nFGDlXgBOiHVOA3CDDR5xg",
    authDomain: "iotca-218c1.firebaseapp.com",
    databaseURL: "https://iotca-218c1-default-rtdb.firebaseio.com",
    projectId: "iotca-218c1",
    storageBucket: "iotca-218c1.appspot.com",
    messagingSenderId: "282143029970",
    appId: "1:282143029970:web:d743ab53ec12119caccb0b",
    measurementId: "G-K1E41NHQML"
  };

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export default database;