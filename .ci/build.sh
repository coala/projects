#!/usr/bin/env bash
set -e # halt script on error

bundle exec jekyll build --strict_front_matter

bundle exec htmlproofer ./_site \
	--disable-external \
	--only-4xx
