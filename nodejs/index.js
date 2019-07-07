const luxon = require('luxon');

exports.handler = function(event, context, callback) {
    var today = luxon.DateTime.local().setZone('Asia/Seoul');
    console.log(today.toISO());
    if (callback) {
        callback(null, "Success");
    }
};
