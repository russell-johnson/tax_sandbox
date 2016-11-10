class CreateDatBois < ActiveRecord::Migration[5.0]
  def change
    create_table :dat_bois do |t|
      t.string :name
      t.string :catch_phrase

      t.timestamps
    end
  end
end
