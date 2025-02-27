#!/bin/bash

# Move the new file to replace the old one
mv index.html.new index.html

# Add the file to git
git add index.html

# Commit the changes
git commit -m "Fix NO_FCP issue by adding visible content for crawlers"

# Push to GitHub
git push origin gh-pages
