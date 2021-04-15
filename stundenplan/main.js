includeHTML();


String.prototype.cssSetAlpha=function(alpha){
    if(this[3]=='a') 
        return this.replace(/[\d\.]+\)$/g, alpha+')')
    return this.replace(/\)$/g, ','+alpha+')')
}
document.querySelectorAll('.C').forEach(call=>{
    let bgColor=window.getComputedStyle(call,null).getPropertyValue('background-color')
    call.style.backgroundColor = bgColor.cssSetAlpha(0.3)
    call.style.borderColor = bgColor
    call.style.color = bgColor.cssSetAlpha(1)
})

let timeElem = document.getElementById("time")

Node.prototype.setPercentageInParent_Height=function(percent){
    this.style.position="relative"
    this.style.top=this.parentElement.clientHeight*percent + "px"
    return this
}

Date.prototype.getPercentBetween=function(since,to){return (this-since)/(to-since)}
Date.prototype.getPercentBetweenHours=function(sinceH=8,toH=18){
    let since=new Date()
        since.setSeconds(0)
        since.setMinutes(0)
        since.setHours(sinceH)
    let to=new Date()
        to.setSeconds(0)
        to.setMinutes(0)
        to.setHours(toH)
    return this.getPercentBetween(since,to)
}

var isAppended=false
var timechild
function displayTime(){
    let now = new Date()
    timeElem.innerHTML=now.toLocaleTimeString()+' __'
    timeElem.style.top=0;
    timeElem.setPercentageInParent_Height(now.getPercentBetweenHours())
    if(!isAppended){
        let day = document.querySelector('[day="'+now.getDay()+'"]')
        day.style.color="red"
        day.style.borderRadius="1em"
        day.style.border="1px solid red"
        day.style.paddingTop="2em"
        day.style.marginTop="-2.5em"
        timeChild = document.createElement('p')
        timeChild.style.borderBottom="1px solid red"
        day.insertBefore(timeChild,day.children[1])
        isAppended=true
    }
    timeChild.setPercentageInParent_Height(now.getPercentBetweenHours())
}
setInterval(displayTime,1000)