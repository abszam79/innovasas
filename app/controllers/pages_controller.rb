class PagesController < ApplicationController
  skip_before_action :authenticate_user!, only: [:home, :about, :history]

  def home
  end
end
