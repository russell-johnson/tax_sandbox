Rails.application.routes.draw do
  root 'lists#index'

  get  '*unmatched_route', to: 'lists#index'
end
