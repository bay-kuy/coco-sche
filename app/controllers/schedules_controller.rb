class SchedulesController < ApplicationController
  def index
    @schedules = Schedule.includes(:user)
  end
end
