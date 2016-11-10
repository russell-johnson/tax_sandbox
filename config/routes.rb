Rails.application.routes.draw do
  root 'homes#index'

  namespace :api do
    resources :lists do
      resources :items
    end
    resources :robots
    resources :shamwows
  end

  get  '*unmatched_route', to: 'homes#index'
end
