#use gem install google-cloud-text_to_speech
require "google/cloud/text_to_speech"

client = Google::Cloud::TextToSpeech.text_to_speech


synthesis_input = { text: "Ingredients: 10 pounds of water, 2 apples" }

#Accent language codes: 
#US:          "en-US"
#Australian:  "en-AU"
#UK:          "en-GB"

#genders: MALE, FEMALE
voice = {
  language_code: "en-US",
  ssml_gender:   "FEMALE"
}


audio_config = { audio_encoding: "MP3" }


response = client.synthesize_speech(
  input:        synthesis_input,
  voice:        voice,
  audio_config: audio_config
)


File.open "output.mp3", "wb" do |file|
  file.write response.audio_content
end

puts "Audio content written to file 'output.mp3'"
