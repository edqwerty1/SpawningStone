!function(){"use strict";angular.module("spawningStone",["ngAnimate","ngCookies","ngTouch","ngSanitize","ngResource","ui.router","ui.bootstrap","ngCookies"])}(),function(){"use strict";function e(){function e(e){var t=this;t.relativeDate=e(t.creationDate).fromNow()}var t={restrict:"E",templateUrl:"app/components/navbar/navbar.html",scope:{creationDate:"="},controller:e,controllerAs:"vm",bindToController:!0};return e.$inject=["moment"],t}angular.module("spawningStone").directive("acmeNavbar",e)}(),function(){"use strict";function e(){function e(){return t}var t=[{title:"AngularJS",url:"https://angularjs.org/",description:"HTML enhanced for web apps!",logo:"angular.png"},{title:"BrowserSync",url:"http://browsersync.io/",description:"Time-saving synchronised browser testing.",logo:"browsersync.png"},{title:"GulpJS",url:"http://gulpjs.com/",description:"The streaming build system.",logo:"gulp.png"},{title:"Jasmine",url:"http://jasmine.github.io/",description:"Behavior-Driven JavaScript.",logo:"jasmine.png"},{title:"Karma",url:"http://karma-runner.github.io/",description:"Spectacular Test Runner for JavaScript.",logo:"karma.png"},{title:"Protractor",url:"https://github.com/angular/protractor",description:"End to end test framework for AngularJS applications built on top of WebDriverJS.",logo:"protractor.png"},{title:"Bootstrap",url:"http://getbootstrap.com/",description:"Bootstrap is the most popular HTML, CSS, and JS framework for developing responsive, mobile first projects on the web.",logo:"bootstrap.png"},{title:"Angular UI Bootstrap",url:"http://angular-ui.github.io/bootstrap/",description:"Bootstrap components written in pure AngularJS by the AngularUI Team.",logo:"ui-bootstrap.png"},{title:"Sass (Node)",url:"https://github.com/sass/node-sass",description:"Node.js binding to libsass, the C version of the popular stylesheet preprocessor, Sass.",logo:"node-sass.png"}];this.getTec=e}angular.module("spawningStone").service("webDevTec",e)}(),function(){"use strict";function e(e){function t(t,n,l,a){var s,r=e(n[0],{typeSpeed:40,deleteSpeed:40,pauseDelay:800,loop:!0,postfix:" "});n.addClass("acme-malarkey"),angular.forEach(t.extraValues,function(e){r.type(e).pause()["delete"]()}),s=t.$watch("vm.contributors",function(){angular.forEach(a.contributors,function(e){r.type(e.login).pause()["delete"]()})}),t.$on("$destroy",function(){s()})}function n(e,t){function n(){return l().then(function(){e.info("Activated Contributors View")})}function l(){return t.getContributors(10).then(function(e){return a.contributors=e,a.contributors})}var a=this;a.contributors=[],n()}var l={restrict:"E",scope:{extraValues:"="},template:"&nbsp;",link:t,controller:n,controllerAs:"vm"};return n.$inject=["$log","githubContributor"],l}angular.module("spawningStone").directive("acmeMalarkey",e),e.$inject=["malarkey"]}(),function(){"use strict";function e(e,t){function n(n){function a(e){return e.data}function s(t){e.error("XHR Failed for getContributors.\n"+angular.toJson(t.data,!0))}return n||(n=30),t.get(l+"/contributors?per_page="+n).then(a)["catch"](s)}var l="https://api.github.com/repos/Swiip/generator-gulp-angular",a={apiHost:l,getContributors:n};return a}angular.module("spawningStone").factory("githubContributor",e),e.$inject=["$log","$http"]}(),function(){"use strict";function e(e,t,n){var l=this;l.spells={},l.savedSpells=n.get("savedSpells")||[],console.log(l.savedSpells),l.spells=e.getSpells(),l.spellStore=l.spells,l.isSaved=function(e){return-1!==l.savedSpells.indexOf(e)},l.saveSpell=function(e){var n=l.savedSpells.indexOf(e);-1===n?l.savedSpells.push(e):l.savedSpells=t("filter")(l.savedSpells,function(t){return!(t==e)})},l.saveSpells=function(){n.put("savedSpells",l.savedSpells)},l.filterSpells=function(){l.spells=t("filter")(l.spells,function(e){return!(-1===l.savedSpells.indexOf(e.Name))})},l.showAll=function(){l.spells=l.spellStore}}angular.module("spawningStone").controller("SpellsController",e),e.$inject=["spellService","$filter","$cookieStore"]}(),function(){"use strict";function e(e,t){function n(){t.defaults.useXDomain=!0;var n=e("http://spawningstone.cloudapp.net/spells.svc/");return n.query()}this.getSpells=n}angular.module("spawningStone").service("spellService",e),e.$inject=["$resource","$http"]}(),function(){"use strict";function e(e,t,n){function l(){s(),e(function(){r.classAnimation="rubberBand"},4e3)}function a(){n.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>'),r.classAnimation=""}function s(){r.awesomeThings=t.getTec(),angular.forEach(r.awesomeThings,function(e){e.rank=Math.random()})}var r=this;r.awesomeThings=[],r.classAnimation="",r.creationDate=1434737442978,r.showToastr=a,l()}angular.module("spawningStone").controller("MainController",e),e.$inject=["$timeout","webDevTec","toastr"]}(),function(){"use strict";function e(e){e.debug("runBlock end")}angular.module("spawningStone").run(e),e.$inject=["$log"]}(),function(){"use strict";function e(e,t){e.state("home",{url:"/",templateUrl:"app/main/main.html",controller:"MainController",controllerAs:"main"}).state("spell",{url:"/spells",templateUrl:"app/spells/spells.html",controller:"SpellsController",controllerAs:"spells"}),t.otherwise("/")}angular.module("spawningStone").config(e),e.$inject=["$stateProvider","$urlRouterProvider"]}(),function(){"use strict";angular.module("spawningStone").constant("malarkey",malarkey).constant("toastr",toastr).constant("moment",moment)}(),function(){"use strict";function e(e,t,n,l){e.debugEnabled(!0),t.options.timeOut=3e3,t.options.positionClass="toast-top-right",t.options.preventDuplicates=!0,t.options.progressBar=!0,n.defaults.useXDomain=!0,delete n.defaults.headers.common["X-Requested-With"],l.defaults.stripTrailingSlashes=!1}angular.module("spawningStone").config(e),e.$inject=["$logProvider","toastr","$httpProvider","$resourceProvider"]}(),angular.module("spawningStone").run(["$templateCache",function(e){e.put("app/main/main.html",'<div class="container"><div><acme-navbar creationdate="main.creationDate"></acme-navbar></div><div class="jumbotron text-center"><h1>\'Allo, \'Allo!</h1><p class="lead"><img src="assets/images/yeoman.png" alt="I\'m Yeoman"><br>Always a pleasure scaffolding your apps.</p><p class="animated infinite" ng-class="main.classAnimation"><button type="button" class="btn btn-lg btn-success" ng-click="main.showToastr()">Splendid Toastr</button></p><p>With ♥ thanks to the contributions of<acme-malarkey extra-values="[\'Yeoman\', \'Gulp\', \'Angular\']"></acme-malarkey></p></div><div class="row"><div class="col-sm-6 col-md-4" ng-repeat="awesomeThing in main.awesomeThings | orderBy:\'rank\'"><div class="thumbnail"><img class="pull-right" ng-src="assets/images/{{ awesomeThing.logo }}" alt="{{ awesomeThing.title }}"><div class="caption"><h3>{{ awesomeThing.title }}</h3><p>{{ awesomeThing.description }}</p><p><a ng-href="{{awesomeThing.url}}">{{ awesomeThing.url }}</a></p></div></div></div></div></div>'),e.put("app/spells/spells.html",'<div class="container"><div class="jumbotron text-center"><h1>Spells!</h1><p class="lead"><img src="assets/images/yeoman.png" alt="I\'m Yeoman"><br>Always a pleasure scaffolding your apps.</p></div><label>Name</label> <input type="text" ng-model="spells.filters.name"> <label>Level</label> <input type="text" ng-model="spells.filters.level"> <label>Bard: <input type="checkbox" ng-model="spells.filters.bard"></label> <label>Cleric: <input type="checkbox" ng-model="spells.filters.cleric"></label> <label>Druid: <input type="checkbox" ng-model="spells.filters.druid"></label> <label>Paladin: <input type="checkbox" ng-model="spells.filters.paladin"></label> <label>Ranger: <input type="checkbox" ng-model="spells.filters.ranger"></label> <label>Sorcerer: <input type="checkbox" ng-model="spells.filters.sorcerer"></label> <label>Warlock: <input type="checkbox" ng-model="spells.filters.warlock"></label> <label>Wizard: <input type="checkbox" ng-model="spells.filters.wizard"></label><div><button type="button" class="btn btn-primary" ng-click="spells.saveSpells()">Save my spells</button> <button type="button" class="btn btn-primary" ng-click="spells.filterSpells()">Show my spells</button> <button type="button" class="btn btn-primary" ng-click="spells.showAll()">Show all</button></div><div class="row"><accordion close-others="false"><accordion-group ng-repeat="spell in spells.spells | filter:{ Name: spells.filters.name, Level: spells.filters.level, Bard: spells.filters.bard, Cleric: spells.filters.cleric, Druid: spells.filters.druid, Paladin: spells.filters.paladin, Ranger: spells.filters.ranger, Sorcerer: spells.filters.sorcerer, Warlock: spells.filters.warlock, Wizard: spells.filters.wizard} |orderBy:[\'Level\',\'Name\']"><accordion-heading><input type="checkbox" ng-checked="spells.isSaved(spell.Name)" ng-click="spells.saveSpell(spell.Name)"> <b>{{::spell.Name}}</b><div class="pull-right"><b>Level:</b> {{::spell.Level}}</div></accordion-heading><div><b>Class:</b> <span ng-if="::spell.Bard">Bard</span> <span ng-if="::spell.Cleric">Cleric</span> <span ng-if="::spell.Druid">Druid</span> <span ng-if="::spell.Paladin">Paladin</span> <span ng-if="::spell.Ranger">Ranger</span> <span ng-if="::spell.Sorcerer">Sorcerer</span> <span ng-if="::spell.Warlock">Warlock</span> <span ng-if="::spell.Wizard">Wizard</span></div><div><b>Casting Time:</b> {{::spell.CastingTime}}</div><div><b>Duration:</b> <span ng-if="::spell.Concentration">(Concentration)</span> {{::spell.Duration}}</div><div><b>School:</b> {{::spell.School}}</div><div><b>Components:</b> <span ng-if="::spell.Somatic">S</span> <span ng-if="::spell.Verbal">V</span> <span ng-if="::spell.Material">M</span> <span ng-if="::spell.MaterialText">({{::spell.MaterialText}})</span></div>{{::spell.Description}}</accordion-group></accordion></div></div>'),e.put("app/components/navbar/navbar.html",'<nav class="navbar navbar-static-top navbar-inverse"><div class="container-fluid"><div class="navbar-header"><a class="navbar-brand" href="https://github.com/Swiip/generator-gulp-angular"><span class="glyphicon glyphicon-home"></span> Gulp Angular</a></div><div class="collapse navbar-collapse" id="bs-example-navbar-collapse-6"><ul class="nav navbar-nav"><li class="active"><a ng-href="#">Home</a></li><li><a ng-href="#">About</a></li><li><a ng-href="#">Contact</a></li></ul><ul class="nav navbar-nav navbar-right acme-navbar-text"><li>Application was created {{ vm.relativeDate }}.</li></ul></div></div></nav>')}]);