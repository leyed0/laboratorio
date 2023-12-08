$excludeFiles = @("App.test.js", "index.js", "setupTests.js")

$output = Get-ChildItem -Recurse -Filter *.js | ForEach-Object {
    $filePath = $_.FullName
    $relativePath = $filePath -replace [regex]::Escape((Get-Location).Path + "\"), ""

    # Exclude specific files
    $exclude = $excludeFiles -contains $relativePath

    if (-not $exclude) {
        "`"$relativePath`":"
        Get-Content $filePath
        "`n`n"
    }
}

$output | Set-Clipboard
Write-Output "Output copied to clipboard."
