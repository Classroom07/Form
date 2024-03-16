function toggleArrowUp(event){
    console.log("Hello");
    $(event).removeClass('fa-chevron-up').addClass('fa-chevron-down');
    $(event).parent().next().hide();
    $(event).attr('onclick','toggleArrowDown(this)');
}
function toggleArrowDown(event){
    console.log("Hello");
    $(event).removeClass('fa-chevron-down').addClass('fa-chevron-up');
    $(event).parent().next().show();
    $(event).attr('onclick','toggleArrowUp(this)');
}