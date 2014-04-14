ActiveAdmin.register Project do
  permit_params :title, :content, :thumbnail, :sort, :tag_list
  index do
    column :title
    column :tag_list
    column :sort
    default_actions
  end

  config.sort_order = "sort_asc"
  config.filters = false

  form do |f|
    f.inputs do
      f.input :title
      f.input :content
      f.input :thumbnail
      f.input :tag_list
      f.input :sort
    end
    # f.collection_select :tag_id, Tag.order(:name), :id, :name, {}, {multiple:true}

    f.actions
  end
  sidebar "Project Details", only: [:show, :edit] do
      ul do
        li link_to("Videos", admin_project_videos_path(project))
        li link_to("Photos", admin_project_photos_path(project))
      end
    end

end
