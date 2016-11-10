class CreateShamwows < ActiveRecord::Migration[5.0]
  def change
    create_table :shamwows do |t|
      t.integer :size
      t.string :color

      t.timestamps
    end
  end
end
