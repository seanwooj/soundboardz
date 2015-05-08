class Api::SoundboardsController < ApplicationController

  def index
    @soundboards = Soundboard.all
    render :json => @soundboards
  end

  def create
    @soundboard = Soundboard.new(soundboard_params)

    if @soundboard.save
      render :json => @soundboard
    else
      render :json => @soundboard.errors, :status => :unprocessable_entity
    end
  end

  def show
    @soundboard = Soundboard.find(params[:id])
    render :json => @soundboard
  end

  def update
    @soundboard = Soundboard.find(params[:id])
    if @soundboard.update_attributes(soundboard_params)
      render :json => @soundboard
    else
      render :json => @soundboard.errors, :status => :unprocessable_entity
    end
  end

  def destroy
    @soundboard = Soundboard.find(params[:id])
    @soundboard.destroy
    render :json => @soundboard
  end

  private

  def soundboard_params

  end
end