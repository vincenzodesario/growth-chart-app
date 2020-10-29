window.GC = window.GC || {};

GC.loadApp = function() {
    var launchContext = {};
    launchContext.patient ='d6bcfe9a-5828-4888-bf1c-95c4a4115c41';
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

    Promise.all([loadApp1]);
}
