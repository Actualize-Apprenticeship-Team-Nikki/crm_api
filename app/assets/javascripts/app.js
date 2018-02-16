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
        var lead = this.leads.filter(function(lead) {
          return lead.id === leadId;
        })[0];
        if (!lead.clicked) {
          lead.clicked = true;
        } else {
          lead.clicked = !lead.clicked;
        }
        console.log(lead.clicked);
      }
    },
    computed: {}
  });
});
