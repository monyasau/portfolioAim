const updateTimeAndDay=()=> {
  let currentTime = new Date().toUTCString().substring(17,25)
  const currentDay = new Date().toLocaleDateString("en-US", { weekday: "long" });

  let  currentDayElement = document.querySelector("#currentDay");
  let  currentTimeElement = document.querySelector("#currentTime");
  currentTimeElement.textContent=currentTime;
  currentDayElement.textContent=currentDay;
}
setInterval(()=>updateTimeAndDay(),1000)
updateTimeAndDay()