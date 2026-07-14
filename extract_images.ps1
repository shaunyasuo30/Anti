$ErrorActionPreference = "Stop"
$fileDeDir = Join-Path $PWD "File de"
$imagesDir = Join-Path $PWD "images"
if (-not (Test-Path $imagesDir)) { New-Item -ItemType Directory -Path $imagesDir | Out-Null }

$docxFiles = Get-ChildItem -Path $fileDeDir -Filter "*.docx"
foreach ($docx in $docxFiles) {
    # Extract exam number from filename, e.g., Bai_doc_so_08_... -> 8
    if ($docx.Name -match "Bai_doc_so_(\d+)") {
        $examNum = [int]$matches[1]
        $unzipDir = Join-Path $PWD "unzipped_docx_$examNum"
        if (Test-Path $unzipDir) { Remove-Item -Recurse -Force $unzipDir }
        $zipPath = Join-Path $PWD "temp_$examNum.zip"
        Copy-Item -Path $docx.FullName -Destination $zipPath -Force
        Expand-Archive -Path $zipPath -DestinationPath $unzipDir -Force
        Remove-Item -Path $zipPath -Force
        
        $mediaDir = Join-Path $unzipDir "word\media"
        if (Test-Path $mediaDir) {
            $imgs = Get-ChildItem -Path $mediaDir
            $i = 1
            foreach ($img in $imgs) {
                $ext = $img.Extension
                $destName = "exam${examNum}_image${i}${ext}"
                $destPath = Join-Path $imagesDir $destName
                Copy-Item -Path $img.FullName -Destination $destPath -Force
                Write-Host "Extracted $destName"
                $i++
            }
        }
    }
}
Write-Host "Done"
