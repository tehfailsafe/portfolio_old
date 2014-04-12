ActiveAdmin.register Video do
  permit_params :vimeoid, :title
  belongs_to :project
  navigation_menu :project
end
