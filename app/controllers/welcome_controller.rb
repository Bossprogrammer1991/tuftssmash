class WelcomeController < ApplicationController
	def add
		@val = "Thank you for showing interest. You will be emailed if the site is up!"
		if params.has_key?(:first) && params.has_key?(:email) && params.has_key?(:last)
			fname = params[:first].gsub(/\s+/, "")
			lname = params[:last].gsub(/\s+/, "")
			email = params[:email].gsub(/\s+/, "")
			ematch = /[a-zA-Z.+]+@tufts.edu/.match(email)
			if fname == "" || lname == "" || ematch == nil
				redirect_to root_path
			end
			name = fname + " " + lname
			if params.has_key?(:phone)
				phone = params[:phone]
			else
				phone = ""
			end
			pass = (0...8).map { (65 + rand(26)).chr }.join
			user = User.find_by_email(email)
			if user == nil
				user = User.new
				user.name = name
				user.email = email
				user.phone = phone
				user.password = pass
				user.save
			else
				@val = "That email is already registered. One account allowed per email!"
			end
		end
	end

end
