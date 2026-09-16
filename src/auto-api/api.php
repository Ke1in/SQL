<?php

$pdo = new PDO(
    "mysql:host=db;dbname=carsdb;charset=utf8mb4",
    "root",
    "root"
);

$sql = "SELECT * FROM cars";

$stmt = $pdo->query($sql);

$cars = $stmt->fetchAll(PDO::FETCH_ASSOC);

header("Content-Type: application/json");

echo json_encode($cars);