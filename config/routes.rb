Rails.application.routes.draw do
  devise_for :users, controllers: {
    registrations: 'users/registrations',
  }
  devise_scope :user do
    get 'addresses', to: 'users/registrations#new_address'
    post 'addresses', to: 'users/registrations#create_address'
  end
  root "items#index"
  resources :signin, only:[:index, :new]
  resources :login, only:[:index]
  resources :items, only: [:new] do
  end
  resources :users, only: [:index, :show, :new] do
  end
end
