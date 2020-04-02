class PagesController < ApplicationController

  def home
  end

  def index
  end

  def episodes
    @episodes = Course.first.episodes

    render json: { data: @episodes }
  end
end
