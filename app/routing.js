routing.$inject = ['$urlRouterProvider', '$stateProvider', '$locationProvider'];

export default function routing($urlRouterProvider, $stateProvider, $locationProvider){
	$stateProvider
	.state('master', {
		abstract: true,
		template: require('./pages/master/index.html')
	})
	.state('home', {
		parent: master,
		url: '/home',
		template: require('./pages/home.html')
		});
	$locationProvider.html5Mode(true).hashPrefix('!');
	$urlRouterProvider.otherwise('/');
}