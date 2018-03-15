module LeadsHelper
  def convert_twilio(date)
    date2 = DateTime.rfc2822(date).to_time.in_time_zone("Central Time (US & Canada)")

    if date2.strftime("%Y").to_i == DateTime.now.year
      date2.strftime("%b %e, %l:%M%P")
    else 
      date2.strftime("(%Y) %b %e, %l:%M%P")
    end
  end
end
