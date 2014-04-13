class ChangeNameOrderProjects < ActiveRecord::Migration
  def change
    rename_column :projects, :order, :sort
  end
end
