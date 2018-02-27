class SettingsController < ApplicationController
  def index
    @settings_active = "active"
  end

  def update
    redirect_to '/'
  end
end
