#!/bin/bash

GHCR_USER="nshores"
GHCR_TOKEN="your_personal_access_token"
IMAGE="ghcr.io/$GHCR_USER/shorestech-website"

# Login
echo "$GHCR_TOKEN" | docker login ghcr.io -u "$GHCR_USER" --password-stdin

# Build
docker buildx build \
  --platform linux/amd64,linux/arm64 \
  -t ghcr.io/nshores/shorestech-website:latest \
  --push .

# Push
ocker push $IMAGE:latest 
