angular.module("app.core").run(["$templateCache", function($templateCache) {$templateCache.put("app/layout/aa-top-nav/aa-top-nav.html","<!DOCTYPE HTML><nav class=\"navbar navbar-fixed-top navbar-inverse\"><div class=navbar-header><a href=\"/\" class=navbar-brand><span class=brand-title>{{vm.title}}</span></a> <a class=\"btn navbar-btn navbar-toggle\" data-toggle=collapse data-target=.navbar-collapse><span class=icon-bar></span> <span class=icon-bar></span> <span class=icon-bar></span></a></div><div class=\"navbar-collapse collapse\"><div class=\"pull-right navbar-logo\"><ul class=\"nav navbar-nav pull-right\"><li class=\"dropdown dropdown-big\"><a href=http://www.acklenavenue.com target=_blank><img src=images/acklenavenue.png></a></li><li><a class=\"fa fa-sign-out fa-5x\" data-toggle=tooltip data-placement=bottom title=Logout ng-click=vm.Logout()></a></li></ul></div></div></nav>");
$templateCache.put("app/layout/shell/shell.html","<!DOCTYPE HTML><div ng-controller=\"Shell as vm\"><header class=clearfix><aa-top-nav title=vm.title></aa-top-nav></header><section id=content class=content><div ng-include=\"\'app/layout/sidebar/sidebar.html\'\"></div><div ui-view class=shuffle-animation></div><div ngplus-overlay ngplus-overlay-delay-in=50 ngplus-overlay-delay-out=700 ngplus-overlay-animation=dissolve-animation><img src=../../../images/busy.gif><div class=\"page-spinner-message overlay-message\"><br>{{vm.busyMessage}}</div></div></section></div>");
$templateCache.put("app/layout/sidebar/sidebar.html","<!DOCTYPE HTML><div ng-controller=\"Sidebar as vm\"><span ng-if=vm.showSideBar()><aa-sidebar when-done-animating=vm.sidebarReady()><div class=sidebar-filler></div><div class=sidebar-dropdown><a href=#>Menu</a></div><div class=sidebar-inner><div class=sidebar-widget></div><ul class=navi ng-if=vm.isUserLogged()><li class=\"nlightblue fade-selection-animation\" ng-class=vm.isCurrent(r) ng-repeat=\"r in vm.navRoutes\"><a ui-sref={{r.name}} ng-bind-html=r.settings.content></a></li></ul></div></aa-sidebar></span></div>");
$templateCache.put("app/users/forgotPassword/users.forgot-password.tpl.html","<!DOCTYPE HTML><div class=modal tabindex=-1 role=dialog ng-controller=\"userForgotPasswordController as vm\"><div class=modal-dialog><div class=modal-content><div class=modal-header ng-show=title><button type=button class=close ng-click=$hide()>&times;</button><h4 class=modal-title ng-bind-html=title></h4></div><div class=modal-body><form name=forgotPassword ng-hide=vm.success class=form-inline ng-submit=vm.ResetPassword()><div class=form-group ng-class=\"{ \'has-error has-feedback\' : forgotPassword.email.$invalid && !forgotPassword.email.$pristine }\"><div><input type=email name=email class=form-control ng-model=vm.email placeholder=\"Email Address\" required> <label class=\"fa xerror\" ng-class=\"{ \'fa-exclamation-circle\' : forgotPassword.email.$invalid && !forgotPassword.email.$pristine }\"></label><div class=help-block ng-messages=forgotPassword.email.$error><div ng-message=required>You must enter the email</div><div ng-message=email>Please input a valid email</div><div ng-message=maxlength>Your email cannot be longer than 30 characters</div><div ng-message=minlength>Your email is required to be at least 3 characters</div></div></div></div><div class=\"form-group for-form-forgot-password\"><button type=submit class=\"btn btn-danger\" ng-hide=forgotPassword.$invalid>Reset Password</button></div></form><div ng-show=vm.success class=\"row alert alert-info\"><strong>Please check your email.</strong> An email has been sent to \"{{vm.email}}\" with instructions on how to reset your password and regain access to your account.</div></div><div class=modal-footer><button type=button class=\"btn btn-default\" ng-click=$hide()>Close</button></div></div></div></div>");
$templateCache.put("app/users/home/users.home.html","<!DOCTYPE HTML><html><head><meta name=viewport content=\"width=device-width, initial-scale=1.0\"><meta http-equiv=X-UA-Compatible content=\"IE=edge\"></head><body><section class=mainbar><section class=matter><div class=container><div class=row><div class=\"widget wblue\"><div aa-widget-header title={{vm.title}}></div><div class=\"widget-content user\"><section id=Home></section></div></div></div></div></section></section></body></html>");
$templateCache.put("app/users/login/users.login.html","<!DOCTYPE HTML><html><head><meta name=viewport content=\"width=device-width, initial-scale=1.0\"><meta http-equiv=X-UA-Compatible content=\"IE=edge\"></head><body><section class=mainbar><section class=matter><div class=container><div class=row><form name=loginForm class=form-horizontal ng-submit=vm.login() novalidate><div class=form-group ng-class=\"{ \'has-error has-feedback\' : loginForm.email.$invalid && !loginForm.email.$pristine }\"><label for=inputEmail1 class=\"col-sm-2 control-label\">Email</label><div class=col-sm-10><input type=email name=email ng-model=vm.email ng-minlength=3 ng-maxlength=30 class=form-control id=inputEmail1 placeholder=Email required> <label class=\"fa xerror\" ng-class=\"{ \'fa-exclamation-circle\' : loginForm.email.$invalid && !loginForm.email.$pristine }\"></label><div class=help-block ng-messages=loginForm.email.$error><div ng-message=required>You must enter the email</div><div ng-message=email>Please input a valid email</div><div ng-message=maxlength>Your email cannot be longer than 30 characters</div><div ng-message=minlength>Your email is required to be at least 3 characters</div></div></div></div><div class=form-group ng-class=\"{ \'has-error has-feedback\' : loginForm.password.$invalid && !loginForm.password.$pristine }\"><label for=inputPassword1 class=\"col-sm-2 control-label\">Password</label><div class=col-sm-10><input type=password name=password ng-model=vm.password ng-minlength=8 ng-maxlength=30 class=form-control id=inputPassword1 placeholder=Password required> <label class=\"fa xerror\" ng-class=\"{ \'fa-exclamation-circle\' : loginForm.password.$invalid && !loginForm.password.$pristine }\"></label><div class=help-block ng-messages=loginForm.password.$error><div ng-message=required>You must enter the password</div><div ng-message=maxlength>Your password cannot be longer than 30 characters</div><div ng-message=minlength>Your password is required to be at least 8 characters</div></div></div></div><div class=form-group><div class=\"col-sm-offset-2 col-sm-10\"><div class=checkbox><label><p><input type=checkbox ng-model=vm.rememberMe>Remember me</p></label></div></div></div><div class=form-group><div class=\"col-sm-offset-2 col-sm-10\"><button type=submit ng-disabled=loginForm.$invalid class=\"btn btn-primary\">Log in</button> <a class=\"btn btn-success\" data-animation=am-fade-and-slide-top data-template=app/users/register/users.register.tpl.html bs-modal=modal title=\"Register a New User Account\">Register</a></div><div class=\"col-sm-offset-2 col-sm-10\"><a class=\"btn as-link btn-link\" role=button data-animation=am-fade-and-slide-top data-template=app/users/forgotPassword/users.forgot-password.tpl.html bs-modal=modal title=\"Forgot Password\">Forgot Password</a></div></div></form></div></div></section></section></body></html>");
$templateCache.put("app/users/register/users.register.tpl.html","<!DOCTYPE HTML><div class=modal tabindex=-1 role=dialog ng-controller=\"userRegisterController as vm\"><div class=modal-dialog><div class=modal-content><div class=modal-header ng-show=title><button type=button class=close ng-click=$hide()>&times;</button><h4 class=modal-title ng-bind-html=title></h4></div><div class=modal-body><form name=userRegister ng-hide=vm.Success ng-submit=vm.Register()><div class=form-group ng-class=\"{ \'has-error has-feedback\' : userRegister.name.$invalid && !userRegister.name.$pristine }\"><div><input type=text name=name class=form-control ng-model=vm.Name placeholder=\"Your Name\" required> <label class=\"fa xerror\" ng-class=\"{ \'fa-exclamation-circle\' : userRegister.name.$invalid && !userRegister.name.$pristine }\"></label><div class=help-block ng-messages=userRegister.name.$error><div ng-message=required>You must enter your name</div><div ng-message=maxlength>Your name cannot be longer than 30 characters</div><div ng-message=minlength>Your name is required to be at least 1 characters</div></div></div></div><div class=form-group ng-class=\"{ \'has-error has-feedback\' : userRegister.phone.$invalid && !userRegister.phone.$pristine }\"><div><input type=tel name=phone class=form-control ng-model=vm.PhoneNumber placeholder=\"Your phone number\" required> <label class=\"fa xerror\" ng-class=\"{ \'fa-exclamation-circle\' : userRegister.phone.$invalid && !userRegister.phone.$pristine }\"></label><div class=help-block ng-messages=userRegister.phone.$error><div ng-message=required>You must enter your phone number</div></div></div></div><div class=form-group ng-class=\"{ \'has-error has-feedback\' : userRegister.email.$invalid && !userRegister.email.$pristine }\"><div><input type=email name=email class=form-control ng-model=vm.Email placeholder=\"Email Address\" required> <label class=\"fa xerror\" ng-class=\"{ \'fa-exclamation-circle\' : userRegister.email.$invalid && !userRegister.email.$pristine }\"></label><div class=help-block ng-messages=userRegister.email.$error><div ng-message=required>You must enter the email</div><div ng-message=email>Please input a valid email</div><div ng-message=maxlength>Your email cannot be longer than 30 characters</div><div ng-message=minlength>Your email is required to be at least 3 characters</div></div></div></div><div class=form-group ng-class=\"{ \'has-error has-feedback\' : userRegister.password.$invalid && !userRegister.password.$pristine }\"><div><input type=password name=password class=form-control ng-model=vm.Password placeholder=Password required ng-minlength=8 ng-maxlength=30> <label class=\"fa xerror\" ng-class=\"{ \'fa-exclamation-circle\' : userRegister.password.$invalid && !userRegister.password.$pristine }\"></label><div class=help-block ng-messages=userRegister.password.$error><div ng-message=required>You must enter the password</div><div ng-message=maxlength>Your password cannot be longer than 30 characters</div><div ng-message=minlength>Your password is required to be at least 8 characters</div></div></div></div><div class=form-group ng-class=\"{ \'has-error has-feedback\' : userRegister.confirmpassword.$invalid && !userRegister.confirmpassword.$pristine }\"><div><input type=password name=confirmpassword class=form-control ng-model=vm.ConfirmPassword placeholder=\"Confirm Password\" compare-to=vm.Password ng-minlength=8 ng-maxlength=30 required> <label class=\"fa xerror\" ng-class=\"{ \'fa-exclamation-circle\' : userRegister.confirmpassword.$invalid && !userRegister.confirmpassword.$pristine }\"></label><div class=help-block ng-messages=userRegister.confirmpassword.$error><div ng-message=compareTo>Passwords must match</div><div ng-message=required>You must confirm your password</div><div ng-message=maxlength>Your password cannot be longer than 30 characters</div><div ng-message=minlength>Your password is required to be at least 8 characters</div></div></div></div><div class=\"form-group for-form-user-Register\"><button type=submit class=\"btn btn-primary\" ng-hide=userRegister.$invalid>Register</button></div></form><div ng-show=vm.Success class=\"row alert alert-info\"><strong>Thanks!</strong> Your user account has been registered. You can now <a href=/#/login>log in</a> with the email address and password you just created.</div></div><div class=modal-footer><button type=button class=\"btn btn-default\" ng-click=$hide()>Close</button></div></div></div></div>");
$templateCache.put("app/users/users/users.html","<!DOCTYPE HTML><html><head><meta name=viewport content=\"width=device-width, initial-scale=1.0\"><meta http-equiv=X-UA-Compatible content=\"IE=edge\"></head><body><section class=mainbar><section class=matter><div class=container><div class=row><div class=\"widget wblue\"><div aa-widget-header title={{vm.title}}></div><div class=\"widget-content user\"><section id=Users><h1>Simple Sum</h1><div>1st Number : <input type=number ng-model=vm.firstNumber><br>2nd Number : <input type=number ng-model=vm.secondNumber> <input type=button ng-click=vm.sum() value=ADD><br>Sum : {{vm.result}}</div></section></div></div></div></div></section></section></body></html>");
$templateCache.put("app/widgets/header/aa-widget-header.html","<!DOCTYPE HTML><div class=widget-head><div class=\"page-title pull-left\">{{title}}</div><small class=page-title-subtle ng-show=subtitle>({{subtitle}})</small><div class=\"widget-icons pull-right\" ng-if=allowCollapse><a ht-widget-minimize></a></div><small class=\"pull-right page-title-subtle\" ng-show=rightText>{{rightText}}</small><div class=clearfix></div></div>");}]);