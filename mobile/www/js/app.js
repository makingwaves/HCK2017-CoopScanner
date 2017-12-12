var app = {

    resultDiv: null,

    initialize: function() {
        document.addEventListener('deviceready', this.init.bind(this), false);
    },
    
    init : function() {
        document.querySelector("#startScan").addEventListener("touchend", this.startScan, false);
        resultDiv = document.querySelector("#results");
    },
    
    startScan: function() {
    
        cordova.plugins.barcodeScanner.scan(
            function (result) {
                var s = "Result: " + result.text + "<br/>" +
                "Format: " + result.format + "<br/>" +
                "Cancelled: " + result.cancelled;
                resultDiv.innerHTML = s;
            }, 
            function (error) {
                alert("Scanning failed: " + error);
            }
        );
    
    }
};

app.initialize();