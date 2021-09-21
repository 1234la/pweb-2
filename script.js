
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var quotes = this.nextElementSibling;
    if (quotes.style.maxHeight){
      quotes.style.maxHeight = null;
    } else {
      quotes.style.maxHeight = quotes.scrollHeight + "px";
    } 
  });
}

