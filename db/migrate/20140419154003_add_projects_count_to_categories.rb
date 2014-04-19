class AddProjectsCountToCategories < ActiveRecord::Migration
  def change
    add_column :categories, :projects_count, :integer, default: 0
  end
end
