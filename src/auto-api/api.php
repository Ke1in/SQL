<?php

$pdo = new PDO(
    "mysql:host=db;dbname=autokanta;charset=utf8mb4",
    "root",
    "root"
);

$sql = "SELECT * FROM autot";

$stmt = $pdo->query($sql);

$autot = $stmt->fetchAll(PDO::FETCH_ASSOC);

header("Content-Type: application/json");

echo json_encode($autot);