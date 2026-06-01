#include <emscripten/bind.h>
#include <anitomy/anitomy.h>

using namespace anitomy;
using namespace emscripten;

EMSCRIPTEN_BINDINGS(anitomyscript) {

  enum_<ElementCategory>("ElementCategory")
    .value("AnimeSeason",           kElementAnimeSeason)
    .value("AnimeSeasonPrefix",     kElementAnimeSeasonPrefix)
    .value("AnimeTitle",            kElementAnimeTitle)
    .value("AnimeType",             kElementAnimeType)
    .value("AnimeYear",             kElementAnimeYear)
    .value("AudioTerm",             kElementAudioTerm)
    .value("DeviceCompatibility",   kElementDeviceCompatibility)
    .value("EpisodeNumber",         kElementEpisodeNumber)
    .value("EpisodeNumberAlt",      kElementEpisodeNumberAlt)
    .value("EpisodePrefix",         kElementEpisodePrefix)
    .value("EpisodeTitle",          kElementEpisodeTitle)
    .value("FileChecksum",          kElementFileChecksum)
    .value("FileExtension",         kElementFileExtension)
    .value("FileName",              kElementFileName)
    .value("Language",              kElementLanguage)
    .value("Other",                 kElementOther)
    .value("ReleaseGroup",          kElementReleaseGroup)
    .value("ReleaseInformation",    kElementReleaseInformation)
    .value("ReleaseVersion",        kElementReleaseVersion)
    .value("Source",                kElementSource)
    .value("Subtitles",             kElementSubtitles)
    .value("VideoResolution",       kElementVideoResolution)
    .value("VideoTerm",             kElementVideoTerm)
    .value("VolumeNumber",          kElementVolumeNumber)
    .value("VolumePrefix",          kElementVolumePrefix)
    .value("Unknown",               kElementUnknown)
    ;

  register_vector<std::wstring>("VectorWstring");

  class_<Anitomy>("Anitomy")
    .constructor<>()
    .function("parse", &Anitomy::Parse)
    .function("count", optional_override([](Anitomy& self, ElementCategory cat) {
      return static_cast<int>(self.elements().count(cat));
    }))
    .function("get_all", optional_override([](Anitomy& self, ElementCategory cat) {
      return self.elements().get_all(cat);
    }))
    ;
}
