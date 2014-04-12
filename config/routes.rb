Portfolio::Application.routes.draw do
  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)
  root 'projects#index'
  resources :projects, only: [:show, :index]

end
