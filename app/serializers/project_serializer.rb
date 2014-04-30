class ProjectSerializer < ActiveModel::Serializer
  attributes :id, :title, :thumbnail
  embed :ids
  has_many :tags, root: false
  has_many :videos do
    embed :vimeoids
  end
end
