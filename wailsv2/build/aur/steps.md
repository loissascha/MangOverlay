1. Update pkgver and pkgrel
2. Download Release tarball from github
3. Get sha256sum with `sha256sum <downloaded tarball>`
4. Take everything but the file name and paste it in the PKGBUILD
5. Run `makepkg --printsrcinfo > .SRCINFO`
6. Check if the .SRCINFO file got updated correctly
7. Done
