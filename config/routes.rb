Rails.application.routes.draw do
  root "items#index"
  resources :signin, only:[:index, :new]
  resources :login, only:[:index]
end
