
/* eslint-disable */
import app from './views/app.vue';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import 'bootstrap'

// actually mount to DOM
app.$mount('#app');

if ('serviceWorker' in navigator && process.env.NODE_ENV === 'production') {
	navigator.serviceWorker.register('/service-worker.js').then(function(registration){
		console.log('Service worker registered : ', registration.scope);
	})
	.catch(function(err){
		console.log("Service worker registration failed : ", err);
	});
}

//array getters.groupNodes
Array.prototype.group = function(key) {
	var result = {};
	this.map(item => ({section: key(item), value: item})).forEach(item => {
		result[item.section] = result[item.section] || [];
		result[item.section].push(item.value);
	});
	return Object.keys(result).map(item => ({section: item, data: result[item]}));
}
