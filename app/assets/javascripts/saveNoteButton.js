function ajaxRes(){
  $('#new_user').on('submit',function(e){
    e.preventDefault();
    $.ajax({
      url: PROTOCOL +  '//' + DOMAIN +'/'+'user',
      type: "POST",
      data: $(this).serialize()//{ user: {username: , email: , password: } }
    }).done(function (response){
      if(response.errors){
        for(var key in response.errors){
          $('#new_user').append("<h5 style=\"color: red\">"+key+ " " + response.errors[key][0]+"!<\/h5> ");
        }
      }
      else {
        localStorage.notesterUser = response.username;
        window.location.reload();
      }
    })//end ajax done
  });
  $('#new_session').on('submit',function (e){
    e.preventDefault();
    $.ajax({
      url: PROTOCOL +  '//' + DOMAIN +'/'+'session',
      type: "POST",
      data: $(this).serialize()//{ user: {username: , email: , password: } }
    }).done(function (response){
      console.log(response);

      if(response.errors){
        for(var key in response.errors){
          $('#new_user').append("<h5 style=\"color: red\">"+key+ " " + response.errors[key][0]+"!<\/h5> ");
        }
      } else {
        localStorage.notesterUser = response.username;
        window.location.reload();
      }
    })//end ajax done
  });
};

function logOut(){
   $("#logOutLink").on('click', function(){
        console.log('hit');
        localStorage.notesterUser = "Anon";
        location.reload();
    })
};
var strSignIn="";
    strSignIn += "<section id=\"content\" class=\"m-t-lg wrapper-md animated fadeInUp\">";
    strSignIn += "  <div class=\"container aside-xxl\">";
    strSignIn += "    <a style=\"font-size:50px; color: #53b567;\"class=\"navbar-brand block\" href=\"\/\">Notester<\/a>";
    strSignIn += "    <section class=\"panel panel-default bg-white m-t-lg\">";
    strSignIn += "      <header class=\"panel-heading text-center\">";
    strSignIn += "        <strong>Sign in<\/strong>";
    strSignIn += "      <\/header>";
    strSignIn += "      <form action=\"\/user\" id=\"new_session\" class=\"panel-body wrapper-lg\" method=\"post\">";
    strSignIn += "        <div class=\"form-group\">";
    strSignIn += "          <label class=\"control-label\">Email<\/label>";
    strSignIn += "          <input type=\"email\" name=\"user[email]\" placeholder=\"test@example.com\" class=\"form-control input-lg\">";
    strSignIn += "        <\/div>";
    strSignIn += "        <div class=\"form-group\">";
    strSignIn += "          <label class=\"control-label\">Password<\/label>";
    strSignIn += "          <input type=\"password\" name=\"user[password]\" id=\"inputPassword\" placeholder=\"Password\" class=\"form-control input-lg\">";
    strSignIn += "        <\/div>";
    strSignIn += "        <button type=\"submit\" onClick=\"ajaxRes()\" class=\"btn btn-primary\">Sign in<\/button>";
    strSignIn += "        <p class=\"text-muted text-center\"><small>Do not have an account?<\/small><\/p>";
    strSignIn += "        <a href=\"#\" id=\"signUpLink\" onClick=\"appendSignUp()\" class=\"btn btn-default btn-block\">Create an account<\/a>";
    strSignIn += "      <\/form>";
    strSignIn += "    <\/section>";
    strSignIn += "  <\/div>";
    strSignIn += "<\/section>";

function appendSignIn(){
    $('#signInLink').on('click', function(){
        $("#content").replaceWith(strSignIn);
    })
};


var strSignUp="";
        strSignUp += "<section id=\"content\" class=\"m-t-lg wrapper-md animated fadeInDown\">";
        strSignUp += "  <div class=\"container aside-xxl\">";
        strSignUp += "    <a style=\"font-size:50px; color: #53b567;\"class=\"navbar-brand block\" href=\"/\">Notester<\/a>";
        strSignUp += "    <section class=\"panel panel-default m-t-lg bg-white\">";
        strSignUp += "      <header class=\"panel-heading text-center\">";
        strSignUp += "        <strong>Sign up<\/strong>";
        strSignUp += "      <\/header>";
        strSignUp += "      <form action=\"\/user\" id=\"new_user\" class=\"new_user panel-body wrapper-lg\" method=\"post\">";
        strSignUp += "        <div class=\"form-group\">";
        strSignUp += "          <label class=\"control-label\">Username<\/label>";
        strSignUp += "          <input type=\"text\" name=\"user[username]\" placeholder=\"eg. Your Username\" class=\"form-control input-lg\">";
        strSignUp += "        <\/div>";
        strSignUp += "        <div class=\"form-group\">";
        strSignUp += "          <label class=\"control-label\">Email<\/label>";
        strSignUp += "          <input type=\"email\" name=\"user[email]\" placeholder=\"test@example.com\" class=\"form-control input-lg\">";
        strSignUp += "        <\/div>";
        strSignUp += "        <div class=\"form-group\">";
        strSignUp += "          <label class=\"control-label\">Password<\/label>";
        strSignUp += "          <input type=\"password\" name=\"user[password]\" id=\"inputPassword\" placeholder=\"Type a password\" class=\"form-control input-lg\">";
        strSignUp += "        <\/div>";
        strSignUp += "        <button type=\"submit\" onClick=\"ajaxRes()\" class=\"btn btn-green\">Sign up<\/button>";
        strSignUp += "        <div class=\"line line-dashed\"><\/div>";
        strSignUp += "        <p class=\"text-muted text-center\"><small>Already have an account?<\/small><\/p>";
        strSignUp += "        <a href=\"\#\" id=\"signInLink\" onClick=\"appendSignIn()\" class=\"btn btn-default btn-block\">Sign in<\/a>";
        strSignUp += "        <\/div>";
        strSignUp += "      <\/form>";
        strSignUp += "    <\/section>";
        strSignUp += "  <\/div>";
        strSignUp += "<\/section>";

function appendSignUp(){
    $('#signUpLink').on('click', function(){
        $("#content").replaceWith(strSignUp);
    })
};

$(document).ready(function(){

  document.getElementById("note-date").outerHTML = '<p id="note-date">'+Date() + '</p>';



    var strSignUp="";
        strSignUp += "<section id=\"content\" class=\"m-t-lg wrapper-md animated fadeInDown\">";
        strSignUp += "  <div class=\"container aside-xxl\">";
        strSignUp += "    <a style=\"font-size:50px; color: #53b567;\"class=\"navbar-brand block\" href=\"/\">Notester<\/a>";
        strSignUp += "    <section class=\"panel panel-default m-t-lg bg-white\">";
        strSignUp += "      <header class=\"panel-heading text-center\">";
        strSignUp += "        <strong>Sign up<\/strong>";
        strSignUp += "      <\/header>";
        strSignUp += "      <form action=\"\/user\" id=\"new_user\" class=\"new_user panel-body wrapper-lg\" method=\"post\">";
        strSignUp += "        <div class=\"form-group\">";
        strSignUp += "          <label class=\"control-label\">Username<\/label>";
        strSignUp += "          <input type=\"text\" name=\"user[username]\" placeholder=\"eg. Your Username\" class=\"form-control input-lg\">";
        strSignUp += "        <\/div>";
        strSignUp += "        <div class=\"form-group\">";
        strSignUp += "          <label class=\"control-label\">Email<\/label>";
        strSignUp += "          <input type=\"email\" name=\"user[email]\" placeholder=\"test@example.com\" class=\"form-control input-lg\">";
        strSignUp += "        <\/div>";
        strSignUp += "        <div class=\"form-group\">";
        strSignUp += "          <label class=\"control-label\">Password<\/label>";
        strSignUp += "          <input type=\"password\" name=\"user[password]\" id=\"inputPassword\" placeholder=\"Type a password\" class=\"form-control input-lg\">";
        strSignUp += "        <\/div>";
        strSignUp += "        <button type=\"submit\" onClick=\"ajaxRes()\" class=\"btn btn-green\">Sign up<\/button>";
        strSignUp += "        <div class=\"line line-dashed\"><\/div>";
        strSignUp += "        <p class=\"text-muted text-center\"><small>Already have an account?<\/small><\/p>";
        strSignUp += "        <a href=\"\#\" id=\"signInLink\" onClick=\"appendSignIn()\" class=\"btn btn-default btn-block\">Sign in<\/a>";
        strSignUp += "        <\/div>";
        strSignUp += "      <\/form>";
        strSignUp += "    <\/section>";
        strSignUp += "  <\/div>";
        strSignUp += "<\/section>";

  var saveNoteButton = document.getElementById("save-note");



  var signUp = function(){
    //this function gives detail(title) to a new noteObject, which at this state only has an Id + content
    // if (localStorage.notesterUser !== 'Anon' && localStorage.notesterUser !== undefined){ //means we're logged in
    if ($("#user-username").css("color") !== "rgb(255, 0, 0)"){
      saveNoteButton.addEventListener('click', function(){
       bootbox.prompt("Title name:", function (result) {
          var date = new Date();
          var title = result || "Note Title"// + date.toString();
          description = $(".form-control").val();         //controller param for backend saving
          var username = localStorage.notesterUser;       //controller param for backend saving
          var storageId = sessionStorage.notesterIdFocus; //controller
          var noteObject = JSON.parse(localStorage['notes-app-'+storageId]); //model
          noteObject.title = title;                                          //model
          setNoteDom(noteObject,FOCUS);                   //view-model sync
          data = {resource: {title: title, description: description}, username: username };
          var request = $.ajax( setAjaxCall(noteObject, data));
            request.done(
            function (response){
              console.log("response: ", response);
              if(response.id){
                // var storageId = sessionStorage.notesterIdFocus;
                // var noteObject = JSON.parse(localStorage['notes-app-'+storageId]);
                noteObject.id = response.id;
                noteObject.parent_id = response.parent_id;
                localStorage['notes-app-'+storageId] = JSON.stringify(noteObject);
                console.log("success: ",response);
                $('.bb-alert').delay(200).fadeIn().delay(4000).fadeOut(); //dom-view
              }
              else{
                //alert(JSON.stringify(response));
              }
            });
          })
        });//end event listener
    }
    else {
      saveNoteButton.addEventListener('click', function(){
            bootbox.alert(strSignUp, function() {//preventing signup form default
          });
      })
    }
  }
  signUp();
});


// function togglePublicPrivate(publicc,privatee){
//   if(publicc){

//     return;
//   }
//   else if(privatee){

//     return;
//   }
//   //regular toggle button

// }

// togglePublicPrivate(true,false)
// togglePublicPrivate(false,true)
// togglePublicPrivate()