#!/bin/bash

# Generate Favicons Script
# This script generates the missing favicon files from your SVG logo

echo "Favicon Generation Script"
echo "========================"
echo ""
echo "This script will help you generate the missing favicon files."
echo "You need ImageMagick installed to run this script."
echo ""
echo "To install ImageMagick:"
echo "  macOS: brew install imagemagick"
echo "  Ubuntu/Debian: sudo apt-get install imagemagick"
echo ""
echo "Manual steps to generate favicons:"
echo ""
echo "1. Using your SVG logo at src/assets/logo.svg:"
echo ""
echo "   # Generate 16x16 PNG"
echo "   convert -background transparent src/assets/logo.svg -resize 16x16 public/icon-16.png"
echo ""
echo "   # Generate 32x32 PNG"
echo "   convert -background transparent src/assets/logo.svg -resize 32x32 public/icon-32.png"
echo ""
echo "   # Verify apple-touch-icon is 180x180"
echo "   identify public/apple-touch-icon.png"
echo "   # If not 180x180, regenerate it:"
echo "   convert -background transparent src/assets/logo.svg -resize 180x180 public/apple-touch-icon.png"
echo ""
echo "2. Alternative: Use an online favicon generator:"
echo "   - https://realfavicongenerator.net"
echo "   - https://favicon.io"
echo "   - Upload your SVG and download the generated files"
echo ""
echo "3. For the best quality, you can also:"
echo "   - Open src/assets/logo.svg in a design tool (Figma, Illustrator, etc.)"
echo "   - Export at exact sizes: 16x16, 32x32, 180x180"
echo "   - Save with transparent backgrounds as PNG"
echo ""

# Check if ImageMagick is installed
if command -v convert &> /dev/null; then
    echo "ImageMagick is installed!"
    echo ""
    read -p "Would you like to generate the missing files now? (y/n) " -n 1 -r
    echo ""
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        # Generate 16x16
        convert -background transparent src/assets/logo.svg -resize 16x16 public/icon-16.png
        echo "✓ Generated icon-16.png"
        
        # Generate 32x32
        convert -background transparent src/assets/logo.svg -resize 32x32 public/icon-32.png
        echo "✓ Generated icon-32.png"
        
        # Check apple-touch-icon size
        size=$(identify -format "%wx%h" public/apple-touch-icon.png 2>/dev/null)
        if [ "$size" != "180x180" ]; then
            echo "⚠️  apple-touch-icon.png is $size, regenerating to 180x180..."
            convert -background transparent src/assets/logo.svg -resize 180x180 public/apple-touch-icon.png
            echo "✓ Generated apple-touch-icon.png (180x180)"
        else
            echo "✓ apple-touch-icon.png is already 180x180"
        fi
        
        echo ""
        echo "All favicon files generated successfully!"
    fi
else
    echo "ImageMagick is not installed. Please install it first or use the manual methods above."
fi

