// config.js
const config = {
    dataSource: 'localStorage', // Define the data source as local storage
};

// Function to get data from the data source
function getDataFromSource(key) {
    if (config.dataSource === 'localStorage') {
        return JSON.parse(localStorage.getItem(key));
    }
    // Add other data source handling if needed
    return null;
}
