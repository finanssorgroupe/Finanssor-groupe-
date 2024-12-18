<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nom = $_POST['nom'];
    $prenom = $_POST['prenom'];
    $email = $_POST['email'];
    $uploadDirectory = "uploads/";

    $cvPath = $uploadDirectory . basename($_FILES["cv"]["name"]);
    move_uploaded_file($_FILES["cv"]["tmp_name"], $cvPath);

    if (isset($_FILES["lm"]["name"]) && $_FILES["lm"]["name"] != '') {
        $lmPath = $uploadDirectory . basename($_FILES["lm"]["name"]);
        move_uploaded_file($_FILES["lm"]["tmp_name"], $lmPath);
    }

    echo "Merci, $prenom $nom. Votre candidature a été reçue.<br>";
    echo "CV: <a href='$cvPath'>$cvPath</a><br>";
    if (isset($lmPath)) {
        echo "Lettre de motivation: <a href='$lmPath'>$lmPath</a>";
    }
}
?>
