#!/bin/bash

resize_width="480"

find . -type f -name "*.webp" | while read -r file; do
  echo "Resizing: $file"
  magick "$file" -resize "${resize_width}x" "$file"
done
