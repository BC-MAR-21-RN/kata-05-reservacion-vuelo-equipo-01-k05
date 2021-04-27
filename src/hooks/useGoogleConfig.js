import {useEffect} from 'react';
import {secret} from '../constants';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth'
export const useGoogleConfig = () => {
  useEffect(() => {
    GoogleSignin.configure({
      webClientId: secret.webClientId,
    });
  }, []);
  const singInWithGoogle = async () => {

    const {idToken} = await GoogleSignin.signIn();


    const googleCredential = auth.GoogleAuthProvider.credential(idToken);


    return auth().signInWithCredential(googleCredential).then((resp)=>console.log("RESPONSE==================>>>>>",resp));
  };
  return[singInWithGoogle]
};
