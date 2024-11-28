class Post < ApplicationRecord
  belongs_to :user
  has_many :comments, dependent: :destroy
  has_many :likes, dependent: :destroy
  has_one_attached :image # เพิ่มความสัมพันธ์สำหรับรูปภาพ

  validates :title, presence: true
  validates :content, presence: true

  def increment_views!
    self.increment!(:views_count)
  end
end
