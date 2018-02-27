/* global Vue, moment, $ */
document.addEventListener("DOMContentLoaded", function(event) {
  var app = new Vue({
    el: "#app",
    data: function() {
      return {
        leads: [],
        time_format: "12/25/17",
        url: "https://www.google.com/",
        sorted: {
          created: false,
          first_name: false,
          last_name: false,
          email: false,
          phone: false,
          appointment_date: false
        }
      };
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
      created_at_sort: function() {
        var test = this.sorted.created_at;
        this.leads = this.leads.sort(function(lead1, lead2) {
          if (lead1.created_at > lead2.created_at) {
            return test ? -1 : 1;
          } else {
            return test ? 1 : -1;
          }
        });
        this.sorted.created_at = !this.sorted.created_at;
      },
      first_name_sort: function() {
        var test = this.sorted.first_name;
        this.leads = this.leads.sort(function(lead1, lead2) {
          if (lead1.first_name > lead2.first_name) {
            return test ? -1 : 1;
          } else {
            return test ? 1 : -1;
          }
        });
        this.sorted.first_name = !this.sorted.first_name;
      },
      last_name_sort: function() {
        var test = this.sorted.last_name;
        this.leads = this.leads.sort(function(lead1, lead2) {
          if (lead1.last_name > lead2.last_name) {
            return test ? -1 : 1;
          } else {
            return test ? 1 : -1;
          }
        });
        this.sorted.last_name = !this.sorted.last_name;
      },
      email_sort: function() {
        var test = this.sorted.email;
        this.leads = this.leads.sort(function(lead1, lead2) {
          if (lead1.email > lead2.email) {
            return test ? -1 : 1;
          } else {
            return test ? 1 : -1;
          }
        });
        this.sorted.email = !this.sorted.email;
      },
      phone_sort: function() {
        var test = this.sorted.phone;
        this.leads = this.leads.sort(function(lead1, lead2) {
          if (lead1.phone > lead2.phone) {
            return test ? -1 : 1;
          } else {
            return test ? 1 : -1;
          }
        });
        this.sorted.phone = !this.sorted.phone;
      },
      appointment_date_sort: function() {
        var test = this.sorted.appointment_date;
        this.leads = this.leads.sort(function(lead1, lead2) {
          if (lead1.appointment_date > lead2.appointment_date) {
            return test ? -1 : 1;
          } else {
            return test ? 1 : -1;
          }
        });
        this.sorted.appointment_date = !this.sorted.appointment_date;
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
    computed: {}
  });
});
