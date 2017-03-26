//Services Get
function hk_services_get()
{
	//alert("1");
    $.ajax({
        dataType: "json",
        async: false,
        type: "GET",
        url: 'http://slimphp.com/public/index.php/api/services',
        success: function(response) {
            //alert('1');
            var obj = response;
            var $grouplist = $('.fh5co-sub-menu');
            for (var i = 0; i < obj.length; i++) {
            	file_name = obj[i].SR_DESCRIPTION.replace(/\ /g, '_')
                $('<li>' + '<a href='+file_name+'.htm>' + obj[i].SR_DESCRIPTION + '</a>' + '</li>').appendTo($grouplist);
             }

        }
    });

}

//For contact us post
function hk_contactus_post()
{
    //alert("3");
	 $('#contcat_success').show();
    $.ajax({
        dataType: "json",
        type: "POST",
        data: {
            name: $('#name').val(),
            email: $('#email').val(),
            contact: $('#number').val(),
            message: $('#message').val()
        },
        //url: 'http://localhost:8181/api/v1/message/create',
        url: 'http://slimphp.com/public/index.php/api/contact/add',
        success: function(response) {
            //alert(12);
            var obj = response;
            //var status_value = obj['response'];
            //alert(obj);
           if(obj == '0')
               {
                alert('success');
               }
           else
               {
                alert('fail');
               }

        }

    });

}


/*
function hk_login_post()
{
    //alert(123);
    $('#contcat_success').show();
    $.ajax({
        dataType: "json",
        type: "POST",
        data: {
            hk_username: $('#hk_username').val(),
            hk_pass: $('#hk_pass').val()
        },
        url: '/api/v1/usersauth',
        success: function(response) {
            //alert(12);
            var obj = response;
            var status_value=obj['response'];
           if(status_value== 0)
               {
           // window.location='dashboard.jsp';
               }
           else
               {
             //  window.location='login.jsp';
               }
            //var json = [{"Id":"10","Name":"Matt"},{"Id":"1","Name":"Rock"}];
            //var jsonString = JSON.stringify(response);
          

        }
    });
*/