class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

         validates :name, :school, :department, presence: true
         validates :grade, numericality: { only_integer: true }, presence: { message: "can't be blank" }
end
