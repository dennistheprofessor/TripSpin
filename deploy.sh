#!/bin/bash

# Deploy script for Render.com

# Trigger deploy hook for Render backend
echo "Triggering deploy for Render backend..."
curl -X GET "https://api.render.com/deploy/srv-cuvt1k8gph6c73c4fbtg?key=ZwLLnLRfX_I"

echo "Deploy triggered successfully!"
