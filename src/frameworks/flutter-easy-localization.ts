import { Framework } from './base'
import { LanguageId } from '~/utils'
import { DirStructure, KeyStyle } from '~/core'

class FlutterEasyLocalizationFramework extends Framework {
  id= 'flutter-easy-localization'
  display= 'Flutter Easy Localization'

  detection = {
    pubspecYAML: [
      'easy_localization',
    ],
  }

  languageIds: LanguageId[] = [
    'dart',
  ]

  // for visualize the regex, you can use https://regexper.com/
  usageMatchRegex = [
    '(?<annotation>[\'"`](?<key>{key})[\'"`]\\.(?:tr|plural))',
    '(?<annotation>context.tr\\([\'"`](?<key>{key})[\'"`]\\))\\W',
    '(?<annotation>tr\\([\'"`](?<key>{key})[\'"`]\\))\\W',
    '(?<annotation>LocaleKeys\\.(?<key>{key})\\.tr\\(\\))',
  ]

  preferredKeystyle?: KeyStyle = 'flat'
  preferredDirStructure?: DirStructure = 'file'
  preferredLocalePaths?: string[] = ['assets/i18n']

  refactorTemplates(keypath: string) {
    return [
      `"${keypath}".tr()`,
      `"${keypath}".plural()`,
      `context.tr("${keypath}")`,
      `tr("${keypath}")`,
      `LocaleKeys.${keypath}.tr()`,
      keypath,
    ]
  }
}

export default FlutterEasyLocalizationFramework
