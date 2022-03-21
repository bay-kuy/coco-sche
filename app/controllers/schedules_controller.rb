class SchedulesController < ApplicationController
  def index
    @schedules = Schedule.includes(:user)
  end
  def new
    @schedule = Schedule.new
  end

  private
  def params_event
    params.require(:schedule).permit(:title, :start, :end, :place, :description)
  end
end
