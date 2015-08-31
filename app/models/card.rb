class Card < ActiveRecord::Base
  belongs_to :list
  has_many :items
  has_many :card_assignments
end
