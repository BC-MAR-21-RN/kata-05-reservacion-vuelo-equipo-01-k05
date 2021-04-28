import {useEffect} from 'react';
import {secret} from '../constants';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
export const useGoogleConfig = () => {
  useEffect(() => {
    GoogleSignin.configure({
      webClientId: secret.webClientId,
    });
  }, []);
  const singInWithGoogle = async () => {
    const {idToken} = await GoogleSignin.signIn();

    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    return auth()
      .signInWithCredential(googleCredential)
      .then(resp => createAditionalData(resp))
      .catch(err => console.log(err));
  };
  return [singInWithGoogle];
};

const createAditionalData = () => {
  firestore()
    .collection('usuarios')
    .doc(auth().currentUser.uid)
    .set({name: auth().currentUser.displayName})
    .then(resp => {
      console.log("user cre");
      firestore()
        .collection('vuelos')
        .doc(auth().currentUser.uid)
        .get()
        .then(resp => {
          if (!resp.exists) {
            firestore()
              .collection('vuelos')
              .doc(auth().currentUser.uid)
              .set({flights: []});
          }
        })
        .catch(err => console.log('ERRORR AL AGREGAR VUELOS', err));
    })
    .catch(err => console.log('ERRORR AL AGREGAR DATOS', err));
};
