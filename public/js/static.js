//Services Get
function hk_services_get()
{
//	alert("123");
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
    //alert(1234);
	 $('#contcat_success').show();
    $.ajax({
        dataType: "json",
        type: "post",
        data: {
            hk_message: $('#hk_message').val(),
            hk_email: $('#hk_email').val(),
            hk_name: $('#hk_name').val()
        },
        //url: 'http://localhost:8181/api/v1/message/create',
        url: '/api/v1/message/create',
        success: function(response) {
           //alert(1);
        	 $('#err-state').show();
        }
    });

}
