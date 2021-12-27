import {ChangelogModel} from "../../common/models/firebase/ChangelogModel";

class DBAccessor
{
	/**
	 *
	 * @param {firebase} firebase
	 * @param {firebase.firestore.Firestore} firestore
	 */
	constructor(firebase, firestore)
	{
		this.firebase = firebase;
		this.Firestore = firestore;
	}

	/**
	 *
	 * @returns {firebase}
	 */
	getFirebase() {
		return this.firebase;
	}

	/**
	 *
	 * @returns {firebase.firestore.Firestore}
	 */
	getFirestore() {
		return this.Firestore;
	}

	changelog(lang) {
		return this.Firestore.collection(`changelog/${lang}/records`).withConverter(ChangelogModel.getConverter());
	}
}

export {DBAccessor};