# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...

# freemarket_sample_68a DB設計

## usersテーブル
|Column|Type|Options|
|------|----|-------|
|nickname|string|null: false|
|family_name|string|null: false|
|first_name|string|null: false|
|family_name_kana|string|null: false|
|first_name_kana|string|null: false|
|birth_year|string|null: false|
|birth_month|string|null: false|
|birth_day|string|null: false|
|email|string|null: false|
|password|string|null: false|
### Association
- has_many :comments dependent: :destroy
- has_many :items dependent: :destroy
- has_many :items, through: :comments
- has_many :items, through: :likes
- has_many :likes dependent: :destroy
- has_one :user_evalution dependent: :destroy
- has_one :creditcard dependent: :destroy
- has_one :point dependent: :destroy
- has_one :profile dependent: :destroy
- has_one :to_do_list dependent: :destroy
- has_one :address dependent: :destroy



## adressesテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|references|null: false, foreign_key: true|
|phone_number|integer|null: false, unique: true|
|postal_code|integer|null: false|
|prefecture|string|null: false|
|city|string|null: false|
|town|string|null: false|
|address|string|null: false|
|building_name|string|
### Association
- belongs_to :user


## pointsテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|references|null: false, foreign_key: true|
|point|integer|
### Association
- belongs_to :user


## creditcardテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|references|null: false, foreign_key: true|
|card_number|integer|null: false, unipue: true|
|expiration_year|integer|null: false|
|expiration_month|integer|null: false|
|security_code|integer|null: false|
### Association
- belongs_to :user


## profilesテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|references|null: false, foreign_key: true|
|avater|string|
|introduction|text|null: false|
### Association
- belongs_to :user


## to_do_listsテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|references|null: false, foreign_key: true|
|items_id|references|null: false, foreign_key: true|
|list|text|null: false|
### Association
- belongs_to :user
- has_many :items


## evalutionsテーブル
|Column|Type|Options|
|------|----|-------|
|evalution|string|null: false|
### Association
- has_many :user_evalutions


## user_evalutionsテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|references|null: false, foreign_key: true|
|user_evalution_id|references|null: false, foreign_key: true|
|item_id|references|null: false, foreign_key: true|
|review|text|null: false|
### Association
- belongs_to :user
- belongs_to :item
- belongs_to :evalution


## commentsテーブル
|Column|Type|Options|
|------|----|-------|
|review|text|null: false|
|user_id|references|null: false, foreign_key: true|
|buyer_id|foreign_key: true|
|item_id|references|null: false, foreign_key: true|
|created_at|timestamp|null: false|
### Association
- belongs_to :user
- belongs_to :item


## likesテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|references|null: false, foreign_key: true|
|item_id|references|null: false, foreign_key: true|
### Association
- belongs_to :user
- belongs_to :item


## itemsテーブル
|Column|Type|Options|
|------|----|-------|
|item-image_id|references|null: false, foreign_key: true|
|brand_id|references|null: false, foreign_key: true|
|category_id|references|null: false, foreign_key: true|
|buyer_id|references|null: false, foreign_key: true|
|seller_id|references|null: false, foreign_key: true|
|name|string|null: false|
|price|integer|null: false, foreign_key: true|
|item_condition|text|null: false|
|postage_payer|string|null: false|
|postage_type|string|null: false|
|trading_status|enum|null: false|
|deal_closed_date|timestamp|null: false|
|shipping_date|integer|null: false|
|shipping_method|string|null: false|
|shipping_area|string|null: false|
### Association
- belongs_to :user
- belongs_to :categorie dependent: :destroy
- has_many :item-images dependent: :destroy
- belongs_to :brand dependent: :destroy
- has_many :likes
- has_many :comments
- has_many :user_evalutions
- belongs_to :to_to_list
- has_many :users, through: :comments
- has_many :users, through: :likes


## categoriesテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
|ancestry|string|null: false|
### Association
- has_many :items


## brandsテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
### Association
- has_many :items


## item_imagesテーブル
|Column|Type|Options|
|------|----|-------|
|item_id|references|null: false, foreign_key: true|
|url|string|null: false|
### Association
- belongs_to :item
