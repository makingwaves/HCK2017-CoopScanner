

var app = {
    initialize: function() {
        app.loadTemplate('start_scan.mst', null, function() {
            document.querySelector("#startScan").addEventListener("touchend", app.startScan, false);            
        });                
    },
    
    devReady : function() {       
    },
    
    startScan: function() {
        $('#main-container').html('<div class="loader"></div>');  
        cordova.plugins.barcodeScanner.scan(     
            function(result) {
                app.getProductDetails(result);
            },
            function(error) {
                console.log("Scanning failed: " + error); 
            }
        );       
    },

    getProductDetails: function(data) {
        var url = "https://coopscanner.azurewebsites.net/coop/product/" + data.text;
        
        $.get(url, function(data, status){
            viewModel = {
                name: data.name,
                image_url: data.imageUrl
            } 
        }).done(function() {
            $('.footer-content').html('');        
            app.loadTemplate('product_details.mst', viewModel);
        }).fail(function() {
            $('.footer-content').html('No product found!');
            app.initialize();
        });
    },

    loadTemplate: function(templateName, viewModel, callback) {
        $.get('templates/' + templateName, function(template) {
            var rendered = Mustache.render(template, viewModel);
            $('#main-container').html(rendered);
            callback();
        });
    }
}

app.initialize();