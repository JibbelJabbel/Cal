function calculateSum() {
    const disp = parseFloat(document.getElementById('disp').value) || 0;
    const meas = parseFloat(document.getElementById('meas').value) || 0;
    const Z = parseFloat(document.getElementById('Z').value) || 0;

    const sum = Z + disp - meas;
    // Round the sum to 3 decimal places
    sum = Math.round(sum * 1000) / 1000;
    document.getElementById('result').textContent = "New Z: " + sum;
}

function goBack() {
            window.history.back();
}

// Register the service worker
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('service-worker.js').then(function(registration) {
            console.log('Service Worker registered with scope: ', registration.scope);
        }, function(err) {
            console.log('Service Worker registration failed: ', err);
        });
    });
}
