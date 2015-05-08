Rails.application.routes.draw do
  devise_for :users
  root :to => 'site#root'

  namespace :api, :defaults => {:format => :json} do
    resources :soundboards, :only => [:create, :show, :destroy, :update, :index] do
      resources :media, :only => [:index]
    end

    resources :media, :only => [:create, :show, :destroy, :update]
  end
end
