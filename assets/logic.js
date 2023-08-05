
$(document).ready(function () {

  var today = dayjs();
  $('#currentDay').text(today.format('dddd, MMM D'));

  var saveButton = $('button');
  saveButton.on('click', function saveText() {
    var text = $(this).siblings('textarea').val();
    var blockID = $(this).parent().attr('id');

    localStorage.setItem(blockID, text);
  });

  for (var i=0; i<9; i++) {
    var savedDataID = localStorage.key(i);
    var savedData = localStorage.getItem(savedDataID);
    $('#'+ savedDataID).find('textarea').val(savedData);
  }
  
  var currentHour = dayjs().hour();

  var timeBlocks = document.querySelectorAll(".time-block");

  timeBlocks.forEach(function(currentBlock) {
    if (currentBlock.getAttribute('id') < currentHour){
      currentBlock.classList.add('past');
    } else if (currentBlock.getAttribute('id') > currentHour){
      currentBlock.classList.add('future');
    } else {
      currentBlock.classList.add('present');
    }
  });
});