Rails.application.routes.draw do
  root 'lists#index'

  namespace :api do
    get '/list/:id', to: 'lists#show'
    get '/lists/all', to: 'lists#all'
  end

  get  '*unmatched_route', to: 'lists#index'
end
