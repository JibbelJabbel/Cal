function calculateSum() {
    const val1 = parseFloat(document.getElementById('val1').value) || 0;
    const val2 = parseFloat(document.getElementById('val2').value) || 0;
    const val3 = parseFloat(document.getElementById('val3').value) || 0;
    const val4 = parseFloat(document.getElementById('val4').value) || 0;
    const val5 = parseFloat(document.getElementById('val5').value) || 0;

    const sum = val1 + val2 + val3 + val4 + val5;
    document.getElementById('result').textContent = "Sum: " + sum;
}

// Register the service worker
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js')
    .then(() => console.log('Service Worker registered'))
    .catch((error) => console.log('Service Worker registration failed:', error));
}
