class CreateSchedules < ActiveRecord::Migration[6.0]
  def change
    create_table :schedules do |t|
      t.references :user, null: false, foreign_key: true
      t.string :title
      t.datetime :start,     null: false
      t.datetime :end,     null: false
      t.string :place
      t.text :description
      t.timestamps
    end
  end
end
