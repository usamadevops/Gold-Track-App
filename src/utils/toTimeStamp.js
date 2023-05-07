import moment from "moment";
function toTimestamp(){
    let date=moment().subtract(2, 'days');
    var datum = Date.parse(date);
    console.log(datum/1000)
    return datum/1000;
 }
 export default toTimestamp;