class CreateItems < ActiveRecord::Migration[5.2]
  def change
    create_table :items do |t|
      t.string     :name,             null: false      
      t.string     :postage_type,     null: false      
      t.string     :shipping_area,    null: false      
      t.string     :brand      
      t.string     :price,            null: false, foreign_key: true      
      t.integer    :trading_status,   null: false, limit: 1      
      t.integer    :shipping_date,    null: false, limit: 1      
      t.integer    :postage_payer,    null: false, limit: 1  
      t.integer    :size,             null: false, limit: 1     
      t.text       :introduction,     null: false      
      t.references :user,             null: false, foreign_key: true      
      t.references :category,         null: false, foreign_key: true      
      # t.references :buyer_id,         null: false, foreign_key: true      
      # t.references :seller_id,        null: false, foreign_key: true      

      t.timestamps
    end
  end
end
