function saveForm() {
    jQuery.ajax({
        url: "process.php",
        data: $("#saveForm").serialize(),
        type: "POST",
        success: function (data) {
            $("#result").html(data);
        },
        error: function () {}
    });
}