class WelcomeController < ApplicationController
	def add
		@val = "Thank you for showing interest. You will be emailed if the site is up!"
		#redirect_to root_path
	end

end
