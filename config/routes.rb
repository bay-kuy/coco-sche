Rails.application.routes.draw do
  devise_for :users
  root to: "schedules#index"
  resources :users, only: [:edit, :update]
  resources :schedules, only: [:index, :new, :create]
end
