
class LanguageModel {
  String? _imageUrl;
  String? _languageName;
  String? _languageCode;
  String? _countryCode;


  LanguageModel({required String imageUrl, required String languageName, required String languageCode, required String countryCode}) {
    _imageUrl = imageUrl;
    _languageName = languageName;
    _languageCode = languageCode;
    _countryCode = countryCode;
  }

  String? get countryCode => _countryCode;
  String? get languageCode => _languageCode;
  String? get languageName => _languageName;
  String? get imageUrl => _imageUrl;
}
