class Api::GreetingsController < ApplicationController
  def index
    @greetings = Greeting.pluck(:message)
    max_index = (@greetings.length - 1)
    render json: [@greetings[rand(0..max_index)]]
  end
end
