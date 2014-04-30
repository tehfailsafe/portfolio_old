class ProjectSerializer < ActiveModel::Serializer
  attributes :id, :title, :thumbnail

  has_many :tags, root: false
  has_many :videos
end
