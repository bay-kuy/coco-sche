class SchedulesController < ApplicationController
  def index
    @schedules = Schedule.includes(:current_user)
  end



  def create
    binding.pry
    @schedule = Schedule.create(params_schedules)
    render json:{ schedule: @schedule }
    redirect_to action: :index
  end

  private
  def params_schedules
    params.require(:schedule).permit(:title, :start, :end, :place, :description).merge(user_id: current_user.id)
  end
end
