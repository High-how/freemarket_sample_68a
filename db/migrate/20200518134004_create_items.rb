class CreateItems < ActiveRecord::Migration[5.2]
  def change
    create_table :items do |t|
      t.string     :name,             null: false
      t.string     :postage_type,     null: false
      t.string     :shipping_area,    null: false
      t.string     :brand
      t.string     :trading_status,    null: false
      t.string     :shipping_date,     null: false
      t.integer    :size,             null: false
      t.string     :postage_payer,     null: false
      t.integer    :price,            null: false, foreign_key: true
      t.integer    :seller_id
      t.integer    :buyer_id
      t.text       :introduction,     null: false
      t.references :user,             null: false, foreign_key: true
      t.references :category,         null: false, foreign_key: true
      t.timestamps
    end
  end
end
