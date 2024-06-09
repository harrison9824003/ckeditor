<?php
    
    // 印出 file
    // print_r($_FILES);
    
    // Array
    // (
    //     [upload] => Array
    //         (
    //             [name] => 3.png
    //             [full_path] => 3.png
    //             [type] => image/png
    //             [tmp_name] => /tmp/phpYpybcz
    //             [error] => 0
    //             [size] => 1347985
    //         )

    // )

    // 搬移檔案
    $filePath = './upload/' . $_FILES['upload']['name'];
    $fileUrl = 'http://localhost:8080/upload/' . $_FILES['upload']['name'];
    $isMoved = move_uploaded_file($_FILES['upload']['tmp_name'], $filePath);

    // header json
    header('Content-Type: application/json');

    // 回傳 json
    echo json_encode([
        "uploaded" => $isMoved,
        "fileName" => $_FILES["upload"]["name"],
        "url" => $fileUrl
    ]);
?>