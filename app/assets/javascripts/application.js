// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require bootstrap.min
//= require_tree .

$("#email").change(function(){
	var vEmail = valE();
	if (!vEmail){
		if(! $(this).parent().parent().hasClass("error")){
			$(this).parent().parent().addClass("error");
		}
	}
	else{
		$(this).parent().parent().removeClass("error");
		$("#sub").disabled = val();
	}
});

$("#first").change(function(){
	var first = $("#first").val().replace(/ /g,'');
	if (first == ""){
		if(! $(this).parent().parent().hasClass("error")){
			$(this).parent().parent().addClass("error");
		}
	}else{
		$(this).parent().parent().removeClass("error");
		$("#sub").disabled = val();
	}	
});

$("#last").change(function(){
	var last = $("#last").val().replace(/ /g,'');
	if (last == ""){
		if(! $(this).parent().parent().hasClass("error")){
			$(this).parent().parent().addClass("error");
		}
	}else{
		$(this).parent().parent().removeClass("error");
		$("#sub").disabled = val();
	}	
});

function val(){
	return valE && valName;
}

function valE(){
	return validateEmail($("#email").val());
}

function valName(){
	var first = $("#first").val().replace(/ /g,'');
	var last = $("#last").val().replace(/ /g,'');
	return first != "" && last != "";
}

function validateEmail(email) { 
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@tufts\.edu$/;
    return re.test(email);
} 