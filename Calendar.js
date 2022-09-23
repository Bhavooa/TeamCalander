function setDate() {
  const days = [];
  for(let i = 0; i < 40; i++){
    days.push("");
  }
  
  createCal();
  
  function createCal() {
    var start = day().getDay();
    var end = getEnd();
    for (let i = 1; i <= end; i++) {
      days[start + i - 1] = i;
    }
    
    var date = document.querySelectorAll("ul.days > li");
    
    i = 0
    for(const element of date){
      element.innerHTML = days[i];
      i++;
    }
  }

  function day() {
    var monthSelected = document.getElementById("month");
    var month = monthSelected.options[monthSelected.selectedIndex].value;
    const day = new Date(month + " 1, 2022");
    return day;
  }


  function getEnd(){
    var month = day().getMonth();
    return new Date(2022, month + 1, 0).getDate();
  }
}

function createList(){
  for(let i = 0; i < 40; i++){
    var tag = document.createElement("li");
    tag.setAttribute("id", "date");
    var text = document.createTextNode("");
    tag.appendChild(text);
    var element = document.getElementById("day");
    element.appendChild(tag);
  }
}

