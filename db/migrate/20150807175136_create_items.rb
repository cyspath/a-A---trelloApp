class CreateItems < ActiveRecord::Migration
  def change
    create_table :items do |t|
      t.string :title
      t.boolean :done
      t.integer :card_id
      t.timestamps null: false
    end
  end
end
