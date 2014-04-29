class ProjectShowSerializer < ActiveModel::Serializer
  attributes :id, :title, :thumbnail, :content
  embed :names
  has_many :tags, root: false
end
