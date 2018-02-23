/* global Vue, moment, $ */
document.addEventListener("DOMContentLoaded", function(event) {
  var app = new Vue({
    el: "#app",
    data: function() {
      return {
        leads: [],
        time_format: "12/25/17",
        url: "https://www.google.com/"
      };
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
            lead.clicked = !lead.clicked;
            if ($(".accordion-" + lead.id).css("display") !== "none") {
              $(".accordion-" + lead.id).css("display", "none");
            } else {
              console.log("YAY");
              $(".accordion-" + lead.id).css("display", "table-row");
            }
          }
        });
        console.log(this.leads);
      },
      check: function() {
        console.log(this.leads);
      }
    },
    computed: {}
  });
});
