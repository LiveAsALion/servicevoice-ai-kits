# SpeedShield
> Formerly: Civic Speed Monitor. File: civic-speed-monitor.md (kept for continuity).
> Project file — single source of truth. Update this file every session. Session history resets; this doesn't.

---

## Status
**Phase:** Build — Flutter App
**Last Updated:** 2026-04-02

---

## Goal
A cross-platform mobile app (iOS + Android) that:
1. Pulls daily-updated speed camera locations from city-published KML/data sources
2. Alerts the driver via TTS when approaching a camera from the monitored direction
3. Activates automatically when phone connects to a vehicle (Bluetooth or Android Auto)
4. Monetizes via one-time purchase + optional annual data renewal

---

## Decisions Log
| Date | Decision | Rationale |
|---|---|---|
| 2026-03-28 | Start with Tasker over custom app | Faster validation of concept |
| 2026-03-28 | Use GitHub Actions + raw GeoJSON/JSON for data layer | No server cost; publicly accessible URL |
| 2026-03-29 | Pivot to Flutter app (SpeedShield) for full product | Proof of concept validated; building for App Store/Play Store |
| 2026-03-29 | Flutter over React Native | Better GPS/maps packages, stricter typing, cleaner AI-generated code |
| 2026-03-29 | Codemagic for iOS builds | 2017 MacBook Air can't run Ventura/Xcode 15; cloud builds are standard |
| 2026-03-29 | Monetization: $4.99 one-time + $9.99/yr data renewal | Avoids subscription fatigue; renewal justified by rotating camera data |
| 2026-03-29 | Launch Android first | Play Console has native A/B testing; validate model before Apple submission |
| 2026-03-29 | App name: SpeedShield | Broad search appeal, less likely to draw store review friction than "CamAlert" |
| 2026-03-29 | Switched from google_maps_flutter to flutter_map + OpenStreetMap | Google Cloud billing permanently locked on dedicated account; OSM is production-ready, zero API key needed. **Revisit before launch** — weekly reminder set. |
| 2026-03-29 | Data layer: KML from Google My Maps (Phoenix) | URL confirmed working, all 9 cameras with direction in <description> tag |
| 2026-03-30 | Android 14 crash fix: added POST_NOTIFICATIONS permission | Foreground service crashes on Android 13+ without notification permission; fixed in manifest + main.dart runtime request |
| 2026-03-30 | BootReceiver removed from manifest | Class was declared but never created — ClassNotFoundException crash on every launch; deferred to v2 |
| 2026-03-30 | Notification channel moved to SpeedShieldApp (Application class) | Channel must exist before any service or activity starts; MainActivity too late |
| 2026-03-30 | Background service autoStart=false; starts manually after permission granted | Race condition: autoStart fired before notification permission dialog resolved |
| 2026-03-30 | Added three activation modes: vehicleBluetooth (default), autoDetect, alwaysOn | User-selectable in Settings; persisted to SharedPreferences |
| 2026-03-30 | Bottom status bar switched from bottomSheet to bottomNavigationBar + SafeArea | bottomSheet doesn't respect Android nav bar; was rendering behind it |
| 2026-03-30 | Settings screen rewritten — removed all BT calls from _load() | FlutterBluePlus async calls were silently crashing load, preventing Activation Mode section from rendering |
| 2026-03-30 | Code cleanup: timer leak fixed, BT connectedDevices sync fix, dead params/fields removed | See decisions log for detail |
| 2026-03-31 | Field test passed: alerts fire at correct distances, directional filtering confirmed working | Tested multiple locations and directions |
| 2026-03-31 | Battery optimization exemption added | Android Doze was killing background service; REQUEST_IGNORE_BATTERY_OPTIMIZATIONS added to manifest + runtime request |
| 2026-03-31 | BT detection rewritten using native Kotlin BroadcastReceiver | FlutterBluePlus unreliable in background Dart isolate; native ACL_CONNECTED/DISCONNECTED events write to SharedPreferences; Dart reads from there |
| 2026-03-31 | BT name save button: added snackbar confirmation | Button was saving silently with no feedback; user had no way to confirm it worked |
| 2026-03-31 | Doze-aware smart activation — BT wake + Activity Recognition | BluetoothReceiver now starts/stops Flutter service on ACL events (Doze-exempt); ActivityRecognitionReceiver handles auto-detect via Google Play Services IN_VEHICLE (Doze-exempt, 30s); MonitoringService bridges native → Flutter; zero idle battery in BT mode |
| 2026-04-01 | BLUETOOTH_CONNECT not requested at runtime | Declared in manifest but never called Permission.bluetoothConnect.request(); device?.name returned null silently on Android 12+, breaking all BT detection; fixed in main.dart |
| 2026-04-01 | Native receivers never read activationMode/vehicleBluetoothDevices keys | SettingsService was writing a single JSON blob under alert_settings; Kotlin receivers expected flat keys (flutter.activationMode, flutter.vehicleBluetoothDevices) that were never written; fixed: SettingsService.save() now writes flat keys alongside blob |
| 2026-04-01 | Startup BT state missing MAC address | SpeedShieldApp.kt wrote BT device name on startup but not address; MAC-based matching failed if device already connected at launch; fixed to write both name and address, starts monitoring immediately if device in approved list |
| 2026-04-01 | Double TTS alerts — foreground flag fix | MapScreen and background_service each held independent ProximityService instances with separate alert state; both fired TTS simultaneously when app was open; fixed with kAppForegroundKey SharedPreferences flag — MapScreen writes true/false on lifecycle, background service skips TTS when flag is true |
| 2026-04-01 | TTS announced configured threshold instead of actual distance | AlertService was speaking the configured alert distance (e.g. "600 meters") instead of actual current distance; fixed to accept actualDistanceMeters param, rounds to nearest 50m (primary) or 25m (secondary) |
| 2026-04-01 | Multi-vehicle Bluetooth device picker added | Replaced single text-field BT name entry with device picker showing paired BT devices; saved as JSON list with name + MAC; BluetoothReceiver matches by MAC (not name); multiple vehicles supported; keyword heuristic retained as fallback when list is empty |
| 2026-04-02 | Device picker bottom sheet fixed — now scrollable | Original picker used Column with mainAxisSize.min; clipped when paired device list exceeded visible area; no scroll possible; replaced with DraggableScrollableSheet (45–85% screen height) + ListView.builder; all paired devices now reachable |
| 2026-04-04 | 3 bugs found in field test (night of 2026-04-03) | (1) App did not auto-activate on BT connect; (2) App showed "looking for vehicle" on manual open even when connected; (3) Crash on rapid BT disconnect/reconnect |
| 2026-04-04 | Bug 1 fix: flat key write in SettingsService — already applied in prior commits (678064a / remote); confirmed activationMode flat key is now written on save | BluetoothReceiver reads flutter.activationMode; SettingsService was only writing JSON blob; key was never written so mode was always empty → shouldActivateForDevice always false |
| 2026-04-04 | Bug 2 fix: await VehicleDetectionService.start() | start() was void; first _checkState() fired async without await; background service read isConnectedToVehicle before it resolved — always false on startup even when BT already connected |
| 2026-04-04 | Bug 3 fix: 1-second debounce on MonitoringService ACTION_START | Android Auto BT negotiation fires rapid ACL_CONNECTED bursts; each one was immediately triggering Flutter service start; fixed with Handler debounce that coalesces rapid starts; STOP cancels any pending start |

---

## Monetization Model
- **One-time purchase:** $4.99 — app forever, current city at time of purchase
- **Annual data renewal:** $9.99/yr — monthly updated locations + new cities as added
- **City tiers:** Static camera cities = one-time only; rotating camera cities = renewal justified
- **Pivot flexibility:** Both stores allow model changes; existing subscribers grandfathered
- **A/B testing:** Google Play Console has native split testing; use Android to validate before iOS

---

## Tech Stack

**Native Android files:**
- `android/.../MainActivity.kt` — minimal FlutterActivity subclass
- `android/.../SpeedShieldApp.kt` — Application class; creates notification channel at process start

| Component | Tool | Cost |
|---|---|---|
| App framework | Flutter (Dart) | Free |
| iOS builds | Codemagic (cloud CI) | Free tier (500 min/mo) |
| Maps | flutter_map + OpenStreetMap tiles | Free (tile usage policy: OSM attribution required) |
| GPS/location | geolocator package | Free |
| TTS alerts | flutter_tts | Free |
| Background service | flutter_background_service | Free |
| Bluetooth detection | **Native Kotlin BroadcastReceiver** (ACL_CONNECTED/DISCONNECTED → SharedPreferences → Dart) — flutter_blue_plus removed | Free |
| Activity recognition | Google Play Services ActivityRecognitionReceiver (IN_VEHICLE, Doze-exempt) | Free |
| BT/Activity bridge | MonitoringService (native Kotlin) — starts/stops Flutter service on BT connect/disconnect | Free |
| Data source (Phoenix) | GitHub Actions → camera_data.json | Free |
| App Store | Apple Developer Program | $99/yr |
| Play Store | Google Play Console | $25 one-time |

---

## Data Layer (GitHub — Existing)
- **Repo:** LiveAsALion/Phoenix-Speed-Cameras
- **Script:** update_cameras.py — pulls KML from Google My Maps, extracts direction from `<description>` tag
- **Output:** camera_data.json with `name`, `latitude`, `longitude`, `direction_deg`
- **KML URL:** https://www.google.com/maps/d/kml?forcekml=1&mid=1aB99-IfJH8EKHO_nVtF-xhgsMTKU_mw
- **Status:** Script verified working locally (2026-03-29), needs deploying to GitHub repo
- **JSON endpoint:** https://raw.githubusercontent.com/LiveAsALion/Phoenix-Speed-Cameras/main/camera_data.json

---

## Alert Logic
- **Activation:** Bluetooth vehicle connection detected OR Android Auto connected
- **Check interval:** Every 30 seconds while active
- **Directional filter:** Current heading must be within ±45° of camera's `direction_deg`
- **Approach filter:** Distance must be decreasing (not receding)
- **Alert 1:** 600m — TTS "Speed camera ahead, [corridor name]"
- **Alert 2:** 100m — TTS "Camera in 100 meters"
- **Reset:** No re-alert until distance exceeds 800m from that camera

---

## Expansion Cities (v2+)
| City | Data Source | Camera Type |
|---|---|---|
| Chicago, IL | City open data API | Fixed + mobile |
| New York City, NY | NYC Open Data | School zone fixed |
| Scottsdale/Mesa, AZ | City PDFs / Google Maps | Fixed |
| Washington DC | Published map | Fixed |
| Baltimore, MD | City website | Fixed |

---

## Build Order
1. ✅ Phoenix data layer (GitHub Actions + camera_data.json)
2. ✅ Alert logic proof of concept (Tasker)
3. ✅ Fixed update_cameras.py — parses direction from `<description>` tag (verified working locally 2026-03-29)
4. ✅ Flutter project scaffold + GitHub repo (LiveAsALion/SpeedShield)
5. ✅ Core app: map screen (OpenStreetMap), camera markers, GPS loop
6. ✅ Background service + Bluetooth vehicle detection
7. ✅ TTS alert engine (primary + secondary, configurable distances)
8. ✅ Settings screen (400/600/800/1200m primary, 100/150/200m secondary, toggle)
9. ✅ Android manifest + iOS Info.plist (all permissions)
10. ✅ Codemagic CI/CD config (codemagic.yaml committed)
11. ✅ Android keystore generated + secured (backed up locally by Alistair)
12. ✅ Nightly GitHub backup cron (liveasalion/openclaw-backups, 7-day rolling)
13. ✅ Stable debug build confirmed on device (2026-03-30) — permissions prompt, map loads, modes visible, bottom bar correct
14. ✅ Install Flutter on Windows → first Android test build (debug APK installed, no crash — 2026-03-30)
15. ✅ Crash fixes: POST_NOTIFICATIONS, BootReceiver, notification channel timing, autoStart race condition (2026-03-30)
16. ✅ Activation modes UI (vehicleBluetooth / autoDetect / alwaysOn) in Settings (2026-03-30)
17. ✅ Bottom bar SafeArea fix (2026-03-30)
18. ✅ Code cleanup pass — timer leak, BT sync fix, dead code removed (2026-03-30)
19. ✅ Field test passed — TTS alerts fire at correct distances, directional filtering confirmed (2026-03-31)
20. ✅ Battery optimization exemption — REQUEST_IGNORE_BATTERY_OPTIMIZATIONS + runtime request (2026-03-31)
21. ✅ BT detection rewritten with native Kotlin BroadcastReceiver (ACL_CONNECTED/DISCONNECTED → SharedPreferences → Dart) (2026-03-31)
22. ✅ Doze-aware smart activation — BluetoothReceiver + ActivityRecognitionReceiver (IN_VEHICLE) + MonitoringService bridge; zero idle battery in BT mode (2026-03-31)
23. ✅ Runtime BLUETOOTH_CONNECT permission fix + native key flattening + MAC-based multi-vehicle device picker + double-TTS foreground flag + actual distance TTS + startup MAC write (2026-04-01)
24. [ ] Field test: BT auto-wake — test again after 2026-04-04 fixes (await start + debounce); install new APK, connect BT with screen off, verify app activates without manual open
25. [ ] Deploy fixed update_cameras.py to Phoenix-Speed-Cameras repo
26. [ ] Codemagic account setup + connect to SpeedShield repo
27. [ ] In-app purchase layer ($4.99 one-time + $9.99/yr renewal)
28. [ ] Android Play Store submission
29. [ ] iOS build via Codemagic + App Store submission

---

## Open Items
- [x] Google Play Console account — DONE ($25 paid, 2026-04-01)
- [ ] Apple Developer account setup ($99/yr)
- [ ] **Monetization review** — current $4.99 one-time + $9.99/yr structure needs revisiting before in-app purchase layer is built; Alistair not convinced on pricing; circle back when ready
- [ ] **UI polish pass** — app appearance needs work before store submission; not shipping looking rough
- [ ] **App icon / logo** — no icon art yet; needs designed asset before Play Store submission (required)
- [ ] Deploy fixed update_cameras.py to Phoenix-Speed-Cameras GitHub repo
- [ ] Set up Codemagic account (codemagic.io → connect GitHub)
- [ ] Contabo VPS snapshot (deferred — do before any major server changes)
- [ ] Google Maps SDK — revisit before launch (weekly reminder set, cron ID: 3a49affe)
- [ ] **Before Play Store submission:** Switch camera_data.json URL from raw.githubusercontent.com to jsDelivr CDN (`https://cdn.jsdelivr.net/gh/LiveAsALion/Phoenix-Speed-Cameras@main/camera_data.json`) — handles scale, avoids GitHub rate limits
- [ ] **Before Play Store submission:** Consider creating a SpeedShield GitHub org and moving Phoenix-Speed-Cameras repo there (separates personal account from product, looks more professional)

---

## Notes
- Perplexity research: https://www.perplexity.ai/search/i-d-like-to-build-an-autonomu-1qpZq2bfS_6Oj4cU_fmwfg
- Gemini session reviewed 2026-03-29 — full Tasker setup documented there
- Alistair is Phoenix PD sergeant — personal use + product business
- Android Auto / CarPlay deep integration deferred to v2; v1 uses foreground service + BT detection
