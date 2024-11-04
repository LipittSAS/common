export class ConstantUtils {
  // see for email max length https://www.rfc-editor.org/errata/eid1690
  static emailMaxLength = 320;

  static nameMaxLength = 64;

  static identifierMaxLength = 64;
  static urlMaxLength = 255;
  static hashLength = 128;

  static basicHashMaxLength = 64;
  static localeMaxLength = 35;

  static uuidLength = 36;

  static version = 'v1';

  static supportedVideoMimeTypes = ['video/mp4', 'video/mpeg', 'video/quicktime', 'video/x-msvideo'];

  static supportedAudioMimeTypes = ['audio/mp3', 'audio/flac', 'audio/wav', 'audio/mpeg'];
}

