class ProjectsController < ApplicationController

  def index
    @projects = Project.order('sort ASC').all
  end

  def show
    @project = Project.find(params[:id])
    @videos = @project.videos
  end
end
