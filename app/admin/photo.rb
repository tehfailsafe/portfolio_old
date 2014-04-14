ActiveAdmin.register Photo do
  permit_params :path
  belongs_to :project  
end
