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
|family_name_reading|string|null: false|
|first_name_reading|string|null: false|
|birth_year|string|null: false|
|birth_month|string|null: false|
|birth_day|string|null: false|
|email|string|null: false|
|password|string|null: false|
### Association
- has_many :comments dependent: :destroy
- has_many :items dependent: :destroy
- has_many :items, through: :likes
- has_many :likes dependent: :destroy
- has_many :todo_lists dependent: :destroy
- has_many :evaluations dependent: :destroy
- has_one :creditcard dependent: :destroy
- has_one :point dependent: :destroy
- has_one :profile dependent: :destroy
- has_one :address dependent: :destroy



## addressesテーブル
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


## creditcardsテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|references|null: false, foreign_key: true|
|card_number|string|null: false, unipue: true|
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


## todo_listsテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|references|null: false, foreign_key: true|
|item_id|references|null: false, foreign_key: true|
|list|text|null: false|
### Association
- belongs_to :user
- has_many :items

## evaluationsテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|references|null: false, foreign_key: true|
|evaluation_id|references|null: false, foreign_key: true|
|item_id|references|null: false, foreign_key: true|
|review|text|null: false|
### Association
- belongs_to :user
- belongs_to :item

## commentsテーブル
|Column|Type|Options|
|------|----|-------|
|comment|text|null: false|
|user_id|references|null: false, foreign_key: true|
|buyer_id|references|foreign_key: true|
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
|category_id|references|null: false, foreign_key: true|
|buyer_id|references|null: false, foreign_key: true|
|seller_id|references|null: false, foreign_key: true|
|user_id|references|null: false, foreign_key: true|
|name|string|null: false|
|price|integer|null: false, foreign_key: true|
|postage_payer|integer|null: false|
|brand|string|
|postage_type|string|null: false|
|trading_status|integer|null: false|
|shipping_date|integer|null: false|
|shipping_area|string|null: false|
|size|integer|null: false|
|introduction|text|null: false|
### Association
- belongs_to :user
- belongs_to :category dependent: :destroy
- has_many :item_images dependent: :destroy
- has_many :likes
- has_many :comments
- has_many :evaluations
- belongs_to :toto_list
- has_many :users, through: :likes


## categoriesテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
|ancestry|string|null: false|
### Association
- has_many :items

## item_imagesテーブル
|Column|Type|Options|
|------|----|-------|
|item_id|references|null: false, foreign_key: true|
|src|string|null: false|
### Association
- belongs_to :item
