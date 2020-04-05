class PagesController < ApplicationController

  def landing
  end

  def index
  end

  def episodes
    @episodes = Course.first.episodes

    render json: { data: @episodes }
  end
end
