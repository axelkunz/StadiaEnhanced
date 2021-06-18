chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if (request.contentScriptQuery == "database") {
            var url = "https://raw.githubusercontent.com/ChristopherKlay/StadiaEnhanced/master/database.csv"
            fetch(url)
                .then(response => response.text())
                .then(result => sendResponse(result))
            return true;
        }
    });