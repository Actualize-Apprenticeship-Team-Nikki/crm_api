class SettingsController < ApplicationController
  def index
    @settings_active = "active"
    unless Setting.find_by(admin_id: 1) #hard coded as one because the site overall seems to support only one user
      Setting.create(admin_id: 1)
    end
    @settings = Setting.find_by(admin_id: 1)
  end

  def update
    @settings = Setting.find_by(admin_id: 1)
    new_content = params["settings"]["auto_text_content"]
    @settings.auto_text_content = new_content
    if @settings.save
      flash[:success] = "Settings Saved!"
      redirect_to '/'
    else
      redirect_to "/settings/edit"
    end
  end

  def setting_params
    params.require(:setting).permit(:admin_id, :auto_text_content)
  end
end
