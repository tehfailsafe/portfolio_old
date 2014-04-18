class ProjectsController < ApplicationController

  def index
    # @tags = Tag.where('taggings_count > 0')
    @tags = Tag.first
    # @projects = Project.order('sort ASC').all
    @projects = Project.first
  end

  def show
    @project = Project.find(params[:id])
    @videos = @project.videos
    @photos = @project.photos
  end
end
