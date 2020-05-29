class Item < ApplicationRecord
  extend ActiveHash::Associations::ActiveRecordExtensions
  belongs_to :seller, class_name: "User"
  belongs_to :buyer, class_name: "User", optional: true

  has_many :images, dependent: :destroy
  accepts_nested_attributes_for :images, allow_destroy: true
  belongs_to :category

  
  validates :name,                length:    {maximum: 40},                               presence: true
  validates :introduction,        length:    {maximum: 1000},                             presence: true
  validates :category_id,         exclusion: {in: %w(選択してください)},                     presence: true
  validates :trading_status,      exclusion: {in: %w(選択してください)},                     presence: true
  validates :postage_payer,       exclusion: {in: %w(選択してください)},                     presence: true
  validates :postage_type,        exclusion: {in: %w(選択してください)},                     presence: true
  validates :shipping_area,       exclusion: {in: %w(選択してください)},                     presence: true
  validates :shipping_date,       exclusion: {in: %w(選択してください)},                     presence: true
  validates :price,               length: {minimum: 3, maxinum: 7},numericality: { only_integer: true,greater_than: 299, less_than: 10000000}, presence: true
end
