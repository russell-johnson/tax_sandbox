class Api::ListsController < ApplicationController
  def index
    render json: List.all
  end

  def create
    list = List.new(list_params)
    render json: list
  end

  def show
    list = List.find(params[:id])
    render json: list
  end

  private

  def list_params
    params.require(:list).permit(:name)
  end

end
