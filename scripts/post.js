/**
 * Created by Avinash Theppala on 4/16/2017.
 */
$(function() {
    $('#btn').click(function (e) {
        e.preventDefault();
        console.log('select_link clicked');

        var data = {
            name: $("#name").val(),
            age: $("#age").val()
        };
        $.ajax({
            type: 'POST',
            data: JSON.stringify(data),
            contentType: 'application/json',
            url: '/api/addUsers',
            success: function (data) {
                $('#displayTable').append('<tr><td>'+data.name+'</td><td>'+data.age+'</td></tr>');
            }
        });
    });
});