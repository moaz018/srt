Add-Type -AssemblyName System.Drawing

$srcDir = "C:\Moaz\Theme selection feature\public\catalog"
$files = Get-ChildItem -Path $srcDir -Filter "design-srt-3dr-*.jpg"

$jpegCodec = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.MimeType -eq "image/jpeg" }
$encoderParams = New-Object System.Drawing.Imaging.EncoderParameters(1)
$encoderParams.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter([System.Drawing.Imaging.Encoder]::Quality, [long]85)

foreach ($f in $files) {
    $bytes = [System.IO.File]::ReadAllBytes($f.FullName)
    $ms = New-Object System.IO.MemoryStream(,$bytes)
    $orig = [System.Drawing.Image]::FromStream($ms)
    
    # Target 1200x1200 high-res crisp web size
    $targetWidth = 1200
    $targetHeight = 1200
    
    $bmp = New-Object System.Drawing.Bitmap($targetWidth, $targetHeight)
    $g = [System.Drawing.Graphics]::FromImage($bmp)
    $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
    $g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
    $g.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality
    
    $g.DrawImage($orig, 0, 0, $targetWidth, $targetHeight)
    $g.Dispose()
    $orig.Dispose()
    $ms.Dispose()
    
    $outStream = New-Object System.IO.MemoryStream
    $bmp.Save($outStream, $jpegCodec, $encoderParams)
    $bmp.Dispose()
    
    [System.IO.File]::WriteAllBytes($f.FullName, $outStream.ToArray())
    $outStream.Dispose()
    
    $newSize = (Get-Item $f.FullName).Length
    Write-Host ("Optimized: " + $f.Name + " -> " + [math]::Round($newSize / 1KB, 1) + " KB")
}
