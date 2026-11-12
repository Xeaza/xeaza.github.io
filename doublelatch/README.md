# Double Latch website maintenance

`index.html` and `privacy_policy.html` are the published support and privacy pages. `styles.css` is their shared stylesheet. GitHub Pages publishes this repository's `master` branch at https://taylorwrightsanson.com/doublelatch/.

`next-release-listing.txt` contains prepared App Store copy; publishing this file does not submit or change App Store Connect metadata.

## Retention and deletion operations

Contact us: [doublelatch@gmail.com](mailto:doublelatch@gmail.com). Public policy: https://taylorwrightsanson.com/doublelatch/privacy_policy.html#retention. App documentation: `Xeaza/doublelatch`, `docs/Analytics.md`. The public policy describes the applicable service settings and asynchronous deletion; it does not claim an unverified fixed deadline. **No PostHog account settings were changed by the website publication.**

Before distributing the analytics-capable update, record the selected settings and verification date here:

| Data | Account setting | Verified value |
| --- | --- | --- |
| Usage events and crash events | Project → Product analytics → Events retention; confirm any organization override | Not yet verified by owner |
| Intentional diagnostic logs | Logs retention for `doublelatch-ios`; check service/source overrides | Not yet verified by owner |

[Event retention](https://posthog.com/docs/data/events-retention) covers crashes as well as custom events. Free plans currently offer one year; paid plans can allow a shorter project override. Expiration is not immediate deletion. [Logs retention](https://posthog.com/docs/logs/pricing#retention) is separate, currently 14 days by default, with configurable overrides. These provider defaults are reference information, not confirmation of this project's settings. Record actual values rather than assuming defaults, then reconcile the policy if a specific period is promised. Do not change the account plan or buy retention without authorization.

For a privacy request:

1. Receive requests at the privacy email linked on the public page. Keep a private request record outside Git; never collect baby records or backups to identify an analytics device.
2. Explain that opt-out stops new collection and is separate from erasure. Establish whether the request concerns local care records, support correspondence, or PostHog data. An email is not an analytics identity in this app; do not guess a device association from time or location.
3. If an anonymous analytics identifier can be established safely, locate the associated data in the correct project. Person profiles are disabled, so an absent People result does not establish that no events exist. Use supported event deletion controls or PostHog support when no person profile exists. Include logs separately; do not assume event deletion erases a separate log store.
4. Confirm the exact identifier and scope before a permanent deletion. Follow [PostHog's deletion guidance](https://posthog.com/docs/privacy/data-storage#data-deletion), track queued work through completion, and verify the relevant event/log records are removed. Do not equate an accepted request with completed deletion.
5. Tell the requester what was removed, what could not be linked, and any unresolved processing. Keep only the request details needed to handle the case. Document escalations privately. Never claim that app uninstall or opt-out erased server data.
