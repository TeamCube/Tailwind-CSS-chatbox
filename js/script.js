function sendbtn() {
  
  var printtext = document.getElementById('chatmsg');
  var copytext = document.getElementById('typemsg');
  var currentdate = new Date();
  
  var copiedtext = copytext.value;
  
  var printnow = '<div class="flex justify-end pt-2 pl-10">'+'<span class="bg-green-900 h-auto text-gray-200 text-xs font-normal rounded-sm px-1 items-end flex justify-end overflow-hidden " style="font-size: 10px;">'+copiedtext+'<span class="text-gray-400 pl-1" style="font-size: 8px;">'+currentdate.getHours()+':'+currentdate.getMinutes()+'</span>'+'</span>'+'</div>';
  
  printtext.insertAdjacentHTML('beforeend', printnow);
  
  var box = document.getElementById('journal-scroll');
  box.scrollTop = box.scrollHeight;
}
