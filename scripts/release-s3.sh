#!/usr/bin/env bash

# release-s3.sh
#
# SUMMARY
#
#   Uploads archives and packages to S3

set -euo pipefail

CHANNEL=${CHANNEL:-$(scripts/util/release-channel.sh)}
VERSION=${VERSION:-$(scripts/version.sh)}

#
# Setup
#

td=$(mktemp -d)
cp -av "target/artifacts/." "$td"
ls $td

#
# Upload
#

if [[ "$CHANNEL" == "nightly" ]]; then
  # Add nightly files with today's date for posterity
  today=$(date +"%F")
  echo "Uploading all artifacts to s3://packages.timber.io/qovery/nightly/$today"
  aws s3 cp "$td" "s3://packages.timber.io/qovery/nightly/$today" --recursive --sse --acl public-read
  echo "Uploaded archives"

  # Add "latest" nightly files
  echo "Uploading all artifacts to s3://packages.timber.io/qovery/nightly/latest"
  aws s3 rm --recursive "s3://packages.timber.io/qovery/nightly/latest"
  aws s3 cp "$td" "s3://packages.timber.io/qovery/nightly/latest" --recursive --sse --acl public-read
  echo "Uploaded archives"

  # Set up redirects for historical locations
  echo "Setting up redirects for historical locations"
  aws s3api put-object \
    --bucket packages.timber.io \
    --key qovery/nightly/latest/qovery-x86_64-unknown-linux-gnu.tar.gz \
    --website-redirect-location /qovery/nightly/latest/qovery-x86_64-unknown-linux-musl.tar.gz \
    --acl public-read

  # Verify that the files exist and can be downloaded
  cmp <(curl https://packages.timber.io/qovery/nightly/$today/qovery-x86_64-unknown-linux-musl.tar.gz --fail) "$td/qovery-x86_64-unknown-linux-musl.tar.gz"
  cmp <(curl https://packages.timber.io/qovery/nightly/latest/qovery-x86_64-unknown-linux-musl.tar.gz --fail) "$td/qovery-x86_64-unknown-linux-musl.tar.gz"
  cmp <(curl -L https://packages.timber.io/qovery/nightly/latest/qovery-x86_64-unknown-linux-gnu.tar.gz --fail) "$td/qovery-x86_64-unknown-linux-musl.tar.gz"
elif [[ "$CHANNEL" == "latest" ]]; then
  version_exact=$VERSION
  version_minor_x=$(echo $VERSION | sed 's/\.[0-9]*$/.X/g')
  version_major_x=$(echo $VERSION | sed 's/\.[0-9]*\.[0-9]*$/.X/g')

  for i in $version_exact $version_minor_x $version_major_x latest; do
    # Upload the specific version
    echo "Uploading artifacts to s3://packages.timber.io/qovery/$i/"
    aws s3 cp "$td" "s3://packages.timber.io/qovery/$i/" --recursive --sse --acl public-read
  done
  echo "Uploaded archives"

  # Set up redirects for historical locations
  echo "Setting up redirects for historical locations"
  aws s3api put-object \
    --bucket packages.timber.io \
    --key qovery/latest/qovery-x86_64-unknown-linux-gnu.tar.gz \
    --website-redirect-location /qovery/latest/qovery-x86_64-unknown-linux-musl.tar.gz \
    --acl public-read

  # Verify that the files exist and can be downloaded
  for i in $version_exact $version_minor_x $version_major_x latest; do
    cmp <(curl https://packages.timber.io/qovery/$i/qovery-x86_64-unknown-linux-musl.tar.gz --fail) "$td/qovery-x86_64-unknown-linux-musl.tar.gz"
  done
  cmp <(curl -L https://packages.timber.io/qovery/latest/qovery-x86_64-unknown-linux-gnu.tar.gz --fail) "$td/qovery-x86_64-unknown-linux-musl.tar.gz"
fi

#
# Cleanup
#

rm -rf $td
