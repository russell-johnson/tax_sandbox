class Api::RobotsController < ApplicationController
  def index
    render json: Robot.all.order(:created_at)
  end

  def create
    robot = Robot.new(robot_params)
    if robot.save
      render json: robot
    else
      render json: { error: robot.errors.full_messages }, status: 500
    end
  end

  private
  def robot_params
    params.require(:robot).permit(:name, :color)
  end
end
