Portfolio::Application.routes.draw do
  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)
  root 'projects#index'
  resources :projects, only: [:show, :index]
  get 'about' => 'static#about'
  get 'doughnut' => 'doughnut#index'

  namespace :api, defaults: { format: :json } do
    resources :projects
  end
end
