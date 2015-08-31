class CreateCards < ActiveRecord::Migration
  def change
    create_table :cards do |t|
      t.integer :ord
      t.text :description
      t.string :title
      t.integer :list_id
      t.timestamps null: false
    end
  end
end
