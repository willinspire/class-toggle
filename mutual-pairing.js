$('#foo2').click(function() {
    $('#foo').toggleClass('active');
});
$('#foo').click(function() {
    $('#foo2').toggleClass('active');
});
