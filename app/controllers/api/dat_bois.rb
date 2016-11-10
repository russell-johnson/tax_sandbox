class API::DatBoisController < ApplicationController

  def index
    render json: DatBoi.all
  end

  def create
    dat_boi = DatBoi.new(dat_boi_params)
    if dat_boi.save
      render json: dat_boi
    else
      render json: { error: dat_boi.errors.full_messages }, status: 500
    end
  end

  private
  def dat_boi_params
    params.require(:dat_boi).permit(:name, :catch_phrase)
  end
end
