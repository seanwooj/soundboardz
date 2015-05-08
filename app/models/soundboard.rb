class Soundboard < ActiveRecord::Base
  has_many :media, :dependent => :destroy
end
