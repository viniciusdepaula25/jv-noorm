-- Description: create-table-users
--      Script: 20251128091932_create-table-users.sql 
--   File name: 20251128091932
--  Created at: 28/11/2025 09:19
--      Author: vinicius

CREATE TABLE users (id uuid NOT NULL PRIMARY KEY DEFAULT UUID(),
                    name VARCHAR(120) NOT NULL,
                    email CHAR(120) NOT NULL,
                    password VARCHAR(120) NOT NULL,
                    created_at DATETIME NOT NULL DEFAULT current_timestamp(),
                    updated_at DATETIME,
                    deleted_at DATETIME
                    )
Engine=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;