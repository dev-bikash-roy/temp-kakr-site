param(
    [int]$Port = 3000
)

$ErrorActionPreference = "Stop"
$ProjectRoot = Split-Path -Parent $MyInvocation.MyCommand.Path

Set-Location $ProjectRoot

Write-Host "Stopping Nuxt dev server on port $Port..." -ForegroundColor Yellow

$processIds = @()

try {
    $processIds += Get-NetTCPConnection -LocalPort $Port -ErrorAction SilentlyContinue |
        Select-Object -ExpandProperty OwningProcess -Unique
} catch {}

$escapedRoot = [Regex]::Escape($ProjectRoot)
$processIds += Get-CimInstance Win32_Process -Filter "name = 'node.exe'" |
    Where-Object { $_.CommandLine -match $escapedRoot -and $_.CommandLine -match "nuxt|nuxi|npm-cli" } |
    Select-Object -ExpandProperty ProcessId

$processIds = $processIds | Where-Object { $_ -and $_ -ne 0 } | Sort-Object -Unique

foreach ($processId in $processIds) {
    try {
        Stop-Process -Id $processId -Force -ErrorAction Stop
        Write-Host "Stopped process $processId" -ForegroundColor DarkGray
    } catch {
        Write-Host "Process $processId was already stopped" -ForegroundColor DarkGray
    }
}

Start-Sleep -Seconds 2

Write-Host "Cleaning Nuxt generated directories..." -ForegroundColor Yellow

foreach ($dir in @(".nuxt", ".output")) {
    $path = Join-Path $ProjectRoot $dir

    if (Test-Path $path) {
        Remove-Item -LiteralPath $path -Recurse -Force -ErrorAction Stop
        Write-Host "Removed $dir" -ForegroundColor Green
    }
}

Write-Host "Starting Nuxt dev server..." -ForegroundColor Green
npm run dev -- --host 0.0.0.0 --port $Port
