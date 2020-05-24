class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
  validates :nickname, :family_name, :first_name, :family_name_reading, :first_name_reading, :birth_year, :birth_month, :birth_day, presence: true
  validates :password,length: { in: 7..128} 
  has_one :address
  has_one :creditcard
end
