class CreateMedia < ActiveRecord::Migration
  def change
    create_table :media do |t|
      t.integer :soundboard_id
      t.integer :user_id

      t.timestamps null: false
    end
  end
end
