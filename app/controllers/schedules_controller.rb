class SchedulesController < ApplicationController
  def index
    @schedules = Schedule.includes(:current_user)
  end

  def new
    @schedule = Schedule.new
  end

  private
  def params_event
    params.require(:schedule).permit(:title, :start, :end, :place, :description).merge(user_id: current_user.id)
  end
end
