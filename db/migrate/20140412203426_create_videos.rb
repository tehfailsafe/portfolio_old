class CreateVideos < ActiveRecord::Migration
  def change
    create_table :videos do |t|
      t.string :vimeoid
      t.string :project_id

      t.timestamps
    end
  end
end
