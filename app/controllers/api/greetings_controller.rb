class Api::GreetingsController < ApplicationController
  def index
    @greetings = Greeting.pluck(:message)
    render json: @greetings
  end
end
