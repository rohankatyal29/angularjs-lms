VAGRANTFILE_API_VERSION = "2"

path = "#{File.dirname(__FILE__)}"

require 'yaml'
require path + '/lib/vagrant/scripts/tk.rb'

Vagrant.configure(VAGRANTFILE_API_VERSION) do |config|
	Social.configure(config, YAML::load(File.read(path + '/lib/vagrant/tk.yaml')))
end
