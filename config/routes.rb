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
  resources :item_details, only:[:index]
  resources :login, only:[:index]
  resources :items, only: [:new, :create, :edit, :update, :destroy, :show] do
    collection do
      get :category_search
    end
  end
  resources :creditcards, only: [:index, :new, :create, :destroy]
  resources :users, only: [:index, :show, :new] do
  end
  resources :purchase, only: [:index] do
    member do
      get 'index', to: 'purchase#index'
      post 'pay', to: 'purchase#pay'
    end
  end
end
