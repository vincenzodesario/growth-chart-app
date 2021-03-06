window.GC = window.GC || {};

GC.loadApp = function() {
    var launchContext = {};
    launchContext.patient ='7da30dbb-c9cc-4707-a3a1-0cd191c49195';
    launchContext.encounter = '';
    launchContext.practioner ='';
    var launch = encodeURIComponent(btoa(JSON.stringify(launchContext)));
    var iis = 'https://vdfhir.azurehealthcareapis.com';

    var loadApp1 = new Promise((resolve, reject) => {
            FHIR.oauth2.authorize({
                iss: iis,
                launch: launch,
                client_id: "6687367c-9fdc-4e7f-8ba8-4906968c0641",
                scope:  "patient/Observation.read patient/Patient.read offline_access",
                target: "iframe1",
                completeInTarget: true,
                redirectUri: 'https://vdgrowthchart.azurewebsites.net/app.html'
            });
            resolve();
        }); 

    var loadApp2 = new Promise((resolve, reject) => {
        FHIR.oauth2.authorize({
            iss: iis,
            launch: launch,
            client_id: "6687367c-9fdc-4e7f-8ba8-4906968c0641",
            scope:  "patient/Observation.read patient/Patient.read offline_access",
            target: "iframe2",
            completeInTarget: true,
            redirectUri: 'https://vdgrowthchart.azurewebsites.net/app.html'
        });
        resolve();
    }); 

    var loadApp3 = new Promise((resolve, reject) => {
        FHIR.oauth2.authorize({
            iss: iis,
            launch: launch,
            client_id: "6687367c-9fdc-4e7f-8ba8-4906968c0641",
            scope:  "patient/Observation.read patient/Patient.read offline_access",
            target: "iframe3",
            completeInTarget: true,
            redirectUri: 'https://vdgrowthchart.azurewebsites.net/'
        });
        resolve();
    }); 
    Promise.all([loadApp1, loadApp2, loadApp3]);
}
