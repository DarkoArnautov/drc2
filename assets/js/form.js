$(document).ready(function() {

    $('#contact').on('submit', function(e) {
        e.preventDefault();

        var redirect = $(this).data('redirect');

        $.ajax({
            url: $(this).attr('action'),
            method: 'POST',
            data: $(this).serializeArray(),
            dataType:"json",
            success:function(data){

                window.location = redirect;
            }
        });

    });

});
