// getCurrentPosition()
function curSuccess (pos) {
    const coords = pos.coords;

    console.log(`latitude: ${coords.latitude}`);
    console.log(`longitude: ${coords.longitude}`);
    console.log(`Within: ${coords.accuracy} meters`);
}

function curError (err) {
    console.log(`Error: ${err.code} - ${err.message}`);
}

const options = {
    enableHighAccuracy: true,   // Uses GPS if available
    timeout: 5000,              // time to wait until stop trying for position
    maximumAge: 0,              // do not used a cached position
};

// navigator.geolocation.getCurrentPosition(curSuccess, curError, options);


// watchPosition() 

const target = {
    latitude: 27.722808999999998,
    longitude: 85.3374329
}
function watchSuccess (pos) {
    const coords = pos.coords;

if (target.latitude === coords.latitude && target.longitude === coords.longitude ) {
    console.log('You have reached the destination');
    navigator.geolocation.clearWatch(id);
    }
}

function watchError (err) {
    console.log(`Error: ${err.code} - ${err.message}`);
}

const watchOptions = {
    enableHighAccuracy: true,   // Uses GPS if available
    timeout: 5000,              // time to wait until stop trying for position
    maximumAge: 0,              // do not used a cached position
};

const id = navigator.geolocation.watchPosition(watchSuccess, watchError, watchOptions);

