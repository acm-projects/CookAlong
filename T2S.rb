
require "google/cloud/text_to_speech"

client = Google::Cloud::TextToSpeech.text_to_speech


synthesis_input = { text: "You wanna see some real speed" }


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
