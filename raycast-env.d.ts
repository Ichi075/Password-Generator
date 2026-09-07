/// <reference types="@raycast/api">

/* 🚧 🚧 🚧
 * This file is auto-generated from the extension's manifest.
 * Do not modify manually. Instead, update the `package.json` file.
 * 🚧 🚧 🚧 */

/* eslint-disable @typescript-eslint/ban-types */

type ExtensionPreferences = {}

/** Preferences accessible in all the extension's commands */
declare type Preferences = ExtensionPreferences

declare namespace Preferences {
  /** Preferences accessible in the `index` command */
  export type Index = ExtensionPreferences & {
  /** Language - Language for the extension UI */
  "language": "en" | "ja" | "zh_CN" | "zh_TW" | "ko" | "ru" | "es" | "fr" | "de"
}
}

declare namespace Arguments {
  /** Arguments passed to the `index` command */
  export type Index = {}
}

