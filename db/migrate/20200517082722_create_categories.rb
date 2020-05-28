class CreateCategories < ActiveRecord::Migration[5.2]
  def change
    create_table :categories do |t|
      t.string :name
      t.string :ancestry
      t.boolean :is_size, null: false, default: false
      t.timestamps
    end
  end
end
