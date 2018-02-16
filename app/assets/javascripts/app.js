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
          this.leads = response;
          console.log(this.leads);
        }.bind(this)
      );
    },
    methods: {
      moment: function(date) {
        return moment(date);
      },
      accordion: function(leadId) {
        this.leads.forEach(function(lead) {
          if (lead.id === leadId) {
            lead.clicked = true;
            console.log(lead.clicked);
          }
        });
        // console.log(this.lead);
      },
      check: function() {
        console.log(this.leads);
      }
    },
    computed: {}
  });
});
