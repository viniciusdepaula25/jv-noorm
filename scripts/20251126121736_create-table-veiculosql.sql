-- Description: create-table-veiculo.sql
--      Script: 20251126121736_create-table-veiculosql.sql 
--   File name: 20251126121736
--  Created at: 26/11/2025 12:17
--      Author: vinicius

CREATE TABLE veiculo (id uuid NOT NULL PRIMARY KEY DEFAULT UUID(),
                    nome VARCHAR(120) NOT NULL,
                    modelo CHAR(120) NOT NULL,
                    fabricante VARCHAR(120) NOT NULL,
                    ano INT NOT NULL,
                    created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP(),
                    updated_at DATETIME,
                    deleted_at JSON)
Engine=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;