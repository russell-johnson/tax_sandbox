class Api::ShamwowsController < ApplicationController
  def index
    render json: Shamwow.all
  end

  def create
    shamwow = Shamwow.new(shamwow_params)
    shamwow.save
    render json: shamwow
  end

  def show
    shamwow = Shamwow.find(params[:id])
    render json: shamwow
  end

  private

  def shamwow_params
    params.require(:shamwow).permit(:size, :color)
  end

end
