function setDate() {
  const days = [];
  for(let i = 0; i < 40; i++){
    days.push("");
  }
  createCal();
  clearCal();
  
  function clearCal() {
    var date = document.getElementById("day");
    var numOfDays = days.length;
    alert(numOfDays);
    for (let i = 0; i < numOfDays; i++) {
      var day = date.getElementsByTagName("li");
      day.remove();
    }
  }
  
  function createCal() {
    var start = getStart();
    for (let i = 1; i < 32; i++) {
      days[start + i] = i;
    }
    for(let i = 0; i < days.length; i++){
      var tag = document.createElement("li");
      tag.setAttribute("id", "date");
      var text = document.createTextNode(days[i]);
      tag.appendChild(text);
      var element = document.getElementById("day");
      element.appendChild(tag);
    }
  }

  function getStart() {
    var monthSelected = document.getElementById("month");
    var month = monthSelected.options[monthSelected.selectedIndex].value;
    const d = new Date(month + " 1, 2022");
    let day = d.getDay();
    return day;
  }
}

