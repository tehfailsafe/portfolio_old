ActiveAdmin.register Project do

  permit_params :title, :content, :thumbnail 

  sidebar "Project Details", only: [:show, :edit] do
      ul do
        li link_to("Videos", admin_project_videos_path(project))
      end
    end
end
