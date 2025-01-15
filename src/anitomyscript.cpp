#include <anitomy/anitomy.hpp>
#include <anitomy/element.hpp>
#include <emscripten/bind.h>
#include <print>
#include <string>
#include <string_view>
#include <vector>

using namespace emscripten;
using namespace anitomy;
using namespace std;

Elements ParseSingle(string_t filename) {
  return parse(filename);
}

vector<Elements> ParseMultiple(vector<string_t> filenames) {
  Anitomy an;
  vector<Elements> elements;
  for (auto filename : filenames) {
    elements.emplace_back(parse(filename));
  }
  return elements;
}

vector<string_t> *StringVectorFromPointer(uintptr_t vec) {
  return reinterpret_cast<vector<string_t> *>(vec);
}

vector<Elements> *ElementVectorFromPointer(uintptr_t vec) {
  return reinterpret_cast<vector<Elements> *>(vec);
}

EMSCRIPTEN_BINDINGS(Anitomy) {
  emscripten::function("parseSingle", &ParseSingle);
  emscripten::function("parseMultiple", &ParseMultiple);

  register_vector<string_t>("StringVector").constructor(&StringVectorFromPointer, allow_raw_pointers());

  register_vector<Elements>("ElementVector").constructor(&ElementVectorFromPointer, allow_raw_pointers());

  enum_<ElementKind>("ElementKind").value("AudioTerm", ElementKind::AudioTerm).value("DeviceCompatibility", ElementKind::DeviceCompatibility).value("Episode", ElementKind::Episode).value("EpisodeTitle", ElementKind::EpisodeTitle).value("FileChecksum", ElementKind::FileChecksum).value("FileExtension", ElementKind::FileExtension).value("Language", ElementKind::Language).value("Other", ElementKind::Other).value("ReleaseGroup", ElementKind::ReleaseGroup).value("ReleaseInformation", ElementKind::ReleaseInformation).value("ReleaseVersion", ElementKind::ReleaseVersion).value("Season", ElementKind::Season).value("Source", ElementKind::Source).value("Subtitles", ElementKind::Subtitles).value("Title", ElementKind::Title).value("Type", ElementKind::Type).value("VideoResolution", ElementKind::VideoResolution).value("VideoTerm", ElementKind::VideoTerm).value("Volume", ElementKind::Volume).value("Year", ElementKind::Year);

  // Bind the Element struct
  value_object<Element>("Element").field("kind", &Element::kind).field("value", &Element::value).field("position", &Element::position);

  // Bind the parse function
  function("parse", &parse);
}
