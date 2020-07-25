$("#close-rule").click(function () {
    $('#maskRule').fadeOut();
});

$('.ruleBtn').click(function () {
    $('#maskRule').fadeIn()
})
$('input.btn').click(function (e) {
    e.preventDefault();
    $("#mask,#mask2").fadeOut()
})
