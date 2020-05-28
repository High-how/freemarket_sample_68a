class CreateAddresses < ActiveRecord::Migration[5.2]
  def change
    create_table :addresses do |t|
      t.string :family_name, null: false
      t.string :first_name, null: false
      t.string :family_name_reading, null: false
      t.string :first_name_reading, null: false
      t.string :postal_code, :limit => 8, null: false
      t.integer :prefecture, null: false
      t.string :city, null: false
      t.string :address, null: false
      t.string :building_name
      t.string :phone_number, :limit => 11
      t.references :user, null: false, foreign_key: true
      t.timestamps
    end
  end
end
