class Api::TagsController < ApplicationController
  respond_to :json

  def index
    # respond_with(Project.all)
    render json: Tag.where('taggings_count > 0'), root: false
  end
  
end