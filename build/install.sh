#!/bin/bash

DESKTOP_FILE="$HOME/.local/share/applications/mangoverlay.desktop"

mkdir -p ~/.local/share/applications
mkdir -p ~/.local/bin
mkdir -p ~/.local/share/icons

cp mangoverlay ~/.local/bin
chmod +x ~/.local/bin/mangoverlay
cp mangoverlay.png ~/.local/share/icons

# Create .desktop file
bash -c "cat <<EOF > "$DESKTOP_FILE"
[Desktop Entry]
Version=0.1
Name=MangOverlay
Comment=Run MangOverlay
Exec=$HOME/.local/bin/mangoverlay
Icon=$HOME/.local/share/icons/mangoverlay.png
Terminal=false
Type=Application
Categories=Utility;
EOF"

update-desktop-database ~/.local/share/applications 

echo "Installation complete."
