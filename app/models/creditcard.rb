class Creditcard < ApplicationRecord
  belongs_to :user
  validates :payjp_id, :card_id, presence: true
end
