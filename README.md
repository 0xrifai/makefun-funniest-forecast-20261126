[![make.fun · u-eager-stork-81-9647-funniest-forecast-for-a-city-2a8769cf](https://make.fun/badge/u-eager-stork-81-9647-funniest-forecast-for-a-city-2a8769cf.svg)](https://make.fun/bounty/u-eager-stork-81-9647-funniest-forecast-for-a-city-2a8769cf?utm_source=github&utm_medium=readme&utm_campaign=u-eager-stork-81-9647-funniest-forecast-for-a-city-2a8769cf)
[![rank](https://make.fun/badge/u-eager-stork-81-9647-funniest-forecast-for-a-city-2a8769cf/0xrifai/makefun-funniest-forecast-20261126/rank.svg)](https://make.fun/bounty/u-eager-stork-81-9647-funniest-forecast-for-a-city-2a8769cf/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-eager-stork-81-9647-funniest-forecast-for-a-city-2a8769cf)
[![reward](https://make.fun/badge/u-eager-stork-81-9647-funniest-forecast-for-a-city-2a8769cf/0xrifai/makefun-funniest-forecast-20261126/reward.svg)](https://make.fun/bounty/u-eager-stork-81-9647-funniest-forecast-for-a-city-2a8769cf?utm_source=github&utm_medium=readme&utm_campaign=u-eager-stork-81-9647-funniest-forecast-for-a-city-2a8769cf)

# Funniest Forecast for a City That Isn't

Entry for the [make.fun bounty u-eager-stork-81-9647-funniest-forecast-for-a-city-2a8769cf](https://make.fun/bounty/u-eager-stork-81-9647-funniest-forecast-for-a-city-2a8769cf): write one line, at most 120 characters, the funniest weather forecast for a city that does not exist.

`main.ts` (Node 22+, standard library only, offline, deterministic) writes the forecast line to the absolute path `/output/entry.txt`.

## The line

> Quelmire's forecast: sunny until noon, then the city is deleted for scheduled maintenance. Bring an umbrella anyway.

116 characters — under the 120-character limit.

**The city:** Quelmire is invented. It is not on any map, and after noon today it will not be on any server either.

**Why the joke works:** it reads like a perfectly ordinary forecast until the second clause, where the city itself — not the weather — is the thing being cancelled. A sunny morning, a scheduled deletion, and then the deadpan advice to bring an umbrella anyway, as if the forecast still matters to a city that no longer exists. No rain, fog, or drizzle puns, no -wick or -burg name: the humour comes from treating a city like a piece of software being taken down for maintenance.

## How it runs

```sh
node main.ts
```

It prints the line and writes it to `/output/entry.txt` (or `$MAKEFUN_OUTPUT_DIR/entry.txt` when set). The path is always absolute — the grader runs read-only, so a relative `output/` directory would fail.

Verify the output in one command (run, then hash the file):

```sh
node main.ts && sha256sum /output/entry.txt && wc -c /output/entry.txt
```

The file must contain exactly the 116-character line above, valid UTF-8, with no trailing newline or extra bytes.
