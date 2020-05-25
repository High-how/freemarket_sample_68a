class Item < ApplicationRecord
  extend ActiveHash::Associations::ActiveRecordExtensions
  # belongs_to_active_hash :postage_type
  # belongs_to_active_hash :trading_status
  # belongs_to_active_hash :postage_payer
  # belongs_to_active_hash :shipping_area
  # belongs_to_active_hash :shipping_date

  belongs_to :user
  has_many :images, dependent: :destroy
  accepts_nested_attributes_for :images, allow_destroy: true
  # belongs_to :category

  # validates :size,presence: true

  # バリデーション
  validates :name,                length:    {maximum: 40},                               presence: true
  validates :introduction,        length:    {maximum: 1000},                             presence: true
  # validates :category_index_id,   exclusion: {in: %w(---) }
  validates :trading_status,      exclusion: {in: %w(選択してください)},                     presence: true
  validates :postage_payer,       exclusion: {in: %w(選択してください)},                     presence: true
  validates :postage_type,        exclusion: {in: %w(選択してください)},                     presence: true
  validates :shipping_area,       exclusion: {in: %w(選択してください)},                     presence: true
  validates :shipping_date,       exclusion: {in: %w(選択してください)},                     presence: true
  # validates :price,               numericality: [greater_than: 300, less_than: 9999999 ], presence: true
  validates :price,               length: {minimum: 3, maxinum: 7},numericality: { only_integer: true,greater_than: 299, less_than: 10000000}, presence: true
  # # アソシエーション
  # belongs_to :user,              optional:true
  # belongs_to :brand,             optional:true
  # has_many :product_images,      dependent: :delete_all
  # accepts_nested_attributes_for :product_images
  # has_one :trade

  
  # カテゴリ関係
  # has_one :category_index
  # has_one :bigcategory
  # has_one :smallcategory
  # has_one :size

  # enum size:{
  #   "XXS": 0,
  #   "XS": 1,
  #   "S": 2,
  #   "M": 3,
  #   "L": 4,
  #   "XL": 5,
  #   "2XL": 6,
  #   "3XL": 7,
  #   "4XL": 8,
  #   "FREE SIZE": 9,
  # }

end
