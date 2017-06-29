var app = require("application");
var page;

exports.loaded = function(args) {
    page = args.object;

    var data = {
        values : {
                red: 100,
                orange: 255,
                yellow: 1425,
                green: 125,
                blue: 577,
                purple: 335,
                grey: 693,
            },
        title : "NativeScript with Chart.js",
    }

    page.getViewById("webview").src = "~/www/chart.htm?data="+JSON.stringify(data);

};