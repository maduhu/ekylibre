require 'trello' 

trello_file = Rails.root.join('config', 'trello.yml')
trello_config = YAML.load_file(trello_file)[Rails.env].symbolize_keys

Trello.configure do |config|
  config.developer_public_key = trello_config[:trello_developper_public_key]
  config.member_token = trello_config[:trello_member_token]
end