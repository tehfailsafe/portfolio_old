class ProjectsController < ApplicationController

  def index
    @tags = Tag.where('taggings_count > 0')
    @projects = Project.includes(:tags).order('sort ASC')
  end

  def show
    @project = Project.find(params[:id])
    @videos = @project.videos
    @photos = @project.photos
  end
end
