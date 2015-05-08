class Api::MediaController < ApplicationController

  def index
    @media = Medium.where(:soundboard_id => params[:soundboard_id])
    render :json => @media
  end

  def create
    @medium = Medium.new(media_params)

    if @medium.save
      render :json => @medium
    else
      render :json => @medium.errors, :status => :unprocessable_entity
    end
  end

  def show
    @medium = Medium.find(params[:id])
    render :json => @medium
  end

  def update
    @medium = Medium.find(params[:id])
    if @medium.update_attributes(media_params)
      render :json => @medium
    else
      render :json => @medium.errors, :status => :unprocessable_entity
    end
  end

  def destroy
    @medium = Medium.find(params[:id])
    @medium.destroy
    render :json => @medium
  end

  private

  def media_params

  end
end