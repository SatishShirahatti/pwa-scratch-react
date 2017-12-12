import firebase from 'firebase';

/**
 * The session service would keep data related to the current user session, abstracting 
 * the app from the real session manager.
 * 
 */
class Session {

  /**
   * Gets the current user internal and db autogenerated id.
   * 
   */
  getUserId () {
    return firebase.auth().currentUser.uid;
  }

}

export default new Session ();