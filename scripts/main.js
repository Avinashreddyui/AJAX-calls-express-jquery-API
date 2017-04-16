/**
 * Created by Avinash Theppala on 4/14/2017.
 */


$(document).ready(function () {
       $.ajax({
           type:"GET",
           url: "/api",
           dataType:"json",

           success: jsonParser
       });
function jsonParser() {
    $.getJSON('/api', function (data) {
        $.each(data.users, function (avi, v1) {

            var name = v1.name;
            var age = v1.age;
           $("<tr><td>"+name+"</td><td>"+age+"</td></tr>").appendTo("#displayTable");


        });
    });
}
    });