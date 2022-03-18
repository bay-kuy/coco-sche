class ScheduleController < ApplicationController
  def index
    @schedules = Schedule.includes(:user)
  end
end
