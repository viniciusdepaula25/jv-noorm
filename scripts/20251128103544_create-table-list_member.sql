-- Description: create-table-list_member
--      Script: 20251128103544_create-table-list_member.sql 
--   File name: 20251128103544
--  Created at: 28/11/2025 10:35
--      Author: vinicius

CREATE TABLE list_member(id uuid NOT NULL PRIMARY KEY DEFAULT UUID(),
                         list_id uuid NOT NULL,
                         user_id uuid NOT NULL,
                         role VARCHAR(6),
                         created_at DATETIME NOT NULL DEFAULT current_timestamp(),
                         updated_at DATETIME,
                         deleted_at DATETIME,
                         FOREIGN KEY (list_id) REFERENCES list (id),
                         FOREIGN KEY (user_id) REFERENCES users (id)
                         )
ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;