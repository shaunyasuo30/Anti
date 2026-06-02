$files = @(
    "File de\Bai_doc_so_08_form_attempt_review_co_anh.docx",
    "File de\Bai_doc_so_09_form_attempt_review_co_anh.docx",
    "File de\Bai_doc_so_10_form_attempt_review_co_anh.docx"
)

foreach ($f in $files) {
    $filename = [System.IO.Path]::GetFileNameWithoutExtension($f)
    $unzipDir = "unzipped_$filename"
    $txtFile = "File de\$filename.txt"
    $zipFile = "File de\$filename.zip"
    
    Copy-Item -Path $f -Destination $zipFile -Force
    
    if (Test-Path $unzipDir) {
        Remove-Item -Recurse -Force $unzipDir
    }
    
    Expand-Archive -Path $zipFile -DestinationPath $unzipDir -Force
    
    $xmlPath = "$unzipDir\word\document.xml"
    if (Test-Path $xmlPath) {
        $xml = [System.IO.File]::ReadAllText($xmlPath)
        $xml = $xml -replace "</w:p>", "`n"
        $text = $xml -replace "<[^>]+>", ""
        $text = $text.Replace("&amp;", "&").Replace("&lt;", "<").Replace("&gt;", ">").Replace("&quot;", "`"")
        [System.IO.File]::WriteAllText($txtFile, $text.Trim())
        Write-Host "Extracted $filename to txt"
    }
    
    Remove-Item -Path $zipFile -Force
}
