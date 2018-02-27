/* global Vue, moment, $ */
document.addEventListener("DOMContentLoaded", function(event) {
  var app = new Vue({
    el: "#app",
    data: {
      leads: [],
      time_format: "12/25/17",
      url: "https://www.google.com/",
      searchFilter: ""
    },
    mounted: function() {
      $.get("/api/v1/leads.json").success(
        function(response) {
          this.leads = response;
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
              $(".accordion-" + lead.id).css("display", "table-row");
            }
          }
        });
      },
      check: function() {}
    },
    computed: {
      filteredList() {
        return this.leads.filter(lead => {
          return (
            lead.first_name
              .toLowerCase()
              .includes(this.searchFilter.toLowerCase()) ||
            lead.last_name
              .toLowerCase()
              .includes(this.searchFilter.toLowerCase()) ||
            lead.email.toLowerCase().includes(this.searchFilter.toLowerCase())
          );
        });
      }
    }
  });
});
