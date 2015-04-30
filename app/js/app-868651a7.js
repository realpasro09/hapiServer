"use strict";function toastrConfig(e){e.options.timeOut=4e3,e.options.positionClass="toast-bottom-right"}function configureRouterAndException(e,t,r,s){function o(){r.configure({docTitle:"A/A Unicron",resolveAlways:{}})}e.debugInfoEnabled(!1),t.debugEnabled&&t.debugEnabled(!0),s.$get().getConfig().configure(config.appErrorPrefix),o()}function configure(e){e.decorator("$exceptionHandler",extendExceptionHandler)}function extendExceptionHandler(e,t,r){return function(s,o){var i=t.getConfig().appErrorPrefix||"",n={exception:s,cause:o};s.message=i+s.message,e(s,o),r.error("",s.message,n)}}var app=angular.module("app",["ngAnimate","ngRoute","ngResource","ngSanitize","ngMessages","app.core","app.widgets","app.users","app.layout","mgcrea.ngStrap"]);app.run(["$state","currentUser",function(e,t){var r=t.GetUser();e.go(r?"home":"login")}]);var appCore=angular.module("app.core",["ngAnimate","ngSanitize","common.logger","common.exception","common.router","ui.router","ngplus"]);appCore.run([function(){}]);var appLayout=angular.module("app.layout",["app.core"]);appLayout.run([function(){}]);var appUsers=angular.module("app.users",["ngRoute","app.core"]);appUsers.run(["$rootScope","$route",function(e,t){}]);var appWidget=angular.module("app.widgets",[]);appWidget.run([function(){}]);var commonException=angular.module("common.exception",["common.logger"]);commonException.run([function(){}]);var commonLogger=angular.module("common.logger",[]);commonLogger.run([function(){}]);var commonRouter=angular.module("common.router",["ui.router","common.logger"]);commonRouter.run([function(){}]);var core=angular.module("app.core");core.config(toastrConfig),toastrConfig.$inject=["toastr"];var config={appErrorPrefix:"[A/A Error] ",appTitle:"Unicron ",version:"1.0.0",imageBasePath:""};core.value("config",config),core.config(configureRouterAndException),configureRouterAndException.$inject=["$compileProvider","$logProvider","routeHelperProvider","exceptionHandlerProvider"],angular.module("app.core").constant("toastr",toastr),angular.module("app.core").constant("moment",moment),angular.module("app.core").constant("_",_);var CurrentUserManager=function(){function e(e){this.$window=e,this.currentUser=void 0,this.windowsKey="user"}return e.prototype.GetUser=function(){var e,t=this.$window.localStorage.getItem(this.windowsKey);if(t)e=JSON.parse(t);else{var r=this.$window.sessionStorage.getItem(this.windowsKey);if(!r)return void 0;e=JSON.parse(r)}var s=new Date(JSON.parse(e.expires));return s<new Date?void this.RemoveUser():e},e.prototype.SetUserLocal=function(e,t,r,s,o){this.SetUser(e,t,r,s,o);var i=JSON.stringify(this.currentUser);this.$window.localStorage.setItem(this.windowsKey,i)},e.prototype.SetUser=function(e,t,r,s,o){this.currentUser={email:e,name:t,token:r,claims:o,expires:JSON.stringify(s)}},e.prototype.SetUserOnSession=function(e,t,r,s,o){this.SetUser(e,t,r,s,o);var i=JSON.stringify(this.currentUser);this.$window.sessionStorage.setItem(this.windowsKey,i)},e.prototype.RemoveUser=function(){this.$window.sessionStorage.removeItem(this.windowsKey),this.$window.localStorage.removeItem(this.windowsKey)},e.$inject=["$window"],e}();appCore.factory("currentUser",["$window",function(e){return new CurrentUserManager(e)}]);var UserRoutes=function(){function e(){}return e.prototype.getRoutes=function(){var e=[{state:"home",config:{url:"/home",templateUrl:"app/users/home/users.home.html",controller:"users.home.controller",controllerAs:"vm",title:"Home",settings:{nav:1,content:'<i class="fa fa-home"></i> Home',claim:"Home"}}},{state:"users",config:{url:"/users",templateUrl:"app/users/users/users.html",controller:"users.controller",controllerAs:"vm",title:"users",settings:{nav:2,content:'<i class="fa fa-group"></i> Users',claim:"ActivateDeactivateUsers"}}},{state:"login",config:{url:"/login",templateUrl:"app/users/login/users.login.html",controller:"users.login.controller",controllerAs:"vm",title:"Login",settings:{nav:0,content:"<i></i> Login",notShowInMenu:!0,notShowSideBar:!0,isPublic:!0}}}];return e},e}(),appUsers=angular.module("app.users");appUsers.constant("userRoutes",new UserRoutes),appUsers.run(["userRoutes","routeHelper",function(e,t){t.configureStates(e.getRoutes(),"/")}]);var HttpQ=function(){function e(e,t){this.$http=e,this.$q=t}return e.prototype.Get=function(e){var t=this.$q.defer();return this.$http.get(e).success(function(e){t.resolve(e)}).error(function(e){t.reject(e)}),t.promise},e.prototype.Post=function(e,t){var r=this.$q.defer();return this.$http.post(e,t).success(function(e){r.resolve(e)}).error(function(e){r.reject(e)}),r.promise},e.prototype.Put=function(e,t){var r=this.$q.defer();return this.$http.put(e,t).success(function(e){r.resolve(e)}).error(function(e){r.reject(e)}),r.promise},e.$inject=["$http","$q"],e}();appCore.factory("httpq",["$http","$q",function(e,t){return new HttpQ(e,t)}]);var ConfigureExceptionHandlerProvider=function(){function e(){this.config()}return e.prototype.config=function(){this.appErrorPrefix=void 0},e.prototype.configure=function(e){this.appErrorPrefix=e},e}(),ExceptionHandlerProvider=function(){function e(e){this.config=e}return e.prototype.$get=function(){var e=this;return{getConfig:function(){return e.config}}},e}();commonException.provider("exceptionHandler",[function(){return new ExceptionHandlerProvider(new ConfigureExceptionHandlerProvider)}]).config(configure),configure.$inject=["$provide"],extendExceptionHandler.$inject=["$delegate","exceptionHandler","logger"];var Exception=function(){function e(e){this.logger=e}return e.prototype.catcher=function(e){return function(t){this.logger.error(t,e)}},e.$inject=["logger"],e}();commonException.factory("exception",["logger",function(e){return new Exception(e)}]);var Logger=function(){function e(e,t){this.log=e,this.toastr=t}return e.prototype.error=function(e,t,r,s){s||this.toastr.error(t,e),this.log.error("Error: "+t,r)},e.prototype.info=function(e,t,r){this.toastr.info(t,e),this.log.info("Info: "+t,r)},e.prototype.success=function(e,t,r){this.toastr.success(t,e),this.log.info("Success: "+t,r)},e.prototype.warning=function(e,t,r){this.toastr.warning(t,e),this.log.info("Warning: "+t,r)},e.$inject=["$log","toastr"],e}();commonLogger.factory("logger",["$log","toastr",function(e,t){return new Logger(e,t)}]);var RouteSettings;!function(e){}(RouteSettings||(RouteSettings={})),function(){function e(e,t,r){function s(e,s,i,n,a,l){function c(e,s){e.forEach(function(e){e.config.resolve=angular.extend(e.config.resolve||{},o.resolveAlways),t.state(e.state,e.config)}),s&&!h&&(h=!0,r.otherwise(s))}function u(){s.$on("$stateChangeError",function(t,r,s,o,i,a){function l(e){var t=r&&(r.title||r.name||r.loadedTemplateUrl)||"unknown target";return"Error routing to "+t+". "+e.message||e.data||". <br/>"+(e.statusText||"")+": "+(e.status||"")}if(!v){f.errors++,console.log(a),v=!0;var c=l(a);n.warning(c,[r]),e.path("/")}})}function d(){s.$on("$stateChangeStart",function(t,r,s,o,i){var n=a.GetUser(),c=r.settings;if(n){var u=n.claims||[];if(c){var d=c.claim,g=l.contains(u,d);c.isPublic||g||(t.preventDefault(),e.path("/home"))}}else"/login"!==r.url&&c&&(c.isPublic||(t.preventDefault(),e.path("/login")))})}function g(){u(),m(),d()}function p(){return i.get()}function m(){s.$on("$stateChangeSuccess",function(e,t,r,i,n){f.changes++,v=!1;var a=o.docTitle+" "+(t.title||"");s.title=a})}var v=!1,h=!1,f={errors:0,changes:0},w={configureStates:c,getStates:p,stateCounts:f};return g(),w}var o={docTitle:void 0,resolveAlways:{}};this.configure=function(e){angular.extend(o,e)},this.$get=s,s.$inject=["$location","$rootScope","$state","logger","currentUser","_"]}angular.module("common.router").provider("routeHelper",e),e.$inject=["$locationProvider","$stateProvider","$urlRouterProvider"]}();var AuthorizationService=function(){function e(e,t,r){var s=this;this.$q=e,this.currentUser=t,this.$injector=r,this.request=function(e){var t=s.currentUser.GetUser();return t&&(e.headers.Authorization="Bearer "+t.token),e||s.$q.when()},this.requestError=function(e){return s.$q.reject(e)},this.responseError=function(e){if(401===e.status){var t=s.$injector.get("$state");t.go("login"),s.currentUser.RemoveUser()}return s.$q.reject(e)}}return e.$inject=["$q","currentUser"],e}();appCore.factory("authorizationService",["$q","currentUser","$injector",function(e,t,r){return new AuthorizationService(e,t,r)}]),appCore.config(["$httpProvider",function(e){e.interceptors.push("authorizationService")}]);var LogHttpService=function(){function e(e,t){var r=this;this.$q=e,this.logger=t,this.responseError=function(e){return r.logError(e),r.$q.reject(e)},this.requestError=function(e){return r.logError(e),r.$q.reject(e)}}return e.prototype.logError=function(e){var t={method:e.config.method,url:e.config.url,data:e.data,headers:e.config.headers,status:e.status,statusText:e.statusText};this.logger.error("Error on Response","Error "+t.status+" in "+t.method+" URL = "+t.url,t,!0)},e.$inject=["$q","logger"],e}();appCore.factory("logHttpService",["$q","logger",function(e,t){return new LogHttpService(e,t)}]),appCore.config(["$httpProvider",function(e){e.interceptors.push("logHttpService")}]);var Shell=function(){function e(e,t,r,s){e.vm=this,this.$timeOut=t,this.config=r,this.logger=s,this.setValues(),this.activate()}return e.prototype.activate=function(){this.logger.success(config.appTitle,config.appTitle+" loaded!",null),this.hideSplash()},e.prototype.hideSplash=function(){var e=this;this.$timeOut(function(){e.showSplash=!1},1e3)},e.controllerId=function(){return"Shell"},e.prototype.setValues=function(){this.title=this.config.appTitle,this.busyMessage="Please wait...",this.isBusy=!0,this.showSplash=!0,this.tagline={text:"Created by Acklen/Avenue",link:"www.acklenavenue.com"}},e.$inject=["$scope","$timeout","config","logger"],e}();appLayout.controller("Shell",["$scope","$timeout","config","logger",function(e,t,r,s){return new Shell(e,t,r,s)}]),function(){function e(){function e(e,t,r){function s(t){var r="dropy";t.preventDefault(),i.hasClass(r)?i.hasClass(r)&&(i.removeClass(r),o.slideUp(350,e.whenDoneAnimating)):(o.slideDown(350,e.whenDoneAnimating),i.addClass(r))}var o=t.find(".sidebar-inner"),i=t.find(".sidebar-dropdown a");t.addClass("sidebar"),i.click(s)}var t={bindToController:!0,link:e,restrict:"EA",scope:{whenDoneAnimating:"&?"}};return t}angular.module("app.layout").directive("aaSidebar",e)}();var Sidebar=function(){function e(e,t,r,s,o){this.$scope=e,this.$state=t,this.routeHelper=r,this.currentUser=s,this._=o,e.vm=this,this.states=r.getStates()}return e.prototype.getNavRoutes=function(){var e=this.states.filter(function(e){return e.settings&&e.settings.nav&&!e.settings.notShowInMenu}).sort(function(e,t){return e.settings.nav-t.settings.nav}),t=this.currentUser.GetUser();if(t){var r=_.filter(e,function(e){var r=e.settings.claim;return _.contains(t.claims,r)});this.navRoutes=r}},e.prototype.activate=function(){this.getNavRoutes()},e.prototype.isUserLogged=function(){var e=this.currentUser.GetUser();return e?(this.activate(),!0):!1},e.prototype.showSideBar=function(){if("^"!==this.$state.current.url){var e=this.$state.current,t=e.settings;return t&&t.notShowSideBar?!1:!0}return!0},e.prototype.isCurrent=function(e){var t=this.$state.current;if(!e.title||!this.$state.current||!t.title)return"";var r=e.title;return t.title.substr(0,r.length)===r?"current":""},e.$inject=["$scope","$state","routeHelper","currentUser","_"],e}();appLayout.controller("Sidebar",Sidebar);var AATopNavController=function(){function e(e,t){this.$scope=e,this.userLogoutService=t,this.$scope.vm=this}return e.prototype.Logout=function(){this.userLogoutService.Logout()},e.$inject=["$scope","userLogoutService"],e}();appLayout.controller("aa-TopNavController",AATopNavController);var AATopNav=function(){function e(){this.bindToController=!0,this.controllerAs="vm",this.controller=AATopNavController,this.restrict="EA",this.scope={title:"="},this.templateUrl="app/layout/aa-top-nav/aa-top-nav.html"}return e}();appLayout.directive("aaTopNav",[function(){return new AATopNav}]);var UserForgotPassword=function(){function e(e,t,r){this.$scope=e,this.logger=t,this.userForgotPasswordService=r,e.vm=this}return e.controllerId=function(){return"userForgotPasswordController"},e.prototype.ResetPassword=function(){var e=this;this.userForgotPasswordService.ResetPassword(this.email).then(function(t){e.success=!0})},e.$inject=["$scope","logger","forgotPasswordservice"],e}();appUsers.controller(UserForgotPassword.controllerId(),UserForgotPassword);var UserForgotPasswordService=function(){function e(e){this.httpq=e}return e.prototype.ResetPassword=function(e){var t={email:e};return this.httpq.Post("/password/requestReset/",t)},e.$inject=["httpq"],e}();appUsers.service("forgotPasswordservice",UserForgotPasswordService);var Home=function(){function e(e,t){e.vm=this,this.logger=t}return e.controllerId=function(){return"users.home.controller"},e.$inject=["$scope","logger"],e}();appUsers.controller(Home.controllerId(),Home);var UsersLogin=function(){function e(e,t,r,s,o){this.logger=t,this.loginUserService=r,this.currentUser=s,this.$state=o,e.vm=this}return e.controllerId=function(){return"users.login.controller"},e.prototype.login=function(){var e=this;this.loginUserService.Login(this.email,this.password).then(function(t){e.SaveUser(t),e.$state.go("home")})["catch"](function(t){e.logger.error("Error",t,null)})},e.prototype.SaveUser=function(e){var t=new Date(Date.parse(e.expires));this.rememberMe?this.currentUser.SetUserLocal(this.email,e.name,e.token,t,e.claims):this.currentUser.SetUserOnSession(this.email,e.name,e.token,t,e.claims)},e.$inject=["$scope","logger","loginUsersService","currentUser","$state"],e}();appUsers.controller(UsersLogin.controllerId(),UsersLogin);var LoginUsersService=function(){function e(e){this.httpq=e}return e.prototype.Login=function(e,t){var r={email:e,password:t},s=this.httpq.Post("/login",r);return s},e.$inject=["httpq"],e}();appUsers.factory("loginUsersService",["httpq",function(e){return new LoginUsersService(e)}]);var UserLogoutService=function(){function e(e,t){this.currentUser=e,this.$state=t}return e.prototype.Logout=function(){this.currentUser.RemoveUser(),this.$state.go("login")},e.$inject=["currentUser","$state"],e}();appUsers.factory("userLogoutService",["currentUser","$state",function(e,t){return new UserLogoutService(e,t)}]);var UserRegister=function(){function e(e,t,r){this.$scope=e,this.logger=t,this.registerUsersService=r,e.vm=this}return e.controllerId=function(){return"userRegisterController"},e.prototype.Register=function(){var e=this,t={name:this.Name,email:this.Email,phoneNumber:this.PhoneNumber,password:this.Password};this.registerUsersService.Register(t).then(function(t){e.Success=!0})},e.$inject=["$scope","logger","registerUsersService"],e}();appUsers.controller(UserRegister.controllerId(),UserRegister);var UserRegisterService=function(){function e(e){this.httpQ=e}return e.prototype.Register=function(e){return this.httpQ.Post("/register",e)},e.$inject=["httpq"],e}();appUsers.factory("registerUsersService",["httpq",function(e){return new UserRegisterService(e)}]);var Users=function(){function e(e,t){e.vm=this,this.logger=t}return e.controllerId=function(){return"users.controller"},e.prototype.sum=function(){this.result=this.firstNumber+this.secondNumber,this.logger.info("Exito","Suma de Dos Numeros",this.result)},e.$inject=["$scope","logger"],e}();appUsers.controller(Users.controllerId(),Users);var compareTo=function(){return{require:"ngModel",scope:{otherModelValue:"=compareTo"},link:function(e,t,r,s){s.$validators.compareTo=function(t){return t===e.otherModelValue},e.$watch("otherModelValue",function(){s.$validate()})}}};appWidget.directive("compareTo",compareTo);var AAWidgetHeader=function(){function e(){this.scope={title:"@",subtitle:"@",rightText:"@",allowCollapse:"@"},this.templateUrl="app/widgets/header/widget-header.html",this.restrict="EA"}return e}();appWidget.directive("aaWidgetHeader",[function(){return new AAWidgetHeader}]),angular.module("app.core").run(["$templateCache",function(e){e.put("app/layout/aa-top-nav/aa-top-nav.html",'<!DOCTYPE HTML><nav class="navbar navbar-fixed-top navbar-inverse"><div class=navbar-header><a href="/" class=navbar-brand><span class=brand-title>{{vm.title}}</span></a> <a class="btn navbar-btn navbar-toggle" data-toggle=collapse data-target=.navbar-collapse><span class=icon-bar></span> <span class=icon-bar></span> <span class=icon-bar></span></a></div><div class="navbar-collapse collapse"><div class="pull-right navbar-logo"><ul class="nav navbar-nav pull-right"><li class="dropdown dropdown-big"><a href=http://www.acklenavenue.com target=_blank><img src=images/acklenavenue.png></a></li><li><a class="fa fa-sign-out fa-5x" data-toggle=tooltip data-placement=bottom title=Logout ng-click=vm.Logout()></a></li></ul></div></div></nav>'),e.put("app/layout/shell/shell.html",'<!DOCTYPE HTML><div ng-controller="Shell as vm"><header class=clearfix><aa-top-nav title=vm.title></aa-top-nav></header><section id=content class=content><div ng-include="\'app/layout/sidebar/sidebar.html\'"></div><div ui-view class=shuffle-animation></div><div ngplus-overlay ngplus-overlay-delay-in=50 ngplus-overlay-delay-out=700 ngplus-overlay-animation=dissolve-animation><img src=../../../images/busy.gif><div class="page-spinner-message overlay-message"><br>{{vm.busyMessage}}</div></div></section></div>'),e.put("app/layout/sidebar/sidebar.html",'<!DOCTYPE HTML><div ng-controller="Sidebar as vm"><span ng-if=vm.showSideBar()><aa-sidebar when-done-animating=vm.sidebarReady()><div class=sidebar-filler></div><div class=sidebar-dropdown><a href=#>Menu</a></div><div class=sidebar-inner><div class=sidebar-widget></div><ul class=navi ng-if=vm.isUserLogged()><li class="nlightblue fade-selection-animation" ng-class=vm.isCurrent(r) ng-repeat="r in vm.navRoutes"><a ui-sref={{r.name}} ng-bind-html=r.settings.content></a></li></ul></div></aa-sidebar></span></div>'),e.put("app/users/forgotPassword/users.forgot-password.tpl.html",'<!DOCTYPE HTML><div class=modal tabindex=-1 role=dialog ng-controller="userForgotPasswordController as vm"><div class=modal-dialog><div class=modal-content><div class=modal-header ng-show=title><button type=button class=close ng-click=$hide()>&times;</button><h4 class=modal-title ng-bind-html=title></h4></div><div class=modal-body><form name=forgotPassword ng-hide=vm.success class=form-inline ng-submit=vm.ResetPassword()><div class=form-group ng-class="{ \'has-error has-feedback\' : forgotPassword.email.$invalid && !forgotPassword.email.$pristine }"><div><input type=email name=email class=form-control ng-model=vm.email placeholder="Email Address" required> <label class="fa xerror" ng-class="{ \'fa-exclamation-circle\' : forgotPassword.email.$invalid && !forgotPassword.email.$pristine }"></label><div class=help-block ng-messages=forgotPassword.email.$error><div ng-message=required>You must enter the email</div><div ng-message=email>Please input a valid email</div><div ng-message=maxlength>Your email cannot be longer than 30 characters</div><div ng-message=minlength>Your email is required to be at least 3 characters</div></div></div></div><div class="form-group for-form-forgot-password"><button type=submit class="btn btn-danger" ng-hide=forgotPassword.$invalid>Reset Password</button></div></form><div ng-show=vm.success class="row alert alert-info"><strong>Please check your email.</strong> An email has been sent to "{{vm.email}}" with instructions on how to reset your password and regain access to your account.</div></div><div class=modal-footer><button type=button class="btn btn-default" ng-click=$hide()>Close</button></div></div></div></div>'),e.put("app/users/home/users.home.html",'<!DOCTYPE HTML><html><head><meta name=viewport content="width=device-width, initial-scale=1.0"><meta http-equiv=X-UA-Compatible content="IE=edge"></head><body><section class=mainbar><section class=matter><div class=container><div class=row><div class="widget wblue"><div aa-widget-header title={{vm.title}}></div><div class="widget-content user"><section id=Home></section></div></div></div></div></section></section></body></html>'),e.put("app/users/login/users.login.html",'<!DOCTYPE HTML><html><head><meta name=viewport content="width=device-width, initial-scale=1.0"><meta http-equiv=X-UA-Compatible content="IE=edge"></head><body><section class=mainbar><section class=matter><div class=container><div class=row><form name=loginForm class=form-horizontal ng-submit=vm.login() novalidate><div class=form-group ng-class="{ \'has-error has-feedback\' : loginForm.email.$invalid && !loginForm.email.$pristine }"><label for=inputEmail1 class="col-sm-2 control-label">Email</label><div class=col-sm-10><input type=email name=email ng-model=vm.email ng-minlength=3 ng-maxlength=30 class=form-control id=inputEmail1 placeholder=Email required> <label class="fa xerror" ng-class="{ \'fa-exclamation-circle\' : loginForm.email.$invalid && !loginForm.email.$pristine }"></label><div class=help-block ng-messages=loginForm.email.$error><div ng-message=required>You must enter the email</div><div ng-message=email>Please input a valid email</div><div ng-message=maxlength>Your email cannot be longer than 30 characters</div><div ng-message=minlength>Your email is required to be at least 3 characters</div></div></div></div><div class=form-group ng-class="{ \'has-error has-feedback\' : loginForm.password.$invalid && !loginForm.password.$pristine }"><label for=inputPassword1 class="col-sm-2 control-label">Password</label><div class=col-sm-10><input type=password name=password ng-model=vm.password ng-minlength=8 ng-maxlength=30 class=form-control id=inputPassword1 placeholder=Password required> <label class="fa xerror" ng-class="{ \'fa-exclamation-circle\' : loginForm.password.$invalid && !loginForm.password.$pristine }"></label><div class=help-block ng-messages=loginForm.password.$error><div ng-message=required>You must enter the password</div><div ng-message=maxlength>Your password cannot be longer than 30 characters</div><div ng-message=minlength>Your password is required to be at least 8 characters</div></div></div></div><div class=form-group><div class="col-sm-offset-2 col-sm-10"><div class=checkbox><label><p><input type=checkbox ng-model=vm.rememberMe>Remember me</p></label></div></div></div><div class=form-group><div class="col-sm-offset-2 col-sm-10"><button type=submit ng-disabled=loginForm.$invalid class="btn btn-primary">Log in</button> <a class="btn btn-success" data-animation=am-fade-and-slide-top data-template=app/users/register/users.register.tpl.html bs-modal=modal title="Register a New User Account">Register</a></div><div class="col-sm-offset-2 col-sm-10"><a class="btn as-link btn-link" role=button data-animation=am-fade-and-slide-top data-template=app/users/forgotPassword/users.forgot-password.tpl.html bs-modal=modal title="Forgot Password">Forgot Password</a></div></div></form></div></div></section></section></body></html>'),e.put("app/users/register/users.register.tpl.html",'<!DOCTYPE HTML><div class=modal tabindex=-1 role=dialog ng-controller="userRegisterController as vm"><div class=modal-dialog><div class=modal-content><div class=modal-header ng-show=title><button type=button class=close ng-click=$hide()>&times;</button><h4 class=modal-title ng-bind-html=title></h4></div><div class=modal-body><form name=userRegister ng-hide=vm.Success ng-submit=vm.Register()><div class=form-group ng-class="{ \'has-error has-feedback\' : userRegister.name.$invalid && !userRegister.name.$pristine }"><div><input type=text name=name class=form-control ng-model=vm.Name placeholder="Your Name" required> <label class="fa xerror" ng-class="{ \'fa-exclamation-circle\' : userRegister.name.$invalid && !userRegister.name.$pristine }"></label><div class=help-block ng-messages=userRegister.name.$error><div ng-message=required>You must enter your name</div><div ng-message=maxlength>Your name cannot be longer than 30 characters</div><div ng-message=minlength>Your name is required to be at least 1 characters</div></div></div></div><div class=form-group ng-class="{ \'has-error has-feedback\' : userRegister.phone.$invalid && !userRegister.phone.$pristine }"><div><input type=tel name=phone class=form-control ng-model=vm.PhoneNumber placeholder="Your phone number" required> <label class="fa xerror" ng-class="{ \'fa-exclamation-circle\' : userRegister.phone.$invalid && !userRegister.phone.$pristine }"></label><div class=help-block ng-messages=userRegister.phone.$error><div ng-message=required>You must enter your phone number</div></div></div></div><div class=form-group ng-class="{ \'has-error has-feedback\' : userRegister.email.$invalid && !userRegister.email.$pristine }"><div><input type=email name=email class=form-control ng-model=vm.Email placeholder="Email Address" required> <label class="fa xerror" ng-class="{ \'fa-exclamation-circle\' : userRegister.email.$invalid && !userRegister.email.$pristine }"></label><div class=help-block ng-messages=userRegister.email.$error><div ng-message=required>You must enter the email</div><div ng-message=email>Please input a valid email</div><div ng-message=maxlength>Your email cannot be longer than 30 characters</div><div ng-message=minlength>Your email is required to be at least 3 characters</div></div></div></div><div class=form-group ng-class="{ \'has-error has-feedback\' : userRegister.password.$invalid && !userRegister.password.$pristine }"><div><input type=password name=password class=form-control ng-model=vm.Password placeholder=Password required ng-minlength=8 ng-maxlength=30> <label class="fa xerror" ng-class="{ \'fa-exclamation-circle\' : userRegister.password.$invalid && !userRegister.password.$pristine }"></label><div class=help-block ng-messages=userRegister.password.$error><div ng-message=required>You must enter the password</div><div ng-message=maxlength>Your password cannot be longer than 30 characters</div><div ng-message=minlength>Your password is required to be at least 8 characters</div></div></div></div><div class=form-group ng-class="{ \'has-error has-feedback\' : userRegister.confirmpassword.$invalid && !userRegister.confirmpassword.$pristine }"><div><input type=password name=confirmpassword class=form-control ng-model=vm.ConfirmPassword placeholder="Confirm Password" compare-to=vm.Password ng-minlength=8 ng-maxlength=30 required> <label class="fa xerror" ng-class="{ \'fa-exclamation-circle\' : userRegister.confirmpassword.$invalid && !userRegister.confirmpassword.$pristine }"></label><div class=help-block ng-messages=userRegister.confirmpassword.$error><div ng-message=compareTo>Passwords must match</div><div ng-message=required>You must confirm your password</div><div ng-message=maxlength>Your password cannot be longer than 30 characters</div><div ng-message=minlength>Your password is required to be at least 8 characters</div></div></div></div><div class="form-group for-form-user-Register"><button type=submit class="btn btn-primary" ng-hide=userRegister.$invalid>Register</button></div></form><div ng-show=vm.Success class="row alert alert-info"><strong>Thanks!</strong> Your user account has been registered. You can now <a href=/#/login>log in</a> with the email address and password you just created.</div></div><div class=modal-footer><button type=button class="btn btn-default" ng-click=$hide()>Close</button></div></div></div></div>'),e.put("app/users/users/users.html",'<!DOCTYPE HTML><html><head><meta name=viewport content="width=device-width, initial-scale=1.0"><meta http-equiv=X-UA-Compatible content="IE=edge"></head><body><section class=mainbar><section class=matter><div class=container><div class=row><div class="widget wblue"><div aa-widget-header title={{vm.title}}></div><div class="widget-content user"><section id=Users><h1>Simple Sum</h1><div>1st Number : <input type=number ng-model=vm.firstNumber><br>2nd Number : <input type=number ng-model=vm.secondNumber> <input type=button ng-click=vm.sum() value=ADD><br>Sum : {{vm.result}}</div></section></div></div></div></div></section></section></body></html>'),e.put("app/widgets/header/aa-widget-header.html",'<!DOCTYPE HTML><div class=widget-head><div class="page-title pull-left">{{title}}</div><small class=page-title-subtle ng-show=subtitle>({{subtitle}})</small><div class="widget-icons pull-right" ng-if=allowCollapse><a ht-widget-minimize></a></div><small class="pull-right page-title-subtle" ng-show=rightText>{{rightText}}</small><div class=clearfix></div></div>')}]);