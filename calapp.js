function calculateSum() {
    const val1 = parseFloat(document.getElementById('val1').value) || 0;
    const val2 = parseFloat(document.getElementById('val2').value) || 0;
    const val3 = parseFloat(document.getElementById('val3').value) || 0;
    const val4 = parseFloat(document.getElementById('val4').value) || 0;
    const val5 = parseFloat(document.getElementById('val5').value) || 0;

    const sum = ((val1 - val2)/(val3 - val4))*val5;
    // Round the sum to 3 decimal places
    sum = Math.round(sum * 1000) / 1000;
    document.getElementById('result').textContent = "New A: " + sum;
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
