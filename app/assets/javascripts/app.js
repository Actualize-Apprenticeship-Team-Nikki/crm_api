/* global Vue */
document.addEventListener("DOMContentLoaded", function(event) {
  var app = new Vue({
    el: "#app",
    data: {
      leads: [],
      time_format: "12/25/17",
      url: "https://www.google.com/"
    },
    mounted: function() {
      $.get("/api/v1/leads.json").success(
        function(response) {
          console.log(this);
          this.leads = response;
        }.bind(this)
      );
    },
    methods: {
      moment: function(date) {
        return moment(date);
      }
      // post: function() {
      //   constructor(first_name, last_name, email) {
      //     this.leads.first_name = first_name;
      //     this.leads.last_name = last_name;
      //     this.leads.email = email;
      //   }
      // }
    },
    computed: {
      // filteredList() {
      // return this.postList.filter(post => {
      //   return post.title.toLowerCase().includes(this.search.toLowerCase()) })
      //   }
    }
  });
});
