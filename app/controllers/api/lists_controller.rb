class Api::ListsController < ApplicationController
  def show
    binding.pry
  end

  def all
    render json: List.all
  end
end
