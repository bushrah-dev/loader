function progress(){
  var number = document.querySelector('.number');
  var content = document.querySelector('.content');
  var text = document.querySelector('.text');
  var count = 4;
  var per = 16;
  var loading = setInterval(animate, 50);
  function animate(){
    if(count == 100 && per == 400){
      number.classList.add("text-blink");
      text.style.display = "block";
      clearInterval(loading);
    }else{
      per = per + 4;
      count = count + 1;
      content.style.width = per + 'px';
      number.textContent = count + '%';
    }
  }
}
progress();
