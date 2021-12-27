import firebase_admin from 'firebase-admin'

import env from '../../../env';
import prod from "../../../_config/prod/env";

import {firebaseAccess} from "../../../_config/prod/firebase";
import serviceAccountKey from "../../../_config/prod/serviceAccountKey.json";
import {DBAccessor} from "../common/DBAccessor";


firebase_admin.initializeApp({
	credential: firebase_admin.credential.cert(serviceAccountKey),
	databaseURL: firebaseAccess.db.public.databaseURL,
	databaseAuthVariableOverride: {
		secret: prod.admin.secret,
	}
});

const Firestore = firebase_admin.firestore();

if(env.dev.use_emulators) {
	Firestore.settings(firebaseAccess.db.local);
}

const dbAccessorAdmin = new DBAccessor(firebase_admin, Firestore);

export {dbAccessorAdmin}