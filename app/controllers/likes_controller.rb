class LikesController < ApplicationController
  before_action :authenticate_user!
  before_action :set_post

  def index
    @likes = @post.likes
    respond_to do |format|
      format.json { render json: @likes } # ส่งข้อมูล likes เป็น JSON
      format.html # หากต้องการส่งกลับเป็นหน้า HTML
    end
  end

  def create
    @like = @post.likes.create(user: current_user)
    respond_to do |format|
      format.html { redirect_to @post }
      format.js   # รองรับ AJAX
    end
  end

  def destroy
    @like = @post.likes.find_by(user: current_user)
    @like&.destroy
    respond_to do |format|
      format.html { redirect_to @post }
      format.js   # รองรับ AJAX
    end
  end

  private

  def set_post
    @post = Post.find(params[:post_id])
  end
end