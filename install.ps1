#Requires -Version 5.1
$ErrorActionPreference = 'Stop'
Write-Host "Detecting Windows Version: $([System.Environment]::OSVersion.Version)"
$pkgMgr = "none"
if (Get-Command choco -ErrorAction SilentlyContinue) { $pkgMgr = "choco" }
elseif (Get-Command winget -ErrorAction SilentlyContinue) { $pkgMgr = "winget" }
