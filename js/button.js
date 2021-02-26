var GPIO=require("onoff").Gpio;
var button=new GPIO(23, 'in', 'both');
var request=require('request');

module.exports=()=>{
    button.watch(function(err, state){
        if(state === 1){
            request.get('/on');
            button.writeSync(0);
        }
    })
}