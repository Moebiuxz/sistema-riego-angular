// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
    production: false,
    firebase: {
        apiKey: 'AIzaSyB4frOScPGaT9_tlBGg_NIyblqtijvqijk',
        authDomain: 'sistema-riego.firebaseapp.com',
        databaseURL: 'https://sistema-riego.firebaseio.com',
        projectId: 'sistema-riego',
        storageBucket: 'sistema-riego.appspot.com',
        messagingSenderId: '135910115734'
    }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
