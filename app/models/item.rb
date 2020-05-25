class Item < ApplicationRecord
  extend ActiveHash::Associations::ActiveRecordExtensions
  
  belongs_to :user
  belongs_to :category

  # バリデーション
  validates :name,               length:    {maximum: 40},         presence: true
  validates :introduction,       length:    {maximum: 1000},       presence: true
  validates :category_id,        exclusion: {in: %w(選択してください) }
  validates :trading_status ,    exclusion: {in: %w(選択してください) }
  validates :postage_payer,      exclusion: {in: %w(選択してください)}
  validates :postage_type,       exclusion: {in: %w(選択してください)}
  validates :shipping_area,      exclusion: {in: %w(選択してください)}
  validates :shipping_date,      exclusion: {in: %w(選択してください)}
  validates :price,              numericality: [greater_than: 300, less_than: 9999999 ]
end
