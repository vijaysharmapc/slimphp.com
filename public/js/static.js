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
    alert("3");
	 $('#contcat_success').show();
    $.ajax({
        dataType: "json",
        type: "POST",
        data: {
            name: $('#hk_name').val(),
            email: $('#hk_email').val(),
            contact: $('#hk_number').val(),
            message: $('#hk_message').val()
        },
        //url: 'http://localhost:8181/api/v1/message/create',
        url: 'http://slimphp.com/public/index.php/api/contact/add',
        success: function(response) {
           //alert(1);
        	 $('#err-state').show();
        }
    });

}
