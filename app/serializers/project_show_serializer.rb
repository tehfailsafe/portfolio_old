class ProjectShowSerializer < ActiveModel::Serializer
  attributes :id, :title, :thumbnail, :content

  has_many :tags, root: false
  has_many :videos
end
