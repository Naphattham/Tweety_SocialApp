class UsersController < ApplicationController
  before_action :authenticate_user!

  def follow
    user = User.find(params[:id])
    current_user.follow(user)
    redirect_to user_profile_path(user), notice: 'You are now following this user.'
  end

  def unfollow
    user = User.find(params[:id])
    current_user.unfollow(user)
    redirect_to user_profile_path(user), notice: 'You have unfollowed this user.'
  end

  def show
    @user = User.find(params[:id])
    @posts = @user.posts.order(created_at: :desc) # โหลดโพสต์เรียงลำดับจากใหม่ไปเก่า
  end

  def myprofile
    @user = current_user
    @posts = @user.posts.order(created_at: :desc)
  end
end