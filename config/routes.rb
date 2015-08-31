Rails.application.routes.draw do

  root to: 'root#root'

  namespace :api, defaults: { format: :json } do
    resources :boards
    resources :lists
    resources :cards
  end

end
