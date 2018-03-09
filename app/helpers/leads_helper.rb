module LeadsHelper
  def convert_twilio(date)

    date2 = DateTime.rfc2822(date).strftime("%Y").to_i

    if date2 == DateTime.now.year
      DateTime.rfc2822(date).strftime("%b %e, %l:%M%P")
    else 
      DateTime.rfc2822(date).strftime("(%Y) %b %e, %l:%M%P")
    end
  end
end
