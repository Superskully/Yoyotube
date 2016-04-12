// app.js

var vm = new Vue({
// We want to target the div with an id of 'videos'
  el: '#videos',


  data: {
	  video: { name: '', description: '', date: '' },
	  videos: [],
	  term: "",
	  location: "world"
	},

	// Anything within the ready function will run when the application loads
	ready: function() {
	  // When the application loads, we want to call the method that initializes
	  // some data
	  this.fetchVideos('war');
	},

	// Methods we want to use in our application are registered here
	methods: {

	  // We dedicate a method to retrieving and setting some data
	  fetchVideos: function(term) {
	    this.$http.get('/api/search/' + term).then(function(response) {
			var items = response.data.items;
			this.$set('videos', items);
		}).catch(function(error) {
		 	console.log(error);
		});
	  },

	  reload: function (term) {
	  	this.fetchVideos(term);
	  }
	}
});

vm.$watch('term', function (newVal, oldVal) {
	if (newVal) { vm.reload(newVal) }
})