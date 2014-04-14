class Project < ActiveRecord::Base
  has_many :videos
  has_many :photos
  acts_as_taggable
end
