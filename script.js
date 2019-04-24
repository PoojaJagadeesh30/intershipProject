$(document).ready(function () {
    $("#submit").click(function () {
        var name = $("#InputName").val();
        var email = $("#InputEmail").val();
        var password = $("#InputPassword").val();
        var myKeyVals = { fullName : name, userEmail : email, userPassword : password }
        if (name == '' || email == '' || password == '') {
            alert("Please fill the fields");
        } else {
            var saveData = $.ajax({
                type: 'POST',
                url: 'submit.php',
                data: myKeyVals,
                cache: false,
                dataType:'text',
                success: function (result) {
                    alert(result+"Test");
                },
                error:function(jqXHR, textStatus, errorThrown){
                                    alert("Error type" + textStatus + "occured, with value " + errorThrown);
                                }
            });
            saveData.error(function() { alert("Something went wrong"); });
        }
        
        return;
    });
});
